import { Course, Question } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-hrm-master',
    code: 'HRM-101',
    name: 'HUMAN RESOURCE MANAGEMENT',
    description: 'Comprehensive Question Bank covering Human Resource Management, Strategic HRD, Mentoring, and Organizational Development.',
    totalQuestions: 135,
    weeks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    status: 'published',
    sourcePdfName: 'Week 0.pdf - WEEK 12.pdf',
    createdAt: '2026-10-12T13:00:00.000Z',
    publishedAt: '2026-10-12T13:00:00.000Z',
  },
  {
    id: 'course-iiot-cps-master',
    code: 'IIOT-CPS-101',
    name: 'Industrial IoT 4.0 and Cyber Physical Systems',
    description: 'Comprehensive Question Bank covering Industrial IoT, Smart Manufacturing, and Cyber-Physical Systems.',
    totalQuestions: 150,
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
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

const IIOT_WEEKS_7_8_9_QUESTIONS: Question[] = [
  {
    "id": "q-iiot-w7-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 95,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "Which modulation technique is incorporated by LoRa technology?",
    "options": [
      "Frequency Shift Keying (FSK)",
      "Phase Shift Keying (PSK)",
      "Chirp Spread Spectrum (CSS)",
      "Amplitude Shift Keying (ASK)"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "LoRa incorporates Chirp Spread Spectrum (CSS) modulation, which uses wideband linear frequency modulated chirp pulses.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 96,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "What is the maximum wireless throughput achieved by the SIGFOX network?",
    "options": [
      "Up to 100 bits per second",
      "Up to 100 bytes per second",
      "Up to 140 bits per second",
      "Up to 1000 bits per second"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "SIGFOX achieves maximum wireless throughput of up to 100 bits per second.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 97,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "Depending on the device variant, what is the typical communication range for a Zigbee network?",
    "options": [
      "1 to 5 meters",
      "10 to 100 meters",
      "500 to 1000 meters",
      "1 to 10 kilometers"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Zigbee networks typically operate over a communication range of 10 to 100 meters.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 98,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "In a Zigbee network, which device is specifically responsible for relaying information to other nodes and can also run small-scale applications?",
    "options": [
      "Coordinator",
      "End device",
      "Gateway",
      "Router"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "A Router relays information to other nodes and can run small-scale applications.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 99,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "Which software is used to discover and configure Xbee modules before utilizing them for communication?",
    "options": [
      "XCTU",
      "Arduino IDE",
      "NodeMCU Flasher",
      "PuTTY"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "XCTU is the configuration software used to discover and configure Xbee RF modules.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 100,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "Which type of IIoT analytics primarily focuses on answering the questions \"What already happened and currently happening\" using dashboards and reports?",
    "options": [
      "Predictive Analytics",
      "Prescriptive Analytics",
      "Descriptive Analytics",
      "Diagnostic Analytics"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Descriptive Analytics primarily focuses on answering \"What already happened and currently happening\" using dashboards and reports.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 101,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "Many middleware solutions in IIoT processing architectures are based on which of the following?",
    "options": [
      "Service-Oriented Architecture (SOA)",
      "Microservices Architecture",
      "Monolithic Architecture",
      "Layered Databus Architecture"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Many middleware solutions in IIoT processing architectures are based on Service-Oriented Architecture (SOA).",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 102,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "In the FarmBeats architecture, which component incorporates weather-aware decisions and UAV flight planning?",
    "options": [
      "IoT Base Station",
      "Cloud-Services",
      "Network of Soil Sensors",
      "IoT Gateway"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "In the FarmBeats architecture, the IoT Gateway incorporates weather-aware decisions and UAV flight planning.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 103,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "In the AR Drones-based Precision Agriculture system, what is the specific role of the video processing module deployed in the laptop?",
    "options": [
      "To control the flight path of the UAV remotely",
      "To detect the weeds and generate coordinates",
      "To actuate the precision sprayer directly via Bluetooth",
      "To capture GPS-tagged video directly from the field"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The video processing module deployed in the laptop detects weeds and generates coordinates.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 104,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "In the iRobot-Factory architecture, which component is tasked with high-performance, long-term data analytics using artificial intelligence techniques?",
    "options": [
      "Intelligent Terminal",
      "Edge Computing Node",
      "Cognitive Engine",
      "Production Line Layer"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Cognitive Engine performs high-performance, long-term data analytics using artificial intelligence techniques.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 105,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "According to the phases of Big Data Driven Smart Manufacturing, what is the primary focus of \"Phase 2\"?",
    "options": [
      "Integration of data and contextual information",
      "Innovation in process and production",
      "Initial deployment of sensor nodes",
      "Synthesis and analysis to build knowledge for decision making"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Phase 2 focuses on synthesis and analysis to build knowledge for decision making.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 106,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "In a Smart Warehousing system, which module is specifically responsible for organizing and processing data, generating events in real-time, and history-based decision making?",
    "options": [
      "Administrative module",
      "Data collection module",
      "RFID tag module",
      "REST-based framework"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Administrative module is responsible for organizing and processing data, generating events in real-time, and history-based decision making.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 107,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "In the context of an Industrial Control System (ICS), what is a \"Set Point\"?",
    "options": [
      "The physical location where a sensor is deployed",
      "The standard value of the process parameter for controlled operation",
      "The value of a process parameter measured by a sensor",
      "The actuator used to manipulate the process"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Set Point is the standard value of the process parameter for controlled operation.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 108,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "Which type of control loop makes control decisions entirely independent of the measured process variable?",
    "options": [
      "Closed Loop Control",
      "Feedback Control",
      "Open Loop Control",
      "Proportional Control"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Open Loop Control makes control decisions entirely independent of the measured process variable.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 109,
    "sourcePdfName": "Week 07 : Assignment 07",
    "questionText": "Which of the following is a primary component of a Supervisory Control and Data Acquisition (SCADA) system?",
    "options": [
      "Complex Event Processor (CEP)",
      "Centralized Cloud Services",
      "Unmanned Aerial Vehicles (UAVs)",
      "Remote Telemetry Units (RTUs)"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Remote Telemetry Units (RTUs) are a primary component of a SCADA system interfacing with field devices.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 110,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "Which type of IIoT analytics is responsible for informing about the remaining useful life of an asset and typically operates on a timescale of hours?",
    "options": [
      "Baseline analytics",
      "Diagnostic analytics",
      "Prescriptive analytics",
      "Prognostic analytics"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Prognostic analytics informs about remaining useful life and operates on a timescale of hours.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 111,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "Which of the following software tools is highlighted for its use in Complex Event Processing (CEP) during real-time stream analytics?",
    "options": [
      "Apache Hadoop",
      "Apache Spark",
      "Apache Storm",
      "Jupyter"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Apache Storm is highlighted for Complex Event Processing (CEP) during real-time stream analytics.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 112,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "In the context of unsupervised learning, what is a primary distinction of the Fuzzy c-Means (FCM) algorithm compared to K-Means?",
    "options": [
      "FCM allows a data point to belong to more than one cluster",
      "FCM is significantly slower than K-Means",
      "FCM requires a labeled dataset to operate",
      "FCM is categorized as Hard Clustering"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "FCM allows a data point to belong to more than one cluster with varying degrees of membership.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 113,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "Which supervised learning algorithm is specifically utilized when the output variable to be predicted is a real number (e.g., dollars or weight)?",
    "options": [
      "Classification",
      "Clustering",
      "Reinforcement Learning",
      "Regression"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Regression is specifically utilized when the target output variable to be predicted is a real number.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 114,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "What is a key difference between Reinforcement Learning (RL) and Supervised Learning?",
    "options": [
      "RL is guided by an external supervisor who knows the environment",
      "RL utilizes a reward function that acts as feedback to the agent",
      "RL maps inputs directly to outputs without an agent",
      "Supervised learning models build knowledge graphs from actions"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "RL utilizes a reward function that acts as feedback to the agent based on actions taken.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 115,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "Which of the following statements best describes why Deep Learning differs from traditional Machine Learning in industrial applications?",
    "options": [
      "Deep learning performs significantly worse as the data volume increases",
      "Deep learning is an \"end-to-end learning\" process that extracts features on its own",
      "Deep learning requires features to be explicitly mentioned by domain experts",
      "Deep learning requires very low computational power"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Deep learning is an \"end-to-end learning\" process that extracts hierarchical features directly from data without manual engineering.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 116,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "Which company utilizes Collaborative Distributed Deep Learning technology where the learning process is performed in the cloud while inference is conducted at the edge?",
    "options": [
      "Zebra Medical Vision",
      "Intel",
      "H2O",
      "TOSHIBA"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "TOSHIBA utilizes Collaborative Distributed Deep Learning technology.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 117,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "Which of the following is an example of an industrial Software-as-a-Service (SaaS) application?",
    "options": [
      "Industrial Machinery Catalyst from Siemens",
      "Microsoft Azure",
      "GE Predix",
      "Amazon Web Services (AWS)"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Industrial Machinery Catalyst from Siemens is an industrial SaaS application.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 118,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "A cloud setup that is designed by combining two or more unique cloud infrastructures (public or private) to provide flexibility for data and application movement is called a:",
    "options": [
      "Public Cloud",
      "Community Cloud",
      "Hybrid Cloud",
      "Private Cloud"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "A hybrid cloud combines two or more unique cloud infrastructures (public or private).",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 119,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "Which industrial cloud platform utilizes \"Digital Twin Technology\" for learning, estimating, optimizing, and representing assets?",
    "options": [
      "Sentience (Honeywell)",
      "GE Predix",
      "Siemens MindSphere",
      "Meshify"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "GE Predix utilizes Digital Twin Technology for learning, estimating, optimizing, and representing assets.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 120,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "The C3 IoT platform provides a storage service for unstructured data known as the C3 Data Lake. In which format is this data primarily managed?",
    "options": [
      "XML format",
      "RESTful format",
      "Simple Object format",
      "SQL Relational format"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "C3 Data Lake manages unstructured data primarily in Simple Object format.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 121,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "Which of the following industrial IoT platforms specifically provides solutions like \"Now\" and \"Tracker\" for real-time asset tracking with geo-localized data?",
    "options": [
      "Uptake",
      "C3 IoT",
      "Meshify",
      "Honeywell"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Meshify provides solutions like \"Now\" and \"Tracker\" for real-time asset tracking.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 122,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "Which of the following is a crucial feature that an IIoT cloud platform provider should offer for effective device management?",
    "options": [
      "Device decommission",
      "Physical hardware manufacturing",
      "Manual data provisioning",
      "Increasing network blind spots"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Device decommission is a crucial device management feature for security and lifecycle termination.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 123,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "According to Sturm et al., which of the following is one of the defined characteristics of a \"Meaningful SLA\" (Service Level Agreement)?",
    "options": [
      "Subjective",
      "Uncontrollable",
      "Quantifiable",
      "Unachievable"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "According to Sturm et al., a meaningful SLA must be quantifiable.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 124,
    "sourcePdfName": "Week 08 : Assignment 08",
    "questionText": "How does Fog Computing primarily address the limitations of a purely centralized cloud-based approach in IIoT?",
    "options": [
      "By identifying useful data and reducing the amount of raw data sent to the cloud",
      "By completely replacing the cloud infrastructure",
      "By increasing the latency of time-sensitive data",
      "By restricting the mobility of edge devices"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Fog Computing identifies useful data and reduces the amount of raw data sent to the cloud.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 125,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "How does fog computing prevent unnecessary noisy big data from crowding the cloud?",
    "options": [
      "By storing all raw data permanently in the cloud",
      "By performing prior filtration at the edge",
      "By disabling real-time control algorithms",
      "By increasing the frequency of sensor transmission"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Fog computing performs prior filtration at the edge to prevent unnecessary noisy big data from crowding the cloud.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 126,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Which capability is provided by the fog-based industrial platform?",
    "options": [
      "Merging real-time and non-real-time workloads",
      "Restricting the platform to non-real-time workloads",
      "Transmitting all sensor data without processing",
      "Eliminating control of IoT endpoints"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Fog-based industrial platforms provide the capability of merging real-time and non-real-time workloads.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 127,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Which fog-platform provider offers an edge-node software solution that supports any protocol, any PLC, and any hardware?",
    "options": [
      "FogHorn",
      "Sonm",
      "Crosser",
      "Nebbiolo Technologies"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Crosser provides an edge-node software solution that supports any protocol, any PLC, and any hardware.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 128,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "What is the purpose of the %in% special operator in R?",
    "options": [
      "To create a series of numbers for a vector",
      "To check whether an element belongs to a vector",
      "To perform integer division",
      "To assign a value globally"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "In R, %in% checks whether an element belongs to a vector.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 129,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Which validation method is used in the demonstrated R machine-learning execution process to estimate model accuracy?",
    "options": [
      "Two-fold cross-validation",
      "Leave-one-out validation",
      "Ten-fold cross-validation",
      "Validation without data partitioning"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Ten-fold cross-validation is used in the demonstrated R execution process.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 130,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Which Julia function is used to create a dictionary?",
    "options": [
      "Tuple()",
      "Array()",
      "Dictn()",
      "Dict()"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Dict() is the Julia function used to create a dictionary.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 131,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "During data preprocessing, which operation eliminates repeated data through detection, filtering, and compression?",
    "options": [
      "Data integration",
      "Data cleaning",
      "Redundancy mitigation",
      "Data visualization"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Redundancy mitigation eliminates repeated data through detection, filtering, and compression.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 132,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Which Hadoop component assigns CPU, memory, and storage resources to applications running on a Hadoop cluster?",
    "options": [
      "Hadoop Common",
      "Hadoop Distributed File System",
      "MapReduce",
      "Yet Another Resource Negotiator"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Yet Another Resource Negotiator (YARN) assigns CPU, memory, and storage resources.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 133,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Which of the following is listed as an application of integrating MongoDB with Hadoop?",
    "options": [
      "Batch aggregation",
      "Physical network cabling",
      "Sensor manufacturing",
      "Firewall configuration"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Batch aggregation is listed as an application of integrating MongoDB with Hadoop.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 134,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Which source-routing protocol is used by the BCube data-center network topology?",
    "options": [
      "Border Gateway Protocol",
      "BCube Source Routing",
      "Open Shortest Path First",
      "Spanning Tree Protocol"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "BCube Source Routing is used by the BCube data-center network topology.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 135,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Why may an IIoT-based data center require an increase in inbound network bandwidth?",
    "options": [
      "IIoT devices generate a bulk amount of small messages containing sensor data",
      "IIoT completely removes the need for data transmission",
      "Sensor data is transmitted only once during deployment",
      "Industrial devices communicate exclusively with one another without a data center"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Inbound bandwidth demand increases because IIoT devices generate a bulk amount of small messages containing sensor data.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 136,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Which of the following is an advantage of a Software-Defined Data Centre?",
    "options": [
      "Static workload management",
      "Permanent coupling of software with hardware",
      "Programmable infrastructure and workload management",
      "Elimination of network virtualization"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Programmable infrastructure and workload management is an advantage of a Software-Defined Data Centre.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 137,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "When an SDN forwarding device has insufficient rule capacity, how can two existing flow rules be converted into a single rule?",
    "options": [
      "By applying wildcard-based rule combination",
      "By disconnecting the SDN controller",
      "By disabling the forwarding device",
      "By changing TCP into UDP"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Applying wildcard-based rule combination converts multiple matching rules into a single rule.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 138,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "How can SDN meet the dynamically changing forwarding requirements of IIoT sensor data?",
    "options": [
      "By assigning the same priority to every type of data permanently",
      "By using rule-based forwarding policies",
      "By preventing the controller from updating forwarding rules",
      "By transmitting data without considering the real-time situation"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "SDN meets dynamic forwarding requirements by using rule-based forwarding policies.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 139,
    "sourcePdfName": "Week 09 : Assignment 09",
    "questionText": "Which statement best describes Software-Defined Automation?",
    "options": [
      "It uses only manually controlled physical equipment",
      "It eliminates real-time control from industrial systems",
      "It uses a virtualized platform for dynamic, real-time system control",
      "It restricts control operations to sensors at Level 0"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Software-Defined Automation uses a virtualized platform for dynamic, real-time system control.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  }
];

const IIOT_WEEK_10_QUESTIONS: Question[] = [
  {
    id: "q-iiot-w10-1",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 1,
    sourcePageNumber: 1,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "In Software-Defined 6TiSCH, at which layer is the slicing mechanism proposed to isolate SDN control overhead?",
    options: [
      "Physical Layer",
      "Layer 2",
      "Transport Layer",
      "Application Layer"
    ],
    correctAnswerIndex: 1,
    answerSource: "PDF",
    isApproved: true,
    explanation: "In Software-Defined 6TiSCH, the slicing mechanism is proposed at Layer 2 to isolate SDN control overhead and guarantee QoS for industrial traffic.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-2",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 2,
    sourcePageNumber: 1,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "In the adaptive transmission architecture for Software-Defined Edge Computing in IIoT, data streams are divided into which two categories?",
    options: [
      "Local and global data streams",
      "Secure and insecure data streams",
      "Ordinary and emergent data streams",
      "Wired and wireless data streams"
    ],
    correctAnswerIndex: 2,
    answerSource: "PDF",
    isApproved: true,
    explanation: "In the adaptive transmission architecture for Software-Defined Edge Computing in IIoT, data streams are divided into ordinary and emergent data streams.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-3",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 3,
    sourcePageNumber: 1,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "According to the challenges and opportunities of Software-Defined IIoT, fog nodes/access devices play an important role in providing which type of service?",
    options: [
      "Delay-constrained emergent services",
      "Long-term archival services",
      "Offline batch-processing services",
      "Manual configuration services"
    ],
    correctAnswerIndex: 0,
    answerSource: "PDF",
    isApproved: true,
    explanation: "According to the challenges and opportunities of Software-Defined IIoT, fog nodes/access devices play an important role in providing delay-constrained emergent services.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-4",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 4,
    sourcePageNumber: 1,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "In a trustworthy IIoT system, which property refers to the ability of the system to function correctly under dynamic adversarial conditions?",
    options: [
      "Privacy",
      "Reliability",
      "Safety",
      "Resilience"
    ],
    correctAnswerIndex: 3,
    answerSource: "PDF",
    isApproved: true,
    explanation: "Resilience refers to the ability of the system to function correctly under dynamic adversarial conditions and adapt to disruptions.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-5",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 5,
    sourcePageNumber: 2,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "In the STRIDE threat model, what does the letter ‘E’ represent?",
    options: [
      "Encryption",
      "Elevation of privilege",
      "Exposure of information",
      "Endpoint security"
    ],
    correctAnswerIndex: 1,
    answerSource: "PDF",
    isApproved: true,
    explanation: "In the STRIDE threat model (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege), the letter 'E' represents Elevation of privilege.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-6",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 6,
    sourcePageNumber: 2,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "Which participant in the IIoT trust flow is responsible for designing a cost-efficient trustworthy system, defining trust requirements for components, and conducting tests and certifications?",
    options: [
      "System Owner",
      "End User",
      "System Builder",
      "Cloud Service Provider"
    ],
    correctAnswerIndex: 2,
    answerSource: "PDF",
    isApproved: true,
    explanation: "The System Builder is responsible for designing a cost-efficient trustworthy system, defining component trust requirements, and conducting tests and certifications.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-7",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 7,
    sourcePageNumber: 2,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "Which of the following is suggested as a solution for protecting resource-constrained IIoT end devices?",
    options: [
      "Lightweight symmetric key cryptography",
      "Increasing the size of every transmitted packet",
      "Disabling device authentication",
      "Storing all security operations only in the cloud"
    ],
    correctAnswerIndex: 0,
    answerSource: "PDF",
    isApproved: true,
    explanation: "Lightweight symmetric key cryptography is suggested as an optimal solution for securing resource-constrained IIoT end devices with minimal processing overhead.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-8",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 8,
    sourcePageNumber: 2,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "Which three states of data are considered under data protection in IIoT?",
    options: [
      "Data-at-source, Data-at-cloud, and Data-at-edge",
      "Data-at-Rest, Data-in-Use, and Data-in-Transit",
      "Structured, Semi-structured, and Unstructured data",
      "Sensor data, Control data, and Application data"
    ],
    correctAnswerIndex: 1,
    answerSource: "PDF",
    isApproved: true,
    explanation: "Data protection in IIoT considers three states: Data-at-Rest, Data-in-Use, and Data-in-Transit.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-9",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 9,
    sourcePageNumber: 2,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "Which standard listed under OT security provides guidance for security in Industrial Control Systems?",
    options: [
      "ISO 27017",
      "NIST SP 800-82",
      "ISO/IEC 15408",
      "NIST SP 800-144"
    ],
    correctAnswerIndex: 1,
    answerSource: "PDF",
    isApproved: true,
    explanation: "NIST SP 800-82 provides dedicated guidance for security in Industrial Control Systems (ICS), including SCADA, DCS, and PLCs.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-10",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 10,
    sourcePageNumber: 2,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "Which of the following is NOT one of the five layers of Hitachi’s Lumada IoT platform?",
    options: [
      "Edge",
      "Core",
      "Analytics",
      "Transport"
    ],
    correctAnswerIndex: 3,
    answerSource: "PDF",
    isApproved: true,
    explanation: "The five layers of Hitachi's Lumada IoT platform are Edge, Core, Analytics, Studio, and Foundry. Transport is NOT one of them.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-11",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 11,
    sourcePageNumber: 3,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "In the North Star BlueScope Steel smart-factory application, sensors are used to detect which environmental hazards?",
    options: [
      "Radiation and toxic gases",
      "Network congestion and packet loss",
      "Inventory shortages and production delays",
      "Voltage fluctuations and cloud failures"
    ],
    correctAnswerIndex: 0,
    answerSource: "PDF",
    isApproved: true,
    explanation: "In North Star BlueScope Steel's smart-factory application, sensors are deployed to detect hazardous radiation and toxic gases to ensure worker safety.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-12",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 12,
    sourcePageNumber: 3,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "What technology does SmartLabel use to provide product-related information such as ingredients, allergens, and nutritional value to consumers?",
    options: [
      "RFID tag",
      "Bluetooth beacon",
      "QR code",
      "GPS receiver"
    ],
    correctAnswerIndex: 2,
    answerSource: "PDF",
    isApproved: true,
    explanation: "SmartLabel uses QR codes on packaging that consumers scan with smartphones to access detailed product ingredients, allergens, and nutritional facts.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-13",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 13,
    sourcePageNumber: 3,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "In the Intellicup smart beverage-vending solution, what is integrated at the base of the IoT-enabled cup?",
    options: [
      "GPS module",
      "NFC chip",
      "Temperature sensor",
      "Wi-Fi router"
    ],
    correctAnswerIndex: 1,
    answerSource: "PDF",
    isApproved: true,
    explanation: "In the Intellicup smart beverage-vending solution, an NFC chip is integrated at the base of the cup to authenticate and regulate pouring.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-14",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 14,
    sourcePageNumber: 3,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "Which characteristic of a smart factory allows process parameters such as machine configuration, material flow, and temperature control to be optimally adjusted?",
    options: [
      "Flexibility",
      "Isolation",
      "Centralization",
      "Redundancy"
    ],
    correctAnswerIndex: 0,
    answerSource: "PDF",
    isApproved: true,
    explanation: "Flexibility allows smart factories to automatically and adaptively adjust process parameters such as machine configuration, material flow, and temperature control.",
    createdAt: "2026-09-30T10:00:00.000Z"
  },
  {
    id: "q-iiot-w10-15",
    courseId: "course-iiot-cps-master",
    weekNumber: 10,
    originalQuestionNumber: 15,
    sourcePageNumber: 4,
    sourcePdfName: "NPTEL_WEEK-10.pdf",
    questionText: "Which network-security mechanism acts as a fence between a trusted internal network and an unauthorized external network and uses a set of rules to allow or block traffic?",
    options: [
      "Hypervisor",
      "Firewall",
      "Load balancer",
      "Data logger"
    ],
    correctAnswerIndex: 1,
    answerSource: "PDF",
    isApproved: true,
    explanation: "A firewall acts as a protective boundary between a trusted internal network and unauthorized external networks, filtering network traffic based on established security rules.",
    createdAt: "2026-09-30T10:00:00.000Z"
  }
];


const HRM_QUESTIONS: Question[] = [
  {
    "id": "q-hrm-w0-1",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 1,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "How does training and development offer competitive advantage to an organization?",
    "options": [
      "Reduces performance deficiencies",
      "Ensures employee compliance",
      "Increases supervisor's role",
      "None of the above"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-2",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 2,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "Which of these is an off \u2013 the \u2013 job training method?",
    "options": [
      "Games and simulation",
      "Job rotation",
      "Orientation training",
      "Coaching"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-3",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 3,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "Match the following techniques of training with their correct description:\n1.Internships \u2014\u2014 A. acting out situations that might occur in the workplace\n2. Outward \u2013 bound training \u2014\u2014 B. Games to test ability to plan ahead\n3. Mirroring \u2014\u2014 C. Training with an external perspective\n4. Strategic planning \u2014\u2014 D. Adventure sports for teams\n5. Role playing \u2014\u2014 E. training the colleges or universities pass outs about the practical aspects of their study",
    "options": [
      "1-E, 2-D, 3-C, 4-B, 5-A",
      "1-A, 2-D, 3-E, 4-C, 5-B",
      "1-D, 2-A, 3-C, 4-E, 5-B",
      "1-C, 2-D, 3-B, 4-A, 5-E"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-4",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 4,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "The unique characteristics of a learning organization is that:",
    "options": [
      "the members learn about each other",
      "it has the capacity to gather new information and use it for improvement",
      "it focuses on selecting new employees who love learning and are highly skilled",
      "employees are rewarded for submitting creative suggestions and participating in their implementation"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-5",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 5,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "A set of systematic and planned activities designed by an organization to provide its members with the opportunities to learn necessary skills to meet current and future job demands is known as:",
    "options": [
      "Human resource management",
      "Change management",
      "Human resource development",
      "Career Planning"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-6",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 6,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "An important advantage of on-the-job training is that it",
    "options": [
      "provides immediate transfer of training",
      "allows employees to learn at their own rate without any pressure to produce results",
      "provides for greater group interaction",
      "reduces the costs of supervision"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-7",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 7,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "The core of all HRD efforts is:",
    "options": [
      "Better coordination of efforts",
      "Internal control",
      "Workplace Learning",
      "Employee satisfaction"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-8",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 8,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "The best reason for organizing a training program is because:",
    "options": [
      "it contributes to the organization's goals and objectives",
      "it has been highly advertised.",
      "competitors are using the training.",
      "concern about federal agency pressure."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-9",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 9,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "HRD seeks to develop people's:",
    "options": [
      "Knowledge",
      "Expertise",
      "Productivity",
      "All of these"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-10",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 10,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "The first HRD intervention experienced by an employee when they join an organization is usually:",
    "options": [
      "Mentoring",
      "Orientation",
      "On-the-job training",
      "Coaching"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-11",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 11,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "Learning undertaken for the development of skills for work and in work, on-job or off-job, to enable effective performance in a job or role is known as:",
    "options": [
      "Coaching",
      "Education",
      "Training",
      "Mentoring"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-12",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 12,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "HRD activities are meant primarily for employees and workers, not for executives:",
    "options": [
      "True",
      "False",
      "Option C",
      "Option D"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-13",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 13,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "HRD system must enable their employees to identify their hidden potential and make them competent enough to exploit their talent in an optimum manner so that they could contribute their efforts in attaining organizational goals. This statement reflects which principle of HRD:",
    "options": [
      "Principle of Development of Organizational Capability",
      "Principle of Potential Maximization",
      "Principle of Autonomy Maximization",
      "Principle of Participative Decision-making"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-14",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 14,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "The process of determining the gap between what are the capabilities of the current employee and what they are required to do is known as:",
    "options": [
      "HRD Design",
      "HRD Implementation",
      "HRD Evaluation",
      "HRD Needs Assessment"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w0-15",
    "courseId": "course-hrm-master",
    "weekNumber": 0,
    "originalQuestionNumber": 15,
    "sourcePdfName": "Week 0.pdf",
    "questionText": "HRD programs must respond to job changes and integrate the long-term plans and strategies of the organization to ensure the efficient and effective use of resources.",
    "options": [
      "True",
      "False",
      "Option C",
      "Option D"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-1",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "Which of the following best defines Human Resource Development?",
    "options": [
      "Human resource development is the process of increasing the capacity of the human resource through development",
      "Human resource development is fostering short-term work-related learning capacity at the individual, group, and organizational levels",
      "set of systematic and planned activities designed by an organization to provide its members with the necessary skills to meet the financial demands of the organization.",
      "Human resource development is fostering short-term work-related learning capacity at the organizational level."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-2",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "Who coined the term \"Human Resource Development\" (HRD)?",
    "options": [
      "Hamlin and Stewart",
      "Leonard Nadler",
      "Robert Owen",
      "Fomburn"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-3",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "Who proposed the five principles of a learning organization?",
    "options": [
      "Robert Owen",
      "T.V Rao",
      "Peter Senge",
      "Chris Argyris"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-4",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "Employee orientation and Coaching are related to which of the following functions of HRD?",
    "options": [
      "Scholarship",
      "Organizational development",
      "Training",
      "Personal growth"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-5",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "Which concept refers to the planned effort to improve organizational effectiveness and the well-being of organizational members by applying behavioral science knowledge?",
    "options": [
      "Organization learning",
      "Organizational Development",
      "Education",
      "Counselling"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-6",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "At which level of Human Resource Development (HRD) are professional associations, government departments, and voluntary organizations represented?",
    "options": [
      "micro level",
      "individual level",
      "macro level",
      "both macro and micro levels"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-7",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "Which of the following is true in the context of HRD?",
    "options": [
      "reactiveness",
      "routine",
      "administrative",
      "proactiveness"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-8",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "Define the term career development?",
    "options": [
      "Process by which groups progress through single change actions to achieve their professional achievement as per the organization",
      "Developing the skills and attitude not directly related to job linked to personal growth and development",
      "Process of improving an organization\u2019s effectiveness and member\u2019s well-being through the application of behavioral science concepts",
      "Process by which individuals progress through series of changes until they achieve their personal level of maximum achievement."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-9",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "Which of the following is not a core principle of andragogy?",
    "options": [
      "Motivation",
      "Self-concept of the learner",
      "Forced conditioning of the learner",
      "Readiness to learn and practice"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w1-10",
    "courseId": "course-hrm-master",
    "weekNumber": 1,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 01.pdf",
    "questionText": "In which role does the HRD professional implement coaching activities?",
    "options": [
      "HRD professional as an instructor",
      "HRD professional as a consultant",
      "HRD professional as a researcher",
      "HRD professional as an executive"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-1",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "Which of the following theories is related to the psychological preposition of HRD?",
    "options": [
      "Scarce resource theory",
      "Human capital theory",
      "Chaos theory",
      "Gestalt theory"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-2",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "What is the focus of the \"Economic theory\" of HRD?",
    "options": [
      "Focus on the core issues of efficient, effective resource utilization to meet productive goals in a competitive environment.",
      "Focus on the core human aspects of developing human resources as well",
      "as focus on the complex and dynamic interactions of environments, organizations, work processes, and group/individual variables operating at any point in time and over time.",
      "Focus on enhancing knowledge and skills."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-3",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "Which of the following proposed cognitive theories?",
    "options": [
      "Watson, Pavlov",
      "Piaget, Bruner, Tolman",
      "Kofka, Kohler",
      "Lewin"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-4",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "Which of the following refers to Human Capital Theory?",
    "options": [
      "Human capital refers to the goals and objectives achieved by employees at all levels.",
      "Human capital refers to the knowledge, expertise, and skills accumulated through education and training.",
      "Human capital refers to the revenue generated by employees in a prescribed time frame.",
      "Human capital refers to employees' short-term development in terms of knowledge."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-5",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "Leadership falls under which of the following levels of Garavan's Model of Strategic Human Resource Development?",
    "options": [
      "Level 1",
      "Level 2",
      "Level 3",
      "Level 4"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-6",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "Which of the following steps ensures speedy delivery of SHRD?",
    "options": [
      "utilize competencies to drive SHRD interventions",
      "blend learning solutions synergistically",
      "utilize just-in-time learning strategies",
      "promote one-size-fits-all solutions"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-7",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "Which of the following is included in \"level 4\" of Garavan's Model of SHRD?",
    "options": [
      "employability and careers",
      "global environment",
      "job values and uniqueness",
      "culture"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-8",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "Which of the following is included in the transactional category of Strategic HRD activities?",
    "options": [
      "training and development records",
      "learning by doing",
      "knowledge management",
      "employee counselling"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-9",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "What do you understand by the \"skill\" of a person?",
    "options": [
      "general capacities related to the performance of specific tasks",
      "An understanding of the factors or principles related to a specific subject",
      "combines abilities and capacities, generally the result of training",
      "a person's general feelings of favor or disfavor towards something"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w2-10",
    "courseId": "course-hrm-master",
    "weekNumber": 2,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 2.pdf",
    "questionText": "Which of the following is true in the context of the resource-based approach?",
    "options": [
      "SHRD can be viewed as an investment in human capital, and the decision to participate in training activities and acquire skills is viewed as a rational choice on the part of individuals",
      "Human resources are durable, difficult to imitate and substitute, and enable the organization to differentiate itself from other competitors.",
      "Use of HRD practices as tools to shape patterns of behavior that help organizations achieve goals and objectives",
      "Different organizational goals and objectives require different types of behaviors and, therefore, different SHRD practices."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-1",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "Facts, principles, and goals are components of which of the following determinants of performance?",
    "options": [
      "developmental knowledge",
      "declarative knowledge",
      "decisive knowledge",
      "procedural knowledge"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-2",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "What are the determinants of performance?",
    "options": [
      "developmental knowledge, productive knowledge, and motivation",
      "developmental knowledge, procedural knowledge, and motivation",
      "declarative knowledge, predictive knowledge, motivation",
      "declarative knowledge, procedural knowledge, motivation"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-3",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "Cognitive skill is an example of which of the following determinants of performance?",
    "options": [
      "Declarative knowledge",
      "Procedural knowledge",
      "Factual knowledge",
      "Documented knowledge"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-4",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "Which of the following options is a component of motivation?",
    "options": [
      "principles",
      "level of efforts",
      "goals",
      "cognitive skills"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-5",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "What are the two types of performance facets that matter most for employees?",
    "options": [
      "task performance, contextual performance",
      "skill performance, task performance",
      "task performance, continuous performance",
      "contextual performance, team performance"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-6",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "What is the meaning of contextual performance?",
    "options": [
      "Activities that transform raw materials into the goods and services that the organization produces",
      "Activities that help with the transformation process by replenishing the supply of raw materials, distributing its finished products, or providing important planning, coordination, supervising, or staff functions that enable the organization to function effectively and efficiently",
      "Those behaviors contribute to the organization's effectiveness by providing a good environment for task performance.",
      "Those behaviors that contribute to the organization's efficiency by providing a good training program and an organizational structure that enables task performance."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-7",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "Which of the following is true in the context of task performance?",
    "options": [
      "Likely to be role prescribed",
      "Fairly similar across jobs",
      "Not likely to be role prescribed",
      "Antecedent: personality"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-8",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "Define \"voice behavior\"?",
    "options": [
      "Behavior that emphasizes expression of constructive challenge to improve rather than merely criticize",
      "Behavior that emphasizes expression of destructive challenge to improve and criticizing",
      "Behavior that emphasizes the expression of organizational culture to perform a particular task",
      "Behavior that emphasizes the expression of employees and how they behave to understand the task, and not criticizing"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-9",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "Which of the following is an example of a result-oriented approach to performance measurement?",
    "options": [
      "personality",
      "Good teamwork",
      "Good attendance",
      "Customer satisfaction"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w3-10",
    "courseId": "course-hrm-master",
    "weekNumber": 3,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 03.pdf",
    "questionText": "Which of the following best explains performance standards?",
    "options": [
      "Yardsticks are designed to help people understand the extent to which the objective has been achieved.",
      "Yardsticks are designed to understand who has to achieve the objective",
      "Yardsticks designed to help people understand the performance standard are designed",
      "Each aspect can be considered a criterion to judge the extent to which an objective has been designed"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-1",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "\"Role play\" is an example of which type of training delivery method?",
    "options": [
      "on-the-job training",
      "classroom training",
      "self-paced training",
      "simulation training"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-2",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "Which of the following is an example of experiential learning?",
    "options": [
      "outdoor training",
      "discussion",
      "self-learning",
      "job instruction"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-3",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "What do you understand by role-play learning?",
    "options": [
      "Require trainees to gather information, analyze it, and make decisions.",
      "Provides participants with an opportunity to develop skills by presenting a problem without a solution.",
      "Demonstrates key behaviors to replicate and provides trainees with opportunities to practice them.",
      "Requires trainees to assume a character and act out the role in a make-believe scenario or series of scenarios"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-4",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "Behavior modeling is based on the principles of which theory?",
    "options": [
      "social exchange theory",
      "systems theory",
      "social learning theory",
      "constructive learning theory"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-5",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "What do you understand by Kaizen?",
    "options": [
      "Focuses on continuous improvement of business processes",
      "Focuses on individual learning about the improvement of business processes",
      "Quality standard with a goal of no more than 3.4 defects per million processes",
      "Focuses on the continuous behavioral and personality development of employees"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-6",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "What is the first step of job instruction training?",
    "options": [
      "prepare the worker",
      "Prepare the trainer",
      "present the task",
      "arrange the resources"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-7",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "What is the full form of CBT?",
    "options": [
      "corporate-based training",
      "communication-based training",
      "culture-based training",
      "computer-based training"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-8",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "What is summative evaluation?",
    "options": [
      "to render a point-wise judgment or discussion through measurement and assessment of the program process.",
      "to render a summary judgment or conclusion through measurement and assessment of program outcomes.",
      "to identify weaknesses in instructional material, methods, or learning objectives with the intention to develop prescriptive solutions during training program design and development",
      "to identify strength in instructional material, process, or progress with the intention to develop prescriptive solutions after training program design and development"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-9",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "In the model of evaluation, what does CIPP stand for?",
    "options": [
      "Context, Input, Process, Participate",
      "Context, Input, Progress, Produce",
      "Context, Input, Process, Product",
      "Context, Inference, Process, Product"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w4-10",
    "courseId": "course-hrm-master",
    "weekNumber": 4,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 04.pdf",
    "questionText": "\"Cognitive outcomes\", \"Skill-based outcomes,\" and \"Affective outcomes\" are part of which evaluation model?",
    "options": [
      "Kraiger, Ford, and Salas",
      "Holton",
      "Galvin",
      "Brinkerhoff"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-1",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "Which of the following is NOT included in the content of the development plan?",
    "options": [
      "new skill or knowledge to be acquired, and how this will occur",
      "Keep the needs of the organization only in mind",
      "include a description of specific steps to be taken and specific objectives to reach",
      "information on the resources and strategies to achieve the objectives the completion date"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-2",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "Which of the following is the best description of a coach?",
    "options": [
      "The one who provides one-on-one coaching on the job",
      "The one who gets the professional service",
      "in employment",
      "The stakeholders, including more senior executives of the firm"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-3",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "Which of the following options is true in the context of collaborative ongoing performance?",
    "options": [
      "providing feedback",
      "training employee",
      "rewarding employee behavior",
      "Concern with short-term performance"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-4",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "What is the role of the supervisor in coaching?",
    "options": [
      "Should be motivated to see the work group succeed",
      "Is not responsible for the unit's effectiveness",
      "Has the authority to supervise but not conduct a coaching program",
      "Can use limited information on hand"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-5",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "Which of the following is true with respect to mentoring?",
    "options": [
      "people centered",
      "problem centered",
      "short term",
      "self-awareness"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-6",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "Which of the following is included in the process of the Conceptual Framework for understanding coaching?",
    "options": [
      "self-awareness",
      "learning",
      "organizational support",
      "feedback receptivity"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-7",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "What is the focus of coaching?",
    "options": [
      "people centered",
      "issue centered",
      "problem centered",
      "competition"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-8",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "Individual success and organizational success are the outcomes of which of the steps of the Conceptual Framework for understanding coaching?",
    "options": [
      "proximal outcomes",
      "antecedents",
      "distal outcomes",
      "process"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-9",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "What is the first step in coaching to improve poor performance?",
    "options": [
      "responding to poor performance",
      "defining poor performance",
      "planning steps for overcoming poor performance",
      "providing feedback"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w5-10",
    "courseId": "course-hrm-master",
    "weekNumber": 5,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 5.pdf",
    "questionText": "Which of the following is NOT a critical success factor for coaching?",
    "options": [
      "capacity",
      "clarity",
      "condition",
      "commitment"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-1",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "Which of the following is true in the context of mentoring?",
    "options": [
      "Generally, touches only personal life",
      "Generally, touches only professional life",
      "Can be only a one-time contact, no long-term relationship, usually formal",
      "Helps the person to solve their problems or attain their goals"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-2",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "Which of the following is an example of career functions?",
    "options": [
      "challenging assignment",
      "counselling",
      "role modelling",
      "friendship"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-3",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "Which of the following is an example of the psychological functions of mentoring?",
    "options": [
      "Exposure and visibility",
      "Acceptance and confirmation",
      "Protection",
      "Coaching"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-4",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "What is the primary objective of the \"developmental\" mentoring model?",
    "options": [
      "career success",
      "hierarchy senior",
      "financial stability",
      "personal development"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-5",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "What is the full form of SMART goals?",
    "options": [
      "S = specific, M= measurable, A = achievable, R = reliable, T = time framed",
      "S = stretched, M= measurable, A = active, R = relevant, T = time framed",
      "S = specific/stretched, M= measurable, A = achievable, R = relevant, T = time framed",
      "S = specific, M= measurable, A = achievable, R = responsible, T = time framed"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-6",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "What is the final step of the Mentoring Implementation Process??",
    "options": [
      "Train mentors/mentees",
      "Implementation",
      "Evaluation",
      "Follow Up"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-7",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "Which of the following are essential characteristics of mentoring relationships?",
    "options": [
      "confidentiality",
      "trust",
      "confidence",
      "all of the above"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-8",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "\"Betrayal\" explains which type of potential dysfunction occurs in Mentoring Relationships.",
    "options": [
      "negative relations",
      "difficulty",
      "spoiling",
      "sabotage"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-9",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "\"Good intentions to others\" and \"psychosocial issues\" lead to which of the Four Potential Dysfunctions in Mentoring Relationships?",
    "options": [
      "difficulty",
      "sabotage",
      "spoiling",
      "negative relations"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w6-10",
    "courseId": "course-hrm-master",
    "weekNumber": 6,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 06.pdf",
    "questionText": "\"Conflict\" is a part of which type of potential dysfunctions in mentoring relationships?",
    "options": [
      "negative relations",
      "spoiling",
      "difficulty",
      "sabotage"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-1",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "Which of the following is a characteristic of potential appraisal?",
    "options": [
      "It is a future-oriented process",
      "part of reward management",
      "The time for the potential appraisal is fixed",
      "It guarantees promotion"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-2",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "What do you understand by the power of analysis?",
    "options": [
      "The ability to examine a problem in the context of a much broader framework of reference",
      "The ability to sell ideas to other people and gain a continuing commitment, particularly when the individual is using personal influence rather than 'management authority'",
      "The capacity to break down, reformulate, or transform a complicated situation into manageable terms",
      "The ability to examine a problem in the context of a much narrower framework of reference, being able to detect, within a specific situation, relationships with those aspects that could be affecting the situation"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-3",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "\"The ability or capacity for growth and development into a leadership role\" explains which of the following terms?",
    "options": [
      "leader",
      "personality",
      "potential",
      "performance"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-4",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "Which of the following is a characteristic of potential-focused appraisal?",
    "options": [
      "objective in nature",
      "quantitative approach",
      "non-quantitative approach",
      "Focus on past performance"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-5",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "What do you understand by the in-basket technique of potential appraisal?",
    "options": [
      "represents a day-to-day decision-making situation that a manager is likely to face in the written form from various sources",
      "Consists of 4 to 6 participants given to solve a problem & instructed to derive a group solution within a specified period.",
      "A computer program is used to generate information and simulate the game; participants are not allowed to access the computer directly but rather through a mediator.",
      "A method of studying the nature of certain roles by acting out their concrete details in a contrived situation that permits better and more objective observation"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-6",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "What is succession planning?",
    "options": [
      "It helps develop qualities such as conflict management, verbal and nonverbal communication skills, flexibility, and problem-solving.",
      "A method of studying the nature of certain roles by acting out their concrete details in a contrived situation that permits better and more objective observation.",
      "It serves as the link between organizations and employees' personal career goals.",
      "Identifying capabilities for key areas and positions, identifying the person as a successor, and identifying the potentials"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-7",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "What do you understand by \"reward\"??",
    "options": [
      "The achievement and benefit received by employees for their behavior in an organization are known as rewards.",
      "The achievements and benefits employees receive for their job performance in an organization are known as rewards.",
      "The achievements and benefits the organization receives for its performance and profit.",
      "The promotions received by employees for their length of service in an organization are known as rewards."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-8",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "What are the two major approaches to the reward system?",
    "options": [
      "traditional, convenient",
      "total, convenient",
      "traditional, contingent",
      "terminal, contingent"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-9",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "Which of the following is a performance-based reward?",
    "options": [
      "seniority or time in rank",
      "piecework pay plans",
      "pension plans",
      "profit sharing"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w7-10",
    "courseId": "course-hrm-master",
    "weekNumber": 7,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 07.pdf",
    "questionText": "What do you understand by defamation in the context of legal principles affecting performance management?",
    "options": [
      "The employer or employee can end the employment relationship at any time",
      "When PMS is outlined in documents such as an employee manual, an employment contract, or other materials, but is not implemented as described.",
      "Disclosure of untrue, unfavorable performance information that damages an employee's reputation.",
      "Raters assign scores differently to various employees based on factors unrelated to performance, such as race, nationality, color, or ethnic and national origin."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-1",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "Human competency can be classified into which two broad categories?",
    "options": [
      "hidden and vague",
      "clear and visible",
      "hidden and visible",
      "specific and valuable"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-2",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "What do you understand by \"motives\"?",
    "options": [
      "What drives us",
      "self-concept and values",
      "acquiring information in a particular field",
      "a learned ability"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-3",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "What is competency profiling?",
    "options": [
      "A list of an individual's competencies that represent the factors most critical to success in given jobs, departments, or organizations that are part of the individual's current career plan.",
      "It is the process of identifying the organization and person fit required for effective behavioral performance in a particular occupation or profession.",
      "A list of an individual's competencies that represent the factor most critical to behavior outcomes leading to organizational success.",
      "It is the process of identifying the knowledge, skills, abilities, attitudes, and judgment required for effective performance in a particular occupation or profession."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-4",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "What does a competency map explain?",
    "options": [
      "Define the competency requirements for all key jobs in an organization. This consists of generic competencies.",
      "Define the competency requirements that cover only a few jobs in an organization. This consists of selected competencies.",
      "A set of competencies that are required to perform a specified role.",
      "Describe the different aspects of competent behavior in an occupation against competency dimensions such as strategic capability, resource management, and quality."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-5",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "Finance and environmental management are examples of which type of competency?",
    "options": [
      "Generic competencies",
      "Managerial competencies",
      "Technical/ functional competencies",
      "Behavioral competencies"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-6",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "Which of the following is an example of generic competencies?",
    "options": [
      "finance",
      "supervisory responsibility",
      "communication",
      "environment management"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-7",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "Which of the following is true in the context of Job analysis?",
    "options": [
      "A distilled set of underlying personal characteristics",
      "Data generation from outstanding performers, in addition to subject matter experts and other job incumbents",
      "Data generation from subject matter experts, job incumbents",
      "Outstanding Performance"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-8",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "What do you understand by Strategic Workforce Planning?",
    "options": [
      "Develop assessment tools to determine whether the workforce possesses the competencies necessary to meet personal goals.",
      "Develop assessment tools to determine whether the workforce possesses the competencies necessary to meet professional goals.",
      "Develop assessment tools to determine whether the workforce possesses the competencies necessary to meet organizational goals.",
      "Develop assessment tools to determine whether the workforce possesses the competencies necessary to meet personal and professional goals."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-9",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "Which of the following is TRUE in the context of performance management?",
    "options": [
      "Create rating guides to help managers assess each competency.",
      "Create guides that describe senior-level career paths and the competencies required at each step.",
      "Create a guide for managers to reward the demonstration of specific competencies by their employees.",
      "Design a competency-based compensation program where employees' salaries increase based on proficiency in selected competencies."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w8-10",
    "courseId": "course-hrm-master",
    "weekNumber": 8,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 08.pdf",
    "questionText": "What do you understand by 360-Degree Feedback?",
    "options": [
      "The approach uses various types of discussion and simulation exercises to reflect the real-life demands of the job. Candidates are asked to work through certain scenarios while a trained assessor observes their behavior.",
      "Data about critical events -- exceptional examples of accomplishment or failure -- is collected through interviews or questionnaires as soon as possible after occurrence.",
      "The situations are designed to reveal skills and aptitude that help identify which individuals are good matches for the current and future requirements of the job.",
      "It involves a collection of perceptions about an individual's behavior and its impact on bosses, colleagues, subordinates, and internal and external customers."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-1",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "What career planning tool stimulates thinking about careers, strengths/limitations, and development needs?",
    "options": [
      "Career planning system",
      "Career planning workshop",
      "Career counselling",
      "Career planning workbook"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-2",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "What is job security?",
    "options": [
      "Development of expertise that helps ensure employment within a range of careers",
      "Development of marketable skills for job promotion",
      "Protection against job loss within the company",
      "Implies security in one job, often with multiple companies"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-3",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "What are the individual needs in the career development program?",
    "options": [
      "Restaffing",
      "Staffing",
      "Development",
      "Fitting into the organization"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-4",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "Which of the following statements is incorrect with respect to career anchors?",
    "options": [
      "Career anchors are developed on a short-term basis",
      "Career anchors can shape an individual's self-image",
      "Career anchor evolves into self-concept",
      "Career anchors include skills, attitudes, and values"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-5",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "What are the task needs at the establishment stage of Career-Impacted Life Stages?",
    "options": [
      "Technical updating and coaching skills",
      "Rethink work, family",
      "Identify successors and develop outside interests",
      "Learn the ropes and get challenging jobs"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-6",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "Who developed the concept of career anchors?",
    "options": [
      "Brousseau et al.",
      "Nicholson",
      "Edgar Schein",
      "Cianni & Wnuck"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-7",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "Which of the following is not a career anchor?",
    "options": [
      "Technical competence",
      "Managerial competence",
      "Creativity",
      "Working style"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-8",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "What is the responsibility of a manager in career development?",
    "options": [
      "knowing why",
      "advising",
      "deciding where",
      "financial assistance"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-9",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "Which of the following best describes insight?",
    "options": [
      "realistic perceptions about one's career goals",
      "the extent to which people define themselves by their work",
      "the ability to resist career barriers or disruptions",
      "the characteristics of a job or career that individuals are drawn to"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w9-10",
    "courseId": "course-hrm-master",
    "weekNumber": 9,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 09.pdf",
    "questionText": "Define the term career.",
    "options": [
      "Flexible line of movement through which an employee may move during employment with a company",
      "Formal approach used by the organization to help people acquire the skills and experiences needed to perform current and future jobs",
      "The general course that a person chooses to pursue throughout his or her working life",
      "Firm identifies paths and activities for individual employees as they develop."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-1",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "Which of the following is NOT a component of Intellectual Capital?",
    "options": [
      "human Capital",
      "structural Capital",
      "financial Capital",
      "relational Capital"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-2",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "Which of the following is an indicator of human Capital?",
    "options": [
      "employee satisfaction index",
      "investment in sales",
      "sales per quarter",
      "no. of patents"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-3",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "\"Brand awareness\" indicates which of the components of intellectual Capital?",
    "options": [
      "customer capital",
      "organizational capitals",
      "social Capital",
      "relational Capital"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-4",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "Which of the following is true in the context of social Capital?",
    "options": [
      "Relationships, reputation, image, loyalty, satisfaction",
      "Support, cooperative action, networks, trust, mutual understanding",
      "Customer contracts, distribution channels, licensing agreements",
      "Individual education, know-how, competence"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-5",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "Are infrastructural assets and Intellectual property components of intellectual Capital?",
    "options": [
      "human capitals",
      "social Capital",
      "organizational Capital",
      "customer capital"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-6",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "What does ICN stand for?",
    "options": [
      "Intellectual Capacity Navigator",
      "Intellectual Capital Navigator",
      "Intellectual Credit Navigator",
      "Intellectual Customer Navigator"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-7",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "Which of the following is NOT a part of Edvinsson's Navigator?",
    "options": [
      "customer capital",
      "process capital",
      "policy capital",
      "financial Capital"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-8",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "What are the five focus areas of Skandia IC Measures?",
    "options": [
      "human, financial, customer, process, renewal, and development",
      "human, financial, cultural, process, renewal, and deployment",
      "human, financial, customer, process, training, and development",
      "human, financial, structure, process, renewal, and deployment"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-9",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "Which of the following is part of the relationship capital index?",
    "options": [
      "distribution efficiency",
      "value creation per employee",
      "customer retention",
      "ability to generate new business"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w10-10",
    "courseId": "course-hrm-master",
    "weekNumber": 10,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 10.pdf",
    "questionText": "What is the full form of EVA?",
    "options": [
      "Economic Value Added",
      "Economic Value Asset",
      "Economic Vision Added",
      "Economic Vision Asset"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-1",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "Rules, contracts, and documents are examples of which type of knowledge?",
    "options": [
      "tacit knowledge",
      "explicit knowledge",
      "knowledge sharing",
      "procedural knowledge"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-2",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "What do you understand by Organizational learning?",
    "options": [
      "development of new knowledge and acquisition of new insights that have the potential to influence changes in financial benefits.",
      "research of the old knowledge and topics that have the potential to influence changes and to improve organizational performance.",
      "development of new knowledge, acquisition of new insights that have the potential to influence behavioral changes and thus improve organizational performance.",
      "development of technical skills to increase an organization's revenue."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-3",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "Are \"Lower-level Learning\" and \"Not-Strategic Learning\" characteristics of a type of organizational learning?",
    "options": [
      "single loop learning",
      "double loop learning",
      "triple loop learning",
      "multi-loop learning"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-4",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "What is triple-loop learning?",
    "options": [
      "When errors are detected and corrected, but firms continue with their present policies and goals.",
      "The organization questions and modifies its existing norms, procedures, policies, and objectives",
      ". Organizational members learn how to learn and form new beliefs that impact their thinking and, therefore, what they do and how they do it.",
      "When people get better at a particular activity through practice or training"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-5",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "Which of the following is not a component of a learning organization?",
    "options": [
      "can be achieved through quick management training",
      "It is a multi-level concept",
      "based on continuous knowledge transfer and adaptation",
      "requires specific HRM policies supportive of a learning culture"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-6",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "Which of the following is an element of an information processing system?",
    "options": [
      "development",
      "strategy",
      "distribution",
      "communication"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-7",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "Which of the following is NOT a subsystem of Experiential Learning in the roadmap of organizational learning?",
    "options": [
      "Organizational self-appraisal",
      "Scanning",
      "Unintentional learning",
      "Organizational Experiments"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-8",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "Supply chains, the government, and professional societies form a part of which of these workplace learning communities?",
    "options": [
      "networks and partnerships",
      "the individual",
      "the workgroup",
      "the enterprise"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-9",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "According to Senge, which of the following is not one of the five disciplines of Learning Organization?",
    "options": [
      "shared mission",
      "systems thinking",
      "mental models",
      "team learning"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w11-10",
    "courseId": "course-hrm-master",
    "weekNumber": 11,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 11.pdf",
    "questionText": "Which of the following is a characteristic of a complex adaptive system?",
    "options": [
      "dynamic behavior",
      "quantum leaps",
      "new product",
      "new service"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-1",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 1,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "What do you understand by power distance in the context of cultural diversity?",
    "options": [
      "The extent to which a society feels threatened by uncertain and ambiguous situations and tries to avoid them",
      "The extent to which a society accepts the power-holding authority and obey",
      "The extent to which a society accepts the fact that power in institutions and organizations is distributed unequally",
      "The extent to which a society feels safe in all situations and accepts it happily"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-2",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 2,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "Which of the following best Defines workforce diversity?",
    "options": [
      "Systems that do not seek to include people within a workforce who are considered to be in some way different from those of the prevailing constituency",
      "Policies & practices that seek to include people within a workforce who are considered to be in some way different from those of the prevailing constituency",
      "Policies and practices that seek to include people within a workforce who are considered to be similar to those of the prevailing constituency",
      "Systems that seek to include people outside the organization who are considered to be in some way different from those of the prevailing constituency"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-3",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 3,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "Which of the following is NOT one of the 5 dimensions of national culture?",
    "options": [
      "Short-term orientation",
      "Individualism vs. collectivism",
      "Uncertainty Avoidance",
      "Quantity vs. Quality of Life"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-4",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 4,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "Which of the following is NOT an attitude towards diversity?",
    "options": [
      "Singularism",
      "Pluralism",
      "Enthnorelativism",
      "Ethnocentrism"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-5",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 5,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "\"Belief that groups and subcultures are inherently equal\" explains which attitude of diversity?",
    "options": [
      "Ethnocentrism",
      "Enthnorelativism",
      "Pluralism",
      "Singularism"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-6",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 6,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "What is the initial stage of diversity management?",
    "options": [
      "denial",
      "defense",
      "minimizing differences",
      "integration"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-7",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 7,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "Who are expatriates?",
    "options": [
      "employees who live and work in their own country",
      "employees who live in their own country and work in a country other than their own",
      "employees who work in their country and live in a country other than their own",
      "Employees who live and work in a country other than their own"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-8",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 8,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "What are multicultural teams?",
    "options": [
      "made up from similar national, racial, ethnic, and cultural backgrounds",
      "based on social identity, and organized by employees to focus on the concerns of employees from that group",
      "based on professional identity, and organized by employers to focus on the concerns of employees from that group",
      "made up from diverse national, racial, ethnic, and cultural backgrounds"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-9",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 9,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "What does CSR stand for?",
    "options": [
      "Corporate social responsibility",
      "Corporate sustainable responsibility",
      "Cultural social responsibility",
      "Culturally sustainable responsibility"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  },
  {
    "id": "q-hrm-w12-10",
    "courseId": "course-hrm-master",
    "weekNumber": 12,
    "originalQuestionNumber": 10,
    "sourcePdfName": "WEEK 12.pdf",
    "questionText": "Which of the following is TRUE with respect to stakeholder theory?",
    "options": [
      "Stakeholder theory looks only at profit maximization and does not focus on social responsibility, but rather on a corporation's moral obligations to all those who have a stake in the business.",
      "Stakeholder theory prioritizes profit maximization, grounded in a corporation's legal obligations to generate shareholder wealth.",
      "Stakeholder theory prioritizes environmental values and considers wealth creation, based on a corporation's legal obligations, to generate shareholder wealth.",
      "Stakeholder theory looks beyond profit maximization to social and environmental values, grounded in a corporation's moral obligations to all those with a stake in the business."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "",
    "createdAt": "2026-10-12T13:00:00.000Z"
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  ...IIOT_6_WEEKS_QUESTIONS,
  ...IIOT_WEEKS_7_8_9_QUESTIONS,
  ...IIOT_WEEK_10_QUESTIONS,
  ...HRM_QUESTIONS,
];
