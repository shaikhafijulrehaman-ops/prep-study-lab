import { Course, Question } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-cloud-01',
    code: 'CS601',
    name: 'Distributed Cloud Systems',
    description: 'Foundations of virtualization, distributed storage, consensus protocols, and elasticity.',
    totalQuestions: 15,
    weeks: [1, 2, 3],
    status: 'published',
    createdAt: '2026-01-10T00:00:00.000Z',
    publishedAt: '2026-01-10T00:00:00.000Z',
  },
  {
    id: 'course-dl-02',
    code: 'CS702',
    name: 'Deep Learning Architectures',
    description: 'Backpropagation dynamics, convolutional networks, attention mechanisms, and optimization.',
    totalQuestions: 15,
    weeks: [1, 2, 3],
    status: 'published',
    createdAt: '2026-01-12T00:00:00.000Z',
    publishedAt: '2026-01-12T00:00:00.000Z',
  },
  {
    id: 'course-algo-03',
    code: 'CS503',
    name: 'Advanced Data Structures & Algorithms',
    description: 'Amortized analysis, graph algorithms, dynamic programming, and complexity classes.',
    totalQuestions: 15,
    weeks: [1, 2, 3],
    status: 'published',
    createdAt: '2026-01-15T00:00:00.000Z',
    publishedAt: '2026-01-15T00:00:00.000Z',
  },
];

