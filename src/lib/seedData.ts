import { Course, Question } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-deep-learning-master',
    code: 'DL-101',
    name: 'Deep Learning',
    description: 'Comprehensive Question Bank covering Deep Learning foundations, neural networks, optimization, autoencoders, regularizations, and CNN architectures.',
    totalQuestions: 200,
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    status: 'published',
    sourcePdfName: 'DeepLearning_July_Oct_2026_Week1.pdf - DeepLearning_July_Oct_2026_Week10.pdf',
    createdAt: '2026-10-13T13:00:00.000Z',
    publishedAt: '2026-10-13T13:00:00.000Z',
  },
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


const DL_QUESTIONS: Question[] = [
  {
    "id": "q-dl-w1-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 1\nSmart Classroom Ventilation Control\nA university building uses a simple automatic ventilation controller for a smart classroom.\nThe controller is intended to be transparent enough for maintenance staff to verify without\nrunning a learning algorithm. At the beginning of every class interval, the controller reads\nfour binary indicators:\nx1 : carbon dioxide level is high,\nx2 : room occupancy is high,\nx3 : indoor temperature is above the comfort limit,\nx4 : outside air quality is acceptable.\nEach indicator is 1 when the condition is true and 0 otherwise.\nThe ventilation fan is\ncontrolled by a McCulloch-Pitts style threshold unit:\ny =\n\n\n\n1,\nif x1 + x2 + x3 + x4 \u2265\u03b8,\n0,\notherwise.\nHere, y = 1 means that the fan is switched on. The facilities team wants the fan to switch\non only when at least three of the four indicators are active. Each class interval is evaluated\nindependently.\n\nQuestion 1: Which threshold value implements the desired fan-control rule?",
    "options": [
      "\u03b8 = 1",
      "\u03b8 = 2",
      "\u03b8 = 3",
      "\u03b8 = 4"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The fan should switch on when at least three indicators are active, so the threshold must be 3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 1\nSmart Classroom Ventilation Control\nA university building uses a simple automatic ventilation controller for a smart classroom.\nThe controller is intended to be transparent enough for maintenance staff to verify without\nrunning a learning algorithm. At the beginning of every class interval, the controller reads\nfour binary indicators:\nx1 : carbon dioxide level is high,\nx2 : room occupancy is high,\nx3 : indoor temperature is above the comfort limit,\nx4 : outside air quality is acceptable.\nEach indicator is 1 when the condition is true and 0 otherwise.\nThe ventilation fan is\ncontrolled by a McCulloch-Pitts style threshold unit:\ny =\n\n\n\n1,\nif x1 + x2 + x3 + x4 \u2265\u03b8,\n0,\notherwise.\nHere, y = 1 means that the fan is switched on. The facilities team wants the fan to switch\non only when at least three of the four indicators are active. Each class interval is evaluated\nindependently.\n\nQuestion 2: For input (1, 0, 1, 1), what output does the controller produce?",
    "options": [
      "y = 0, because only one condition is absent",
      "y = 1, because three indicators are active",
      "y = 0, because all four indicators must be active",
      "y = 1, because the first indicator is active"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The input contains three 1s. Since 3 \u2265\u03b8, the output is y = 1.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 1\nSmart Classroom Ventilation Control\nA university building uses a simple automatic ventilation controller for a smart classroom.\nThe controller is intended to be transparent enough for maintenance staff to verify without\nrunning a learning algorithm. At the beginning of every class interval, the controller reads\nfour binary indicators:\nx1 : carbon dioxide level is high,\nx2 : room occupancy is high,\nx3 : indoor temperature is above the comfort limit,\nx4 : outside air quality is acceptable.\nEach indicator is 1 when the condition is true and 0 otherwise.\nThe ventilation fan is\ncontrolled by a McCulloch-Pitts style threshold unit:\ny =\n\n\n\n1,\nif x1 + x2 + x3 + x4 \u2265\u03b8,\n0,\notherwise.\nHere, y = 1 means that the fan is switched on. The facilities team wants the fan to switch\non only when at least three of the four indicators are active. Each class interval is evaluated\nindependently.\n\nQuestion 3: How many binary input patterns switch on the fan?",
    "options": [
      "5",
      "4",
      "6",
      "8"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The fan switches on for exactly three active indicators or four active indicators. The number of patterns is 4 3 \u0001 + 4 4 \u0001 = 4 + 1 = 5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 1\nSmart Classroom Ventilation Control\nA university building uses a simple automatic ventilation controller for a smart classroom.\nThe controller is intended to be transparent enough for maintenance staff to verify without\nrunning a learning algorithm. At the beginning of every class interval, the controller reads\nfour binary indicators:\nx1 : carbon dioxide level is high,\nx2 : room occupancy is high,\nx3 : indoor temperature is above the comfort limit,\nx4 : outside air quality is acceptable.\nEach indicator is 1 when the condition is true and 0 otherwise.\nThe ventilation fan is\ncontrolled by a McCulloch-Pitts style threshold unit:\ny =\n\n\n\n1,\nif x1 + x2 + x3 + x4 \u2265\u03b8,\n0,\notherwise.\nHere, y = 1 means that the fan is switched on. The facilities team wants the fan to switch\non only when at least three of the four indicators are active. Each class interval is evaluated\nindependently.\n\nQuestion 4: If the threshold is accidentally changed to \u03b8 = 2, what happens?",
    "options": [
      "The fan switches on less often than intended.",
      "The fan switches on when two or more indicators are active.",
      "The fan switches on only when all inputs are 1, making activation too strict.",
      "The fan never switches on."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "With \u03b8 = 2, any pattern with two, three, or four active indi- cators produces y = 1, so activation becomes more frequent.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 1\nSmart Classroom Ventilation Control\nA university building uses a simple automatic ventilation controller for a smart classroom.\nThe controller is intended to be transparent enough for maintenance staff to verify without\nrunning a learning algorithm. At the beginning of every class interval, the controller reads\nfour binary indicators:\nx1 : carbon dioxide level is high,\nx2 : room occupancy is high,\nx3 : indoor temperature is above the comfort limit,\nx4 : outside air quality is acceptable.\nEach indicator is 1 when the condition is true and 0 otherwise.\nThe ventilation fan is\ncontrolled by a McCulloch-Pitts style threshold unit:\ny =\n\n\n\n1,\nif x1 + x2 + x3 + x4 \u2265\u03b8,\n0,\notherwise.\nHere, y = 1 means that the fan is switched on. The facilities team wants the fan to switch\non only when at least three of the four indicators are active. Each class interval is evaluated\nindependently.\n\nQuestion 5: Which property makes this controller a threshold-logic system?",
    "options": [
      "It predicts future classroom occupancy states.",
      "It updates weights after every incorrect output during a training process.",
      "It requires a hidden layer to make a decision.",
      "It compares a summed input value with a fixed threshold."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A threshold unit computes a weighted or unweighted sum and compares that sum with a threshold.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 2\nScholarship Application Screening\nA scholarship office builds a first-stage screening aid. The aid does not make the final\naward decision; it only flags applications that satisfy a simple rule for immediate review.\nEach application is represented by two binary features:\nx1 : academic score is above the cutoff,\nx2 : financial-need certificate is verified.\nThe office wants the system to flag an application when at least one of these two conditions\nis true. A perceptron with weights w1, w2, bias b, and decision rule\n\u02c6y =\n\n\n\n1,\nif w1x1 + w2x2 + b \u22650,\n0,\notherwise\nis tested for this screening rule.\n\nQuestion 6: Which logical behavior is described by the desired screening rule?",
    "options": [
      "AND",
      "XOR",
      "OR",
      "XNOR"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The output is 1 when x1 = 1, or x2 = 1, or both. This is the OR operation.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 2\nScholarship Application Screening\nA scholarship office builds a first-stage screening aid. The aid does not make the final\naward decision; it only flags applications that satisfy a simple rule for immediate review.\nEach application is represented by two binary features:\nx1 : academic score is above the cutoff,\nx2 : financial-need certificate is verified.\nThe office wants the system to flag an application when at least one of these two conditions\nis true. A perceptron with weights w1, w2, bias b, and decision rule\n\u02c6y =\n\n\n\n1,\nif w1x1 + w2x2 + b \u22650,\n0,\notherwise\nis tested for this screening rule.\n\nQuestion 7: Which parameter setting correctly implements this rule?",
    "options": [
      "w1 = 1, w2 = 1, b = \u22121.5",
      "w1 = 1, w2 = 1, b = \u22120.5",
      "w1 = \u22121, w2 = \u22121, b = 0.5",
      "w1 = 1, w2 = \u22121, b = 0"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "With w1 = w2 = 1 and b = \u22120.5, the score is negative only for (0, 0). All other input patterns produce a non-negative score.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 2\nScholarship Application Screening\nA scholarship office builds a first-stage screening aid. The aid does not make the final\naward decision; it only flags applications that satisfy a simple rule for immediate review.\nEach application is represented by two binary features:\nx1 : academic score is above the cutoff,\nx2 : financial-need certificate is verified.\nThe office wants the system to flag an application when at least one of these two conditions\nis true. A perceptron with weights w1, w2, bias b, and decision rule\n\u02c6y =\n\n\n\n1,\nif w1x1 + w2x2 + b \u22650,\n0,\notherwise\nis tested for this screening rule.\n\nQuestion 8: For w1 = 1, w2 = 1, b = \u22120.5, what is the score for input (0, 1)?",
    "options": [
      "0.5",
      "\u22120.5",
      "0",
      "1.5"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The score is 1(0) + 1(1) \u22120.5 = 0.5, so the perceptron outputs 1.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 2\nScholarship Application Screening\nA scholarship office builds a first-stage screening aid. The aid does not make the final\naward decision; it only flags applications that satisfy a simple rule for immediate review.\nEach application is represented by two binary features:\nx1 : academic score is above the cutoff,\nx2 : financial-need certificate is verified.\nThe office wants the system to flag an application when at least one of these two conditions\nis true. A perceptron with weights w1, w2, bias b, and decision rule\n\u02c6y =\n\n\n\n1,\nif w1x1 + w2x2 + b \u22650,\n0,\notherwise\nis tested for this screening rule.\n\nQuestion 9: What is the decision boundary for the parameter setting w1 = 1, w2 = 1, b = \u22120.5?",
    "options": [
      "x1 \u2212x2 \u22120.5 = 0",
      "x1 + x2 + 0.5 = 0",
      "2x1 + x2 = 0",
      "x1 + x2 \u22120.5 = 0"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The boundary is where the perceptron score equals zero: x1 + x2 \u22120.5 = 0.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 2\nScholarship Application Screening\nA scholarship office builds a first-stage screening aid. The aid does not make the final\naward decision; it only flags applications that satisfy a simple rule for immediate review.\nEach application is represented by two binary features:\nx1 : academic score is above the cutoff,\nx2 : financial-need certificate is verified.\nThe office wants the system to flag an application when at least one of these two conditions\nis true. A perceptron with weights w1, w2, bias b, and decision rule\n\u02c6y =\n\n\n\n1,\nif w1x1 + w2x2 + b \u22650,\n0,\notherwise\nis tested for this screening rule.\n\nQuestion 10: Why can a single perceptron represent this screening rule?",
    "options": [
      "The positive and negative cases are linearly separable.",
      "The rule requires remembering earlier applications before deciding the next output.",
      "The rule has no decision boundary.",
      "The output changes randomly for the same input."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "OR is linearly separable because one straight line can separate (0, 0) from the three positive input patterns.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 3\nEquipment Handover Record Review\nAn engineering lab tracks two binary checks before handing over a portable measurement\nkit:\nx1 : battery pack has been returned,\nx2 : sensor module has been returned.\nFor audit purposes, the lab wants to flag a handover record when exactly one of the two\nitems has been returned. If neither item has been returned or both items have been returned,\nthe record is not flagged. The desired output table is:\nx1\nx2\ny\n0\n0\n0\n0\n1\n1\n1\n0\n1\n1\n1\n0\nThe lab initially tries to implement this rule with a single perceptron.\n\nQuestion 11: Which logical behavior does the handover rule represent?",
    "options": [
      "AND",
      "OR",
      "XOR",
      "NAND"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The output is 1 exactly when the two binary inputs are differ- ent, which is the XOR rule.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 3\nEquipment Handover Record Review\nAn engineering lab tracks two binary checks before handing over a portable measurement\nkit:\nx1 : battery pack has been returned,\nx2 : sensor module has been returned.\nFor audit purposes, the lab wants to flag a handover record when exactly one of the two\nitems has been returned. If neither item has been returned or both items have been returned,\nthe record is not flagged. The desired output table is:\nx1\nx2\ny\n0\n0\n0\n0\n1\n1\n1\n0\n1\n1\n1\n0\nThe lab initially tries to implement this rule with a single perceptron.\n\nQuestion 12: What output is assigned to the input pattern (1, 1)?",
    "options": [
      "y = 1, because one item has been returned",
      "y = 0, because exactly one item has not been returned",
      "y = 1, because both checks are complete",
      "y = 0, because both values are the same"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The rule flags only records with exactly one returned item. For (1, 1), both items have been returned, so y = 0.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 3\nEquipment Handover Record Review\nAn engineering lab tracks two binary checks before handing over a portable measurement\nkit:\nx1 : battery pack has been returned,\nx2 : sensor module has been returned.\nFor audit purposes, the lab wants to flag a handover record when exactly one of the two\nitems has been returned. If neither item has been returned or both items have been returned,\nthe record is not flagged. The desired output table is:\nx1\nx2\ny\n0\n0\n0\n0\n1\n1\n1\n0\n1\n1\n1\n0\nThe lab initially tries to implement this rule with a single perceptron.\n\nQuestion 13: Which geometric property prevents a single perceptron from representing this rule?",
    "options": [
      "The positive cases lie on opposite corners of the input square.",
      "The inputs are binary rather than real valued, so the rule cannot use a separator.",
      "The output has only two possible labels.",
      "The rule uses two input variables."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The positive cases (0, 1) and (1, 0) are diagonally opposite, so a single straight line cannot separate them from the two negative cases.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 3\nEquipment Handover Record Review\nAn engineering lab tracks two binary checks before handing over a portable measurement\nkit:\nx1 : battery pack has been returned,\nx2 : sensor module has been returned.\nFor audit purposes, the lab wants to flag a handover record when exactly one of the two\nitems has been returned. If neither item has been returned or both items have been returned,\nthe record is not flagged. The desired output table is:\nx1\nx2\ny\n0\n0\n0\n0\n1\n1\n1\n0\n1\n1\n1\n0\nThe lab initially tries to implement this rule with a single perceptron.\n\nQuestion 14: Which modified lab rule would be linearly separable?",
    "options": [
      "Flag exactly one returned item.",
      "Flag when the two item statuses are different.",
      "Flag only when both items have been returned.",
      "Flag when neither or both items have been returned."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Flagging only (1, 1) is the AND rule, which is linearly separa- ble.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 3\nEquipment Handover Record Review\nAn engineering lab tracks two binary checks before handing over a portable measurement\nkit:\nx1 : battery pack has been returned,\nx2 : sensor module has been returned.\nFor audit purposes, the lab wants to flag a handover record when exactly one of the two\nitems has been returned. If neither item has been returned or both items have been returned,\nthe record is not flagged. The desired output table is:\nx1\nx2\ny\n0\n0\n0\n0\n1\n1\n1\n0\n1\n1\n1\n0\nThe lab initially tries to implement this rule with a single perceptron.\n\nQuestion 15: What does linear separability mean in this setting?",
    "options": [
      "Every input must have label 1 before a straight boundary can be checked.",
      "A line can separate the 1-labeled and 0-labeled inputs.",
      "The perceptron must avoid using weights.",
      "The input values must be stored in a sequence."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Linear separability means that a line can place all positive examples on one side and all negative examples on the other side.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 4\nParcel Routing Decision Review\nA courier service trains a perceptron to classify parcels into \u201cexpress\u201d and \u201cstandard\u201d\nrouting. Each parcel is described by two numerical features:\nx1 : compactness score,\nx2 : priority-label score.\nThe label is y = 1 for express routing and y = \u22121 for standard routing. The perceptron has\nno bias term and uses the update rule\nw \u2190w + yx\nwhenever y(w\u22a4x) \u22640. The training samples are processed in the following order:\nParcel\nx1\nx2\ny\nP1\n2\n1\n1\nP2\n1\n2\n1\nP3\n\u22121\n\u22121\n\u22121\nTraining starts with w = (0, 0).\n\nQuestion 16: What is the weight vector after processing P1 once?",
    "options": [
      "w = (2, 1)",
      "w = (1, 2)",
      "w = (\u22121, \u22121)",
      "w = (0, 0)"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Initially w\u22a4x = 0, so y(w\u22a4x) = 0 and an update is made. The new vector is w = (0, 0) + 1(2, 1) = (2, 1).",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 4\nParcel Routing Decision Review\nA courier service trains a perceptron to classify parcels into \u201cexpress\u201d and \u201cstandard\u201d\nrouting. Each parcel is described by two numerical features:\nx1 : compactness score,\nx2 : priority-label score.\nThe label is y = 1 for express routing and y = \u22121 for standard routing. The perceptron has\nno bias term and uses the update rule\nw \u2190w + yx\nwhenever y(w\u22a4x) \u22640. The training samples are processed in the following order:\nParcel\nx1\nx2\ny\nP1\n2\n1\n1\nP2\n1\n2\n1\nP3\n\u22121\n\u22121\n\u22121\nTraining starts with w = (0, 0).\n\nQuestion 17: After the update from P1, what is w\u22a4x for P2?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "With w = (2, 1) and x = (1, 2), the score is 2(1) + 1(2) = 4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 4\nParcel Routing Decision Review\nA courier service trains a perceptron to classify parcels into \u201cexpress\u201d and \u201cstandard\u201d\nrouting. Each parcel is described by two numerical features:\nx1 : compactness score,\nx2 : priority-label score.\nThe label is y = 1 for express routing and y = \u22121 for standard routing. The perceptron has\nno bias term and uses the update rule\nw \u2190w + yx\nwhenever y(w\u22a4x) \u22640. The training samples are processed in the following order:\nParcel\nx1\nx2\ny\nP1\n2\n1\n1\nP2\n1\n2\n1\nP3\n\u22121\n\u22121\n\u22121\nTraining starts with w = (0, 0).\n\nQuestion 18: With w = (2, 1), is P3 correctly classified?",
    "options": [
      "No, because the raw score w\u22a4x is greater than zero.",
      "No, because y(w\u22a4x) < 0.",
      "Yes, because w\u22a4x = 0.",
      "Yes, because y(w\u22a4x) > 0."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "For P3 = (\u22121, \u22121), w\u22a4x = \u22123. Since y = \u22121, y(w\u22a4x) = 3 > 0, so it is correctly classified.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 4\nParcel Routing Decision Review\nA courier service trains a perceptron to classify parcels into \u201cexpress\u201d and \u201cstandard\u201d\nrouting. Each parcel is described by two numerical features:\nx1 : compactness score,\nx2 : priority-label score.\nThe label is y = 1 for express routing and y = \u22121 for standard routing. The perceptron has\nno bias term and uses the update rule\nw \u2190w + yx\nwhenever y(w\u22a4x) \u22640. The training samples are processed in the following order:\nParcel\nx1\nx2\ny\nP1\n2\n1\n1\nP2\n1\n2\n1\nP3\n\u22121\n\u22121\n\u22121\nTraining starts with w = (0, 0).\n\nQuestion 19: Which condition is needed for the perceptron convergence guarantee?",
    "options": [
      "Every feature must be binary.",
      "The data must be linearly separable.",
      "The learning rate must be zero throughout all training updates.",
      "All labels must be positive."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The perceptron convergence theorem applies when the training data is linearly separable.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w1-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 1,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week1.pdf",
    "questionText": "Case Study 4\nParcel Routing Decision Review\nA courier service trains a perceptron to classify parcels into \u201cexpress\u201d and \u201cstandard\u201d\nrouting. Each parcel is described by two numerical features:\nx1 : compactness score,\nx2 : priority-label score.\nThe label is y = 1 for express routing and y = \u22121 for standard routing. The perceptron has\nno bias term and uses the update rule\nw \u2190w + yx\nwhenever y(w\u22a4x) \u22640. The training samples are processed in the following order:\nParcel\nx1\nx2\ny\nP1\n2\n1\n1\nP2\n1\n2\n1\nP3\n\u22121\n\u22121\n\u22121\nTraining starts with w = (0, 0).\n\nQuestion 20: Which vector separates the three listed parcels?",
    "options": [
      "w = (\u22121, 1)",
      "w = (1, \u22121)",
      "w = (\u22121, \u22121)",
      "w = (1, 1)"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "With w = (1, 1), P1 and P2 have positive scores, while P3 has a negative score, matching the labels.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 1\nClinic Follow-up Priority Scoring\nA clinic uses a simple model to assign a follow-up priority score after remote consultation.\nThe model does not make a diagnosis; it only produces a probability-like score for staff review.\nEach patient record is represented by two normalized inputs:\nx1 : symptom persistence score,\nx2 : abnormal reading score.\nThe model computes\nz = 3x1 + 2x2 \u22122,\n\u02c6p = \u03c3(z) =\n1\n1 + e\u2212z .\nA record is sent for priority follow-up when \u02c6p \u22650.5. For the sigmoid function, \u03c3(0) = 0.5,\npositive z gives an output above 0.5, and negative z gives an output below 0.5.\n\nQuestion 1: Why is the sigmoid function suitable for this priority score?",
    "options": [
      "It maps a real-valued input to a value between 0 and 1.",
      "It removes the need to compute any weighted input value.",
      "It always gives a hard class label before thresholding.",
      "It forces both input features to have identical weights."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A sigmoid maps any real number to a smooth output in (0, 1), which can be used as a probability-like score.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 1\nClinic Follow-up Priority Scoring\nA clinic uses a simple model to assign a follow-up priority score after remote consultation.\nThe model does not make a diagnosis; it only produces a probability-like score for staff review.\nEach patient record is represented by two normalized inputs:\nx1 : symptom persistence score,\nx2 : abnormal reading score.\nThe model computes\nz = 3x1 + 2x2 \u22122,\n\u02c6p = \u03c3(z) =\n1\n1 + e\u2212z .\nA record is sent for priority follow-up when \u02c6p \u22650.5. For the sigmoid function, \u03c3(0) = 0.5,\npositive z gives an output above 0.5, and negative z gives an output below 0.5.\n\nQuestion 2: For x1 = 0.4 and x2 = 0.6, what is the value of z?",
    "options": [
      "0.2",
      "0.6",
      "0.4",
      "0.8"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "z = 3(0.4) + 2(0.6) \u22122 = 1.2 + 1.2 \u22122 = 0.4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 1\nClinic Follow-up Priority Scoring\nA clinic uses a simple model to assign a follow-up priority score after remote consultation.\nThe model does not make a diagnosis; it only produces a probability-like score for staff review.\nEach patient record is represented by two normalized inputs:\nx1 : symptom persistence score,\nx2 : abnormal reading score.\nThe model computes\nz = 3x1 + 2x2 \u22122,\n\u02c6p = \u03c3(z) =\n1\n1 + e\u2212z .\nA record is sent for priority follow-up when \u02c6p \u22650.5. For the sigmoid function, \u03c3(0) = 0.5,\npositive z gives an output above 0.5, and negative z gives an output below 0.5.\n\nQuestion 3: The rule \u02c6p \u22650.5 is equivalent to which condition?",
    "options": [
      "z < 0",
      "z \u22650",
      "z > 1",
      "z \u2264\u22121"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Since \u03c3(0) = 0.5 and sigmoid is increasing, \u02c6p \u22650.5 exactly when z \u22650.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 1\nClinic Follow-up Priority Scoring\nA clinic uses a simple model to assign a follow-up priority score after remote consultation.\nThe model does not make a diagnosis; it only produces a probability-like score for staff review.\nEach patient record is represented by two normalized inputs:\nx1 : symptom persistence score,\nx2 : abnormal reading score.\nThe model computes\nz = 3x1 + 2x2 \u22122,\n\u02c6p = \u03c3(z) =\n1\n1 + e\u2212z .\nA record is sent for priority follow-up when \u02c6p \u22650.5. For the sigmoid function, \u03c3(0) = 0.5,\npositive z gives an output above 0.5, and negative z gives an output below 0.5.\n\nQuestion 4: Which input is not sent for priority follow-up?",
    "options": [
      "x1 = 0.8, x2 = 0.1",
      "x1 = 0.2, x2 = 0.8",
      "x1 = 0.5, x2 = 0.4",
      "x1 = 0.1, x2 = 0.4"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "For x1 = 0.1, x2 = 0.4, z = 0.3 + 0.8 \u22122 = \u22120.9, so \u02c6p < 0.5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 1\nClinic Follow-up Priority Scoring\nA clinic uses a simple model to assign a follow-up priority score after remote consultation.\nThe model does not make a diagnosis; it only produces a probability-like score for staff review.\nEach patient record is represented by two normalized inputs:\nx1 : symptom persistence score,\nx2 : abnormal reading score.\nThe model computes\nz = 3x1 + 2x2 \u22122,\n\u02c6p = \u03c3(z) =\n1\n1 + e\u2212z .\nA record is sent for priority follow-up when \u02c6p \u22650.5. For the sigmoid function, \u03c3(0) = 0.5,\npositive z gives an output above 0.5, and negative z gives an output below 0.5.\n\nQuestion 5: If the clinic wants fewer records to satisfy \u02c6p \u22650.5, what should happen to the bias term \u22122?",
    "options": [
      "It should become more negative.",
      "It should be removed from the model entirely.",
      "It should be made equal to x1 + x2.",
      "It should be increased to make every score larger."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Making the bias more negative lowers z for the same inputs, so fewer records reach the decision threshold.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 2\nDelivery Time Prediction Review\nA logistics team trains a regression model to predict delivery delay in minutes. For four\nvalidation orders, the actual delay y and predicted delay \u02c6y are:\nOrder\ny\n\u02c6y\n1\n12\n10\n2\n20\n24\n3\n15\n13\n4\n18\n21\nThe team uses squared error\nL = (y \u2212\u02c6y)2,\nMSE = 1\nn\nn\nX\ni=1\n(yi \u2212\u02c6yi)2.\nFor gradient-based updates with respect to the prediction,\n\u2202L\n\u2202\u02c6y = 2(\u02c6y \u2212y).\n\nQuestion 6: What is the squared error for Order 2?",
    "options": [
      "4",
      "16",
      "9",
      "25"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "For Order 2, the error is 20 \u221224 = \u22124, so the squared error is 16.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 2\nDelivery Time Prediction Review\nA logistics team trains a regression model to predict delivery delay in minutes. For four\nvalidation orders, the actual delay y and predicted delay \u02c6y are:\nOrder\ny\n\u02c6y\n1\n12\n10\n2\n20\n24\n3\n15\n13\n4\n18\n21\nThe team uses squared error\nL = (y \u2212\u02c6y)2,\nMSE = 1\nn\nn\nX\ni=1\n(yi \u2212\u02c6yi)2.\nFor gradient-based updates with respect to the prediction,\n\u2202L\n\u2202\u02c6y = 2(\u02c6y \u2212y).\n\nQuestion 7: What is the mean squared error over the four orders?",
    "options": [
      "7.25",
      "8.00",
      "9.50",
      "8.25"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The squared errors are 4, 16, 4, 9. Their sum is 33, so the MSE is 33/4 = 8.25.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 2\nDelivery Time Prediction Review\nA logistics team trains a regression model to predict delivery delay in minutes. For four\nvalidation orders, the actual delay y and predicted delay \u02c6y are:\nOrder\ny\n\u02c6y\n1\n12\n10\n2\n20\n24\n3\n15\n13\n4\n18\n21\nThe team uses squared error\nL = (y \u2212\u02c6y)2,\nMSE = 1\nn\nn\nX\ni=1\n(yi \u2212\u02c6yi)2.\nFor gradient-based updates with respect to the prediction,\n\u2202L\n\u2202\u02c6y = 2(\u02c6y \u2212y).\n\nQuestion 8: Which order contributes the largest squared error?",
    "options": [
      "Order 1",
      "Order 3",
      "Order 2",
      "Order 4"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The largest squared error is 16, which occurs for Order 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 2\nDelivery Time Prediction Review\nA logistics team trains a regression model to predict delivery delay in minutes. For four\nvalidation orders, the actual delay y and predicted delay \u02c6y are:\nOrder\ny\n\u02c6y\n1\n12\n10\n2\n20\n24\n3\n15\n13\n4\n18\n21\nThe team uses squared error\nL = (y \u2212\u02c6y)2,\nMSE = 1\nn\nn\nX\ni=1\n(yi \u2212\u02c6yi)2.\nFor gradient-based updates with respect to the prediction,\n\u2202L\n\u2202\u02c6y = 2(\u02c6y \u2212y).\n\nQuestion 9: If y = 20 and \u02c6y = 24, what is \u2202L \u2202\u02c6y ?",
    "options": [
      "8",
      "\u22128",
      "4",
      "\u22124"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u2202L \u2202\u02c6y = 2(\u02c6y \u2212y) = 2(24 \u221220) = 8.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 2\nDelivery Time Prediction Review\nA logistics team trains a regression model to predict delivery delay in minutes. For four\nvalidation orders, the actual delay y and predicted delay \u02c6y are:\nOrder\ny\n\u02c6y\n1\n12\n10\n2\n20\n24\n3\n15\n13\n4\n18\n21\nThe team uses squared error\nL = (y \u2212\u02c6y)2,\nMSE = 1\nn\nn\nX\ni=1\n(yi \u2212\u02c6yi)2.\nFor gradient-based updates with respect to the prediction,\n\u2202L\n\u2202\u02c6y = 2(\u02c6y \u2212y).\n\nQuestion 10: A second model predicts 11, 21, 14, 19. Which model has lower MSE?",
    "options": [
      "The original model, because its MSE is 8.25.",
      "The second model, because its MSE is 1.00.",
      "Both models, because their errors are identical.",
      "Neither model, because MSE cannot be computed here."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The second model has squared errors 1, 1, 1, 1, so its MSE is 1.00.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 3\nMachine Energy Use Prediction\nA facilities team monitors configurable machines in a shared workshop where different\noperating choices lead to different electricity usage patterns. Before deploying a larger model,\nthe team studies one small feedforward network so that engineers can trace every intermediate\nvalue by hand. The system uses two real-valued inputs:\nx1 : duration score,\nx2 : load score.\nThe team uses a small feedforward network:\nh1 = \u03c3(x1 + x2 \u22121),\nh2 = \u03c3(2x1 \u2212x2),\n\u02c6y = \u03c3(3h1 + 2h2 \u22122).\nThe hidden layer transforms the original features before the final output is computed. This\nlets the team discuss the order of computation, the role of nonlinear hidden units, and why\nthe final sigmoid produces a bounded score rather than an unrestricted energy value.\n\nQuestion 11: Which quantities are computed first in the feedforward direction?",
    "options": [
      "The final loss value",
      "The parameter update",
      "The hidden units h1 and h2",
      "The target label chosen by the model"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "In a feedforward network, the input layer is transformed into hidden unit values before computing the output.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 3\nMachine Energy Use Prediction\nA facilities team monitors configurable machines in a shared workshop where different\noperating choices lead to different electricity usage patterns. Before deploying a larger model,\nthe team studies one small feedforward network so that engineers can trace every intermediate\nvalue by hand. The system uses two real-valued inputs:\nx1 : duration score,\nx2 : load score.\nThe team uses a small feedforward network:\nh1 = \u03c3(x1 + x2 \u22121),\nh2 = \u03c3(2x1 \u2212x2),\n\u02c6y = \u03c3(3h1 + 2h2 \u22122).\nThe hidden layer transforms the original features before the final output is computed. This\nlets the team discuss the order of computation, the role of nonlinear hidden units, and why\nthe final sigmoid produces a bounded score rather than an unrestricted energy value.\n\nQuestion 12: For x1 = 1 and x2 = 1, what is the input to the sigmoid in h1?",
    "options": [
      "1",
      "0",
      "2",
      "3"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The input to h1 is x1 + x2 \u22121 = 1 + 1 \u22121 = 1.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 3\nMachine Energy Use Prediction\nA facilities team monitors configurable machines in a shared workshop where different\noperating choices lead to different electricity usage patterns. Before deploying a larger model,\nthe team studies one small feedforward network so that engineers can trace every intermediate\nvalue by hand. The system uses two real-valued inputs:\nx1 : duration score,\nx2 : load score.\nThe team uses a small feedforward network:\nh1 = \u03c3(x1 + x2 \u22121),\nh2 = \u03c3(2x1 \u2212x2),\n\u02c6y = \u03c3(3h1 + 2h2 \u22122).\nThe hidden layer transforms the original features before the final output is computed. This\nlets the team discuss the order of computation, the role of nonlinear hidden units, and why\nthe final sigmoid produces a bounded score rather than an unrestricted energy value.\n\nQuestion 13: For x1 = 1 and x2 = 0, what is the input to the sigmoid in h2?",
    "options": [
      "\u22122",
      "\u22121",
      "1",
      "2"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The input to h2 is 2x1 \u2212x2 = 2(1) \u22120 = 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 3\nMachine Energy Use Prediction\nA facilities team monitors configurable machines in a shared workshop where different\noperating choices lead to different electricity usage patterns. Before deploying a larger model,\nthe team studies one small feedforward network so that engineers can trace every intermediate\nvalue by hand. The system uses two real-valued inputs:\nx1 : duration score,\nx2 : load score.\nThe team uses a small feedforward network:\nh1 = \u03c3(x1 + x2 \u22121),\nh2 = \u03c3(2x1 \u2212x2),\n\u02c6y = \u03c3(3h1 + 2h2 \u22122).\nThe hidden layer transforms the original features before the final output is computed. This\nlets the team discuss the order of computation, the role of nonlinear hidden units, and why\nthe final sigmoid produces a bounded score rather than an unrestricted energy value.\n\nQuestion 14: Why can sigmoid hidden units introduce nonlinearity?",
    "options": [
      "They copy inputs without changing any value.",
      "They apply a nonlinear function to weighted input combinations.",
      "They remove all weights from the network.",
      "They force the output to be exactly linear for all possible inputs."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A sigmoid is nonlinear, so applying it in hidden units lets the network represent nonlinear transformations.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 3\nMachine Energy Use Prediction\nA facilities team monitors configurable machines in a shared workshop where different\noperating choices lead to different electricity usage patterns. Before deploying a larger model,\nthe team studies one small feedforward network so that engineers can trace every intermediate\nvalue by hand. The system uses two real-valued inputs:\nx1 : duration score,\nx2 : load score.\nThe team uses a small feedforward network:\nh1 = \u03c3(x1 + x2 \u22121),\nh2 = \u03c3(2x1 \u2212x2),\n\u02c6y = \u03c3(3h1 + 2h2 \u22122).\nThe hidden layer transforms the original features before the final output is computed. This\nlets the team discuss the order of computation, the role of nonlinear hidden units, and why\nthe final sigmoid produces a bounded score rather than an unrestricted energy value.\n\nQuestion 15: What is the final output range of \u02c6y?",
    "options": [
      "Any real number from \u2212\u221eto \u221e",
      "Only the two values \u22121 and 1",
      "A value between 0 and 1",
      "A value greater than 1 for all inputs"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The final output applies a sigmoid, so \u02c6y lies in (0, 1).",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 4\nWarehouse Routing Time Analysis\nA warehouse studies how a single routing coefficient affects the predicted travel time of\na cart inside a storage aisle. The operations team first analyzes one clean training example\nso that the direction of a gradient descent step is easy to verify before the method is used\non many routes. The one-parameter model is\n\u02c6y = wx.\nFor one training example, x = 3 and y = 15. The squared error loss is\nL(w) = (15 \u22123w)2.\nThe team studies this loss before using gradient descent on a larger training set. In this\nsimplified setting, the parameter w controls how strongly the route length x affects the\npredicted time, and the squared loss measures how far the prediction is from the observed\nrouting time.\n\nQuestion 16: What is L(w) when w = 4?",
    "options": [
      "6",
      "4",
      "12",
      "9"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "When w = 4, \u02c6y = 3(4) = 12, so L = (15 \u221212)2 = 9.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 4\nWarehouse Routing Time Analysis\nA warehouse studies how a single routing coefficient affects the predicted travel time of\na cart inside a storage aisle. The operations team first analyzes one clean training example\nso that the direction of a gradient descent step is easy to verify before the method is used\non many routes. The one-parameter model is\n\u02c6y = wx.\nFor one training example, x = 3 and y = 15. The squared error loss is\nL(w) = (15 \u22123w)2.\nThe team studies this loss before using gradient descent on a larger training set. In this\nsimplified setting, the parameter w controls how strongly the route length x affects the\npredicted time, and the squared loss measures how far the prediction is from the observed\nrouting time.\n\nQuestion 17: Which value of w gives zero loss?",
    "options": [
      "w = 4",
      "w = 5",
      "w = 6",
      "w = 3"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Zero loss requires 15 \u22123w = 0, so w = 5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 4\nWarehouse Routing Time Analysis\nA warehouse studies how a single routing coefficient affects the predicted travel time of\na cart inside a storage aisle. The operations team first analyzes one clean training example\nso that the direction of a gradient descent step is easy to verify before the method is used\non many routes. The one-parameter model is\n\u02c6y = wx.\nFor one training example, x = 3 and y = 15. The squared error loss is\nL(w) = (15 \u22123w)2.\nThe team studies this loss before using gradient descent on a larger training set. In this\nsimplified setting, the parameter w controls how strongly the route length x affects the\npredicted time, and the squared loss measures how far the prediction is from the observed\nrouting time.\n\nQuestion 18: What is dL dw at w = 4?",
    "options": [
      "\u221218",
      "\u22126",
      "18.0",
      "6"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "L = (15 \u22123w)2, so dL dw = \u22126(15 \u22123w). At w = 4, this is \u221218.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 4\nWarehouse Routing Time Analysis\nA warehouse studies how a single routing coefficient affects the predicted travel time of\na cart inside a storage aisle. The operations team first analyzes one clean training example\nso that the direction of a gradient descent step is easy to verify before the method is used\non many routes. The one-parameter model is\n\u02c6y = wx.\nFor one training example, x = 3 and y = 15. The squared error loss is\nL(w) = (15 \u22123w)2.\nThe team studies this loss before using gradient descent on a larger training set. In this\nsimplified setting, the parameter w controls how strongly the route length x affects the\npredicted time, and the squared loss measures how far the prediction is from the observed\nrouting time.\n\nQuestion 19: If gradient descent uses w \u2190w \u2212\u03b7 dL dw with \u03b7 = 0.1, what is the next value from w = 4?",
    "options": [
      "3.2",
      "4.6",
      "5.8",
      "2.2"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The update is w = 4 \u22120.1(\u221218) = 5.8.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w2-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 2,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week2.pdf",
    "questionText": "Case Study 4\nWarehouse Routing Time Analysis\nA warehouse studies how a single routing coefficient affects the predicted travel time of\na cart inside a storage aisle. The operations team first analyzes one clean training example\nso that the direction of a gradient descent step is easy to verify before the method is used\non many routes. The one-parameter model is\n\u02c6y = wx.\nFor one training example, x = 3 and y = 15. The squared error loss is\nL(w) = (15 \u22123w)2.\nThe team studies this loss before using gradient descent on a larger training set. In this\nsimplified setting, the parameter w controls how strongly the route length x affects the\npredicted time, and the squared loss measures how far the prediction is from the observed\nrouting time.\n\nQuestion 20: What does the gradient indicate in this example?",
    "options": [
      "It gives the class label directly without a model.",
      "It removes the input feature from the prediction.",
      "It makes the squared error impossible to compute.",
      "It shows how the loss changes as w changes."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The gradient describes the local rate of change of the loss with respect to the parameter.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 1\nTutoring Session Readiness Score\nAn online tutoring platform uses a small feedforward network to estimate a session-\nreadiness score before assigning a tutor. The model uses two input features:\nx1 : student preparation score,\nx2 : topic difficulty score.\nFor one session, x1 = 2 and x2 = 1. The network computes hidden quantities first and then\ncombines them:\nz1 = 2x1 + x2,\nz2 = x1 \u2212x2 + 1,\n\u02c6y = z1 + 2z2.\nThe computation is feedforward: inputs are used to compute z1, z2, and these hidden quan-\ntities are then used to compute \u02c6y.\n\nQuestion 1: What is the value of z1 for this session?",
    "options": [
      "6",
      "5",
      "4",
      "3"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "z1 = 2x1 + x2 = 2(2) + 1 = 5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 1\nTutoring Session Readiness Score\nAn online tutoring platform uses a small feedforward network to estimate a session-\nreadiness score before assigning a tutor. The model uses two input features:\nx1 : student preparation score,\nx2 : topic difficulty score.\nFor one session, x1 = 2 and x2 = 1. The network computes hidden quantities first and then\ncombines them:\nz1 = 2x1 + x2,\nz2 = x1 \u2212x2 + 1,\n\u02c6y = z1 + 2z2.\nThe computation is feedforward: inputs are used to compute z1, z2, and these hidden quan-\ntities are then used to compute \u02c6y.\n\nQuestion 2: What is the value of z2?",
    "options": [
      "0",
      "1",
      "3",
      "2"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "z2 = x1 \u2212x2 + 1 = 2 \u22121 + 1 = 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 1\nTutoring Session Readiness Score\nAn online tutoring platform uses a small feedforward network to estimate a session-\nreadiness score before assigning a tutor. The model uses two input features:\nx1 : student preparation score,\nx2 : topic difficulty score.\nFor one session, x1 = 2 and x2 = 1. The network computes hidden quantities first and then\ncombines them:\nz1 = 2x1 + x2,\nz2 = x1 \u2212x2 + 1,\n\u02c6y = z1 + 2z2.\nThe computation is feedforward: inputs are used to compute z1, z2, and these hidden quan-\ntities are then used to compute \u02c6y.\n\nQuestion 3: What is the final value of \u02c6y?",
    "options": [
      "9",
      "7",
      "8",
      "6"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u02c6y = z1 + 2z2 = 5 + 2(2) = 9.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 1\nTutoring Session Readiness Score\nAn online tutoring platform uses a small feedforward network to estimate a session-\nreadiness score before assigning a tutor. The model uses two input features:\nx1 : student preparation score,\nx2 : topic difficulty score.\nFor one session, x1 = 2 and x2 = 1. The network computes hidden quantities first and then\ncombines them:\nz1 = 2x1 + x2,\nz2 = x1 \u2212x2 + 1,\n\u02c6y = z1 + 2z2.\nThe computation is feedforward: inputs are used to compute z1, z2, and these hidden quan-\ntities are then used to compute \u02c6y.\n\nQuestion 4: Which computation must be completed before \u02c6y is evaluated?",
    "options": [
      "The loss must be minimized over all stored tutoring sessions.",
      "The target value must be changed by the model before scoring.",
      "The hidden quantities z1 and z2 must be computed.",
      "The learning rate must be set to zero."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The output depends directly on z1 and z2, so they must be computed first.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 1\nTutoring Session Readiness Score\nAn online tutoring platform uses a small feedforward network to estimate a session-\nreadiness score before assigning a tutor. The model uses two input features:\nx1 : student preparation score,\nx2 : topic difficulty score.\nFor one session, x1 = 2 and x2 = 1. The network computes hidden quantities first and then\ncombines them:\nz1 = 2x1 + x2,\nz2 = x1 \u2212x2 + 1,\n\u02c6y = z1 + 2z2.\nThe computation is feedforward: inputs are used to compute z1, z2, and these hidden quan-\ntities are then used to compute \u02c6y.\n\nQuestion 5: What makes this a feedforward computation?",
    "options": [
      "The output is repeatedly fed back as a new input.",
      "Information flows from inputs to hidden quantities to output.",
      "The target label is used before the input features.",
      "The network stores a separate state for each previous session."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "In a feedforward network, values are computed in one direction from inputs through intermediate units to the output.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 2\nInventory Forecast Calculation Review\nA store wants to understand how a change in one product-level input can affect a final\nforecasting loss. Before training the full inventory model, the analytics team writes a small\ncomputational graph on a whiteboard and follows both the forward values and the local\nderivatives. For one product, the graph is\nu = 2x,\nv = u + 3,\nL = v2.\nFor the current product, x = 1. The team computes local derivatives using the chain rule.\nHere, x is a simplified demand signal, u and v are intermediate quantities, and L is the scalar\nloss that would be reduced during training.\n\nQuestion 6: What is the value of u?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Since u = 2x and x = 1, u = 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 2\nInventory Forecast Calculation Review\nA store wants to understand how a change in one product-level input can affect a final\nforecasting loss. Before training the full inventory model, the analytics team writes a small\ncomputational graph on a whiteboard and follows both the forward values and the local\nderivatives. For one product, the graph is\nu = 2x,\nv = u + 3,\nL = v2.\nFor the current product, x = 1. The team computes local derivatives using the chain rule.\nHere, x is a simplified demand signal, u and v are intermediate quantities, and L is the scalar\nloss that would be reduced during training.\n\nQuestion 7: What is the value of v?",
    "options": [
      "3",
      "4",
      "6",
      "5"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "v = u + 3 = 2 + 3 = 5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 2\nInventory Forecast Calculation Review\nA store wants to understand how a change in one product-level input can affect a final\nforecasting loss. Before training the full inventory model, the analytics team writes a small\ncomputational graph on a whiteboard and follows both the forward values and the local\nderivatives. For one product, the graph is\nu = 2x,\nv = u + 3,\nL = v2.\nFor the current product, x = 1. The team computes local derivatives using the chain rule.\nHere, x is a simplified demand signal, u and v are intermediate quantities, and L is the scalar\nloss that would be reduced during training.\n\nQuestion 8: What is the loss L?",
    "options": [
      "20",
      "15",
      "25",
      "10"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "L = v2 = 52 = 25.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 2\nInventory Forecast Calculation Review\nA store wants to understand how a change in one product-level input can affect a final\nforecasting loss. Before training the full inventory model, the analytics team writes a small\ncomputational graph on a whiteboard and follows both the forward values and the local\nderivatives. For one product, the graph is\nu = 2x,\nv = u + 3,\nL = v2.\nFor the current product, x = 1. The team computes local derivatives using the chain rule.\nHere, x is a simplified demand signal, u and v are intermediate quantities, and L is the scalar\nloss that would be reduced during training.\n\nQuestion 9: What is \u2202L \u2202v at v = 5?",
    "options": [
      "5",
      "10",
      "25",
      "2"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Since L = v2, \u2202L \u2202v = 2v = 10.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 2\nInventory Forecast Calculation Review\nA store wants to understand how a change in one product-level input can affect a final\nforecasting loss. Before training the full inventory model, the analytics team writes a small\ncomputational graph on a whiteboard and follows both the forward values and the local\nderivatives. For one product, the graph is\nu = 2x,\nv = u + 3,\nL = v2.\nFor the current product, x = 1. The team computes local derivatives using the chain rule.\nHere, x is a simplified demand signal, u and v are intermediate quantities, and L is the scalar\nloss that would be reduced during training.\n\nQuestion 10: What is \u2202L \u2202x?",
    "options": [
      "10",
      "5",
      "40",
      "20"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "By the chain rule, \u2202L \u2202x = \u2202L \u2202v \u2202v \u2202u \u2202u \u2202x = 10(1)(2) = 20.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 3\nSensor Calibration Error Analysis\nA lab calibrates a sensor whose raw reading must be converted into a corrected mea-\nsurement. To check the backpropagation calculations before using many sensor logs, the\nengineers use a one-hidden-unit model and one training example. For this example,\nx = 2,\ny = 5.\nThe model is\nh = w1x + b,\n\u02c6y = w2h,\nwith w1 = 1, b = 0, w2 = 2. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nBackpropagation computes gradients from the loss back through the output and hidden\ncomputations. The goal is not to build a production sensor model from one example, but to\nverify how the prediction error is assigned to w2, then passed backward through h to w1.\n\nQuestion 11: What is the hidden value h?",
    "options": [
      "1",
      "4",
      "2",
      "5"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "h = w1x + b = 1(2) + 0 = 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 3\nSensor Calibration Error Analysis\nA lab calibrates a sensor whose raw reading must be converted into a corrected mea-\nsurement. To check the backpropagation calculations before using many sensor logs, the\nengineers use a one-hidden-unit model and one training example. For this example,\nx = 2,\ny = 5.\nThe model is\nh = w1x + b,\n\u02c6y = w2h,\nwith w1 = 1, b = 0, w2 = 2. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nBackpropagation computes gradients from the loss back through the output and hidden\ncomputations. The goal is not to build a production sensor model from one example, but to\nverify how the prediction error is assigned to w2, then passed backward through h to w1.\n\nQuestion 12: What is the prediction \u02c6y?",
    "options": [
      "3",
      "5",
      "2",
      "4"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u02c6y = w2h = 2(2) = 4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 3\nSensor Calibration Error Analysis\nA lab calibrates a sensor whose raw reading must be converted into a corrected mea-\nsurement. To check the backpropagation calculations before using many sensor logs, the\nengineers use a one-hidden-unit model and one training example. For this example,\nx = 2,\ny = 5.\nThe model is\nh = w1x + b,\n\u02c6y = w2h,\nwith w1 = 1, b = 0, w2 = 2. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nBackpropagation computes gradients from the loss back through the output and hidden\ncomputations. The goal is not to build a production sensor model from one example, but to\nverify how the prediction error is assigned to w2, then passed backward through h to w1.\n\nQuestion 13: What is \u2202L \u2202\u02c6y ?",
    "options": [
      "\u22121",
      "1",
      "\u22122",
      "2"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u2202L \u2202\u02c6y = \u02c6y \u2212y = 4 \u22125 = \u22121.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 3\nSensor Calibration Error Analysis\nA lab calibrates a sensor whose raw reading must be converted into a corrected mea-\nsurement. To check the backpropagation calculations before using many sensor logs, the\nengineers use a one-hidden-unit model and one training example. For this example,\nx = 2,\ny = 5.\nThe model is\nh = w1x + b,\n\u02c6y = w2h,\nwith w1 = 1, b = 0, w2 = 2. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nBackpropagation computes gradients from the loss back through the output and hidden\ncomputations. The goal is not to build a production sensor model from one example, but to\nverify how the prediction error is assigned to w2, then passed backward through h to w1.\n\nQuestion 14: What is \u2202L \u2202w2?",
    "options": [
      "\u22121",
      "\u22122",
      "2",
      "1"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Since \u02c6y = w2h, \u2202L \u2202w2 = \u2202L \u2202\u02c6y h = (\u22121)(2) = \u22122.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 3\nSensor Calibration Error Analysis\nA lab calibrates a sensor whose raw reading must be converted into a corrected mea-\nsurement. To check the backpropagation calculations before using many sensor logs, the\nengineers use a one-hidden-unit model and one training example. For this example,\nx = 2,\ny = 5.\nThe model is\nh = w1x + b,\n\u02c6y = w2h,\nwith w1 = 1, b = 0, w2 = 2. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nBackpropagation computes gradients from the loss back through the output and hidden\ncomputations. The goal is not to build a production sensor model from one example, but to\nverify how the prediction error is assigned to w2, then passed backward through h to w1.\n\nQuestion 15: What is \u2202L \u2202w1?",
    "options": [
      "\u22121",
      "1",
      "\u22124",
      "4"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u2202L \u2202h = (\u22121)w2 = \u22122, and \u2202h \u2202w1 = x = 2, so \u2202L \u2202w1 = \u22124.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 4\nCourse Recommendation Score Update\nA course platform tracks whether a learner is likely to engage with a recommended\nmodule. For an internal training exercise, the team uses a simple linear prediction model so\nthat each gradient and parameter update can be inspected. The model predicts a learner\u2019s\ninterest score as\n\u02c6y = w1x1 + w2x2 + b.\nFor one learner,\nx1 = 1,\nx2 = 2,\ny = 6.\nInitially, w1 = 1, w2 = 1, b = 0. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nThe learning rate is \u03b7 = 0.1, and parameters are updated using\nw \u2190w \u2212\u03b7 \u2202L\n\u2202w.\nThe two inputs summarize recent activity and topic match, while the bias accounts for a\nbaseline interest level. The questions focus on how one observed error changes the weights\nand bias after a gradient descent update.\n\nQuestion 16: What is the initial prediction \u02c6y?",
    "options": [
      "4",
      "3",
      "5",
      "2"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u02c6y = 1(1) + 1(2) + 0 = 3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 4\nCourse Recommendation Score Update\nA course platform tracks whether a learner is likely to engage with a recommended\nmodule. For an internal training exercise, the team uses a simple linear prediction model so\nthat each gradient and parameter update can be inspected. The model predicts a learner\u2019s\ninterest score as\n\u02c6y = w1x1 + w2x2 + b.\nFor one learner,\nx1 = 1,\nx2 = 2,\ny = 6.\nInitially, w1 = 1, w2 = 1, b = 0. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nThe learning rate is \u03b7 = 0.1, and parameters are updated using\nw \u2190w \u2212\u03b7 \u2202L\n\u2202w.\nThe two inputs summarize recent activity and topic match, while the bias accounts for a\nbaseline interest level. The questions focus on how one observed error changes the weights\nand bias after a gradient descent update.\n\nQuestion 17: What is \u2202L \u2202\u02c6y ?",
    "options": [
      "\u22123",
      "3",
      "\u22126",
      "6"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u2202L \u2202\u02c6y = \u02c6y \u2212y = 3 \u22126 = \u22123.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 4\nCourse Recommendation Score Update\nA course platform tracks whether a learner is likely to engage with a recommended\nmodule. For an internal training exercise, the team uses a simple linear prediction model so\nthat each gradient and parameter update can be inspected. The model predicts a learner\u2019s\ninterest score as\n\u02c6y = w1x1 + w2x2 + b.\nFor one learner,\nx1 = 1,\nx2 = 2,\ny = 6.\nInitially, w1 = 1, w2 = 1, b = 0. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nThe learning rate is \u03b7 = 0.1, and parameters are updated using\nw \u2190w \u2212\u03b7 \u2202L\n\u2202w.\nThe two inputs summarize recent activity and topic match, while the bias accounts for a\nbaseline interest level. The questions focus on how one observed error changes the weights\nand bias after a gradient descent update.\n\nQuestion 18: What is \u2202L \u2202w2?",
    "options": [
      "3",
      "\u22123",
      "6",
      "\u22126"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u2202L \u2202w2 = (\u02c6y \u2212y)x2 = (\u22123)(2) = \u22126.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 4\nCourse Recommendation Score Update\nA course platform tracks whether a learner is likely to engage with a recommended\nmodule. For an internal training exercise, the team uses a simple linear prediction model so\nthat each gradient and parameter update can be inspected. The model predicts a learner\u2019s\ninterest score as\n\u02c6y = w1x1 + w2x2 + b.\nFor one learner,\nx1 = 1,\nx2 = 2,\ny = 6.\nInitially, w1 = 1, w2 = 1, b = 0. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nThe learning rate is \u03b7 = 0.1, and parameters are updated using\nw \u2190w \u2212\u03b7 \u2202L\n\u2202w.\nThe two inputs summarize recent activity and topic match, while the bias accounts for a\nbaseline interest level. The questions focus on how one observed error changes the weights\nand bias after a gradient descent update.\n\nQuestion 19: What is the updated value of w1?",
    "options": [
      "0.7",
      "1.6",
      "1.3",
      "0.4"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u2202L \u2202w1 = (\u22123)(1) = \u22123, so w1 = 1 \u22120.1(\u22123) = 1.3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w3-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 3,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week3.pdf",
    "questionText": "Case Study 4\nCourse Recommendation Score Update\nA course platform tracks whether a learner is likely to engage with a recommended\nmodule. For an internal training exercise, the team uses a simple linear prediction model so\nthat each gradient and parameter update can be inspected. The model predicts a learner\u2019s\ninterest score as\n\u02c6y = w1x1 + w2x2 + b.\nFor one learner,\nx1 = 1,\nx2 = 2,\ny = 6.\nInitially, w1 = 1, w2 = 1, b = 0. The loss is\nL = 1\n2(\u02c6y \u2212y)2.\nThe learning rate is \u03b7 = 0.1, and parameters are updated using\nw \u2190w \u2212\u03b7 \u2202L\n\u2202w.\nThe two inputs summarize recent activity and topic match, while the bias accounts for a\nbaseline interest level. The questions focus on how one observed error changes the weights\nand bias after a gradient descent update.\n\nQuestion 20: What is the updated value of b?",
    "options": [
      "0.3",
      "\u22120.3",
      "0.6",
      "\u22120.6"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u2202L \u2202b = \u22123, so b = 0 \u22120.1(\u22123) = 0.3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 1\nDelivery Delay Parameter Tuning\nA logistics team is tuning a simple delay model used to estimate whether a shipment\nroute is running slower than expected. To make the first gradient descent step auditable,\nthe team reduces the training exercise to one parameter w, where smaller loss means the\nparameter is closer to the best delay setting. For one training example, the loss as a function\nof parameter w is\nL(w) = (w \u22124)2.\nThe team uses gradient descent:\nwt+1 = wt \u2212\u03b7 dL\ndw.\nAt the current step, wt = 1 and \u03b7 = 0.1. The team wants to know not only the next numerical\nvalue of w, but also why the sign of the gradient determines the direction of movement.\n\nQuestion 1: What is dL dw at w = 1?",
    "options": [
      "6",
      "\u22123",
      "3",
      "\u22126"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "dL dw = 2(w \u22124). At w = 1, the gradient is \u22126.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 1\nDelivery Delay Parameter Tuning\nA logistics team is tuning a simple delay model used to estimate whether a shipment\nroute is running slower than expected. To make the first gradient descent step auditable,\nthe team reduces the training exercise to one parameter w, where smaller loss means the\nparameter is closer to the best delay setting. For one training example, the loss as a function\nof parameter w is\nL(w) = (w \u22124)2.\nThe team uses gradient descent:\nwt+1 = wt \u2212\u03b7 dL\ndw.\nAt the current step, wt = 1 and \u03b7 = 0.1. The team wants to know not only the next numerical\nvalue of w, but also why the sign of the gradient determines the direction of movement.\n\nQuestion 2: What is the next value of w?",
    "options": [
      "1.3",
      "1.6",
      "0.4",
      "2.0"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "wt+1 = 1 \u22120.1(\u22126) = 1.6.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 1\nDelivery Delay Parameter Tuning\nA logistics team is tuning a simple delay model used to estimate whether a shipment\nroute is running slower than expected. To make the first gradient descent step auditable,\nthe team reduces the training exercise to one parameter w, where smaller loss means the\nparameter is closer to the best delay setting. For one training example, the loss as a function\nof parameter w is\nL(w) = (w \u22124)2.\nThe team uses gradient descent:\nwt+1 = wt \u2212\u03b7 dL\ndw.\nAt the current step, wt = 1 and \u03b7 = 0.1. The team wants to know not only the next numerical\nvalue of w, but also why the sign of the gradient determines the direction of movement.\n\nQuestion 3: Why does w increase in this update?",
    "options": [
      "The learning rate is negative.",
      "The loss is already zero.",
      "The gradient at w = 1 is negative.",
      "The update ignores the derivative."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Gradient descent subtracts the gradient. Subtracting a nega- tive value increases w.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 1\nDelivery Delay Parameter Tuning\nA logistics team is tuning a simple delay model used to estimate whether a shipment\nroute is running slower than expected. To make the first gradient descent step auditable,\nthe team reduces the training exercise to one parameter w, where smaller loss means the\nparameter is closer to the best delay setting. For one training example, the loss as a function\nof parameter w is\nL(w) = (w \u22124)2.\nThe team uses gradient descent:\nwt+1 = wt \u2212\u03b7 dL\ndw.\nAt the current step, wt = 1 and \u03b7 = 0.1. The team wants to know not only the next numerical\nvalue of w, but also why the sign of the gradient determines the direction of movement.\n\nQuestion 4: Which value of w minimizes this loss?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "L(w) = (w \u22124)2 is minimized when w = 4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 1\nDelivery Delay Parameter Tuning\nA logistics team is tuning a simple delay model used to estimate whether a shipment\nroute is running slower than expected. To make the first gradient descent step auditable,\nthe team reduces the training exercise to one parameter w, where smaller loss means the\nparameter is closer to the best delay setting. For one training example, the loss as a function\nof parameter w is\nL(w) = (w \u22124)2.\nThe team uses gradient descent:\nwt+1 = wt \u2212\u03b7 dL\ndw.\nAt the current step, wt = 1 and \u03b7 = 0.1. The team wants to know not only the next numerical\nvalue of w, but also why the sign of the gradient determines the direction of movement.\n\nQuestion 5: What is the role of the learning rate \u03b7?",
    "options": [
      "It controls the update step size.",
      "It stores the final target value.",
      "It removes the need for a gradient.",
      "It makes every loss value equal."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The learning rate scales how far the parameter moves in the negative gradient direction.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 2\nEnergy Forecast Training Schedule\nA campus energy group trains a neural network to forecast short-term electricity demand\nfor academic buildings. The full dataset is small enough for classroom discussion, but the\nteam still wants to compare the update behavior of batch, stochastic, and mini-batch gradient\ndescent. It has 12 training records, and in one experiment the mini-batch size is 3. One\nepoch means that all 12 records have been used once. The group records the gradient from\neach mini-batch so it can reason about the tradeoff between noisy single-record updates and\nmore expensive full-batch updates.\n\nQuestion 6: How many mini-batches are processed in one epoch?",
    "options": [
      "3",
      "4",
      "6",
      "12"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "With 12 records and mini-batches of size 3, the number of mini-batches is 12/3 = 4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 2\nEnergy Forecast Training Schedule\nA campus energy group trains a neural network to forecast short-term electricity demand\nfor academic buildings. The full dataset is small enough for classroom discussion, but the\nteam still wants to compare the update behavior of batch, stochastic, and mini-batch gradient\ndescent. It has 12 training records, and in one experiment the mini-batch size is 3. One\nepoch means that all 12 records have been used once. The group records the gradient from\neach mini-batch so it can reason about the tradeoff between noisy single-record updates and\nmore expensive full-batch updates.\n\nQuestion 7: Which method uses all 12 records for each parameter update?",
    "options": [
      "Stochastic gradient descent",
      "Mini-batch gradient descent",
      "Batch gradient descent",
      "Momentum-only update"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Batch gradient descent computes each update using the full training set.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 2\nEnergy Forecast Training Schedule\nA campus energy group trains a neural network to forecast short-term electricity demand\nfor academic buildings. The full dataset is small enough for classroom discussion, but the\nteam still wants to compare the update behavior of batch, stochastic, and mini-batch gradient\ndescent. It has 12 training records, and in one experiment the mini-batch size is 3. One\nepoch means that all 12 records have been used once. The group records the gradient from\neach mini-batch so it can reason about the tradeoff between noisy single-record updates and\nmore expensive full-batch updates.\n\nQuestion 8: Which method uses one record per parameter update?",
    "options": [
      "Batch gradient descent",
      "Adam without gradients or single-example updates",
      "Full-batch averaging",
      "Stochastic gradient descent"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Stochastic gradient descent updates parameters using one ex- ample at a time.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 2\nEnergy Forecast Training Schedule\nA campus energy group trains a neural network to forecast short-term electricity demand\nfor academic buildings. The full dataset is small enough for classroom discussion, but the\nteam still wants to compare the update behavior of batch, stochastic, and mini-batch gradient\ndescent. It has 12 training records, and in one experiment the mini-batch size is 3. One\nepoch means that all 12 records have been used once. The group records the gradient from\neach mini-batch so it can reason about the tradeoff between noisy single-record updates and\nmore expensive full-batch updates.\n\nQuestion 9: If the mini-batch gradients for four batches are 2, 4, 6, 8, what is their average?",
    "options": [
      "5",
      "4",
      "6",
      "8"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The average is (2 + 4 + 6 + 8)/4 = 5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 2\nEnergy Forecast Training Schedule\nA campus energy group trains a neural network to forecast short-term electricity demand\nfor academic buildings. The full dataset is small enough for classroom discussion, but the\nteam still wants to compare the update behavior of batch, stochastic, and mini-batch gradient\ndescent. It has 12 training records, and in one experiment the mini-batch size is 3. One\nepoch means that all 12 records have been used once. The group records the gradient from\neach mini-batch so it can reason about the tradeoff between noisy single-record updates and\nmore expensive full-batch updates.\n\nQuestion 10: Why might mini-batch gradient descent be preferred in practice?",
    "options": [
      "It never uses gradients.",
      "It balances noisy updates and computational efficiency.",
      "It requires the loss to be exactly zero before every mini-batch update.",
      "It updates only after training is complete."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Mini-batches often provide a practical tradeoff between noisy stochastic updates and expensive full-batch updates.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 3\nQueue Prediction Parameter Update\nA service desk predicts queue length so it can decide when to open additional support\ncounters. During training, successive gradients often point in similar directions but vary in\nmagnitude from one mini-batch to the next. To smooth the parameter movement, the team\ntrains a model using momentum. The update is\nvt = \u03b2vt\u22121 + \u03b7gt,\nwt = wt\u22121 \u2212vt.\nAt the current step, vt\u22121 = 0.5, \u03b2 = 0.8, \u03b7 = 0.1, and the gradient is gt = 3. The previous\nparameter is wt\u22121 = 5.\nHere, vt stores a running update direction, so the current step\ndepends on both the new gradient and part of the previous movement.\n\nQuestion 11: What is the new velocity vt?",
    "options": [
      "0.5",
      "0.6",
      "0.7",
      "0.8"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "vt = 0.8(0.5) + 0.1(3) = 0.4 + 0.3 = 0.7.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 3\nQueue Prediction Parameter Update\nA service desk predicts queue length so it can decide when to open additional support\ncounters. During training, successive gradients often point in similar directions but vary in\nmagnitude from one mini-batch to the next. To smooth the parameter movement, the team\ntrains a model using momentum. The update is\nvt = \u03b2vt\u22121 + \u03b7gt,\nwt = wt\u22121 \u2212vt.\nAt the current step, vt\u22121 = 0.5, \u03b2 = 0.8, \u03b7 = 0.1, and the gradient is gt = 3. The previous\nparameter is wt\u22121 = 5.\nHere, vt stores a running update direction, so the current step\ndepends on both the new gradient and part of the previous movement.\n\nQuestion 12: What is the updated parameter wt?",
    "options": [
      "4.3",
      "5.7",
      "4.7",
      "5.3"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "wt = wt\u22121 \u2212vt = 5 \u22120.7 = 4.3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 3\nQueue Prediction Parameter Update\nA service desk predicts queue length so it can decide when to open additional support\ncounters. During training, successive gradients often point in similar directions but vary in\nmagnitude from one mini-batch to the next. To smooth the parameter movement, the team\ntrains a model using momentum. The update is\nvt = \u03b2vt\u22121 + \u03b7gt,\nwt = wt\u22121 \u2212vt.\nAt the current step, vt\u22121 = 0.5, \u03b2 = 0.8, \u03b7 = 0.1, and the gradient is gt = 3. The previous\nparameter is wt\u22121 = 5.\nHere, vt stores a running update direction, so the current step\ndepends on both the new gradient and part of the previous movement.\n\nQuestion 13: What does the momentum term \u03b2vt\u22121 represent?",
    "options": [
      "It removes all history from the update and uses only the current gradient.",
      "It sets the learning rate to zero for every future update.",
      "It replaces the loss function.",
      "It carries part of the previous update direction."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Momentum keeps a decayed contribution from the previous velocity.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 3\nQueue Prediction Parameter Update\nA service desk predicts queue length so it can decide when to open additional support\ncounters. During training, successive gradients often point in similar directions but vary in\nmagnitude from one mini-batch to the next. To smooth the parameter movement, the team\ntrains a model using momentum. The update is\nvt = \u03b2vt\u22121 + \u03b7gt,\nwt = wt\u22121 \u2212vt.\nAt the current step, vt\u22121 = 0.5, \u03b2 = 0.8, \u03b7 = 0.1, and the gradient is gt = 3. The previous\nparameter is wt\u22121 = 5.\nHere, vt stores a running update direction, so the current step\ndepends on both the new gradient and part of the previous movement.\n\nQuestion 14: If \u03b2 = 0, what would vt be for the same gradient and learning rate?",
    "options": [
      "0.3",
      "0.1",
      "0.2",
      "0.4"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "With \u03b2 = 0, vt = \u03b7gt = 0.1(3) = 0.3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 3\nQueue Prediction Parameter Update\nA service desk predicts queue length so it can decide when to open additional support\ncounters. During training, successive gradients often point in similar directions but vary in\nmagnitude from one mini-batch to the next. To smooth the parameter movement, the team\ntrains a model using momentum. The update is\nvt = \u03b2vt\u22121 + \u03b7gt,\nwt = wt\u22121 \u2212vt.\nAt the current step, vt\u22121 = 0.5, \u03b2 = 0.8, \u03b7 = 0.1, and the gradient is gt = 3. The previous\nparameter is wt\u22121 = 5.\nHere, vt stores a running update direction, so the current step\ndepends on both the new gradient and part of the previous movement.\n\nQuestion 15: Why can momentum help optimization?",
    "options": [
      "It makes gradients unnecessary.",
      "It always increases the loss.",
      "It can smooth updates across steps.",
      "It forces all parameters to be equal."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Momentum can reduce oscillations and carry useful update direction across iterations.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 4\nDemand Prediction Step-Size Analysis\nA retail analytics group trains a demand prediction model whose parameters do not all\nreceive gradients of the same scale. To understand adaptive learning rates, the team isolates\none parameter and tracks how its accumulated squared gradient changes the update size. For\nthis parameter, the current gradient is g = 4. In an AdaGrad-style update, the accumulated\nsquared gradient is\nrt = rt\u22121 + g2.\nAt the current step, rt\u22121 = 9.\nThe learning rate is \u03b7 = 0.5, and the simplified update\nmagnitude is\n\u03b7g\n\u221art\n.\nThis simplified calculation helps the team compare a plain gradient step with an adaptive\nstep that becomes smaller when the accumulated squared gradient is large.\n\nQuestion 16: What is rt?",
    "options": [
      "16",
      "25",
      "13",
      "9"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "rt = 9 + 42 = 25.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 4\nDemand Prediction Step-Size Analysis\nA retail analytics group trains a demand prediction model whose parameters do not all\nreceive gradients of the same scale. To understand adaptive learning rates, the team isolates\none parameter and tracks how its accumulated squared gradient changes the update size. For\nthis parameter, the current gradient is g = 4. In an AdaGrad-style update, the accumulated\nsquared gradient is\nrt = rt\u22121 + g2.\nAt the current step, rt\u22121 = 9.\nThe learning rate is \u03b7 = 0.5, and the simplified update\nmagnitude is\n\u03b7g\n\u221art\n.\nThis simplified calculation helps the team compare a plain gradient step with an adaptive\nstep that becomes smaller when the accumulated squared gradient is large.\n\nQuestion 17: What is \u221art?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Since rt = 25, \u221art = 5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 4\nDemand Prediction Step-Size Analysis\nA retail analytics group trains a demand prediction model whose parameters do not all\nreceive gradients of the same scale. To understand adaptive learning rates, the team isolates\none parameter and tracks how its accumulated squared gradient changes the update size. For\nthis parameter, the current gradient is g = 4. In an AdaGrad-style update, the accumulated\nsquared gradient is\nrt = rt\u22121 + g2.\nAt the current step, rt\u22121 = 9.\nThe learning rate is \u03b7 = 0.5, and the simplified update\nmagnitude is\n\u03b7g\n\u221art\n.\nThis simplified calculation helps the team compare a plain gradient step with an adaptive\nstep that becomes smaller when the accumulated squared gradient is large.\n\nQuestion 18: What is the update magnitude?",
    "options": [
      "0.2",
      "0.4",
      "0.8",
      "0.6"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "\u03b7g/\u221art = 0.5(4)/5 = 0.4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 4\nDemand Prediction Step-Size Analysis\nA retail analytics group trains a demand prediction model whose parameters do not all\nreceive gradients of the same scale. To understand adaptive learning rates, the team isolates\none parameter and tracks how its accumulated squared gradient changes the update size. For\nthis parameter, the current gradient is g = 4. In an AdaGrad-style update, the accumulated\nsquared gradient is\nrt = rt\u22121 + g2.\nAt the current step, rt\u22121 = 9.\nThe learning rate is \u03b7 = 0.5, and the simplified update\nmagnitude is\n\u03b7g\n\u221art\n.\nThis simplified calculation helps the team compare a plain gradient step with an adaptive\nstep that becomes smaller when the accumulated squared gradient is large.\n\nQuestion 19: What is the main idea behind AdaGrad-style scaling?",
    "options": [
      "It ignores all previous gradient information while claiming to adapt steps.",
      "It requires the same update for every parameter.",
      "It removes the need for a loss function.",
      "It adapts the step size using accumulated squared gradients."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "AdaGrad scales updates using accumulated squared gradients, giving parameter-specific effective step sizes.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w4-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 4,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week4.pdf",
    "questionText": "Case Study 4\nDemand Prediction Step-Size Analysis\nA retail analytics group trains a demand prediction model whose parameters do not all\nreceive gradients of the same scale. To understand adaptive learning rates, the team isolates\none parameter and tracks how its accumulated squared gradient changes the update size. For\nthis parameter, the current gradient is g = 4. In an AdaGrad-style update, the accumulated\nsquared gradient is\nrt = rt\u22121 + g2.\nAt the current step, rt\u22121 = 9.\nThe learning rate is \u03b7 = 0.5, and the simplified update\nmagnitude is\n\u03b7g\n\u221art\n.\nThis simplified calculation helps the team compare a plain gradient step with an adaptive\nstep that becomes smaller when the accumulated squared gradient is large.\n\nQuestion 20: Which optimizer combines momentum-like averaging with adaptive scaling?",
    "options": [
      "Adam",
      "Plain batch gradient descent",
      "Stochastic gradient descent without memory",
      "A zero-learning-rate update"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Adam uses moving averages of gradients and squared gradi- ents.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 1\nSensor Direction Scaling\nA factory uses two calibrated sensors to monitor vibration and heat on a production line.\nDuring a preprocessing audit, engineers examine a linear transformation that scales the two\nsensor directions differently but does not mix them. The transformation is\nA =\n\"\n3\n0\n0\n2\n#\n.\nThe vectors u1 = (1, 0)\u22a4and u2 = (0, 1)\u22a4represent two independent sensor directions. A\nvector is an eigenvector of A if multiplying by A only scales the vector without changing\nits direction. The team wants to identify which directions keep their orientation after the\ntransformation and how the scale factors appear as eigenvalues.\n\nQuestion 1: What is Au1?",
    "options": [
      "(3, 0)\u22a4",
      "(0, 3)\u22a4",
      "(2, 0)\u22a4",
      "(1, 3)\u22a4"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A(1, 0)\u22a4= (3, 0)\u22a4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 1\nSensor Direction Scaling\nA factory uses two calibrated sensors to monitor vibration and heat on a production line.\nDuring a preprocessing audit, engineers examine a linear transformation that scales the two\nsensor directions differently but does not mix them. The transformation is\nA =\n\"\n3\n0\n0\n2\n#\n.\nThe vectors u1 = (1, 0)\u22a4and u2 = (0, 1)\u22a4represent two independent sensor directions. A\nvector is an eigenvector of A if multiplying by A only scales the vector without changing\nits direction. The team wants to identify which directions keep their orientation after the\ntransformation and how the scale factors appear as eigenvalues.\n\nQuestion 2: What eigenvalue corresponds to u2?",
    "options": [
      "1",
      "3",
      "2",
      "0"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Au2 = (0, 2)\u22a4= 2u2, so the eigenvalue is 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 1\nSensor Direction Scaling\nA factory uses two calibrated sensors to monitor vibration and heat on a production line.\nDuring a preprocessing audit, engineers examine a linear transformation that scales the two\nsensor directions differently but does not mix them. The transformation is\nA =\n\"\n3\n0\n0\n2\n#\n.\nThe vectors u1 = (1, 0)\u22a4and u2 = (0, 1)\u22a4represent two independent sensor directions. A\nvector is an eigenvector of A if multiplying by A only scales the vector without changing\nits direction. The team wants to identify which directions keep their orientation after the\ntransformation and how the scale factors appear as eigenvalues.\n\nQuestion 3: Which statement is true about u1?",
    "options": [
      "It is not changed by A for any input scale.",
      "It is rotated by 90 degrees after multiplication by A.",
      "It becomes the zero vector.",
      "It is scaled by a factor of 3."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Au1 = 3u1, so the direction is unchanged and the scale factor is 3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 1\nSensor Direction Scaling\nA factory uses two calibrated sensors to monitor vibration and heat on a production line.\nDuring a preprocessing audit, engineers examine a linear transformation that scales the two\nsensor directions differently but does not mix them. The transformation is\nA =\n\"\n3\n0\n0\n2\n#\n.\nThe vectors u1 = (1, 0)\u22a4and u2 = (0, 1)\u22a4represent two independent sensor directions. A\nvector is an eigenvector of A if multiplying by A only scales the vector without changing\nits direction. The team wants to identify which directions keep their orientation after the\ntransformation and how the scale factors appear as eigenvalues.\n\nQuestion 4: What is the trace of A?",
    "options": [
      "6",
      "5",
      "1",
      "3"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The trace is the sum of diagonal entries: 3 + 2 = 5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 1\nSensor Direction Scaling\nA factory uses two calibrated sensors to monitor vibration and heat on a production line.\nDuring a preprocessing audit, engineers examine a linear transformation that scales the two\nsensor directions differently but does not mix them. The transformation is\nA =\n\"\n3\n0\n0\n2\n#\n.\nThe vectors u1 = (1, 0)\u22a4and u2 = (0, 1)\u22a4represent two independent sensor directions. A\nvector is an eigenvector of A if multiplying by A only scales the vector without changing\nits direction. The team wants to identify which directions keep their orientation after the\ntransformation and how the scale factors appear as eigenvalues.\n\nQuestion 5: How are the eigenvalues related to the diagonal entries in this matrix?",
    "options": [
      "They are equal to the diagonal entries for this diagonal matrix.",
      "They must both be zero for every diagonal matrix in this setting.",
      "They are found by adding all entries in each row.",
      "They depend only on the off-diagonal entries here."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "For this diagonal matrix, the eigenvalues are the diagonal entries 3 and 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 2\nCustomer Feature Coordinate Review\nA data analyst is comparing customers using two centered features: response to discounts\nand preference for premium products. Instead of using the original axes directly, the analyst\nrepresents each customer vector in a new basis that separates common movement from\nopposite movement across the two features. The basis is\nb1 = (1, 1)\u22a4,\nb2 = (1, \u22121)\u22a4.\nA customer vector is\nx = (4, 2)\u22a4.\nThe analyst wants coefficients c1, c2 such that\nx = c1b1 + c2b2.\nFinding these coefficients shows how the same customer can be described using basis direc-\ntions rather than raw feature coordinates.\n\nQuestion 6: Which equation is obtained from the first coordinate?",
    "options": [
      "c1 \u2212c2 = 4",
      "c1 + c2 = 4",
      "2c1 = 4",
      "c2 = 4"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The first coordinate of c1(1, 1) + c2(1, \u22121) is c1 + c2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 2\nCustomer Feature Coordinate Review\nA data analyst is comparing customers using two centered features: response to discounts\nand preference for premium products. Instead of using the original axes directly, the analyst\nrepresents each customer vector in a new basis that separates common movement from\nopposite movement across the two features. The basis is\nb1 = (1, 1)\u22a4,\nb2 = (1, \u22121)\u22a4.\nA customer vector is\nx = (4, 2)\u22a4.\nThe analyst wants coefficients c1, c2 such that\nx = c1b1 + c2b2.\nFinding these coefficients shows how the same customer can be described using basis direc-\ntions rather than raw feature coordinates.\n\nQuestion 7: Which equation is obtained from the second coordinate?",
    "options": [
      "c1 + c2 = 2",
      "c1 = 2",
      "c1 \u2212c2 = 2",
      "2c2 = 2"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The second coordinate is c1 \u2212c2, so c1 \u2212c2 = 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 2\nCustomer Feature Coordinate Review\nA data analyst is comparing customers using two centered features: response to discounts\nand preference for premium products. Instead of using the original axes directly, the analyst\nrepresents each customer vector in a new basis that separates common movement from\nopposite movement across the two features. The basis is\nb1 = (1, 1)\u22a4,\nb2 = (1, \u22121)\u22a4.\nA customer vector is\nx = (4, 2)\u22a4.\nThe analyst wants coefficients c1, c2 such that\nx = c1b1 + c2b2.\nFinding these coefficients shows how the same customer can be described using basis direc-\ntions rather than raw feature coordinates.\n\nQuestion 8: What is c1?",
    "options": [
      "3",
      "1",
      "4",
      "2"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Adding c1 + c2 = 4 and c1 \u2212c2 = 2 gives 2c1 = 6, so c1 = 3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 2\nCustomer Feature Coordinate Review\nA data analyst is comparing customers using two centered features: response to discounts\nand preference for premium products. Instead of using the original axes directly, the analyst\nrepresents each customer vector in a new basis that separates common movement from\nopposite movement across the two features. The basis is\nb1 = (1, 1)\u22a4,\nb2 = (1, \u22121)\u22a4.\nA customer vector is\nx = (4, 2)\u22a4.\nThe analyst wants coefficients c1, c2 such that\nx = c1b1 + c2b2.\nFinding these coefficients shows how the same customer can be described using basis direc-\ntions rather than raw feature coordinates.\n\nQuestion 9: What is c2?",
    "options": [
      "0",
      "1",
      "3",
      "2"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Since c1 + c2 = 4 and c1 = 3, c2 = 1.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 2\nCustomer Feature Coordinate Review\nA data analyst is comparing customers using two centered features: response to discounts\nand preference for premium products. Instead of using the original axes directly, the analyst\nrepresents each customer vector in a new basis that separates common movement from\nopposite movement across the two features. The basis is\nb1 = (1, 1)\u22a4,\nb2 = (1, \u22121)\u22a4.\nA customer vector is\nx = (4, 2)\u22a4.\nThe analyst wants coefficients c1, c2 such that\nx = c1b1 + c2b2.\nFinding these coefficients shows how the same customer can be described using basis direc-\ntions rather than raw feature coordinates.\n\nQuestion 10: Why do b1 and b2 form a basis for R2?",
    "options": [
      "They point in the same direction.",
      "They both have zero length.",
      "They always produce only positive coordinates.",
      "They are linearly independent and span R2."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Two linearly independent vectors in R2 form a basis.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 3\nStore Performance Feature Reduction\nA retail team measures two centered features for stores: weekly footfall variation and\naverage basket variation. The covariance matrix is\n\u03a3 =\n\"\n4\n0\n0\n1\n#\n.\nPCA selects directions of maximum variance.\nFor this diagonal covariance matrix, the\ncoordinate axes are principal directions. The team wants to reduce the two-feature store\nsummary to a smaller representation while retaining most of the variation across stores.\nBecause the features have already been centered, the covariance entries describe variation\naround the average store behavior.\n\nQuestion 11: What is the variance along the first coordinate direction?",
    "options": [
      "1",
      "2",
      "4",
      "0"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The first diagonal entry of the covariance matrix is 4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 3\nStore Performance Feature Reduction\nA retail team measures two centered features for stores: weekly footfall variation and\naverage basket variation. The covariance matrix is\n\u03a3 =\n\"\n4\n0\n0\n1\n#\n.\nPCA selects directions of maximum variance.\nFor this diagonal covariance matrix, the\ncoordinate axes are principal directions. The team wants to reduce the two-feature store\nsummary to a smaller representation while retaining most of the variation across stores.\nBecause the features have already been centered, the covariance entries describe variation\naround the average store behavior.\n\nQuestion 12: Which direction is the first principal component?",
    "options": [
      "The second coordinate direction",
      "The direction (1, 1)\u22a4",
      "The zero vector direction",
      "The first coordinate direction"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The first coordinate has the largest variance, 4, so it is the first principal component direction.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 3\nStore Performance Feature Reduction\nA retail team measures two centered features for stores: weekly footfall variation and\naverage basket variation. The covariance matrix is\n\u03a3 =\n\"\n4\n0\n0\n1\n#\n.\nPCA selects directions of maximum variance.\nFor this diagonal covariance matrix, the\ncoordinate axes are principal directions. The team wants to reduce the two-feature store\nsummary to a smaller representation while retaining most of the variation across stores.\nBecause the features have already been centered, the covariance entries describe variation\naround the average store behavior.\n\nQuestion 13: What fraction of total variance is explained by the first principal component?",
    "options": [
      "4/5",
      "1/5",
      "1/4",
      "5/4"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The total variance is 4 + 1 = 5, and the first component explains 4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 3\nStore Performance Feature Reduction\nA retail team measures two centered features for stores: weekly footfall variation and\naverage basket variation. The covariance matrix is\n\u03a3 =\n\"\n4\n0\n0\n1\n#\n.\nPCA selects directions of maximum variance.\nFor this diagonal covariance matrix, the\ncoordinate axes are principal directions. The team wants to reduce the two-feature store\nsummary to a smaller representation while retaining most of the variation across stores.\nBecause the features have already been centered, the covariance entries describe variation\naround the average store behavior.\n\nQuestion 14: If the data is projected onto the first principal component only, how many dimensions remain?",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Keeping one principal component reduces the representation to one dimension.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 3\nStore Performance Feature Reduction\nA retail team measures two centered features for stores: weekly footfall variation and\naverage basket variation. The covariance matrix is\n\u03a3 =\n\"\n4\n0\n0\n1\n#\n.\nPCA selects directions of maximum variance.\nFor this diagonal covariance matrix, the\ncoordinate axes are principal directions. The team wants to reduce the two-feature store\nsummary to a smaller representation while retaining most of the variation across stores.\nBecause the features have already been centered, the covariance entries describe variation\naround the average store behavior.\n\nQuestion 15: What is the purpose of centering data before PCA?",
    "options": [
      "To make every covariance value negative after centering.",
      "To remove all variance from the dataset before PCA.",
      "To force all eigenvalues to be equal.",
      "To express variation relative to the mean."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Centering subtracts the mean so PCA analyzes variation around the mean.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 4\nProduct-User Interaction Compression\nA recommendation team studies a small product-user interaction matrix before applying\nmatrix factorization to a larger catalog. The rows can be viewed as products and the columns\nas user groups, with larger entries indicating stronger interaction. The simplified matrix is\nM =\n\"\n3\n0\n0\n1\n#\n.\nFor this diagonal matrix, an SVD can be written as\nM = U\u03a3V \u22a4\nwith U = I, V = I, and singular values 3 and 1. The team uses this small diagonal example\nto discuss rank, dominant singular directions, and how keeping only the largest singular\nvalue produces a low-rank approximation.\n\nQuestion 16: What is the largest singular value?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The singular values listed are 3 and 1, so the largest is 3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 4\nProduct-User Interaction Compression\nA recommendation team studies a small product-user interaction matrix before applying\nmatrix factorization to a larger catalog. The rows can be viewed as products and the columns\nas user groups, with larger entries indicating stronger interaction. The simplified matrix is\nM =\n\"\n3\n0\n0\n1\n#\n.\nFor this diagonal matrix, an SVD can be written as\nM = U\u03a3V \u22a4\nwith U = I, V = I, and singular values 3 and 1. The team uses this small diagonal example\nto discuss rank, dominant singular directions, and how keeping only the largest singular\nvalue produces a low-rank approximation.\n\nQuestion 17: What does V \u22a4represent in the SVD expression?",
    "options": [
      "The transpose of the right singular-vector matrix.",
      "The loss value of the recommendation model after a full training step.",
      "The number of users in every batch.",
      "The covariance matrix after centering."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "In M = U\u03a3V \u22a4, V \u22a4is the transpose of the right singular vector matrix.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 4\nProduct-User Interaction Compression\nA recommendation team studies a small product-user interaction matrix before applying\nmatrix factorization to a larger catalog. The rows can be viewed as products and the columns\nas user groups, with larger entries indicating stronger interaction. The simplified matrix is\nM =\n\"\n3\n0\n0\n1\n#\n.\nFor this diagonal matrix, an SVD can be written as\nM = U\u03a3V \u22a4\nwith U = I, V = I, and singular values 3 and 1. The team uses this small diagonal example\nto discuss rank, dominant singular directions, and how keeping only the largest singular\nvalue produces a low-rank approximation.\n\nQuestion 18: What rank-one approximation keeps only the largest singular value?",
    "options": [
      "\" 0 0 0 1 #",
      "\" 3 0 0 0 #",
      "\" 3 1 1 3 #",
      "\" 0 3 1 0 #"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Keeping only singular value 3 preserves the first diagonal com- ponent and drops the second.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 4\nProduct-User Interaction Compression\nA recommendation team studies a small product-user interaction matrix before applying\nmatrix factorization to a larger catalog. The rows can be viewed as products and the columns\nas user groups, with larger entries indicating stronger interaction. The simplified matrix is\nM =\n\"\n3\n0\n0\n1\n#\n.\nFor this diagonal matrix, an SVD can be written as\nM = U\u03a3V \u22a4\nwith U = I, V = I, and singular values 3 and 1. The team uses this small diagonal example\nto discuss rank, dominant singular directions, and how keeping only the largest singular\nvalue produces a low-rank approximation.\n\nQuestion 19: What is the rank of M?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Both diagonal entries are nonzero, so the matrix has rank 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w5-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 5,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week5.pdf",
    "questionText": "Case Study 4\nProduct-User Interaction Compression\nA recommendation team studies a small product-user interaction matrix before applying\nmatrix factorization to a larger catalog. The rows can be viewed as products and the columns\nas user groups, with larger entries indicating stronger interaction. The simplified matrix is\nM =\n\"\n3\n0\n0\n1\n#\n.\nFor this diagonal matrix, an SVD can be written as\nM = U\u03a3V \u22a4\nwith U = I, V = I, and singular values 3 and 1. The team uses this small diagonal example\nto discuss rank, dominant singular directions, and how keeping only the largest singular\nvalue produces a low-rank approximation.\n\nQuestion 20: Why is SVD useful for dimensionality reduction?",
    "options": [
      "It requires every matrix entry to be exactly zero before the factorization.",
      "It removes the need for any matrix factorization.",
      "It changes all singular values to negative values.",
      "It can keep dominant singular directions and discard smaller ones."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Keeping the largest singular values gives a lower-dimensional approximation that preserves dominant structure.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 1\nMachine Reading Compression\nA maintenance team receives pairs of machine readings from an industrial unit and\nwants a compact summary that can still reconstruct the original reading reasonably well.\nTo understand the mechanics of an autoencoder, the team studies one two-feature reading\nx = (4, 2)\u22a4and compresses it into one latent value using an encoder\nz = 0.5x1 + 0.5x2.\nThe decoder reconstructs\n\u02c6x1 = z,\n\u02c6x2 = z.\nThe reconstruction loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nThis example lets the team separate the encoder, decoder, and reconstruction-loss roles\nbefore moving to higher-dimensional machine logs.\n\nQuestion 1: What is the latent value z?",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "z = 0.5(4) + 0.5(2) = 3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 1\nMachine Reading Compression\nA maintenance team receives pairs of machine readings from an industrial unit and\nwants a compact summary that can still reconstruct the original reading reasonably well.\nTo understand the mechanics of an autoencoder, the team studies one two-feature reading\nx = (4, 2)\u22a4and compresses it into one latent value using an encoder\nz = 0.5x1 + 0.5x2.\nThe decoder reconstructs\n\u02c6x1 = z,\n\u02c6x2 = z.\nThe reconstruction loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nThis example lets the team separate the encoder, decoder, and reconstruction-loss roles\nbefore moving to higher-dimensional machine logs.\n\nQuestion 2: What is the reconstructed vector \u02c6x?",
    "options": [
      "(2, 2)\u22a4",
      "(3, 3)\u22a4",
      "(4, 4)\u22a4",
      "(3, 2)\u22a4"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The decoder sets both reconstructed coordinates equal to z = 3.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 1\nMachine Reading Compression\nA maintenance team receives pairs of machine readings from an industrial unit and\nwants a compact summary that can still reconstruct the original reading reasonably well.\nTo understand the mechanics of an autoencoder, the team studies one two-feature reading\nx = (4, 2)\u22a4and compresses it into one latent value using an encoder\nz = 0.5x1 + 0.5x2.\nThe decoder reconstructs\n\u02c6x1 = z,\n\u02c6x2 = z.\nThe reconstruction loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nThis example lets the team separate the encoder, decoder, and reconstruction-loss roles\nbefore moving to higher-dimensional machine logs.\n\nQuestion 3: What is the reconstruction loss?",
    "options": [
      "4",
      "1",
      "2",
      "0"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "L = (4 \u22123)2 + (2 \u22123)2 = 1 + 1 = 2.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 1\nMachine Reading Compression\nA maintenance team receives pairs of machine readings from an industrial unit and\nwants a compact summary that can still reconstruct the original reading reasonably well.\nTo understand the mechanics of an autoencoder, the team studies one two-feature reading\nx = (4, 2)\u22a4and compresses it into one latent value using an encoder\nz = 0.5x1 + 0.5x2.\nThe decoder reconstructs\n\u02c6x1 = z,\n\u02c6x2 = z.\nThe reconstruction loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nThis example lets the team separate the encoder, decoder, and reconstruction-loss roles\nbefore moving to higher-dimensional machine logs.\n\nQuestion 4: Which part of the autoencoder creates the latent representation?",
    "options": [
      "The decoder output layer",
      "The reconstruction loss",
      "The target label table",
      "The encoder layer"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The encoder maps the input x into the latent value z.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 1\nMachine Reading Compression\nA maintenance team receives pairs of machine readings from an industrial unit and\nwants a compact summary that can still reconstruct the original reading reasonably well.\nTo understand the mechanics of an autoencoder, the team studies one two-feature reading\nx = (4, 2)\u22a4and compresses it into one latent value using an encoder\nz = 0.5x1 + 0.5x2.\nThe decoder reconstructs\n\u02c6x1 = z,\n\u02c6x2 = z.\nThe reconstruction loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nThis example lets the team separate the encoder, decoder, and reconstruction-loss roles\nbefore moving to higher-dimensional machine logs.\n\nQuestion 5: What is the training objective of this autoencoder?",
    "options": [
      "To minimize reconstruction error.",
      "To assign external class labels before any reconstruction is attempted.",
      "To ignore the input features.",
      "To make every latent value zero."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Autoencoders are trained to reconstruct their inputs with small error.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 2\nReport Feature Compression\nA document system summarizes operational reports using five numerical features such\nas length, keyword density, and section-level counts. The team wants a compact represen-\ntation that captures the main structure without storing all five features directly. It uses 5\ninput features and compresses them into a latent representation with 2 hidden units before\nreconstructing the 5 features. The model is undercomplete because the latent dimension is\nsmaller than the input dimension. The setup is used to discuss why compression can force\nthe model to learn useful structure instead of simply copying every input coordinate.\n\nQuestion 6: What is the input dimension?",
    "options": [
      "2",
      "5",
      "7",
      "10"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The case study states that there are 5 input features.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 2\nReport Feature Compression\nA document system summarizes operational reports using five numerical features such\nas length, keyword density, and section-level counts. The team wants a compact represen-\ntation that captures the main structure without storing all five features directly. It uses 5\ninput features and compresses them into a latent representation with 2 hidden units before\nreconstructing the 5 features. The model is undercomplete because the latent dimension is\nsmaller than the input dimension. The setup is used to discuss why compression can force\nthe model to learn useful structure instead of simply copying every input coordinate.\n\nQuestion 7: What is the latent dimension?",
    "options": [
      "1",
      "5",
      "2",
      "7"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The latent layer has 2 hidden units.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 2\nReport Feature Compression\nA document system summarizes operational reports using five numerical features such\nas length, keyword density, and section-level counts. The team wants a compact represen-\ntation that captures the main structure without storing all five features directly. It uses 5\ninput features and compresses them into a latent representation with 2 hidden units before\nreconstructing the 5 features. The model is undercomplete because the latent dimension is\nsmaller than the input dimension. The setup is used to discuss why compression can force\nthe model to learn useful structure instead of simply copying every input coordinate.\n\nQuestion 8: Why is the model undercomplete?",
    "options": [
      "The decoder has no reconstruction target.",
      "The output layer ignores all reconstructed features during training.",
      "The input has fewer features than the latent layer.",
      "The latent dimension is smaller than the input dimension."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "An undercomplete autoencoder compresses inputs into a lower- dimensional latent representation.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 2\nReport Feature Compression\nA document system summarizes operational reports using five numerical features such\nas length, keyword density, and section-level counts. The team wants a compact represen-\ntation that captures the main structure without storing all five features directly. It uses 5\ninput features and compresses them into a latent representation with 2 hidden units before\nreconstructing the 5 features. The model is undercomplete because the latent dimension is\nsmaller than the input dimension. The setup is used to discuss why compression can force\nthe model to learn useful structure instead of simply copying every input coordinate.\n\nQuestion 9: Which output dimension is required to reconstruct the original input?",
    "options": [
      "5",
      "1",
      "2",
      "3"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The reconstruction must have the same dimension as the 5- feature input.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 2\nReport Feature Compression\nA document system summarizes operational reports using five numerical features such\nas length, keyword density, and section-level counts. The team wants a compact represen-\ntation that captures the main structure without storing all five features directly. It uses 5\ninput features and compresses them into a latent representation with 2 hidden units before\nreconstructing the 5 features. The model is undercomplete because the latent dimension is\nsmaller than the input dimension. The setup is used to discuss why compression can force\nthe model to learn useful structure instead of simply copying every input coordinate.\n\nQuestion 10: How is this related to PCA in the linear case?",
    "options": [
      "It must always produce a one-hot class label.",
      "It can learn a low-dimensional representation similar to PCA.",
      "It removes the need for reconstruction in every training example.",
      "It makes every component have zero variance."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A linear undercomplete autoencoder can learn a subspace re- lated to PCA.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 3\nMeter Reading Recovery\nA utility company receives meter readings that sometimes lose one coordinate because of\ntemporary communication noise. To make the representation robust, it trains an autoencoder\nusing corrupted inputs but clean targets. For one example, the clean reading is\nx = (5, 1)\u22a4,\nand the corrupted input is\n\u02dcx = (5, 0)\u22a4.\nThe model outputs \u02c6x = (4, 1)\u22a4, and the loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nDuring training, the encoder sees the corrupted vector, but the loss is measured against the\nclean reading so the model learns to recover stable structure.\n\nQuestion 11: Which vector is given to the encoder during training?",
    "options": [
      "x = (5, 1)\u22a4",
      "\u02c6x = (4, 1)\u22a4",
      "(0, 0)\u22a4",
      "\u02dcx = (5, 0)\u22a4"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A denoising autoencoder receives the corrupted input \u02dcx.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 3\nMeter Reading Recovery\nA utility company receives meter readings that sometimes lose one coordinate because of\ntemporary communication noise. To make the representation robust, it trains an autoencoder\nusing corrupted inputs but clean targets. For one example, the clean reading is\nx = (5, 1)\u22a4,\nand the corrupted input is\n\u02dcx = (5, 0)\u22a4.\nThe model outputs \u02c6x = (4, 1)\u22a4, and the loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nDuring training, the encoder sees the corrupted vector, but the loss is measured against the\nclean reading so the model learns to recover stable structure.\n\nQuestion 12: Which vector is the clean reconstruction target?",
    "options": [
      "(4, 1)\u22a4",
      "(5, 0)\u22a4",
      "(5, 1)\u22a4",
      "(0, 1)\u22a4"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The clean target is x = (5, 1)\u22a4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 3\nMeter Reading Recovery\nA utility company receives meter readings that sometimes lose one coordinate because of\ntemporary communication noise. To make the representation robust, it trains an autoencoder\nusing corrupted inputs but clean targets. For one example, the clean reading is\nx = (5, 1)\u22a4,\nand the corrupted input is\n\u02dcx = (5, 0)\u22a4.\nThe model outputs \u02c6x = (4, 1)\u22a4, and the loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nDuring training, the encoder sees the corrupted vector, but the loss is measured against the\nclean reading so the model learns to recover stable structure.\n\nQuestion 13: What is the reconstruction loss?",
    "options": [
      "0",
      "2",
      "4",
      "1"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "L = (5 \u22124)2 + (1 \u22121)2 = 1.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 3\nMeter Reading Recovery\nA utility company receives meter readings that sometimes lose one coordinate because of\ntemporary communication noise. To make the representation robust, it trains an autoencoder\nusing corrupted inputs but clean targets. For one example, the clean reading is\nx = (5, 1)\u22a4,\nand the corrupted input is\n\u02dcx = (5, 0)\u22a4.\nThe model outputs \u02c6x = (4, 1)\u22a4, and the loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nDuring training, the encoder sees the corrupted vector, but the loss is measured against the\nclean reading so the model learns to recover stable structure.\n\nQuestion 14: What is the purpose of using corrupted inputs?",
    "options": [
      "To train the model to recover clean structure.",
      "To remove the decoder from the network before training begins.",
      "To force every output to equal zero.",
      "To avoid computing any reconstruction loss."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Denoising autoencoders learn to reconstruct clean inputs from corrupted versions.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 3\nMeter Reading Recovery\nA utility company receives meter readings that sometimes lose one coordinate because of\ntemporary communication noise. To make the representation robust, it trains an autoencoder\nusing corrupted inputs but clean targets. For one example, the clean reading is\nx = (5, 1)\u22a4,\nand the corrupted input is\n\u02dcx = (5, 0)\u22a4.\nThe model outputs \u02c6x = (4, 1)\u22a4, and the loss is\nL = (x1 \u2212\u02c6x1)2 + (x2 \u2212\u02c6x2)2.\nDuring training, the encoder sees the corrupted vector, but the loss is measured against the\nclean reading so the model learns to recover stable structure.\n\nQuestion 15: Which statement best describes this training setup?",
    "options": [
      "The model ignores all input values.",
      "The model maps noisy input toward a clean target.",
      "The target is the corrupted vector only.",
      "The encoder output is used as the final label for every noisy example."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The corrupted vector is input, while the clean vector is the target.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 4\nCompact Representation Control\nA research group trains an autoencoder for compact feature learning, but plain recon-\nstruction alone produces representations that are too active and sensitive for the intended\nanalysis.\nTo shape the latent representation, the group starts with reconstruction loss\nLrec = 0.8. It adds a sparsity penalty of 0.3 with weight \u03bb = 2, so\nLsparse = Lrec + \u03bb(0.3).\nIn a second experiment, the group uses a contractive penalty to make the representation\nless sensitive to small input changes. The two penalties illustrate different regularization\ngoals: sparsity encourages only a few hidden units to respond strongly, while contractive\nregularization encourages stability.\n\nQuestion 16: What is the sparsity penalty contribution?",
    "options": [
      "0.3",
      "0.8",
      "0.6",
      "1.1"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The weighted penalty is \u03bb(0.3) = 2(0.3) = 0.6.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 4\nCompact Representation Control\nA research group trains an autoencoder for compact feature learning, but plain recon-\nstruction alone produces representations that are too active and sensitive for the intended\nanalysis.\nTo shape the latent representation, the group starts with reconstruction loss\nLrec = 0.8. It adds a sparsity penalty of 0.3 with weight \u03bb = 2, so\nLsparse = Lrec + \u03bb(0.3).\nIn a second experiment, the group uses a contractive penalty to make the representation\nless sensitive to small input changes. The two penalties illustrate different regularization\ngoals: sparsity encourages only a few hidden units to respond strongly, while contractive\nregularization encourages stability.\n\nQuestion 17: What is Lsparse?",
    "options": [
      "1.4",
      "1.1",
      "0.8",
      "0.6"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Lsparse = 0.8 + 0.6 = 1.4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 4\nCompact Representation Control\nA research group trains an autoencoder for compact feature learning, but plain recon-\nstruction alone produces representations that are too active and sensitive for the intended\nanalysis.\nTo shape the latent representation, the group starts with reconstruction loss\nLrec = 0.8. It adds a sparsity penalty of 0.3 with weight \u03bb = 2, so\nLsparse = Lrec + \u03bb(0.3).\nIn a second experiment, the group uses a contractive penalty to make the representation\nless sensitive to small input changes. The two penalties illustrate different regularization\ngoals: sparsity encourages only a few hidden units to respond strongly, while contractive\nregularization encourages stability.\n\nQuestion 18: What does sparse regularization encourage?",
    "options": [
      "Every hidden unit must always be active during the full reconstruction process.",
      "The decoder is removed from the model.",
      "Only a small number of hidden units should be active.",
      "The input dimension must equal zero."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Sparse autoencoders encourage most hidden activations to be small or inactive.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 4\nCompact Representation Control\nA research group trains an autoencoder for compact feature learning, but plain recon-\nstruction alone produces representations that are too active and sensitive for the intended\nanalysis.\nTo shape the latent representation, the group starts with reconstruction loss\nLrec = 0.8. It adds a sparsity penalty of 0.3 with weight \u03bb = 2, so\nLsparse = Lrec + \u03bb(0.3).\nIn a second experiment, the group uses a contractive penalty to make the representation\nless sensitive to small input changes. The two penalties illustrate different regularization\ngoals: sparsity encourages only a few hidden units to respond strongly, while contractive\nregularization encourages stability.\n\nQuestion 19: What is the goal of a contractive penalty?",
    "options": [
      "To force reconstruction loss to be ignored throughout all training.",
      "To make all weights increase without bound after every input change.",
      "To replace the encoder with class labels.",
      "To make the representation less sensitive to small input changes."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Contractive penalties encourage stable representations under small input perturbations.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w6-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 6,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week6.pdf",
    "questionText": "Case Study 4\nCompact Representation Control\nA research group trains an autoencoder for compact feature learning, but plain recon-\nstruction alone produces representations that are too active and sensitive for the intended\nanalysis.\nTo shape the latent representation, the group starts with reconstruction loss\nLrec = 0.8. It adds a sparsity penalty of 0.3 with weight \u03bb = 2, so\nLsparse = Lrec + \u03bb(0.3).\nIn a second experiment, the group uses a contractive penalty to make the representation\nless sensitive to small input changes. The two penalties illustrate different regularization\ngoals: sparsity encourages only a few hidden units to respond strongly, while contractive\nregularization encourages stability.\n\nQuestion 20: Why are such penalties added to the reconstruction loss?",
    "options": [
      "To remove all training data from the objective.",
      "To control the learned representation beyond plain reconstruction.",
      "To stop the model from producing reconstructions.",
      "To make every feature identical to every other feature before encoding."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Regularization shapes what the autoencoder learns in addition to minimizing reconstruction error.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 1\nWater Demand Forecasting for a Residential Zone\nA municipal analytics team builds models to predict next-day water demand for a res-\nidential zone. Each input contains temperature, weekday indicator, previous-day demand,\nand a local festival indicator. The team compares a simple linear model and a highly flex-\nible neural network. The simple model gives similar predictions when trained on different\nsamples, but its average prediction is far from the true demand. The neural network fits the\ntraining data very closely, but its predictions change substantially when trained on different\nsamples.\nFor one input condition, the neural network predictions from four training subsets are\n41,\n49,\n45,\n53\nthousand liters, while the true demand is 48 thousand liters. The expected test error for this\ncondition is decomposed as\nE\nh\n(y \u2212\u02c6f(x))2i\n= Bias2 + Variance + \u03c32.\n\nQuestion 1: Which description best matches the simple linear model?",
    "options": [
      "High bias and low variance",
      "Low bias and high variance",
      "Low bias and low variance",
      "High variance and zero bias"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Similar predictions across samples indicate low variance, while being far from the true demand indicates high bias.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 1\nWater Demand Forecasting for a Residential Zone\nA municipal analytics team builds models to predict next-day water demand for a res-\nidential zone. Each input contains temperature, weekday indicator, previous-day demand,\nand a local festival indicator. The team compares a simple linear model and a highly flex-\nible neural network. The simple model gives similar predictions when trained on different\nsamples, but its average prediction is far from the true demand. The neural network fits the\ntraining data very closely, but its predictions change substantially when trained on different\nsamples.\nFor one input condition, the neural network predictions from four training subsets are\n41,\n49,\n45,\n53\nthousand liters, while the true demand is 48 thousand liters. The expected test error for this\ncondition is decomposed as\nE\nh\n(y \u2212\u02c6f(x))2i\n= Bias2 + Variance + \u03c32.\n\nQuestion 2: What is the average neural-network prediction for the given input?",
    "options": [
      "46",
      "48",
      "47",
      "50"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The average is (41 + 49 + 45 + 53)/4 = 188/4 = 47.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 1\nWater Demand Forecasting for a Residential Zone\nA municipal analytics team builds models to predict next-day water demand for a res-\nidential zone. Each input contains temperature, weekday indicator, previous-day demand,\nand a local festival indicator. The team compares a simple linear model and a highly flex-\nible neural network. The simple model gives similar predictions when trained on different\nsamples, but its average prediction is far from the true demand. The neural network fits the\ntraining data very closely, but its predictions change substantially when trained on different\nsamples.\nFor one input condition, the neural network predictions from four training subsets are\n41,\n49,\n45,\n53\nthousand liters, while the true demand is 48 thousand liters. The expected test error for this\ncondition is decomposed as\nE\nh\n(y \u2212\u02c6f(x))2i\n= Bias2 + Variance + \u03c32.\n\nQuestion 3: What is the squared bias of the neural-network predictions for this input?",
    "options": [
      "4",
      "9",
      "0",
      "1"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The squared bias is (48 \u221247)2 = 1.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 1\nWater Demand Forecasting for a Residential Zone\nA municipal analytics team builds models to predict next-day water demand for a res-\nidential zone. Each input contains temperature, weekday indicator, previous-day demand,\nand a local festival indicator. The team compares a simple linear model and a highly flex-\nible neural network. The simple model gives similar predictions when trained on different\nsamples, but its average prediction is far from the true demand. The neural network fits the\ntraining data very closely, but its predictions change substantially when trained on different\nsamples.\nFor one input condition, the neural network predictions from four training subsets are\n41,\n49,\n45,\n53\nthousand liters, while the true demand is 48 thousand liters. The expected test error for this\ncondition is decomposed as\nE\nh\n(y \u2212\u02c6f(x))2i\n= Bias2 + Variance + \u03c32.\n\nQuestion 4: What does the large variation among the neural-network predictions indicate?",
    "options": [
      "The model has no irreducible error.",
      "The model has high variance under the case assumptions.",
      "The output labels are unavailable for the described model.",
      "The model is too simple for the data."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Predictions changing strongly across training subsets are a symptom of high variance.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 1\nWater Demand Forecasting for a Residential Zone\nA municipal analytics team builds models to predict next-day water demand for a res-\nidential zone. Each input contains temperature, weekday indicator, previous-day demand,\nand a local festival indicator. The team compares a simple linear model and a highly flex-\nible neural network. The simple model gives similar predictions when trained on different\nsamples, but its average prediction is far from the true demand. The neural network fits the\ntraining data very closely, but its predictions change substantially when trained on different\nsamples.\nFor one input condition, the neural network predictions from four training subsets are\n41,\n49,\n45,\n53\nthousand liters, while the true demand is 48 thousand liters. The expected test error for this\ncondition is decomposed as\nE\nh\n(y \u2212\u02c6f(x))2i\n= Bias2 + Variance + \u03c32.\n\nQuestion 5: Which action is most directly aimed at reducing the neural network\u2019s variance?",
    "options": [
      "Add a suitable regularization method.",
      "Remove the validation set entirely.",
      "Increase model depth without constraints.",
      "Train until training loss becomes zero."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Regularization methods constrain the model and help reduce overfitting-related variance.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 2\nSmall-Business Loan Risk Scoring\nA cooperative bank trains a logistic-regression model to predict whether a small-business\nloan application is risky. The model uses standardized features such as debt ratio, monthly\nrevenue, repayment history score, and business age.\nWithout regularization, the model\nreaches very high training accuracy but noticeably lower validation accuracy. Several learned\nweights also have large magnitudes, making the model sensitive to small feature changes.\nThe team adds L2 regularization to the objective:\nJtotal(w) = Jdata(w) + \u03b1\nX\ni\nw2\ni .\nFor one parameter, the current value is w = 3. The data-loss gradient for that parameter is\n4, the regularization strength is \u03b1 = 2, and the learning rate is \u03b7 = 0.1. For this case, use\nthe regularized gradient\n\u2202Jtotal\n\u2202w\n= 4 + 2\u03b1w.\n\nQuestion 6: What is the main purpose of adding L2 regularization here?",
    "options": [
      "To remove the need for training data for the described model",
      "To discourage large weights for the described model",
      "To guarantee perfect validation accuracy",
      "To convert logistic regression into clustering"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "L2 regularization penalizes large squared weights and reduces model complexity.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 2\nSmall-Business Loan Risk Scoring\nA cooperative bank trains a logistic-regression model to predict whether a small-business\nloan application is risky. The model uses standardized features such as debt ratio, monthly\nrevenue, repayment history score, and business age.\nWithout regularization, the model\nreaches very high training accuracy but noticeably lower validation accuracy. Several learned\nweights also have large magnitudes, making the model sensitive to small feature changes.\nThe team adds L2 regularization to the objective:\nJtotal(w) = Jdata(w) + \u03b1\nX\ni\nw2\ni .\nFor one parameter, the current value is w = 3. The data-loss gradient for that parameter is\n4, the regularization strength is \u03b1 = 2, and the learning rate is \u03b7 = 0.1. For this case, use\nthe regularized gradient\n\u2202Jtotal\n\u2202w\n= 4 + 2\u03b1w.\n\nQuestion 7: What is the regularization contribution 2\u03b1w to the gradient?",
    "options": [
      "10",
      "6",
      "8",
      "12"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The contribution is 2\u03b1w = 2(2)(3) = 12.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 2\nSmall-Business Loan Risk Scoring\nA cooperative bank trains a logistic-regression model to predict whether a small-business\nloan application is risky. The model uses standardized features such as debt ratio, monthly\nrevenue, repayment history score, and business age.\nWithout regularization, the model\nreaches very high training accuracy but noticeably lower validation accuracy. Several learned\nweights also have large magnitudes, making the model sensitive to small feature changes.\nThe team adds L2 regularization to the objective:\nJtotal(w) = Jdata(w) + \u03b1\nX\ni\nw2\ni .\nFor one parameter, the current value is w = 3. The data-loss gradient for that parameter is\n4, the regularization strength is \u03b1 = 2, and the learning rate is \u03b7 = 0.1. For this case, use\nthe regularized gradient\n\u2202Jtotal\n\u2202w\n= 4 + 2\u03b1w.\n\nQuestion 8: What is the full regularized gradient for this parameter?",
    "options": [
      "16",
      "12",
      "10",
      "14"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The full gradient is 4 + 12 = 16.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 2\nSmall-Business Loan Risk Scoring\nA cooperative bank trains a logistic-regression model to predict whether a small-business\nloan application is risky. The model uses standardized features such as debt ratio, monthly\nrevenue, repayment history score, and business age.\nWithout regularization, the model\nreaches very high training accuracy but noticeably lower validation accuracy. Several learned\nweights also have large magnitudes, making the model sensitive to small feature changes.\nThe team adds L2 regularization to the objective:\nJtotal(w) = Jdata(w) + \u03b1\nX\ni\nw2\ni .\nFor one parameter, the current value is w = 3. The data-loss gradient for that parameter is\n4, the regularization strength is \u03b1 = 2, and the learning rate is \u03b7 = 0.1. For this case, use\nthe regularized gradient\n\u2202Jtotal\n\u2202w\n= 4 + 2\u03b1w.\n\nQuestion 9: What is the updated value of w after one gradient-descent step?",
    "options": [
      "2.0",
      "2.6",
      "1.4",
      "3.6"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "wnew = 3 \u22120.1(16) = 1.4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 2\nSmall-Business Loan Risk Scoring\nA cooperative bank trains a logistic-regression model to predict whether a small-business\nloan application is risky. The model uses standardized features such as debt ratio, monthly\nrevenue, repayment history score, and business age.\nWithout regularization, the model\nreaches very high training accuracy but noticeably lower validation accuracy. Several learned\nweights also have large magnitudes, making the model sensitive to small feature changes.\nThe team adds L2 regularization to the objective:\nJtotal(w) = Jdata(w) + \u03b1\nX\ni\nw2\ni .\nFor one parameter, the current value is w = 3. The data-loss gradient for that parameter is\n4, the regularization strength is \u03b1 = 2, and the learning rate is \u03b7 = 0.1. For this case, use\nthe regularized gradient\n\u2202Jtotal\n\u2202w\n= 4 + 2\u03b1w.\n\nQuestion 10: Which outcome is expected after applying an appropriate L2 penalty?",
    "options": [
      "Training accuracy must become zero for the data shown here.",
      "Validation performance may improve due to reduced overfitting.",
      "All feature weights must become exactly zero.",
      "The model stops using gradient descent under the given conditions."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "L2 regularization can reduce overfitting and improve validation performance, even if training accuracy decreases slightly.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 3\nEnergy Consumption Prediction for an Office Campus\nA facility-management company trains a neural network to predict hourly electricity\nconsumption in an office campus.\nInputs include outside temperature, hour of day, day\ntype, and previous-hour load. The model is trained for many epochs, and both training and\nvalidation loss are monitored after every five epochs.\nEpoch\nTraining Loss\nValidation Loss\n5\n0.62\n0.70\n10\n0.44\n0.52\n15\n0.31\n0.43\n20\n0.22\n0.46\n25\n0.16\n0.51\nThe team uses early stopping because the deployed model must generalize to future days,\nnot only memorize historical operating patterns.\n\nQuestion 11: At which epoch is the validation loss minimum?",
    "options": [
      "Epoch 10",
      "Epoch 20",
      "Epoch 15",
      "Epoch 25"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The smallest validation loss is 0.43, which occurs at epoch 15.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 3\nEnergy Consumption Prediction for an Office Campus\nA facility-management company trains a neural network to predict hourly electricity\nconsumption in an office campus.\nInputs include outside temperature, hour of day, day\ntype, and previous-hour load. The model is trained for many epochs, and both training and\nvalidation loss are monitored after every five epochs.\nEpoch\nTraining Loss\nValidation Loss\n5\n0.62\n0.70\n10\n0.44\n0.52\n15\n0.31\n0.43\n20\n0.22\n0.46\n25\n0.16\n0.51\nThe team uses early stopping because the deployed model must generalize to future days,\nnot only memorize historical operating patterns.\n\nQuestion 12: What pattern after epoch 15 suggests overfitting?",
    "options": [
      "Both losses increase together.",
      "Training loss increases while validation loss decreases.",
      "Training loss becomes exactly zero.",
      "Training loss decreases while validation loss increases."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "After epoch 15, training loss continues decreasing but valida- tion loss increases, indicating worsening generalization.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 3\nEnergy Consumption Prediction for an Office Campus\nA facility-management company trains a neural network to predict hourly electricity\nconsumption in an office campus.\nInputs include outside temperature, hour of day, day\ntype, and previous-hour load. The model is trained for many epochs, and both training and\nvalidation loss are monitored after every five epochs.\nEpoch\nTraining Loss\nValidation Loss\n5\n0.62\n0.70\n10\n0.44\n0.52\n15\n0.31\n0.43\n20\n0.22\n0.46\n25\n0.16\n0.51\nThe team uses early stopping because the deployed model must generalize to future days,\nnot only memorize historical operating patterns.\n\nQuestion 13: Why should early stopping monitor validation loss rather than only training loss?",
    "options": [
      "Validation loss reflects performance on unseen data.",
      "Training loss is not computed during neural-network training.",
      "Validation loss is always exactly equal to test loss.",
      "Training loss cannot decrease across epochs."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Validation loss is used as a proxy for generalization to data not used for weight updates.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 3\nEnergy Consumption Prediction for an Office Campus\nA facility-management company trains a neural network to predict hourly electricity\nconsumption in an office campus.\nInputs include outside temperature, hour of day, day\ntype, and previous-hour load. The model is trained for many epochs, and both training and\nvalidation loss are monitored after every five epochs.\nEpoch\nTraining Loss\nValidation Loss\n5\n0.62\n0.70\n10\n0.44\n0.52\n15\n0.31\n0.43\n20\n0.22\n0.46\n25\n0.16\n0.51\nThe team uses early stopping because the deployed model must generalize to future days,\nnot only memorize historical operating patterns.\n\nQuestion 14: Which statement about early stopping is correct?",
    "options": [
      "It guarantees the globally optimal weights.",
      "It acts as a regularization method by limiting over-training.",
      "It prevents all forms of noise in input data.",
      "It removes the need for a validation set under the case assumptions."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Early stopping limits over-training and therefore acts as a regularization method.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 3\nEnergy Consumption Prediction for an Office Campus\nA facility-management company trains a neural network to predict hourly electricity\nconsumption in an office campus.\nInputs include outside temperature, hour of day, day\ntype, and previous-hour load. The model is trained for many epochs, and both training and\nvalidation loss are monitored after every five epochs.\nEpoch\nTraining Loss\nValidation Loss\n5\n0.62\n0.70\n10\n0.44\n0.52\n15\n0.31\n0.43\n20\n0.22\n0.46\n25\n0.16\n0.51\nThe team uses early stopping because the deployed model must generalize to future days,\nnot only memorize historical operating patterns.\n\nQuestion 15: If the team keeps the model from epoch 25 instead of epoch 15, what is the main risk?",
    "options": [
      "The training set becomes larger automatically.",
      "The model cannot produce numerical predictions.",
      "The validation loss is ignored by definition under the case assumptions.",
      "The model may generalize worse despite lower training loss."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Selecting epoch 25 may overfit the training data and generalize worse than the epoch with minimum validation loss.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 4\nProduct-Surface Image Quality Inspection\nA quality-control team trains a CNN to classify product-surface images into acceptable\nand defective classes. Only 900 labeled images are available. The training split is 70validation\nsplit is 30validation accuracy. The team applies image augmentation during training using\nsmall rotations, horizontal shifts, brightness changes, and mild zooms. Each original training\nimage generates two additional augmented images.\nThe team also adds dropout to a hidden layer. During training, each hidden unit is kept\nwith probability p = 0.8. At test time, the full network is used with appropriate scaling.\nFinally, three independently trained CNNs are averaged to create an ensemble.\n\nQuestion 16: How many original images are in the training split before augmentation?",
    "options": [
      "270",
      "900",
      "630",
      "450"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The training split contains 0.70 \u00d7 900 = 630 images.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 4\nProduct-Surface Image Quality Inspection\nA quality-control team trains a CNN to classify product-surface images into acceptable\nand defective classes. Only 900 labeled images are available. The training split is 70validation\nsplit is 30validation accuracy. The team applies image augmentation during training using\nsmall rotations, horizontal shifts, brightness changes, and mild zooms. Each original training\nimage generates two additional augmented images.\nThe team also adds dropout to a hidden layer. During training, each hidden unit is kept\nwith probability p = 0.8. At test time, the full network is used with appropriate scaling.\nFinally, three independently trained CNNs are averaged to create an ensemble.\n\nQuestion 17: What is the effective training-set size after adding two augmented images per original training image?",
    "options": [
      "1890",
      "1260",
      "630",
      "1530"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Each original contributes one original plus two augmented versions, so 630 \u00d7 3 = 1890.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 4\nProduct-Surface Image Quality Inspection\nA quality-control team trains a CNN to classify product-surface images into acceptable\nand defective classes. Only 900 labeled images are available. The training split is 70validation\nsplit is 30validation accuracy. The team applies image augmentation during training using\nsmall rotations, horizontal shifts, brightness changes, and mild zooms. Each original training\nimage generates two additional augmented images.\nThe team also adds dropout to a hidden layer. During training, each hidden unit is kept\nwith probability p = 0.8. At test time, the full network is used with appropriate scaling.\nFinally, three independently trained CNNs are averaged to create an ensemble.\n\nQuestion 18: What is the main reason augmentation can improve validation accuracy?",
    "options": [
      "It changes all class labels randomly in the stated case setting.",
      "It removes the need to learn features.",
      "It guarantees that training loss is zero.",
      "It exposes the model to realistic input variations."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Augmentation improves robustness by exposing the model to realistic transformations of the inputs.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 4\nProduct-Surface Image Quality Inspection\nA quality-control team trains a CNN to classify product-surface images into acceptable\nand defective classes. Only 900 labeled images are available. The training split is 70validation\nsplit is 30validation accuracy. The team applies image augmentation during training using\nsmall rotations, horizontal shifts, brightness changes, and mild zooms. Each original training\nimage generates two additional augmented images.\nThe team also adds dropout to a hidden layer. During training, each hidden unit is kept\nwith probability p = 0.8. At test time, the full network is used with appropriate scaling.\nFinally, three independently trained CNNs are averaged to create an ensemble.\n\nQuestion 19: During dropout training with keep probability p = 0.8, approximately how many units remain active in a layer of 50 hidden units?",
    "options": [
      "25",
      "10",
      "40",
      "50"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The expected active units are 0.8 \u00d7 50 = 40.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w7-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 7,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week7.pdf",
    "questionText": "Case Study 4\nProduct-Surface Image Quality Inspection\nA quality-control team trains a CNN to classify product-surface images into acceptable\nand defective classes. Only 900 labeled images are available. The training split is 70validation\nsplit is 30validation accuracy. The team applies image augmentation during training using\nsmall rotations, horizontal shifts, brightness changes, and mild zooms. Each original training\nimage generates two additional augmented images.\nThe team also adds dropout to a hidden layer. During training, each hidden unit is kept\nwith probability p = 0.8. At test time, the full network is used with appropriate scaling.\nFinally, three independently trained CNNs are averaged to create an ensemble.\n\nQuestion 20: Why can averaging three independently trained CNNs improve reliability?",
    "options": [
      "It increases the learning rate of each CNN.",
      "It can reduce variance by combining diverse predictions.",
      "It removes all bias from every CNN for the data shown here.",
      "It makes the dataset labels unnecessary."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Averaging diverse models can cancel some individual errors and reduce prediction variance.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 1\nInsurance Claim Approval Prediction\nAn insurance analytics team builds a deep feedforward network to classify whether a\nhealth insurance claim needs manual review. Each record contains numerical features such as\nclaim amount, hospital-risk score, patient-age group, policy duration, and number of previous\nclaims. The output layer uses a sigmoid unit because the final output is a probability.\nIn the first version, the team also uses sigmoid activations in all eight hidden layers.\nTraining starts normally but soon becomes very slow. The gradients reaching early layers\nbecome very small, especially when hidden pre-activation values are large in magnitude. The\nteam replaces the hidden activations with ReLU:\nReLU(x) = max(0, x),\nwhile keeping the sigmoid output layer.\nFor analysis, they compare sigmoid and ReLU\noutputs at x = \u22124 and x = 2. Use \u03c3(2) \u22480.88 and \u03c3(\u22124) \u22480.018.\n\nQuestion 1: Why can sigmoid hidden layers slow down training in a deep network?",
    "options": [
      "They can saturate and produce very small gradients.",
      "They always output negative values under the given conditions.",
      "They remove all nonlinear behavior.",
      "They force every weight to become zero."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Sigmoid units saturate for large positive or negative inputs, making derivatives small and causing vanishing gradients.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 1\nInsurance Claim Approval Prediction\nAn insurance analytics team builds a deep feedforward network to classify whether a\nhealth insurance claim needs manual review. Each record contains numerical features such as\nclaim amount, hospital-risk score, patient-age group, policy duration, and number of previous\nclaims. The output layer uses a sigmoid unit because the final output is a probability.\nIn the first version, the team also uses sigmoid activations in all eight hidden layers.\nTraining starts normally but soon becomes very slow. The gradients reaching early layers\nbecome very small, especially when hidden pre-activation values are large in magnitude. The\nteam replaces the hidden activations with ReLU:\nReLU(x) = max(0, x),\nwhile keeping the sigmoid output layer.\nFor analysis, they compare sigmoid and ReLU\noutputs at x = \u22124 and x = 2. Use \u03c3(2) \u22480.88 and \u03c3(\u22124) \u22480.018.\n\nQuestion 2: What is ReLU(\u22124)?",
    "options": [
      "-4",
      "-1",
      "0",
      "4"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "ReLU outputs zero for negative inputs, so max(0, \u22124) = 0.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 1\nInsurance Claim Approval Prediction\nAn insurance analytics team builds a deep feedforward network to classify whether a\nhealth insurance claim needs manual review. Each record contains numerical features such as\nclaim amount, hospital-risk score, patient-age group, policy duration, and number of previous\nclaims. The output layer uses a sigmoid unit because the final output is a probability.\nIn the first version, the team also uses sigmoid activations in all eight hidden layers.\nTraining starts normally but soon becomes very slow. The gradients reaching early layers\nbecome very small, especially when hidden pre-activation values are large in magnitude. The\nteam replaces the hidden activations with ReLU:\nReLU(x) = max(0, x),\nwhile keeping the sigmoid output layer.\nFor analysis, they compare sigmoid and ReLU\noutputs at x = \u22124 and x = 2. Use \u03c3(2) \u22480.88 and \u03c3(\u22124) \u22480.018.\n\nQuestion 3: What is ReLU(2)?",
    "options": [
      "0",
      "-2",
      "1",
      "2"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "For positive inputs, ReLU returns the input itself.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 1\nInsurance Claim Approval Prediction\nAn insurance analytics team builds a deep feedforward network to classify whether a\nhealth insurance claim needs manual review. Each record contains numerical features such as\nclaim amount, hospital-risk score, patient-age group, policy duration, and number of previous\nclaims. The output layer uses a sigmoid unit because the final output is a probability.\nIn the first version, the team also uses sigmoid activations in all eight hidden layers.\nTraining starts normally but soon becomes very slow. The gradients reaching early layers\nbecome very small, especially when hidden pre-activation values are large in magnitude. The\nteam replaces the hidden activations with ReLU:\nReLU(x) = max(0, x),\nwhile keeping the sigmoid output layer.\nFor analysis, they compare sigmoid and ReLU\noutputs at x = \u22124 and x = 2. Use \u03c3(2) \u22480.88 and \u03c3(\u22124) \u22480.018.\n\nQuestion 4: Which property makes ReLU helpful for positive pre-activation values?",
    "options": [
      "It bounds hidden outputs between 0 and 1, as sigmoid would.",
      "It avoids saturation and keeps a useful gradient.",
      "It converts classification into clustering.",
      "It makes the loss function unnecessary."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "ReLU has derivative 1 for positive inputs, so gradients can flow more effectively.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 1\nInsurance Claim Approval Prediction\nAn insurance analytics team builds a deep feedforward network to classify whether a\nhealth insurance claim needs manual review. Each record contains numerical features such as\nclaim amount, hospital-risk score, patient-age group, policy duration, and number of previous\nclaims. The output layer uses a sigmoid unit because the final output is a probability.\nIn the first version, the team also uses sigmoid activations in all eight hidden layers.\nTraining starts normally but soon becomes very slow. The gradients reaching early layers\nbecome very small, especially when hidden pre-activation values are large in magnitude. The\nteam replaces the hidden activations with ReLU:\nReLU(x) = max(0, x),\nwhile keeping the sigmoid output layer.\nFor analysis, they compare sigmoid and ReLU\noutputs at x = \u22124 and x = 2. Use \u03c3(2) \u22480.88 and \u03c3(\u22124) \u22480.018.\n\nQuestion 5: Why is the output layer still kept as sigmoid in this binary classifier?",
    "options": [
      "It maps the final score to a probability-like value between 0 and 1.",
      "It is required for every hidden layer for the described model.",
      "It guarantees no validation error after training on every future test case.",
      "It prevents all negative input features for the data shown here."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A sigmoid output is suitable for binary probability prediction.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 2\nSolar Power Forecasting for a Rooftop Plant\nA renewable-energy company predicts next-hour solar generation from irradiance, tem-\nperature, cloud-cover index, panel age, and previous-hour generation. The network has seven\nhidden layers with ReLU activations. When weights are initialized with a variance of 1, ac-\ntivations in later layers become unstable and the loss oscillates. The team compares Xavier\nand He initialization:\nXavier: Var(w) = 1\nn,\nHe: Var(w) = 2\nn,\nwhere n is the number of input connections to a neuron.\nConsider a hidden layer with\nn = 200 inputs.\n\nQuestion 6: What problem can poor initialization create in a deep network?",
    "options": [
      "It automatically removes all noise from data.",
      "It can cause activations or gradients to explode or vanish.",
      "It guarantees underfitting only under the given conditions.",
      "It changes regression targets into class labels."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Poor initialization can make signal variance grow or shrink across layers, destabilizing training.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 2\nSolar Power Forecasting for a Rooftop Plant\nA renewable-energy company predicts next-hour solar generation from irradiance, tem-\nperature, cloud-cover index, panel age, and previous-hour generation. The network has seven\nhidden layers with ReLU activations. When weights are initialized with a variance of 1, ac-\ntivations in later layers become unstable and the loss oscillates. The team compares Xavier\nand He initialization:\nXavier: Var(w) = 1\nn,\nHe: Var(w) = 2\nn,\nwhere n is the number of input connections to a neuron.\nConsider a hidden layer with\nn = 200 inputs.\n\nQuestion 7: What is the Xavier variance for n = 200?",
    "options": [
      "0.020",
      "0.200",
      "0.100",
      "0.005"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Xavier variance is 1/200 = 0.005.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 2\nSolar Power Forecasting for a Rooftop Plant\nA renewable-energy company predicts next-hour solar generation from irradiance, tem-\nperature, cloud-cover index, panel age, and previous-hour generation. The network has seven\nhidden layers with ReLU activations. When weights are initialized with a variance of 1, ac-\ntivations in later layers become unstable and the loss oscillates. The team compares Xavier\nand He initialization:\nXavier: Var(w) = 1\nn,\nHe: Var(w) = 2\nn,\nwhere n is the number of input connections to a neuron.\nConsider a hidden layer with\nn = 200 inputs.\n\nQuestion 8: What is the He variance for n = 200?",
    "options": [
      "0.010",
      "0.005",
      "0.020",
      "0.100"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "He variance is 2/200 = 0.01.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 2\nSolar Power Forecasting for a Rooftop Plant\nA renewable-energy company predicts next-hour solar generation from irradiance, tem-\nperature, cloud-cover index, panel age, and previous-hour generation. The network has seven\nhidden layers with ReLU activations. When weights are initialized with a variance of 1, ac-\ntivations in later layers become unstable and the loss oscillates. The team compares Xavier\nand He initialization:\nXavier: Var(w) = 1\nn,\nHe: Var(w) = 2\nn,\nwhere n is the number of input connections to a neuron.\nConsider a hidden layer with\nn = 200 inputs.\n\nQuestion 9: Why is He initialization more suitable for these hidden layers?",
    "options": [
      "The output layer uses no activation.",
      "The network has only one layer.",
      "The hidden layers use ReLU activations.",
      "The target variable is binary in the stated case setting."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "He initialization includes the factor of 2 used for ReLU-style activations.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 2\nSolar Power Forecasting for a Rooftop Plant\nA renewable-energy company predicts next-hour solar generation from irradiance, tem-\nperature, cloud-cover index, panel age, and previous-hour generation. The network has seven\nhidden layers with ReLU activations. When weights are initialized with a variance of 1, ac-\ntivations in later layers become unstable and the loss oscillates. The team compares Xavier\nand He initialization:\nXavier: Var(w) = 1\nn,\nHe: Var(w) = 2\nn,\nwhere n is the number of input connections to a neuron.\nConsider a hidden layer with\nn = 200 inputs.\n\nQuestion 10: Which observation suggests the new initialization improved training stability?",
    "options": [
      "Hidden activations are all forced to zero.",
      "Loss decreases more smoothly across epochs.",
      "No validation set is needed in the stated case setting.",
      "All weights become identical."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Smoothly decreasing loss is evidence that the optimization is more stable.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 3\nWarehouse Sensor Fault Detection\nA logistics company trains a deep network to detect abnormal warehouse conditions from\ntemperature, vibration, humidity, door-event, and power-consumption sensors. The model\nhas ten hidden layers. Direct end-to-end supervised training is slow, and the earliest layers\nlearn weak representations because gradients reaching them are small.\nThe team adopts greedy layer-wise pretraining. First, the layer closest to the input is\ntrained with an unsupervised reconstruction objective.\nIts weights are then frozen, and\nthe next layer is trained using the previous layer\u2019s representation as input. This process\ncontinues until all hidden layers are pretrained. Finally, the output layer is added and the\nfull network is fine-tuned using the labeled abnormal-condition task.\n\nQuestion 11: What is the main goal of greedy layer-wise pretraining here?",
    "options": [
      "To delete the hidden layers before training.",
      "To avoid using input features during both unsupervised pretraining and fine-tuning.",
      "To give each layer a useful initialization before supervised fine-tuning.",
      "To guarantee zero test error in this specific scenario."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Layer-wise pretraining initializes hidden layers so supervised fine-tuning starts from useful representations.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 3\nWarehouse Sensor Fault Detection\nA logistics company trains a deep network to detect abnormal warehouse conditions from\ntemperature, vibration, humidity, door-event, and power-consumption sensors. The model\nhas ten hidden layers. Direct end-to-end supervised training is slow, and the earliest layers\nlearn weak representations because gradients reaching them are small.\nThe team adopts greedy layer-wise pretraining. First, the layer closest to the input is\ntrained with an unsupervised reconstruction objective.\nIts weights are then frozen, and\nthe next layer is trained using the previous layer\u2019s representation as input. This process\ncontinues until all hidden layers are pretrained. Finally, the output layer is added and the\nfull network is fine-tuned using the labeled abnormal-condition task.\n\nQuestion 12: During pretraining of the second hidden layer, what happens to the already trained first layer?",
    "options": [
      "It is randomly reinitialized in the stated case setting.",
      "It is removed from the model.",
      "It is trained with the output labels only.",
      "It is kept fixed while the next layer is trained."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Greedy layer-wise pretraining freezes earlier trained layers be- fore training the next layer.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 3\nWarehouse Sensor Fault Detection\nA logistics company trains a deep network to detect abnormal warehouse conditions from\ntemperature, vibration, humidity, door-event, and power-consumption sensors. The model\nhas ten hidden layers. Direct end-to-end supervised training is slow, and the earliest layers\nlearn weak representations because gradients reaching them are small.\nThe team adopts greedy layer-wise pretraining. First, the layer closest to the input is\ntrained with an unsupervised reconstruction objective.\nIts weights are then frozen, and\nthe next layer is trained using the previous layer\u2019s representation as input. This process\ncontinues until all hidden layers are pretrained. Finally, the output layer is added and the\nfull network is fine-tuned using the labeled abnormal-condition task.\n\nQuestion 13: Why is the first pretraining objective described as unsupervised?",
    "options": [
      "It uses the input data without using the abnormal-condition labels.",
      "It uses no numerical features under the given conditions.",
      "It uses only the final classifier output for the data shown here.",
      "It requires the validation labels to be hidden in the stated case setting."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Reconstruction-based pretraining uses inputs as training sig- nals rather than class labels.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 3\nWarehouse Sensor Fault Detection\nA logistics company trains a deep network to detect abnormal warehouse conditions from\ntemperature, vibration, humidity, door-event, and power-consumption sensors. The model\nhas ten hidden layers. Direct end-to-end supervised training is slow, and the earliest layers\nlearn weak representations because gradients reaching them are small.\nThe team adopts greedy layer-wise pretraining. First, the layer closest to the input is\ntrained with an unsupervised reconstruction objective.\nIts weights are then frozen, and\nthe next layer is trained using the previous layer\u2019s representation as input. This process\ncontinues until all hidden layers are pretrained. Finally, the output layer is added and the\nfull network is fine-tuned using the labeled abnormal-condition task.\n\nQuestion 14: What happens after all hidden layers have been pretrained?",
    "options": [
      "The network is discarded under the given conditions.",
      "The full model is fine-tuned with the supervised task objective.",
      "The input features are replaced by random values.",
      "The loss function is no longer required in the stated case setting."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "After pretraining, the complete network is trained end-to-end on the labeled objective.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 3\nWarehouse Sensor Fault Detection\nA logistics company trains a deep network to detect abnormal warehouse conditions from\ntemperature, vibration, humidity, door-event, and power-consumption sensors. The model\nhas ten hidden layers. Direct end-to-end supervised training is slow, and the earliest layers\nlearn weak representations because gradients reaching them are small.\nThe team adopts greedy layer-wise pretraining. First, the layer closest to the input is\ntrained with an unsupervised reconstruction objective.\nIts weights are then frozen, and\nthe next layer is trained using the previous layer\u2019s representation as input. This process\ncontinues until all hidden layers are pretrained. Finally, the output layer is added and the\nfull network is fine-tuned using the labeled abnormal-condition task.\n\nQuestion 15: Which issue is layer-wise pretraining intended to reduce?",
    "options": [
      "The need to store data files in this specific scenario.",
      "The number of output classes under the case assumptions.",
      "The difficulty of training early layers in a very deep network.",
      "The existence of nonlinear activations under the given conditions."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Pretraining helps early layers learn useful representations be- fore full supervised fine-tuning.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 4\nLaboratory Test Result Prediction\nA diagnostic laboratory predicts whether a sample needs repeat testing based on numer-\nical features such as machine confidence score, reagent age, sample temperature, processing\ntime, and previous calibration drift. The network has six hidden layers. Without batch\nnormalization, training is very sensitive to learning-rate changes because layer input distri-\nbutions shift during training.\nThe team inserts batch normalization after each linear transformation and before ReLU.\nFor one mini-batch, a neuron\u2019s pre-activation values are\n1,\n3,\n5,\n7.\nIgnore learnable scale and shift for the numerical questions.\n\nQuestion 16: What problem does batch normalization primarily address?",
    "options": [
      "It changes labels from binary to continuous.",
      "It removes the need for backpropagation.",
      "It guarantees a perfect classifier in the stated case setting.",
      "It reduces shifting layer-input distributions during training."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Batch normalization stabilizes layer input distributions across mini-batches.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 4\nLaboratory Test Result Prediction\nA diagnostic laboratory predicts whether a sample needs repeat testing based on numer-\nical features such as machine confidence score, reagent age, sample temperature, processing\ntime, and previous calibration drift. The network has six hidden layers. Without batch\nnormalization, training is very sensitive to learning-rate changes because layer input distri-\nbutions shift during training.\nThe team inserts batch normalization after each linear transformation and before ReLU.\nFor one mini-batch, a neuron\u2019s pre-activation values are\n1,\n3,\n5,\n7.\nIgnore learnable scale and shift for the numerical questions.\n\nQuestion 17: What is the mean of the mini-batch values 1, 3, 5, 7?",
    "options": [
      "3",
      "4",
      "5",
      "16"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The mean is (1 + 3 + 5 + 7)/4 = 4.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 4\nLaboratory Test Result Prediction\nA diagnostic laboratory predicts whether a sample needs repeat testing based on numer-\nical features such as machine confidence score, reagent age, sample temperature, processing\ntime, and previous calibration drift. The network has six hidden layers. Without batch\nnormalization, training is very sensitive to learning-rate changes because layer input distri-\nbutions shift during training.\nThe team inserts batch normalization after each linear transformation and before ReLU.\nFor one mini-batch, a neuron\u2019s pre-activation values are\n1,\n3,\n5,\n7.\nIgnore learnable scale and shift for the numerical questions.\n\nQuestion 18: What is the batch variance using the average squared deviation?",
    "options": [
      "4",
      "6",
      "3",
      "5"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The squared deviations are 9, 1, 1, 9, so the variance is 20/4 = 5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 4\nLaboratory Test Result Prediction\nA diagnostic laboratory predicts whether a sample needs repeat testing based on numer-\nical features such as machine confidence score, reagent age, sample temperature, processing\ntime, and previous calibration drift. The network has six hidden layers. Without batch\nnormalization, training is very sensitive to learning-rate changes because layer input distri-\nbutions shift during training.\nThe team inserts batch normalization after each linear transformation and before ReLU.\nFor one mini-batch, a neuron\u2019s pre-activation values are\n1,\n3,\n5,\n7.\nIgnore learnable scale and shift for the numerical questions.\n\nQuestion 19: Where is batch normalization placed in this case?",
    "options": [
      "Only after the output probability for the described model.",
      "Before every input feature is collected.",
      "Between the linear transformation and ReLU activation.",
      "After the final prediction is thresholded."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The case places batch normalization after the linear operation and before ReLU.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w8-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 8,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week8.pdf",
    "questionText": "Case Study 4\nLaboratory Test Result Prediction\nA diagnostic laboratory predicts whether a sample needs repeat testing based on numer-\nical features such as machine confidence score, reagent age, sample temperature, processing\ntime, and previous calibration drift. The network has six hidden layers. Without batch\nnormalization, training is very sensitive to learning-rate changes because layer input distri-\nbutions shift during training.\nThe team inserts batch normalization after each linear transformation and before ReLU.\nFor one mini-batch, a neuron\u2019s pre-activation values are\n1,\n3,\n5,\n7.\nIgnore learnable scale and shift for the numerical questions.\n\nQuestion 20: Why are learnable scale and shift parameters useful in batch normalization?",
    "options": [
      "They allow the network to choose an appropriate normalized representa- tion.",
      "They delete the mini-batch statistics in this specific scenario.",
      "They prevent gradients from being computed under the case assumptions.",
      "They force every activation to remain exactly zero for the described model."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The scale and shift parameters let the network learn the rep- resentation that works best after normalization.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 1\nCustomer Support Ticket Classification\nA telecom company classifies customer support tickets into billing, network, plan-change,\nand device-support categories. After preprocessing 50,000 historical tickets, the team obtains\na vocabulary of 12,000 unique words. As a baseline, every word is represented using a one-\nhot vector of length equal to the vocabulary size. Each vector has exactly one entry equal\nto 1 and all other entries equal to 0. A ticket is represented using a bag-of-words vector\nobtained by adding the one-hot vectors of the words present in it.\nConsider two short processed tickets:\nTicket A: recharge failed refund\nTicket B: recharge plan refund\nBoth tickets are represented using bag-of-words vectors over the same 12,000-word vocabu-\nlary.\n\nQuestion 1: What is the length of each one-hot word vector?",
    "options": [
      "12,000",
      "50,000",
      "3",
      "4"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A one-hot word vector has length equal to the vocabulary size, which is 12,000.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 1\nCustomer Support Ticket Classification\nA telecom company classifies customer support tickets into billing, network, plan-change,\nand device-support categories. After preprocessing 50,000 historical tickets, the team obtains\na vocabulary of 12,000 unique words. As a baseline, every word is represented using a one-\nhot vector of length equal to the vocabulary size. Each vector has exactly one entry equal\nto 1 and all other entries equal to 0. A ticket is represented using a bag-of-words vector\nobtained by adding the one-hot vectors of the words present in it.\nConsider two short processed tickets:\nTicket A: recharge failed refund\nTicket B: recharge plan refund\nBoth tickets are represented using bag-of-words vectors over the same 12,000-word vocabu-\nlary.\n\nQuestion 2: How many non-zero entries does a single one-hot word vector contain?",
    "options": [
      "12,000",
      "0",
      "1",
      "3"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A one-hot vector has exactly one position set to 1.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 1\nCustomer Support Ticket Classification\nA telecom company classifies customer support tickets into billing, network, plan-change,\nand device-support categories. After preprocessing 50,000 historical tickets, the team obtains\na vocabulary of 12,000 unique words. As a baseline, every word is represented using a one-\nhot vector of length equal to the vocabulary size. Each vector has exactly one entry equal\nto 1 and all other entries equal to 0. A ticket is represented using a bag-of-words vector\nobtained by adding the one-hot vectors of the words present in it.\nConsider two short processed tickets:\nTicket A: recharge failed refund\nTicket B: recharge plan refund\nBoth tickets are represented using bag-of-words vectors over the same 12,000-word vocabu-\nlary.\n\nQuestion 3: How many shared words appear in Ticket A and Ticket B?",
    "options": [
      "1",
      "3",
      "0",
      "2"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The shared words are \u201crecharge\u201d and \u201crefund\u201d, so there are 2 shared words.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 1\nCustomer Support Ticket Classification\nA telecom company classifies customer support tickets into billing, network, plan-change,\nand device-support categories. After preprocessing 50,000 historical tickets, the team obtains\na vocabulary of 12,000 unique words. As a baseline, every word is represented using a one-\nhot vector of length equal to the vocabulary size. Each vector has exactly one entry equal\nto 1 and all other entries equal to 0. A ticket is represented using a bag-of-words vector\nobtained by adding the one-hot vectors of the words present in it.\nConsider two short processed tickets:\nTicket A: recharge failed refund\nTicket B: recharge plan refund\nBoth tickets are represented using bag-of-words vectors over the same 12,000-word vocabu-\nlary.\n\nQuestion 4: What is a major limitation of one-hot word vectors?",
    "options": [
      "They are always dense for the data shown here.",
      "They do not directly capture semantic similarity between words.",
      "They require labels for every context window for the described model.",
      "They have variable length for the same vocabulary."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Distinct one-hot vectors are orthogonal, so they do not encode semantic relatedness.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 1\nCustomer Support Ticket Classification\nA telecom company classifies customer support tickets into billing, network, plan-change,\nand device-support categories. After preprocessing 50,000 historical tickets, the team obtains\na vocabulary of 12,000 unique words. As a baseline, every word is represented using a one-\nhot vector of length equal to the vocabulary size. Each vector has exactly one entry equal\nto 1 and all other entries equal to 0. A ticket is represented using a bag-of-words vector\nobtained by adding the one-hot vectors of the words present in it.\nConsider two short processed tickets:\nTicket A: recharge failed refund\nTicket B: recharge plan refund\nBoth tickets are represented using bag-of-words vectors over the same 12,000-word vocabu-\nlary.\n\nQuestion 5: Why can cosine similarity still be useful for bag-of-words ticket vectors?",
    "options": [
      "It measures overlap in word usage while reducing sensitivity to length.",
      "It learns neural hidden layers automatically from the sparse ticket vectors.",
      "It converts sparse vectors into images in this specific scenario.",
      "It guarantees semantic understanding under the given conditions."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Cosine similarity compares vector direction, which reflects word-overlap patterns in bag-of-words vectors.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 2\nProduct Review Term Analysis\nAn online retailer studies product reviews using word co-occurrence statistics.\nThe\ncleaned toy corpus contains four review fragments:\nbattery lasts long\nscreen looks bright\nbattery charges fast\nbright screen response\nThe selected vocabulary is ordered as\n[battery, screen, bright, long, fast].\nThe team uses a context window of 1, so only the immediate left and right words are counted\nas context. The co-occurrence matrix C has one row per target word and one column per\ncontext word.\n\nQuestion 6: What is the size of the co-occurrence matrix for this selected vocabulary?",
    "options": [
      "4 \u00d7 5",
      "5 \u00d7 5",
      "5 \u00d7 4",
      "25 \u00d7 25"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "With five target words and the same five context words, the matrix has size 5 \u00d7 5.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 2\nProduct Review Term Analysis\nAn online retailer studies product reviews using word co-occurrence statistics.\nThe\ncleaned toy corpus contains four review fragments:\nbattery lasts long\nscreen looks bright\nbattery charges fast\nbright screen response\nThe selected vocabulary is ordered as\n[battery, screen, bright, long, fast].\nThe team uses a context window of 1, so only the immediate left and right words are counted\nas context. The co-occurrence matrix C has one row per target word and one column per\ncontext word.\n\nQuestion 7: What does a context window of 1 mean?",
    "options": [
      "Only the target word is counted.",
      "All words in the corpus are counted as context.",
      "The vocabulary is reduced to one word.",
      "Only immediate neighboring words are counted."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Window size 1 uses the immediate left and right neighbors as context.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 2\nProduct Review Term Analysis\nAn online retailer studies product reviews using word co-occurrence statistics.\nThe\ncleaned toy corpus contains four review fragments:\nbattery lasts long\nscreen looks bright\nbattery charges fast\nbright screen response\nThe selected vocabulary is ordered as\n[battery, screen, bright, long, fast].\nThe team uses a context window of 1, so only the immediate left and right words are counted\nas context. The co-occurrence matrix C has one row per target word and one column per\ncontext word.\n\nQuestion 8: In the fragment \u201cbattery lasts long\u201d, how many context contributions does \u201clasts\u201d receive with window size 1?",
    "options": [
      "2",
      "1",
      "0",
      "3"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The word \u201clasts\u201d has \u201cbattery\u201d on the left and \u201clong\u201d on the right.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 2\nProduct Review Term Analysis\nAn online retailer studies product reviews using word co-occurrence statistics.\nThe\ncleaned toy corpus contains four review fragments:\nbattery lasts long\nscreen looks bright\nbattery charges fast\nbright screen response\nThe selected vocabulary is ordered as\n[battery, screen, bright, long, fast].\nThe team uses a context window of 1, so only the immediate left and right words are counted\nas context. The co-occurrence matrix C has one row per target word and one column per\ncontext word.\n\nQuestion 9: How many times are \u201cscreen\u201d and \u201cbright\u201d adjacent in the toy corpus?",
    "options": [
      "0",
      "2",
      "1",
      "3"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "They are immediately adjacent only in \u201cbright screen re- sponse\u201d, so the count is 1.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 2\nProduct Review Term Analysis\nAn online retailer studies product reviews using word co-occurrence statistics.\nThe\ncleaned toy corpus contains four review fragments:\nbattery lasts long\nscreen looks bright\nbattery charges fast\nbright screen response\nThe selected vocabulary is ordered as\n[battery, screen, bright, long, fast].\nThe team uses a context window of 1, so only the immediate left and right words are counted\nas context. The co-occurrence matrix C has one row per target word and one column per\ncontext word.\n\nQuestion 10: What does a row of the co-occurrence matrix represent?",
    "options": [
      "The number of labels in the classifier under the case assumptions.",
      "The vectorial representation of a target word based on its context counts.",
      "The one-hot position of a document category in the downstream product- review classifier.",
      "The learning rate selected for truncated SVD."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Each row stores the target word\u2019s co-occurrence counts with context words.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 3\nLegal Search Term Representation\nA legal search platform builds a word-context co-occurrence matrix from court-order\nsummaries. The cleaned vocabulary has 6,000 words, so the square co-occurrence matrix X\nhas size 6000 \u00d7 6000. The matrix is sparse and high-dimensional. To obtain compact dense\nword representations, the team applies truncated SVD:\nX \u2248Uk\u03a3kV \u22a4\nk ,\nwith k = 200. The rows of Uk\u03a3k are used as dense word vectors for search and clustering. The\nplatform wants related legal terms to be compared through shared context patterns rather\nthan exact word overlap alone, which makes dimensionality reduction useful for retrieval.\n\nQuestion 11: Why is truncated SVD applied here?",
    "options": [
      "To increase the vocabulary size in the stated case setting.",
      "To make every context vector one-hot.",
      "To reduce dimensionality while preserving important structure.",
      "To remove the need for context words in every downstream search task."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Truncated SVD gives compact dense vectors that retain im- portant latent co-occurrence structure.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 3\nLegal Search Term Representation\nA legal search platform builds a word-context co-occurrence matrix from court-order\nsummaries. The cleaned vocabulary has 6,000 words, so the square co-occurrence matrix X\nhas size 6000 \u00d7 6000. The matrix is sparse and high-dimensional. To obtain compact dense\nword representations, the team applies truncated SVD:\nX \u2248Uk\u03a3kV \u22a4\nk ,\nwith k = 200. The rows of Uk\u03a3k are used as dense word vectors for search and clustering. The\nplatform wants related legal terms to be compared through shared context patterns rather\nthan exact word overlap alone, which makes dimensionality reduction useful for retrieval.\n\nQuestion 12: What is the dimension of each reduced word vector when k = 200?",
    "options": [
      "6000",
      "36,000,000",
      "400",
      "200"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The reduced representation has dimension k = 200.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 3\nLegal Search Term Representation\nA legal search platform builds a word-context co-occurrence matrix from court-order\nsummaries. The cleaned vocabulary has 6,000 words, so the square co-occurrence matrix X\nhas size 6000 \u00d7 6000. The matrix is sparse and high-dimensional. To obtain compact dense\nword representations, the team applies truncated SVD:\nX \u2248Uk\u03a3kV \u22a4\nk ,\nwith k = 200. The rows of Uk\u03a3k are used as dense word vectors for search and clustering. The\nplatform wants related legal terms to be compared through shared context patterns rather\nthan exact word overlap alone, which makes dimensionality reduction useful for retrieval.\n\nQuestion 13: What is the size of Uk in this case?",
    "options": [
      "6000 \u00d7 200",
      "200 \u00d7 200",
      "200 \u00d7 6000",
      "6000 \u00d7 6000"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Uk has one row per word and k columns, so its size is 6000\u00d7200.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 3\nLegal Search Term Representation\nA legal search platform builds a word-context co-occurrence matrix from court-order\nsummaries. The cleaned vocabulary has 6,000 words, so the square co-occurrence matrix X\nhas size 6000 \u00d7 6000. The matrix is sparse and high-dimensional. To obtain compact dense\nword representations, the team applies truncated SVD:\nX \u2248Uk\u03a3kV \u22a4\nk ,\nwith k = 200. The rows of Uk\u03a3k are used as dense word vectors for search and clustering. The\nplatform wants related legal terms to be compared through shared context patterns rather\nthan exact word overlap alone, which makes dimensionality reduction useful for retrieval.\n\nQuestion 14: Which advantage does the reduced representation provide?",
    "options": [
      "It makes all unrelated words identical under the given conditions.",
      "It can make similarity computation more efficient.",
      "It prevents any word from appearing in context.",
      "It removes all latent semantic structure."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Comparing 200-dimensional dense vectors is more efficient than using full 6000-dimensional sparse rows.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 3\nLegal Search Term Representation\nA legal search platform builds a word-context co-occurrence matrix from court-order\nsummaries. The cleaned vocabulary has 6,000 words, so the square co-occurrence matrix X\nhas size 6000 \u00d7 6000. The matrix is sparse and high-dimensional. To obtain compact dense\nword representations, the team applies truncated SVD:\nX \u2248Uk\u03a3kV \u22a4\nk ,\nwith k = 200. The rows of Uk\u03a3k are used as dense word vectors for search and clustering. The\nplatform wants related legal terms to be compared through shared context patterns rather\nthan exact word overlap alone, which makes dimensionality reduction useful for retrieval.\n\nQuestion 15: What kind of information can SVD help uncover?",
    "options": [
      "The number of documents in chronological order.",
      "The exact spelling of every rare word.",
      "The chronological order of every document.",
      "Latent patterns in word-context usage."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "SVD can expose latent dimensions that summarize word- context usage patterns.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 4\nSearch Term Similarity Evaluation\nA technical support company compares two word-representation models for query expan-\nsion. For a set of word pairs, human annotators assign relatedness scores. The company\ncomputes cosine similarity between the learned word vectors and then measures how well\nmodel similarities correlate with human scores.\nThe same vectors are also tested on a\nsynonym selection task: given a query word and four candidates, the system chooses the\ncandidate with the highest cosine similarity. For analogy checks of the form a : b :: c :?, the\ncommon search vector is vb \u2212va + vc.\nFor one query word q, cosine similarities to four candidates are:\nA : 0.18,\nB : 0.74,\nC : 0.41,\nD : 0.62.\n\nQuestion 16: Which candidate is selected by the synonym rule?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Candidate B has the largest cosine similarity, 0.74.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 4\nSearch Term Similarity Evaluation\nA technical support company compares two word-representation models for query expan-\nsion. For a set of word pairs, human annotators assign relatedness scores. The company\ncomputes cosine similarity between the learned word vectors and then measures how well\nmodel similarities correlate with human scores.\nThe same vectors are also tested on a\nsynonym selection task: given a query word and four candidates, the system chooses the\ncandidate with the highest cosine similarity. For analogy checks of the form a : b :: c :?, the\ncommon search vector is vb \u2212va + vc.\nFor one query word q, cosine similarities to four candidates are:\nA : 0.18,\nB : 0.74,\nC : 0.41,\nD : 0.62.\n\nQuestion 17: What does a high correlation with human relatedness scores indicate?",
    "options": [
      "The model\u2019s similarity judgments agree well with human judgments.",
      "The vectors remain one-hot after training.",
      "The vocabulary has only one word under the given conditions.",
      "The model ignores cosine similarity during all human-score evaluations."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Higher correlation means model similarities align better with human relatedness ratings.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 4\nSearch Term Similarity Evaluation\nA technical support company compares two word-representation models for query expan-\nsion. For a set of word pairs, human annotators assign relatedness scores. The company\ncomputes cosine similarity between the learned word vectors and then measures how well\nmodel similarities correlate with human scores.\nThe same vectors are also tested on a\nsynonym selection task: given a query word and four candidates, the system chooses the\ncandidate with the highest cosine similarity. For analogy checks of the form a : b :: c :?, the\ncommon search vector is vb \u2212va + vc.\nFor one query word q, cosine similarities to four candidates are:\nA : 0.18,\nB : 0.74,\nC : 0.41,\nD : 0.62.\n\nQuestion 18: In an analogy task a : b :: c :?, what vector operation is commonly used?",
    "options": [
      "va + vb + vc only",
      "va \u2212vb \u2212vc",
      "vb \u2212va + vc",
      "va/vb"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A common analogy query searches near vb \u2212va + vc.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 4\nSearch Term Similarity Evaluation\nA technical support company compares two word-representation models for query expan-\nsion. For a set of word pairs, human annotators assign relatedness scores. The company\ncomputes cosine similarity between the learned word vectors and then measures how well\nmodel similarities correlate with human scores.\nThe same vectors are also tested on a\nsynonym selection task: given a query word and four candidates, the system chooses the\ncandidate with the highest cosine similarity. For analogy checks of the form a : b :: c :?, the\ncommon search vector is vb \u2212va + vc.\nFor one query word q, cosine similarities to four candidates are:\nA : 0.18,\nB : 0.74,\nC : 0.41,\nD : 0.62.\n\nQuestion 19: Why are dense word vectors useful for query expansion?",
    "options": [
      "They make every vector a one-hot vector under the given conditions.",
      "They require no training corpus under the given conditions.",
      "They make every pair of different words orthogonal.",
      "They can place related words near each other in vector space."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Dense embeddings can encode distributional similarity, making related terms closer.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w9-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 9,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week9.pdf",
    "questionText": "Case Study 4\nSearch Term Similarity Evaluation\nA technical support company compares two word-representation models for query expan-\nsion. For a set of word pairs, human annotators assign relatedness scores. The company\ncomputes cosine similarity between the learned word vectors and then measures how well\nmodel similarities correlate with human scores.\nThe same vectors are also tested on a\nsynonym selection task: given a query word and four candidates, the system chooses the\ncandidate with the highest cosine similarity. For analogy checks of the form a : b :: c :?, the\ncommon search vector is vb \u2212va + vc.\nFor one query word q, cosine similarities to four candidates are:\nA : 0.18,\nB : 0.74,\nC : 0.41,\nD : 0.62.\n\nQuestion 20: What metric is used in the synonym rule described in the case?",
    "options": [
      "Training loss under the given conditions",
      "Matrix rank only",
      "Cosine similarity",
      "Vocabulary size"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The case chooses the candidate with the highest cosine simi- larity.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-1",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 1,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 1\nWarehouse Package Image Inspection\nA logistics company uses a CNN to inspect package images for torn labels and damaged\ncorners.\nThe images are captured from a conveyor camera, and small shifts in package\nposition should not change the final inspection decision.\nEach grayscale image has size\n96 \u00d7 96. The first convolution layer applies 3 \u00d7 3 filters with stride 1 and padding 1 so that\nlocal edge and corner evidence can be detected without immediately changing spatial size.\nLater, a 2 \u00d7 2 max-pooling layer with stride 2 is used to reduce spatial size while retaining\nstrong local responses.\n\nQuestion 1: What is the output spatial size after the 3 \u00d7 3 convolution with stride 1 and padding 1?",
    "options": [
      "96 \u00d7 96",
      "94 \u00d7 94",
      "98 \u00d7 98",
      "48 \u00d7 48"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "(96 + 2(1) \u22123)/1 + 1 = 96, so the spatial size is preserved.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-2",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 2,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 1\nWarehouse Package Image Inspection\nA logistics company uses a CNN to inspect package images for torn labels and damaged\ncorners.\nThe images are captured from a conveyor camera, and small shifts in package\nposition should not change the final inspection decision.\nEach grayscale image has size\n96 \u00d7 96. The first convolution layer applies 3 \u00d7 3 filters with stride 1 and padding 1 so that\nlocal edge and corner evidence can be detected without immediately changing spatial size.\nLater, a 2 \u00d7 2 max-pooling layer with stride 2 is used to reduce spatial size while retaining\nstrong local responses.\n\nQuestion 2: If the convolution layer uses 24 filters, how many output feature maps are produced?",
    "options": [
      "3",
      "1",
      "24",
      "96"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Each convolution filter produces one feature map.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-3",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 3,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 1\nWarehouse Package Image Inspection\nA logistics company uses a CNN to inspect package images for torn labels and damaged\ncorners.\nThe images are captured from a conveyor camera, and small shifts in package\nposition should not change the final inspection decision.\nEach grayscale image has size\n96 \u00d7 96. The first convolution layer applies 3 \u00d7 3 filters with stride 1 and padding 1 so that\nlocal edge and corner evidence can be detected without immediately changing spatial size.\nLater, a 2 \u00d7 2 max-pooling layer with stride 2 is used to reduce spatial size while retaining\nstrong local responses.\n\nQuestion 3: What is the output size after applying 2 \u00d7 2 max pooling with stride 2 to a 96 \u00d7 96 feature map?",
    "options": [
      "96 \u00d7 96",
      "24 \u00d7 24",
      "94 \u00d7 94",
      "48 \u00d7 48"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Pooling with size 2 and stride 2 halves both height and width.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-4",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 4,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 1\nWarehouse Package Image Inspection\nA logistics company uses a CNN to inspect package images for torn labels and damaged\ncorners.\nThe images are captured from a conveyor camera, and small shifts in package\nposition should not change the final inspection decision.\nEach grayscale image has size\n96 \u00d7 96. The first convolution layer applies 3 \u00d7 3 filters with stride 1 and padding 1 so that\nlocal edge and corner evidence can be detected without immediately changing spatial size.\nLater, a 2 \u00d7 2 max-pooling layer with stride 2 is used to reduce spatial size while retaining\nstrong local responses.\n\nQuestion 4: Why is pooling useful for this inspection task?",
    "options": [
      "It removes the need for convolution under the case assumptions.",
      "It reduces spatial size and gives some robustness to small shifts.",
      "It increases every image dimension in the stated case setting.",
      "It converts grayscale images into RGB images in this specific scenario."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Pooling reduces resolution while preserving strong local evi- dence.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-5",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 5,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 1\nWarehouse Package Image Inspection\nA logistics company uses a CNN to inspect package images for torn labels and damaged\ncorners.\nThe images are captured from a conveyor camera, and small shifts in package\nposition should not change the final inspection decision.\nEach grayscale image has size\n96 \u00d7 96. The first convolution layer applies 3 \u00d7 3 filters with stride 1 and padding 1 so that\nlocal edge and corner evidence can be detected without immediately changing spatial size.\nLater, a 2 \u00d7 2 max-pooling layer with stride 2 is used to reduce spatial size while retaining\nstrong local responses.\n\nQuestion 5: What do early convolution filters usually learn in such image tasks?",
    "options": [
      "Low-level patterns such as edges and corners",
      "The final class probability only",
      "The batch size for the described model",
      "The optimizer momentum in this specific scenario"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Early CNN filters commonly detect simple visual patterns such as edges, corners, and textures.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-6",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 6,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 2\nCrop Image Disease Detection\nAn agronomy lab trains a CNN to classify crop leaf images as healthy or diseased. Re-\nsearchers need to verify that the network focuses on leaf lesions rather than background soil.\nThey use occlusion analysis by masking small patches and observing the change in disease\nprobability. They also inspect activation maps from early and deeper layers. This review is\nimportant because a high validation score alone would not show whether the model is using\nbiologically meaningful lesion patterns. The lab therefore treats visualization as a diagnostic\ntool for understanding which regions and filters influence the prediction.\n\nQuestion 6: If masking one leaf patch sharply reduces disease probability, what does that suggest?",
    "options": [
      "The patch is irrelevant to the prediction and all class evidence.",
      "The patch contains information important for the prediction.",
      "The model has no learned filters for the data shown here.",
      "The image has no disease signal for the data shown here."
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "A large confidence drop means the model relied strongly on that region.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-7",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 7,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 2\nCrop Image Disease Detection\nAn agronomy lab trains a CNN to classify crop leaf images as healthy or diseased. Re-\nsearchers need to verify that the network focuses on leaf lesions rather than background soil.\nThey use occlusion analysis by masking small patches and observing the change in disease\nprobability. They also inspect activation maps from early and deeper layers. This review is\nimportant because a high validation score alone would not show whether the model is using\nbiologically meaningful lesion patterns. The lab therefore treats visualization as a diagnostic\ntool for understanding which regions and filters influence the prediction.\n\nQuestion 7: What is the name of the technique that masks image regions and observes prediction changes?",
    "options": [
      "Batch normalization",
      "Weight decay",
      "Dropout",
      "Occlusion analysis"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Occlusion analysis studies sensitivity by hiding parts of the input.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-8",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 8,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 2\nCrop Image Disease Detection\nAn agronomy lab trains a CNN to classify crop leaf images as healthy or diseased. Re-\nsearchers need to verify that the network focuses on leaf lesions rather than background soil.\nThey use occlusion analysis by masking small patches and observing the change in disease\nprobability. They also inspect activation maps from early and deeper layers. This review is\nimportant because a high validation score alone would not show whether the model is using\nbiologically meaningful lesion patterns. The lab therefore treats visualization as a diagnostic\ntool for understanding which regions and filters influence the prediction.\n\nQuestion 8: Why are first-layer filters usually easier to interpret?",
    "options": [
      "They operate directly on local pixel patterns.",
      "They contain no weights in this specific scenario.",
      "They always output class labels.",
      "They are identical across all filters."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "First-layer filters respond to visible pixel-level features such as edges and textures.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-9",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 9,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 2\nCrop Image Disease Detection\nAn agronomy lab trains a CNN to classify crop leaf images as healthy or diseased. Re-\nsearchers need to verify that the network focuses on leaf lesions rather than background soil.\nThey use occlusion analysis by masking small patches and observing the change in disease\nprobability. They also inspect activation maps from early and deeper layers. This review is\nimportant because a high validation score alone would not show whether the model is using\nbiologically meaningful lesion patterns. The lab therefore treats visualization as a diagnostic\ntool for understanding which regions and filters influence the prediction.\n\nQuestion 9: A neuron that activates strongly for diseased leaves but weakly for healthy leaves has likely learned what?",
    "options": [
      "The file name pattern in this specific scenario",
      "A disease-related visual feature",
      "The learning rate schedule",
      "A fixed image size only"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Class-selective activation suggests the neuron detects a disease- relevant pattern.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-10",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 10,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 2\nCrop Image Disease Detection\nAn agronomy lab trains a CNN to classify crop leaf images as healthy or diseased. Re-\nsearchers need to verify that the network focuses on leaf lesions rather than background soil.\nThey use occlusion analysis by masking small patches and observing the change in disease\nprobability. They also inspect activation maps from early and deeper layers. This review is\nimportant because a high validation score alone would not show whether the model is using\nbiologically meaningful lesion patterns. The lab therefore treats visualization as a diagnostic\ntool for understanding which regions and filters influence the prediction.\n\nQuestion 10: In gradient-based visualization, what does a large gradient magnitude for a pixel indicate?",
    "options": [
      "The pixel has no influence for the data shown here.",
      "The pixel is outside the image.",
      "The activation is sensitive to that pixel.",
      "The filter has zero parameters."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Large gradients indicate that small pixel changes can strongly affect the activation.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-11",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 11,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 3\nRoad Surface Image Classification\nA transport analytics team classifies road-surface images into smooth, cracked, pothole,\nand waterlogged categories. They compare VGG-style stacks of 3 \u00d7 3 filters, Inception-style\nparallel filters, and ResNet-style skip connections. The images contain both small cracks\nand larger road patterns, so features at multiple spatial scales are important. The team is\nchoosing an architecture for a field system that must detect fine texture changes without\nlosing larger context such as standing water or pothole boundaries. The comparison focuses\non how different CNN designs build depth, combine filter sizes, and preserve gradient flow\nduring training.\n\nQuestion 11: Why does VGG prefer stacks of small 3 \u00d7 3 filters?",
    "options": [
      "To remove nonlinearities in the stated case setting.",
      "To avoid feature maps throughout the network.",
      "To force all images to be grayscale before every convolutional layer.",
      "To build deeper representations with controlled parameter growth."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Stacked small filters increase effective receptive field while keeping parameters manageable.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-12",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 12,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 3\nRoad Surface Image Classification\nA transport analytics team classifies road-surface images into smooth, cracked, pothole,\nand waterlogged categories. They compare VGG-style stacks of 3 \u00d7 3 filters, Inception-style\nparallel filters, and ResNet-style skip connections. The images contain both small cracks\nand larger road patterns, so features at multiple spatial scales are important. The team is\nchoosing an architecture for a field system that must detect fine texture changes without\nlosing larger context such as standing water or pothole boundaries. The comparison focuses\non how different CNN designs build depth, combine filter sizes, and preserve gradient flow\nduring training.\n\nQuestion 12: What is the main purpose of Inception-style parallel filters?",
    "options": [
      "To delete pooling layers.",
      "To use only one spatial scale.",
      "To capture features at multiple spatial scales.",
      "To remove convolution in this specific scenario."
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Parallel filters of different sizes detect fine and coarse features in the same module.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-13",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 13,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 3\nRoad Surface Image Classification\nA transport analytics team classifies road-surface images into smooth, cracked, pothole,\nand waterlogged categories. They compare VGG-style stacks of 3 \u00d7 3 filters, Inception-style\nparallel filters, and ResNet-style skip connections. The images contain both small cracks\nand larger road patterns, so features at multiple spatial scales are important. The team is\nchoosing an architecture for a field system that must detect fine texture changes without\nlosing larger context such as standing water or pothole boundaries. The comparison focuses\non how different CNN designs build depth, combine filter sizes, and preserve gradient flow\nduring training.\n\nQuestion 13: Why do ResNet skip connections help very deep networks train?",
    "options": [
      "They improve information and gradient flow.",
      "They remove the input image.",
      "They replace all filters with one scalar.",
      "They make the output size independent of stride."
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Skip connections provide direct paths that ease optimization in deep networks.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-14",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 14,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 3\nRoad Surface Image Classification\nA transport analytics team classifies road-surface images into smooth, cracked, pothole,\nand waterlogged categories. They compare VGG-style stacks of 3 \u00d7 3 filters, Inception-style\nparallel filters, and ResNet-style skip connections. The images contain both small cracks\nand larger road patterns, so features at multiple spatial scales are important. The team is\nchoosing an architecture for a field system that must detect fine texture changes without\nlosing larger context such as standing water or pothole boundaries. The comparison focuses\non how different CNN designs build depth, combine filter sizes, and preserve gradient flow\nduring training.\n\nQuestion 14: A module computes H(x) = F(x) + x. What architecture idea does this represent?",
    "options": [
      "Bag-of-words",
      "Residual learning",
      "One-hot encoding",
      "Average pooling only"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Residual blocks add the input x to the learned residual func- tion F(x).",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-15",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 15,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 3\nRoad Surface Image Classification\nA transport analytics team classifies road-surface images into smooth, cracked, pothole,\nand waterlogged categories. They compare VGG-style stacks of 3 \u00d7 3 filters, Inception-style\nparallel filters, and ResNet-style skip connections. The images contain both small cracks\nand larger road patterns, so features at multiple spatial scales are important. The team is\nchoosing an architecture for a field system that must detect fine texture changes without\nlosing larger context such as standing water or pothole boundaries. The comparison focuses\non how different CNN designs build depth, combine filter sizes, and preserve gradient flow\nduring training.\n\nQuestion 15: Which architecture is most directly suited to mixing 1 \u00d7 1, 3 \u00d7 3, and 5 \u00d7 5 convolutions in parallel?",
    "options": [
      "Inception in this specific scenario",
      "A single-layer perceptron",
      "Plain linear regression",
      "A one-hot encoder for the described model"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Inception modules use parallel convolution branches with dif- ferent filter sizes.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-16",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 16,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 4\nSatellite Land-Cover Image Classification\nA satellite-imaging team classifies 64 \u00d7 64 RGB patches into urban, forest, water, and\nfarmland. One convolution layer uses 32 filters, each of size 5 \u00d7 5, with stride 1 and no\npadding. Another stage uses global average pooling to reduce a final 8 \u00d7 8 \u00d7 128 feature\ntensor into a 128-dimensional vector before classification. The analysts need to estimate\nboth spatial output sizes and parameter counts before scaling the model to many satellite\ntiles. They also want to understand why global average pooling can summarize feature maps\nwithout introducing a very large dense layer.\n\nQuestion 16: What is the output spatial size after the 5\u00d75, stride 1, no-padding convolution on a 64 \u00d7 64 image?",
    "options": [
      "64 \u00d7 64",
      "32 \u00d7 32",
      "60 \u00d7 60",
      "68 \u00d7 68"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "(64 \u22125)/1 + 1 = 60.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-17",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 17,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 4\nSatellite Land-Cover Image Classification\nA satellite-imaging team classifies 64 \u00d7 64 RGB patches into urban, forest, water, and\nfarmland. One convolution layer uses 32 filters, each of size 5 \u00d7 5, with stride 1 and no\npadding. Another stage uses global average pooling to reduce a final 8 \u00d7 8 \u00d7 128 feature\ntensor into a 128-dimensional vector before classification. The analysts need to estimate\nboth spatial output sizes and parameter counts before scaling the model to many satellite\ntiles. They also want to understand why global average pooling can summarize feature maps\nwithout introducing a very large dense layer.\n\nQuestion 17: How many output channels are produced by 32 filters?",
    "options": [
      "5",
      "32",
      "64",
      "128"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "The output depth equals the number of filters.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-18",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 18,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 4\nSatellite Land-Cover Image Classification\nA satellite-imaging team classifies 64 \u00d7 64 RGB patches into urban, forest, water, and\nfarmland. One convolution layer uses 32 filters, each of size 5 \u00d7 5, with stride 1 and no\npadding. Another stage uses global average pooling to reduce a final 8 \u00d7 8 \u00d7 128 feature\ntensor into a 128-dimensional vector before classification. The analysts need to estimate\nboth spatial output sizes and parameter counts before scaling the model to many satellite\ntiles. They also want to understand why global average pooling can summarize feature maps\nwithout introducing a very large dense layer.\n\nQuestion 18: How many weight parameters are in one 5 \u00d7 5 RGB filter, ignoring bias?",
    "options": [
      "25",
      "50",
      "125",
      "75"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "One filter spans all 3 input channels, so 5 \u00d7 5 \u00d7 3 = 75.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-19",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 19,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 4\nSatellite Land-Cover Image Classification\nA satellite-imaging team classifies 64 \u00d7 64 RGB patches into urban, forest, water, and\nfarmland. One convolution layer uses 32 filters, each of size 5 \u00d7 5, with stride 1 and no\npadding. Another stage uses global average pooling to reduce a final 8 \u00d7 8 \u00d7 128 feature\ntensor into a 128-dimensional vector before classification. The analysts need to estimate\nboth spatial output sizes and parameter counts before scaling the model to many satellite\ntiles. They also want to understand why global average pooling can summarize feature maps\nwithout introducing a very large dense layer.\n\nQuestion 19: What is the output dimension after global average pooling of an 8 \u00d7 8 \u00d7 128 tensor?",
    "options": [
      "64",
      "1024",
      "128",
      "8192"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Global average pooling averages each of the 128 feature maps to one value.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  },
  {
    "id": "q-dl-w10-20",
    "courseId": "course-deep-learning-master",
    "weekNumber": 10,
    "originalQuestionNumber": 20,
    "sourcePdfName": "DeepLearning_July_Oct_2026_Week10.pdf",
    "questionText": "Case Study 4\nSatellite Land-Cover Image Classification\nA satellite-imaging team classifies 64 \u00d7 64 RGB patches into urban, forest, water, and\nfarmland. One convolution layer uses 32 filters, each of size 5 \u00d7 5, with stride 1 and no\npadding. Another stage uses global average pooling to reduce a final 8 \u00d7 8 \u00d7 128 feature\ntensor into a 128-dimensional vector before classification. The analysts need to estimate\nboth spatial output sizes and parameter counts before scaling the model to many satellite\ntiles. They also want to understand why global average pooling can summarize feature maps\nwithout introducing a very large dense layer.\n\nQuestion 20: Why can global average pooling reduce parameters compared with flattening followed by a large fully connected layer?",
    "options": [
      "It increases the spatial dimensions.",
      "It removes all learned filters in this specific scenario.",
      "It increases the number of dense connections.",
      "It produces one summary value per feature map."
    ],
    "correctAnswerIndex": 3,
    "answerSource": "PDF",
    "isApproved": true,
    "explanation": "Global average pooling avoids connecting every spatial position to a large dense layer.",
    "createdAt": "2026-10-13T13:00:00.000Z"
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  ...IIOT_6_WEEKS_QUESTIONS,
  ...IIOT_WEEKS_7_8_9_QUESTIONS,
  ...IIOT_WEEK_10_QUESTIONS,
  ...HRM_QUESTIONS,
  ...DL_QUESTIONS,
];
