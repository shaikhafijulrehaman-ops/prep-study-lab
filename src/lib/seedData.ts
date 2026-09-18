import { Course, Question } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-iiot-cps-master',
    code: 'IIOT-CPS-101',
    name: 'Industrial IoT 4.0 and Cyber Physical Systems',
    description: 'Complete 6-Week Question Bank covering Industrial IoT, Smart Manufacturing, and CPS (from 6 weeks test paper).',
    totalQuestions: 90,
    weeks: [1, 2, 3, 4, 5, 6],
    status: 'published',
    sourcePdfName: 'nptl 6 weeks.pdf',
    createdAt: '2026-09-18T10:00:00.000Z',
    publishedAt: '2026-09-18T10:00:00.000Z',
  },
];

// All 90 questions extracted across 6 weeks from nptl 6 weeks.pdf
const IIOT_6_WEEKS_QUESTIONS: Question[] = [
  {
    "id": "q-iiot-w1-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 1,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which sensor can detect gases like LPG, CH4, and CO?",
    "options": [
      "DHT22",
      "MQ-5",
      "HC-SR04",
      "PIR"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.928Z"
  },
  {
    "id": "q-iiot-w1-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 2,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which modulation scheme does Zigbee use for the 2.4 GHz band?",
    "options": [
      "BPSK",
      "QPSK",
      "OQPSK",
      "FSK"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 3,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What does the Constrained RESTful Environments (CoRE) framework include for service discovery?",
    "options": [
      "Registration Interface (RI)",
      "Resource Directory (RD)",
      "REST based protocols such as HTTP and CoAP",
      "All of the above"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 4,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is the maximum data rate of Z-Wave communication technology?",
    "options": [
      "100 kbps",
      "250 kbps",
      "500 kbps",
      "1 Mbps"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 5,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which protocol is CoAP based on?",
    "options": [
      "TCP",
      "FTP",
      "UDP",
      "HTTP"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 6,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which coding scheme is used by the IEEE 802.15.4 standard for transmitting information?",
    "options": [
      "CSS",
      "THSS",
      "OFDM",
      "DSSS"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 7,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What does 'Range' indicate in a sensor?",
    "options": [
      "The correctness of the output",
      "The smallest change in input that can be detected",
      "The difference between the standard value and the value produced by the sensor",
      "The highest and the lowest value of the physical quantity within which the sensor can actually sense"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 8,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which organization has developed the ISA 100.11a standard?",
    "options": [
      "Instrument Society of America",
      "International Society of Automation",
      "International Studies Association",
      "International Solar Alliance"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 9,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is/are the drawbacks of proprietary non-IP-based solutions?",
    "options": [
      "Limited flexibility to end users",
      "Interoperability",
      "Limited last-mile connectivity",
      "All of these"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 10,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which MQTT QoS Level is also known as \"at most once\" delivery?",
    "options": [
      "QoS 0",
      "QoS 1",
      "QoS 2",
      "None of these"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 11,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Fill in the blank space designated by the question mark.",
    "options": [
      "Snubber",
      "Repeater",
      "Processor",
      "Amplifier"
    ],
    "correctAnswerIndex": null,
    "answerSource": "Not Available",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 12,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following best describes a vector sensor?",
    "options": [
      "Its response depends only on the temperature.",
      "Its response depends only on the magnitude of the input.",
      "Its response depends on the magnitude, direction, and orientation of the input parameter.",
      "Its response is independent of the input parameter."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 13,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following frequency ranges is used by 6LoWPAN worldwide?",
    "options": [
      "902–929 MHz",
      "2400–2483.5 MHz",
      "1800–1900 MHz",
      "5.8 GHz"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 14,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In DDS RTPS, data is referred to as:",
    "options": [
      "Packets",
      "Frames",
      "Messages",
      "Topics"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w1-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 1,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 15,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following IoT protocols is based on the session layer of the OSI model?",
    "options": [
      "MQTT",
      "CoAP",
      "AMQP",
      "DTLS"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 16,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is a significant characteristic of new materials in the context of the Fourth Industrial Revolution?",
    "options": [
      "High cost and scarcity",
      "Lighter, stronger, recyclable, and adaptive",
      "Easily available but very expensive",
      "Non-recyclable and heavy"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 17,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is NOT a characteristic of the Fourth Industrial Revolution?",
    "options": [
      "Extensive use of the ubiquitous and mobile internet",
      "Use of artificial intelligence and machine learning",
      "Invention of the steam engine",
      "Development of Cyber Physical Systems (CPS)"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 18,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is considered the main nervous system of any manufacturing industry?",
    "options": [
      "Human Resources",
      "Information and Communication Technology (ICT)",
      "Supply Chain Management (SCM)",
      "Marketing"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 19,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is not a characteristic of a sustainable industry?",
    "options": [
      "Energy efficiency",
      "Reliance on government subsidy",
      "Conservation of resource",
      "Low-waste production"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 20,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What does L, D and T stand for under 'People Engagement' in the Lean production System?",
    "options": [
      "Learn, Do, Teach",
      "Leverage, Divulge, Teardown",
      "Lean, Diverse, Timid",
      "Loan, Deploy, Test"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 21,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which resource is associated with the 'Optimization' categorization of Smart and connected products?",
    "options": [
      "Optimization algorithms",
      "Manual controls",
      "Marketing data",
      "Financial reports"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 22,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "State True or False. The amalgamation of CPS and the evolution of Internet-based technologies led to the development of the Industrial Internet.",
    "options": [
      "True",
      "False",
      "Cannot be determined",
      "None of the above"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 23,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "State True or False. Real-time supply chain monitoring reduces inventory and capital requirements.",
    "options": [
      "True",
      "False",
      "Cannot be determined",
      "None of the above"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 24,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the context of Industry 4.0, what is the full form of CPS?",
    "options": [
      "Controlled Power System",
      "Customer Provisioning Service",
      "Cloud Processing Service",
      "Cyber Physical Systems"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 25,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What does ERP stand for in the context of ICT?",
    "options": [
      "Enterprise Resource Planning",
      "Electronic Resource Platform",
      "Enhanced Reporting Protocol",
      "Economic Resource Planning"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 26,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is a 'value stream' in Lean Production System?",
    "options": [
      "A set of tools for production",
      "All the actions required for a product from order to delivery",
      "A method of employee training",
      "A type of waste reduction"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 27,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following are key attributes of a smart business model?",
    "options": [
      "Manual processes, cost reduction, and labor dependency",
      "Value proposition, revenue streams, and technologies",
      "Traditional marketing, fixed costs, and limited innovation",
      "Centralized control, non-digital strategies, and fixed processes"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 28,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is not a component of a Smart Factory?",
    "options": [
      "Smart machines",
      "Smart manufacturing processes",
      "Information Technology",
      "Physical ledgers"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 29,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In which format is healthcare data transmitted to maintain data uniformity and interoperability?",
    "options": [
      "HL-7",
      "LH-5",
      "HD-7",
      "None of these"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w2-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 2,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 30,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What are the key characteristics of agility?",
    "options": [
      "Stability, Rigidity, and Standardization",
      "Flexibility, Adaptation, and Self-configuration",
      "Planning, Controlling, and Monitoring",
      "Automation, Documentation, and Testing"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 31,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What does \"reactive computation\" in CPS signify?",
    "options": [
      "Systems with zero response time",
      "Interaction with the environment in an ongoing manner",
      "Predefined computation processes",
      "Complete isolation from physical feedback"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 32,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Fill in the blanks. In healthcare applications, CPS is used for __________.",
    "options": [
      "Image-guided surgery and therapy",
      "Manual monitoring of vitals",
      "Static hospital management systems",
      "Front desk management"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 33,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which level in the \"5C Architecture\" ensures the gathering of precise status information of machines?",
    "options": [
      "Conversion",
      "Cognition",
      "Cyber",
      "Configuration"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 34,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Fill in the blanks. Intelligent sensors are capable of __________.",
    "options": [
      "Only sensing data",
      "Processing sensed data and managing external sensors/devices",
      "Limited communication",
      "Basic analog-to-digital conversion"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 35,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "How many steps are there in the PLM solution approach in Industry 4.0?",
    "options": [
      "10",
      "12",
      "8",
      "7"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 36,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is not a key component of an AR Device?",
    "options": [
      "Sensors",
      "Cameras",
      "Projection Screen",
      "Remote Control"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 37,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is NOT a challenge of AI in IIoT?",
    "options": [
      "Connecting devices",
      "Understanding data",
      "Training AI models",
      "Lack of available data"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 38,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is not one of the primary constraints of mobile CPS?",
    "options": [
      "Stability of the network",
      "Power requirement",
      "Security",
      "Design aesthetics"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 39,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What are the components of the 5C architecture for CPS?",
    "options": [
      "Connection, Conversion, Cyber, Cognition, Configuration",
      "Creation, Controlling, Continuation, Convergence, Compatibility",
      "Calculation, Catalysis, Convergence, Convenience, Cognizance",
      "None of these"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 40,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is one of the key features of CPS in terms of computation?",
    "options": [
      "Static computation",
      "Reactive computation",
      "Limited computation",
      "Redundant computation"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 41,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is a collaboration platform in the context of Industry 4.0?",
    "options": [
      "A type of business software that combines organizational networking capacities with operations",
      "A social media platform for employees",
      "A traditional project management tool",
      "A financial management system"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 42,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is a key feature of Augmented Reality (AR)?",
    "options": [
      "Completely replacing the physical environment",
      "Enhancing the present perception of reality",
      "Only providing auditory feedback",
      "Operating in isolated systems"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 43,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Who proposed the first use of the phrase \"Artificial Intelligence\"?",
    "options": [
      "Alan Turing",
      "John McCarthy",
      "Marvin Minsky",
      "Herbert Simon"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 44,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following statements is true?",
    "options": [
      "A program without AI uses a large knowledge base and a heuristic search method",
      "A program with AI uses a large database and an algorithmic search method",
      "A program with AI uses a large knowledge base and a heuristic search method",
      "A program without AI uses a large database and a heuristic search method"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w3-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 3,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 45,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following are constraints of mobile CPS?",
    "options": [
      "Network stability",
      "Power requirement",
      "Security",
      "All of the above"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 46,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What does Application Security aim to protect against?",
    "options": [
      "Unauthorized physical access",
      "Threats to the software applications",
      "Data breaches from the internet",
      "Network architecture issues"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 47,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is Ransomware?",
    "options": [
      "A type of malware that provides a facility to the attacker to lock users' computer files by using encryption and demand money to unlock them",
      "A program that increases computer performance",
      "A system to enhance network speed",
      "A method to secure data from unauthorized access"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 48,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is a major challenge in the deployment of IIoT?",
    "options": [
      "Legacy installations",
      "Cybersecurity",
      "Lack of standardization",
      "All of the above"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 49,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What are the three waves of industrial level innovation according to GE?",
    "options": [
      "The Internet Revolution, The Digital Revolution, The Industrial Internet",
      "The Industrial Revolution, The Internet Revolution, The Industrial Internet",
      "The Agricultural Revolution, The Internet Revolution, The Industrial Internet",
      "The Scientific Revolution, The Industrial Revolution, The Internet Revolution"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 50,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is a major drawback of the Industrial Revolution?",
    "options": [
      "It had no impact on the environment",
      "It created a bad working environment and inefficient processes",
      "It reduced the use of fossil fuels",
      "It enhanced the quality of life for all workers"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 51,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which component is NOT part of the configurations involved in smart sensors?",
    "options": [
      "Multiparameter Sensing Unit",
      "Analog Detection Circuit",
      "Digital Signal Conditioning Unit",
      "Manual Control Unit"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 52,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which sector is predicted to have the highest growth in Industry 4.0?",
    "options": [
      "Electronics",
      "Manufacturing",
      "Defense",
      "Automotive"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 53,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is the focus of the 'Control Layer' in the 5C Architecture for Cyber Physical Systems?",
    "options": [
      "Data collection",
      "Sensor-based monitoring",
      "Supervised control: Self-configure, Self-optimize, Self-adjust",
      "Human-readable interpretation and data visualization"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 54,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Why are IIoT Security Standards required, especially when diverse systems and equipment are integrated on a smart factory floor?",
    "options": [
      "To reduce the cost of implementing IIoT.",
      "Because leaving security to individual IIoT implementers is dangerous and every weak line puts the whole factory at risk.",
      "To ensure that only new systems are implemented, not legacy ones.",
      "To increase the complexity of the smart factory floor."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 55,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the mining industry, how do sensor networks with gas sensors, strata monitoring devices, and RFID tags contribute to safety and efficiency?",
    "options": [
      "They only help in tracking miners' locations.",
      "They are primarily used for communication between miners.",
      "They replace the need for human inspection.",
      "They provide early disaster warning, monitor working conditions, and help locate miners."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 56,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Who coined the term \"Industrial Internet\"?",
    "options": [
      "IBM",
      "General Electric (GE)",
      "Intel",
      "Siemens"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 57,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In a milk packaging unit, how is flow measured?",
    "options": [
      "Using a thermometer",
      "Via a spinning impeller that sends signals when milk flows",
      "With a smart camera",
      "Using a GPS module"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 58,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which component is responsible for converting analog data to digital data in a smart sensor node?",
    "options": [
      "Processor",
      "Memory",
      "ADC",
      "DAC"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 59,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Fill in the blanks. Thames Water's smart water management system, as an example of Industrial Process 4.0 operation efficiency, primarily benefits from __________________.",
    "options": [
      "Data monetization and pay-per-use models.",
      "Sensor-based equipment status monitoring and failure detection.",
      "Augmented Reality-based problem diagnosis.",
      "Controlled power generation using weather forecasts."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w4-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 4,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 60,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "State true or false. In the case of spear phishing, the attackers send thousands of deceitful emails that resemble actual emails from credible sources, while email phishing attacks are targeted at a specific person or organization to obtain sensitive information.",
    "options": [
      "True",
      "False",
      "Cannot be determined",
      "None of the above"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 61,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which company employs the \"Air-as-a-Service\" model by using sensor-equipped air compressors where users pay per cubic meter of air?",
    "options": [
      "John Deere",
      "Kaeser Kompressoren",
      "Magna Steyr",
      "Gehring"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 62,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the context of the Hitachi integrated IIoT platform, what is the name of the core IoT platform used for AI-powered advanced analytics?",
    "options": [
      "Predix",
      "MindSphere",
      "Lumada",
      "Connext"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 63,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the context of Smart Logistics, which company uses IoT and analytics to remotely monitor and optimize fuel consumption for refrigerated and dry cargo containers?",
    "options": [
      "Boeing",
      "Maersk",
      "Komatsu",
      "Stanley Black & Decker"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 64,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the building blocks of a business model, which of the following represents a quantitative value proposition?",
    "options": [
      "Design",
      "Brand perception",
      "Customer experience",
      "Post-purchase cost reduction"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 65,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which IoT business model enables businesses to virtually consolidate and share their IoT-enabled assets among multiple customers to minimize downtime and maximize utilization?",
    "options": [
      "Subscription Model",
      "Asset-Sharing Model",
      "Outcome-Based Model",
      "IoT-as-a-Service"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 66,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In a Cloud-Based Business Model, which offering provides development-oriented platforms to facilitate the integration of applications into existing solutions?",
    "options": [
      "Software-as-a-Service (SaaS)",
      "Infrastructure-as-a-Service (IaaS)",
      "Platform-as-a-Service (PaaS)",
      "Network-as-a-Service (NaaS)"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 67,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the functional flow of IIoT business models, which model specifically employs Cloud-based business models to gather data, analyze it, and sell it as a service?",
    "options": [
      "Service-Oriented Business Model",
      "Process-Oriented Business Model",
      "Product-Oriented Business Model",
      "Asset-Sharing Business Model"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 68,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is considered a lagging Key Performance Indicator (KPI) for Occupational Safety and Health (OSH)?",
    "options": [
      "Frequency of observed unsafe behavior",
      "Number of OSH audits",
      "Percentage of workers with adequate OSH training",
      "Number of fatalities"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 69,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "According to the Industrial Internet Consortium (IIC), what is the primary purpose of their developed testbeds?",
    "options": [
      "To initiate, conceptualize, and rigorously test innovations before market launch",
      "To handle manual data entries for traditional factories",
      "To increase the processing downtime in manufacturing sectors",
      "To establish isolated machine operations away from the cloud"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 70,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the Business Viewpoint of the IIRA framework, what provides the logic regarding the merit of the vision and is validated by stakeholders?",
    "options": [
      "Key Objectives",
      "Fundamental Capabilities",
      "Values",
      "System Requirements"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 71,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the Usage Viewpoint of the IIRA framework, what describes the state of the IIoT system after the successful completion of an activity?",
    "options": [
      "Trigger",
      "Workflow",
      "Constraints",
      "Effect"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 72,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which functional domain in the IIRA functional viewpoint represents the set of functions responsible for the provisioning, deployment, and management of assets?",
    "options": [
      "Control domain",
      "Operations domain",
      "Information domain",
      "Application domain"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 73,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "An IIoT system architect is designing a framework that requires the semantic transformation of assembled data and the subsequent implementation of specific rules to realize a targeted business function. According to the IIRA Functional Viewpoint, which two domains are specifically responsible for handling these respective requirements?",
    "options": [
      "Information domain and Application domain",
      "Operations domain and Business domain",
      "Information domain and Business domain",
      "Application domain and Control domain"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 75,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is NOT categorized as one of the fundamental activities in a business model?",
    "options": [
      "Production",
      "Problem-solving",
      "Platform management",
      "Philanthropy"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w5-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 5,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 76,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the context of IIoT business models, what is the term used for the mechanism by which a service provider transforms the present value of assets into ones with financial value?",
    "options": [
      "Value Proposition",
      "Value Network",
      "Value Capturing Mechanism",
      "Value Communication"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 77,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is highlighted as a benefit of sensor usage in industrial applications for improving overall operations?",
    "options": [
      "Improving visibility",
      "Increasing manual inspection",
      "Enhancing latency",
      "Reducing production rate"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 78,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which type of sensor is primarily used for the inspection of steel pipes and detecting time-varying stresses or strains in ferromagnetic materials?",
    "options": [
      "Torque sensor",
      "Vacuum sensor",
      "Magnetostrictive sensor",
      "Image sensor"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 79,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "The DS1621 temperature sensor is a digital sensor that communicates via an I2C bus and generates temperature data of how many bits?",
    "options": [
      "8 bits",
      "32 bits",
      "16 bits",
      "9 bits"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 80,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the context of gas sensor characteristics, how is \"Selectivity\" defined?",
    "options": [
      "The ability to detect a particular gas in a mixture of different gases",
      "The time taken to stabilize its response",
      "The change in output signal with respect to unit change in input",
      "The ability to return to its base resistance value"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 81,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What happens to the resistance of an n-type metal oxide semiconductor (MOS) gas sensor when it is exposed to a reducing gas?",
    "options": [
      "It remains unchanged",
      "It increases",
      "It decreases",
      "It fluctuates randomly"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 82,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "How many active connections or sockets does the ModBus-TCP protocol typically support at one time?",
    "options": [
      "Up to 5",
      "Up to 10",
      "Up to 64",
      "Up to 254"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 83,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In EtherNet/IP, which primary type of communication is used to handle real-time I/O data through continuous message transfer?",
    "options": [
      "Implicit",
      "Explicit",
      "Acyclic",
      "Asynchronous"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 84,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Time-Sensitive Networking (TSN) is an extension of Ethernet developed to enable deterministic communication. Which IEEE standard is it primarily based on?",
    "options": [
      "IEEE 802.15.4",
      "IEEE 802.1Q",
      "IEEE 802.1F",
      "IEEE 802.1P"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 85,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In a Profibus DP (Decentralized Peripherals) network, how many devices are supported at a single time without the use of repeaters?",
    "options": [
      "10",
      "128",
      "64",
      "32"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 86,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is the global operating frequency utilized by the CC-Link communication protocol?",
    "options": [
      "2.4 GHz",
      "5.0 GHz",
      "13.56 MHz",
      "433 MHz"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 87,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "The DeviceNet communication protocol links industrial sensors and actuators with Programmable Logic Controllers (PLCs) and is based on which standard?",
    "options": [
      "CAN (Controller Area Network)",
      "IEC 61158",
      "IEEE 802.3",
      "WIA-PA"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 88,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is an advantage of the WIA-PA (Wireless Networks for Industrial Automation-Process Automation) standard?",
    "options": [
      "It operates exclusively on wired fiber optics",
      "It supports Adaptive Frequency Hopping (AFH)",
      "It removes the need for data packet aggregation",
      "It replaces satellite communication"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 89,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "For Ultra-Reliable Low Latency Communication (URLLC) in 5G, what is the specified target for availability?",
    "options": [
      "3-Nines (99.9%)",
      "4-Nines (99.99%)",
      "5-Nines (99.999%)",
      "6-Nines (99.9999%)"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 90,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is an objective of Device-to-Device (D2D) Communication in cellular networks?",
    "options": [
      "Increasing the load on the core network",
      "Eliminating the load on the core network",
      "Maximizing propagation delay",
      "Restricting communication to wired endpoints"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  },
  {
    "id": "q-iiot-w6-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 6,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 91,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which of the following is considered a primary disadvantage of millimeter-wave (mmWave) communication?",
    "options": [
      "It requires huge antenna element sizes",
      "It utilizes the heavily congested GHz band",
      "It suffers from high penetration loss and shadowing",
      "It provides very low data throughput"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "createdAt": "2026-09-18T13:48:36.933Z"
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  ...IIOT_6_WEEKS_QUESTIONS,
];