const RAW_QUESTIONS: Omit<Question, 'answerSource' | 'isApproved'>[] = [
  // Distributed Cloud Systems - Week 1
  {
    id: 'q-cloud-w1-01',
    courseId: 'course-cloud-01',
    weekNumber: 1,
    questionText: 'Which virtualization technique allows the guest operating system kernel to be modified to execute hypercalls rather than intercepting privileged CPU instructions?',
    options: [
      'Hardware-Assisted Virtualization',
      'Paravirtualization',
      'Full Virtualization with Binary Translation',
      'Operating System-Level Containerization'
    ],
    correctAnswerIndex: 1,
    explanation: 'Paravirtualization involves modifying the guest OS kernel so that privileged operations are issued via explicit hypercalls directly to the hypervisor.',
    sourcePdfName: 'Cloud_Systems_Week1.pdf',
    createdAt: '2026-01-15T00:00:00.000Z',
  },
  {
    id: 'q-cloud-w1-02',
    courseId: 'course-cloud-01',
    weekNumber: 1,
    questionText: 'According to the CAP theorem in distributed systems, what does the "P" guarantee signify during a network split?',
    options: [
      'The system operates without any persistent storage',
      'The system continues to function despite an arbitrary number of dropped messages between nodes',
      'The system ensures strict linearizability across all concurrent transactions',
      'The system guarantees zero network latency for all read requests'
    ],
    correctAnswerIndex: 1,
    explanation: 'Partition tolerance (P) means the cluster continues operating despite arbitrary packet loss or communication breakdown between nodes.',
    sourcePdfName: 'Cloud_Systems_Week1.pdf',
    createdAt: '2026-01-15T00:00:00.000Z',
  },
  {
    id: 'q-cloud-w1-03',
    courseId: 'course-cloud-01',
    weekNumber: 1,
    questionText: 'In cloud elasticity models, what distinguishes horizontal scaling (scaling out) from vertical scaling (scaling up)?',
    options: [
      'Horizontal scaling adds more instances of computing resources; vertical scaling adds CPU or RAM to an existing node',
      'Horizontal scaling only applies to relational databases; vertical scaling applies to stateless web servers',
      'Horizontal scaling requires downtime; vertical scaling never incurs downtime',
      'Horizontal scaling reduces redundancy; vertical scaling increases fault tolerance across failure domains'
    ],
    correctAnswerIndex: 0,
    explanation: 'Horizontal scaling increases system capacity by adding more compute instances, whereas vertical scaling increases capacity by upgrading hardware on a single instance.',
    sourcePdfName: 'Cloud_Systems_Week1.pdf',
    createdAt: '2026-01-15T00:00:00.000Z',
  },
  {
    id: 'q-cloud-w1-04',
    courseId: 'course-cloud-01',
    weekNumber: 1,
    questionText: 'What is the primary role of a Hypervisor Type-1 (Bare-Metal)?',
    options: [
      'Runs as an application layer inside a general-purpose host OS like Windows or macOS',
      'Runs directly on the host hardware to control physical resources and manage guest virtual machines',
      'Emulates software bytecode into native instruction sets without memory mapping',
      'Manages cloud billing and software-as-a-service tenant authorization'
    ],
    correctAnswerIndex: 1,
    explanation: 'Type-1 (bare-metal) hypervisors run directly on the physical hardware without relying on an underlying host OS.',
    sourcePdfName: 'Cloud_Systems_Week1.pdf',
    createdAt: '2026-01-15T00:00:00.000Z',
  },
  {
    id: 'q-cloud-w1-05',
    courseId: 'course-cloud-01',
    weekNumber: 1,
    questionText: 'Which consensus algorithm guarantees safety under asynchronous network conditions assuming non-byzantine fail-stop faults?',
    options: [
      'PBFT (Practical Byzantine Fault Tolerance)',
      'Raft / Paxos',
      'Proof of Stake',
      'Lamport Logical Clock'
    ],
    correctAnswerIndex: 1,
    explanation: 'Paxos and Raft are designed for crash-fault-tolerant (non-byzantine) state machine replication under asynchronous network assumptions.',
    sourcePdfName: 'Cloud_Systems_Week1.pdf',
    createdAt: '2026-01-15T00:00:00.000Z',
  },

  // Distributed Cloud Systems - Week 2
  {
    id: 'q-cloud-w2-01',
    courseId: 'course-cloud-01',
    weekNumber: 2,
    questionText: 'In distributed hash tables (DHTs) using Consistent Hashing, what happens to keys when a new node joins a ring with N existing nodes?',
    options: [
      'All keys in the entire keyspace are reshuffled across all nodes',
      'Only K/N keys are migrated to the new node on average, preserving locality',
      'No keys migrate until an explicit administrative compaction command is run',
      'The ring splits into two separate independent partitions'
    ],
    correctAnswerIndex: 1,
    explanation: 'Consistent hashing ensures that when a node joins or leaves, only O(K/N) keys move to or from that node, avoiding a full rehash.',
    sourcePdfName: 'Cloud_Systems_Week2.pdf',
    createdAt: '2026-01-20T00:00:00.000Z',
  },
  {
    id: 'q-cloud-w2-02',
    courseId: 'course-cloud-01',
    weekNumber: 2,
    questionText: 'Which storage model is characterized by immutable objects accessed via unique identifiers over HTTP REST APIs rather than hierarchical POSIX file descriptors?',
    options: [
      'Block Storage (SAN)',
      'Object Storage',
      'Network File System (NFS)',
      'Direct Attached Storage (DAS)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Object storage systems treat data as discrete, immutable units associated with metadata and unique keys, accessed through standard HTTP verbs.',
    sourcePdfName: 'Cloud_Systems_Week2.pdf',
    createdAt: '2026-01-20T00:00:00.000Z',
  },

  // Deep Learning Foundations - Week 1
  {
    id: 'q-dl-w1-01',
    courseId: 'course-dl-02',
    weekNumber: 1,
    questionText: 'What issue commonly arises in deep neural networks when using the standard Sigmoid activation function across many layers?',
    options: [
      'Exploding gradient in early layers due to derivative unboundedness',
      'Vanishing gradient problem because the maximum derivative is 0.25',
      'Loss of differentiability at x = 0',
      'Dead neurons that permanently output negative values'
    ],
    correctAnswerIndex: 1,
    explanation: 'The derivative of the sigmoid function peaks at 0.25; chaining multiple sigmoid derivatives causes backpropagated gradients to shrink exponentially toward zero.',
    sourcePdfName: 'DL_Module_Week1.pdf',
    createdAt: '2026-01-16T00:00:00.000Z',
  },
  {
    id: 'q-dl-w1-02',
    courseId: 'course-dl-02',
    weekNumber: 1,
    questionText: 'What is the primary mathematical reason for initializing weights in deep networks using He (Kaiming) initialization for ReLU activations?',
    options: [
      'To force all weights to have an absolute value of 1.0',
      'To maintain constant activation variance across both forward pass and backward gradients',
      'To eliminate the need for bias terms in dense layers',
      'To make the loss surface strictly convex'
    ],
    correctAnswerIndex: 1,
    explanation: 'He initialization accounts for ReLU zeroing out half the inputs by scaling the variance with 2/fan_in, preventing signal collapse or explosion across layers.',
    sourcePdfName: 'DL_Module_Week1.pdf',
    createdAt: '2026-01-16T00:00:00.000Z',
  },
  {
    id: 'q-dl-w1-03',
    courseId: 'course-dl-02',
    weekNumber: 1,
    questionText: 'In optimization for deep networks, what does the Adam optimizer combine to adjust individual parameter learning rates?',
    options: [
      'L1 regularization and stochastic coordinate descent',
      'First moment estimate (momentum) and second raw moment estimate (RMSProp)',
      'Hessian matrix inversion and line search',
      'Simulated annealing and genetic cross-over'
    ],
    correctAnswerIndex: 1,
    explanation: 'Adam computes exponentially decaying averages of past gradients (first moment) and past squared gradients (second moment) with bias correction.',
    sourcePdfName: 'DL_Module_Week1.pdf',
    createdAt: '2026-01-16T00:00:00.000Z',
  },

  // Deep Learning Foundations - Week 2
  {
    id: 'q-dl-w2-01',
    courseId: 'course-dl-02',
    weekNumber: 2,
    questionText: 'What key architectural innovation enabled ResNet (Residual Networks) to train networks exceeding 100 layers without suffering from degradation?',
    options: [
      'Self-attention layers replacing all convolutions',
      'Identity shortcut connections that learn residual mapping F(x) = H(x) - x',
      'Exclusive usage of fully connected layers with dropout = 0.8',
      'Quantization of 32-bit floating point weights to 4-bit integers'
    ],
    correctAnswerIndex: 1,
    explanation: 'Residual connections introduce identity skip pathways that allow gradients to flow directly back without attenuation through deep stacks.',
    sourcePdfName: 'DL_Module_Week2.pdf',
    createdAt: '2026-01-22T00:00:00.000Z',
  },
  {
    id: 'q-dl-w2-02',
    courseId: 'course-dl-02',
    weekNumber: 2,
    questionText: 'How is Batch Normalization applied during model inference (evaluation) compared to training?',
    options: [
      'It recalculates mean and variance solely from the single test sample',
      'It uses the running population statistics (moving average) accumulated during training',
      'It is completely disabled and replaced with an identity transform',
      'It randomly drops 50% of the channel activations'
    ],
    correctAnswerIndex: 1,
    explanation: 'During inference, batch normalization uses deterministic running empirical averages of mean and variance calculated over training batches.',
    sourcePdfName: 'DL_Module_Week2.pdf',
    createdAt: '2026-01-22T00:00:00.000Z',
  },

  // Advanced Algorithms - Week 1
  {
    id: 'q-algo-w1-01',
    courseId: 'course-algo-03',
    weekNumber: 1,
    questionText: 'What is the amortized time complexity of inserting an element into a dynamic array that doubles in capacity whenever full?',
    options: [
      'O(N)',
      'O(1)',
      'O(log N)',
      'O(N log N)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Although individual expansions cost O(N), the cost is spread out over N insertions, yielding O(1) amortized time per operation by the accounting method.',
    sourcePdfName: 'Algorithms_Review_W1.pdf',
    createdAt: '2026-01-18T00:00:00.000Z',
  },
  {
    id: 'q-algo-w1-02',
    courseId: 'course-algo-03',
    weekNumber: 1,
    questionText: 'In a Fibonacci Heap, what is the amortized time complexity of the Decrease-Key operation?',
    options: [
      'O(log N)',
      'O(1)',
      'O(N)',
      'O(N^2)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Fibonacci heaps achieve O(1) amortized time for Decrease-Key through cascading cuts, making them optimal for Dijkstra and Prim algorithms.',
    sourcePdfName: 'Algorithms_Review_W1.pdf',
    createdAt: '2026-01-18T00:00:00.000Z',
  },
  {
    id: 'q-algo-w1-03',
    courseId: 'course-algo-03',
    weekNumber: 1,
    questionText: 'Which algorithmic paradigm solves the All-Pairs Shortest Paths problem in O(V^3) time using dynamic programming?',
    options: [
      'Bellman-Ford Algorithm',
      'Floyd-Warshall Algorithm',
      'Kosaraju-Sharir Algorithm',
      'Tarjan Strongly Connected Components'
    ],
    correctAnswerIndex: 1,
    explanation: 'Floyd-Warshall iteratively tests every vertex k as an intermediate point between pairs (i, j) in triple nested loops with O(V^3) complexity.',
    sourcePdfName: 'Algorithms_Review_W1.pdf',
    createdAt: '2026-01-18T00:00:00.000Z',
  }
];

export const INITIAL_QUESTIONS: Question[] = RAW_QUESTIONS.map((q) => ({
  ...q,
  answerSource: 'Answer Key',
  isApproved: true,
}));

