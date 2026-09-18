import { getSupabaseClient } from './supabase';

const DB_NAME = 'prep_studylab_storage_v1';
const STORE_NAME = 'pdf_binaries';
const BUCKET_NAME = 'pdf_documents';

export interface StoredPdfMetadata {
  id: string;
  courseId: string;
  title: string;
  filename: string;
  storagePath: string;
  fileSizeBytes: number;
  weekNumber: number;
  extractedQuestionsCount: number;
  uploadedAt: string;
}

// ----------------- IndexedDB Binary Cache -----------------

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported in this environment'));
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function storePdfBinaryLocally(key: string, data: ArrayBuffer): Promise<void> {
  try {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(data, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('[Storage] Failed to cache binary in IndexedDB:', err);
  }
}

export async function getStoredPdfBinaryLocally(key: string): Promise<ArrayBuffer | null> {
  try {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return null;
  }
}

// ----------------- Supabase Storage & Metadata -----------------

/**
 * Uploads a source PDF binary to Supabase Storage, caches it locally in IndexedDB,
 * and records its metadata in public.pdf_documents table.
 */
export async function uploadPdfDocument(
  file: File,
  courseId: string,
  weekNumber: number = 1,
  extractedCount: number = 0
): Promise<StoredPdfMetadata> {
  const timestamp = Date.now();
  const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const storagePath = `${courseId}/${timestamp}_${sanitizedFilename}`;
  const arrayBuffer = await file.arrayBuffer();

  // 1. Always store locally in durable IndexedDB first
  await storePdfBinaryLocally(storagePath, arrayBuffer);
  await storePdfBinaryLocally(file.name, arrayBuffer);

  const metadata: StoredPdfMetadata = {
    id: `pdf-${timestamp}-${Math.random().toString(36).substring(2, 7)}`,
    courseId,
    title: file.name.replace(/\.pdf$/i, ''),
    filename: file.name,
    storagePath,
    fileSizeBytes: file.size,
    weekNumber,
    extractedQuestionsCount: extractedCount,
    uploadedAt: new Date().toISOString(),
  };

  // 2. Upload to Supabase Storage if configured
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { error: uploadErr } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(storagePath, file, {
          contentType: 'application/pdf',
          upsert: true,
        });

      if (uploadErr) {
        console.warn('[Storage] Supabase bucket upload notice:', uploadErr.message);
      }

      // Record in public.pdf_documents table
      const { error: dbErr } = await supabase.from('pdf_documents').insert({
        id: metadata.id,
        course_id: courseId,
        title: metadata.title,
        filename: metadata.filename,
        storage_path: metadata.storagePath,
        week_number: metadata.weekNumber,
        extracted_questions_count: metadata.extractedQuestionsCount,
        created_at: metadata.uploadedAt,
      });

      if (dbErr) {
        console.warn('[Storage] pdf_documents table insert notice:', dbErr.message);
      }
    } catch (err) {
      console.warn('[Storage] Supabase upload exception:', err);
    }
  }

  // 3. Persist metadata in localStorage index
  saveLocalPdfMetadata(metadata);

  return metadata;
}

const LOCAL_PDF_META_KEY = 'prep_studylab_pdf_metadata_v1';

export function getLocalPdfMetadata(): StoredPdfMetadata[] {
  try {
    const raw = localStorage.getItem(LOCAL_PDF_META_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveLocalPdfMetadata(meta: StoredPdfMetadata): void {
  const current = getLocalPdfMetadata();
  const updated = [meta, ...current.filter((m) => m.storagePath !== meta.storagePath)];
  localStorage.setItem(LOCAL_PDF_META_KEY, JSON.stringify(updated));
}

/**
 * Retrieves the PDF binary from Supabase Storage or local IndexedDB cache.
 * Guarantees that future processing or re-review never depends solely on an in-memory ArrayBuffer.
 */
export async function retrievePdfBinary(storagePathOrFilename: string): Promise<ArrayBuffer | null> {
  // 1. Try local IndexedDB first for instant access
  const localBinary = await getStoredPdfBinaryLocally(storagePathOrFilename);
  if (localBinary) return localBinary;

  // 2. Try Supabase Storage download
  const supabase = getSupabaseClient();
  if (supabase && storagePathOrFilename.includes('/')) {
    try {
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .download(storagePathOrFilename);

      if (!error && data) {
        const buffer = await data.arrayBuffer();
        // Cache locally for subsequent accesses
        await storePdfBinaryLocally(storagePathOrFilename, buffer);
        return buffer;
      }
    } catch (err) {
      console.warn('[Storage] Download from Supabase failed:', err);
    }
  }

  return null;
}
