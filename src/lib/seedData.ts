import { Course, Question } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-iiot-cps-master',
    code: 'IIOT-CPS-101',
    name: 'Industrial IoT 4.0 and Cyber Physical Systems',
    description: 'Comprehensive Question Bank covering Industrial IoT, Smart Manufacturing, and Cyber-Physical Systems.',
    totalQuestions: 135,
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the Industrial IoT edge-to-cloud hierarchy, what is the primary role of Fog Computing compared to Edge Computing?",
    "options": [
      "Fog computing operates exclusively on cloud data centers with no local processing",
      "Fog computing acts as an intermediate decentralized layer that orchestrates and aggregates computation between edge devices and the central cloud",
      "Fog computing replaces all industrial actuators with software simulators",
      "Fog computing requires analog signal lines without IP connectivity"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Fog computing acts as an architectural layer distributing computing, networking, and storage resources closer to the edge, orchestrating data between local edge devices and the centralized cloud.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 96,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which latency threshold is typically mandated for hard real-time closed-loop motion control in Cyber-Physical Manufacturing systems?",
    "options": [
      "100 milliseconds to 1 second",
      "Sub-millisecond to a few milliseconds (< 1ms to 10ms)",
      "10 seconds to 30 seconds",
      "500 milliseconds to 2 seconds"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Hard real-time motion control and robotic actuation in CPS require deterministic cycle times typically ranging from sub-milliseconds up to 10 milliseconds.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 97,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is Complex Event Processing (CEP) primarily used for at the industrial edge?",
    "options": [
      "Formatting raw electrical voltages into AC waveforms",
      "Analyzing multiple streaming sensor events in real time to detect operational anomalies or emergency conditions",
      "Archiving petabytes of static historical cold data onto magnetic tape",
      "Generating analog clock pulses for microcontrollers"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "CEP processes continuous real-time streams of events across multiple industrial sensors to identify patterns, correlations, and anomalies without waiting for cloud batch processing.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 98,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Why are lightweight containerization technologies (such as Docker) widely adopted in industrial edge computing?",
    "options": [
      "Containers eliminate the need for an underlying CPU",
      "Containers allow microservices and analytics to be packaged, isolated, deployed, and updated reliably across heterogeneous edge hardware",
      "Containers convert all digital protocols to analog current loops (4-20 mA)",
      "Containers completely prevent any physical device maintenance"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Containers provide resource-efficient encapsulation, portability, and isolation, allowing edge analytic microservices to run consistently across diverse industrial IPCs and gateways.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 99,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which major advantage does edge data filtering and deduplication offer to industrial enterprises?",
    "options": [
      "Drastic reduction of uplink bandwidth consumption and cloud storage overheads",
      "Elimination of all local physical sensor hardware",
      "Forced requirement for satellite communications only",
      "Lowering the electrical voltage required to power factory machines"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Filtering high-frequency raw telemetry at the edge transmits only meaningful deviations or aggregations to the cloud, conserving costly enterprise network bandwidth and cloud ingress fees.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 100,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the event of a total WAN/Internet link disruption, an autonomous industrial edge controller should:",
    "options": [
      "Immediately shut down all plant operations and discard all local sensor data",
      "Continue deterministic local control loops and cache telemetry locally until connectivity is restored",
      "Erase its own firmware to prevent eavesdropping",
      "Transmit unencrypted broadcast packets across public networks"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Edge autonomy ensures local cyber-physical control loops continue uninterrupted during network outages, while local store-and-forward buffers protect telemetry data.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 101,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which security model dictates that every edge node, user, and device must be explicitly authenticated and authorized regardless of its network location?",
    "options": [
      "Perimeter-only boundary defense",
      "Zero Trust Architecture (ZTA)",
      "Open Gateway Protocol (OGP)",
      "Unrestricted Broadcast Architecture"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Zero Trust Architecture operates on the principle of 'never trust, always verify', requiring continuous authentication and micro-segmentation for all industrial edge nodes.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 102,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "When integrating brownfield legacy factory equipment into an IIoT architecture, an Edge Gateway is essential because it:",
    "options": [
      "Translates legacy fieldbus protocols (Modbus, Profibus, CAN) into modern secure IP protocols (OPC UA, MQTT)",
      "Converts physical machines into pure virtual simulation models without hardware",
      "Replaces all copper wiring with wireless satellite dishes",
      "Changes the physical dimensions of factory motors"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Edge gateways bridge legacy industrial protocols (Modbus, CAN, Profibus) with modern IoT protocols (OPC UA, MQTT, HTTPS), enabling brownfield digitization without replacing legacy machines.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 103,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which operating system characteristics are required for hard real-time edge computing in CPS?",
    "options": [
      "Non-preemptive multitasking with unpredictable garbage collection pauses",
      "Deterministic interrupt response time, preemptive kernel, and bounded task scheduling",
      "Single-threaded execution with no hardware timer access",
      "Mandatory graphical user interface rendering on all execution paths"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Real-Time Operating Systems (RTOS) like FreeRTOS, VxWorks, or Zephyr provide deterministic interrupt latencies and bounded scheduling guarantees critical for CPS.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 104,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which cryptographic protocol is the standard for securing edge-to-cloud telemetry over TCP connections?",
    "options": [
      "Telnet with MD5 checksums",
      "Transport Layer Security (TLS 1.3) with mutual authentication (mTLS)",
      "Unencrypted HTTP with basic authentication",
      "Rot13 symmetric substitution"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "mTLS provides both encryption in transit and cryptographic proof of identity for both the edge device and cloud endpoint using X.509 digital certificates.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 105,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "According to the OpenFog Reference Architecture, which dimension describes the horizontal scalability of fog computing across distributed nodes?",
    "options": [
      "Hierarchical cloud-only nesting",
      "Peer-to-peer inter-fog collaboration and mesh communication",
      "Single centralized mainframe control",
      "Linear point-to-point unswitched copper link"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "OpenFog Architecture supports peer-to-peer inter-fog node collaboration along horizontal planes in addition to vertical hierarchy towards the cloud.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 106,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What distinguishes an edge analytics inference pipeline from a centralized cloud training pipeline?",
    "options": [
      "Edge pipelines train 100-billion parameter models from scratch continuously",
      "Edge pipelines execute lightweight pre-trained models (quantized/pruned) for low-latency scoring and anomaly detection",
      "Cloud pipelines can only process analog signals",
      "Edge inference cannot process numerical data"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Model training occurs on compute-intensive cloud GPU clusters, while optimized, quantized models (e.g. TinyML, ONNX, TensorRT) run inference locally at the edge.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 107,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which metric best quantifies jitter in industrial edge networking?",
    "options": [
      "Total hard disk storage capacity",
      "The statistical variation or standard deviation in packet arrival delay over time",
      "The color temperature of the optical fiber indicator LED",
      "The physical weight of the Ethernet cable"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Jitter is the deviation in packet latency. In deterministic CPS control, minimal jitter is just as crucial as low mean latency.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 108,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is the primary benefit of deploying local MQTT message brokers on industrial edge gateways?",
    "options": [
      "Enables high-frequency local pub/sub messaging among factory cell devices independent of cloud availability",
      "Eliminates the need for any IP addressing in the plant",
      "Increases the latency of local actuator commands by 100x",
      "Forces all sensor values to be binary booleans only"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "A local MQTT broker at the edge facilitates high-speed, decoupled communication between local machines, sensors, and HMIs without relying on external cloud latency or availability.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 109,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which hardware mechanism provides cryptographic key storage and hardware-rooted attestation for edge computing appliances?",
    "options": [
      "Trusted Platform Module (TPM 2.0) or Secure Element",
      "Dynamic Random Access Memory (DRAM)",
      "Standard SATA Hard Disk drive spindle",
      "Unshielded twisted pair copper wire"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "TPMs and hardware Secure Elements protect private keys against extraction and provide measured boot attestation verifying that edge firmware has not been tampered with.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 110,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What are the five sequential levels of the widely adopted 5C architecture for Cyber-Physical Systems (CPS)?",
    "options": [
      "Connection, Conversion, Cyber, Cognition, and Configuration",
      "Cloud, Compute, Cable, Copper, and Control",
      "Client, Compiler, Cipher, Channel, and Cursor",
      "Capture, Compress, Compute, Crash, and Clear"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The 5C architecture proposed by Lee et al. defines five tiers: Connection (Level 1), Conversion (Level 2), Cyber (Level 3), Cognition (Level 4), and Configuration (Level 5).",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 111,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the 5C CPS architecture, what is the core responsibility of Level 1 (Connection Level)?",
    "options": [
      "Generating strategic business intelligence reports for executives",
      "Acquiring reliable and accurate raw data from machines, smart sensors, and controllers",
      "Predicting future financial market trends",
      "Simulating 3D virtual reality factory tours"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Level 1 (Connection) focuses on seamless, noise-free sensor data acquisition, plug-and-play communication, and field telemetry gathering.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 112,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What primary transformation occurs at Level 2 (Conversion Level) of the 5C CPS architecture?",
    "options": [
      "Raw sensor data is transformed into actionable information and health assessment metrics",
      "Digital data is converted into analog telephone tones",
      "Electric alternating current is converted to mechanical coal combustion",
      "All text strings are translated into human spoken audio"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Conversion level calculates condition indicators, health degradation indices, and remaining useful life (RUL) from raw sensor streams.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 113,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which artifact functions as the information hub in Level 3 (Cyber Level) of the 5C architecture?",
    "options": [
      "A manual logbook kept on the shop floor",
      "A Digital Twin model representing physical assets and performing fleet-level peer comparison",
      "A standalone analog voltmeter",
      "A physical magnetic compass"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Level 3 (Cyber) acts as the central information hub where Digital Twins aggregate machine information to perform comparative peer-to-peer fleet analytics.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 114,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Level 4 (Cognition Level) in a Cyber-Physical System delivers which primary capability?",
    "options": [
      "Generating comprehensive diagnostics, comparative expert insights, and prioritizing maintenance decisions for human operators",
      "Replacing copper wires with plastic tubes",
      "Deleting past test attempts to save hard drive space",
      "Turning off all factory lights during night shifts"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Cognition level presents synthesized diagnostic knowledge and decision-support optimization strategies to machine operators and management.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 115,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What distinguishes Level 5 (Configuration Level) in the 5C architecture?",
    "options": [
      "It closes the feedback control loop by applying corrective supervisory actions back to the physical actuators and machines",
      "It only prints paper spreadsheets for manual filing",
      "It prevents any data from flowing back to physical hardware",
      "It resets all passwords to blank strings"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Level 5 (Configuration) represents self-configuration and self-adaptation, sending supervisory feedback control decisions back to the physical world.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 116,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "A Digital Twin differs from a standard 3D CAD computer model because a Digital Twin:",
    "options": [
      "Has a continuous bidirectional or synchronized data link with its physical counterpart throughout its operational lifecycle",
      "Cannot be rendered on a computer screen",
      "Is always made of physical clay and wire",
      "Does not model any physical dimensions"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "A Digital Twin is a living digital replica that maintains real-time bidirectional synchronization with the state, telemetry, and environment of its physical asset.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 117,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is Hardware-in-the-Loop (HIL) simulation used for in CPS engineering?",
    "options": [
      "Testing real embedded controllers against mathematical real-time simulations of the physical plant environment",
      "Replacing digital software with mechanical hand cranks",
      "Calculating employee payroll taxes",
      "Measuring ambient room acoustic volume"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "HIL tests actual embedded hardware controllers by connecting their I/O directly to a real-time computerized mathematical simulator mimicking the physical machine.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 118,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which characteristic defines a Smart Actuator in Industry 4.0?",
    "options": [
      "Only responds to manually turned hand valves",
      "Integrates microprocessors, sensors, self-diagnostic capabilities, and network communication alongside mechanical motion",
      "Operates without any electrical or mechanical power",
      "Requires constant mechanical rewinding"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Smart actuators incorporate onboard processing, position/load sensors, digital bus connectivity, and self-calibration to provide closed-loop control and diagnostic feedback.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 119,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In the context of RAMI 4.0 (Reference Architectural Model Industrie 4.0), what does the 'Asset Administration Shell' (AAS) represent?",
    "options": [
      "The standardized digital representation and API wrapper that exposes an asset's data and capabilities to Industry 4.0 networks",
      "A physical metal enclosure that protects machinery from rain",
      "A legal contract signed between industrial suppliers",
      "A shell script used only for formatting floppy disks"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Asset Administration Shell (AAS) is the digital standardized container describing the properties, capabilities, and submodels of an asset in the Industry 4.0 ecosystem.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 120,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which cyber-physical vulnerability was famously exploited by the Stuxnet worm against industrial centrifuge controllers?",
    "options": [
      "Overcharging industrial office laptops via USB cables",
      "Intercepting and altering frequency converter commands while spoofing normal telemetry to monitoring operators",
      "Physically cutting overhead high-voltage transmission lines",
      "Flooding human email inboxes with marketing spam"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Stuxnet manipulated PLC control code to alter motor centrifuge rotational speeds while falsifying recorded sensor telemetry to convince human operators all parameters were normal.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 121,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What are the three dimensional axes of the RAMI 4.0 reference architecture?",
    "options": [
      "Hierarchy Levels, Life Cycle & Value Stream, and Layers",
      "Width, Height, and Depth",
      "Voltage, Current, and Resistance",
      "Sensors, Actuators, and Cables"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "RAMI 4.0 maps industrial systems along 3 axes: Layers (from Asset to Business), Life Cycle & Value Stream (IEC 62890), and Hierarchy Levels (IEC 62264 / IEC 61512).",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 122,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which mathematical formalism is standard for modeling the continuous-time dynamics of physical processes in Cyber-Physical Systems?",
    "options": [
      "State-space differential equations: dx/dt = Ax + Bu, y = Cx + Du",
      "Unordered associative word dictionaries",
      "Simple boolean logic gates only",
      "Pixel color matrices"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Continuous-time physical systems in CPS are classically formulated using state-space differential equations relating internal state variables x, control inputs u, and observable outputs y.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 123,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What enables smart sensor self-calibration in modern CPS installations?",
    "options": [
      "Onboard microcontrollers using known baseline physical standards or cross-sensor algorithmic validation",
      "Manually adjusting a mechanical potentiometer screw daily",
      "Replacing the entire sensor assembly every 2 hours",
      "Using exclusively plastic structural housings"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Smart sensors leverage integrated DSPs and microcontrollers running auto-zeroing algorithms, cross-sensor consistency checks, and drift-compensation models.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 124,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In a Cyber-Physical Production System (CPPS), plug-and-produce modularity is made possible primarily through:",
    "options": [
      "Self-describing semantic machine models, standardized industrial interfaces, and automated service discovery",
      "Hardcoding fixed IP addresses and point-to-point analog wiring harnesses",
      "Mandatory manual rewiring by factory electricians whenever a job changes",
      "Eliminating all communication protocols"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Plug-and-produce relies on semantic interoperability (such as OPC UA Companion Specifications and AAS), allowing newly added production modules to advertise capabilities and reconfigure autonomously.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 125,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What core architectural feature makes OPC Unified Architecture (OPC UA, IEC 62541) platform-independent and firewall-friendly?",
    "options": [
      "Binary/JSON encoding over standard TCP/IP or WebSockets, replacing legacy Microsoft DCOM dependencies",
      "Strict requirement for Windows XP operating systems only",
      "Exclusive operation over RS-232 serial cables without networking",
      "Requirement to run solely on mainframe computers"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "OPC UA eliminated legacy OPC DA's dependency on Microsoft DCOM by introducing platform-agnostic service-oriented architecture with secure binary TCP and HTTPS/WebSocket bindings.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 126,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which communication model was introduced in OPC UA Part 14 to enable high-speed deterministic multicast for motion control and field-level controllers?",
    "options": [
      "OPC UA PubSub (Publish-Subscribe)",
      "Single-client synchronous polling",
      "Manual batch file upload via FTP",
      "Serial token ring ring-passing"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "OPC UA PubSub enables one-to-many and many-to-many communication, combining with TSN Ethernet to achieve deterministic sub-millisecond motion control without client/server polling overhead.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 127,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which standard defines the Time-Aware Shaper (TAS) in IEEE 802.1 Time-Sensitive Networking (TSN)?",
    "options": [
      "IEEE 802.1Qbv",
      "IEEE 802.11b",
      "IEEE 802.3u",
      "IEEE 754"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "IEEE 802.1Qbv defines the Time-Aware Shaper, which opens and closes transmission gates on queue buffers according to a synchronized global schedule to guarantee zero packet interference for scheduled traffic.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 128,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which protocol standardizes microsecond-precision clock synchronization across IEEE 802.1 TSN bridges and nodes?",
    "options": [
      "IEEE 802.1AS (Generalized Precision Time Protocol - gPTP)",
      "NTP (Network Time Protocol) over standard public dialup",
      "Manual wristwatch visual inspection",
      "ICMP ping echo timestamping"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "IEEE 802.1AS is a profile of IEEE 1588 PTP that synchronizes network devices to a Grandmaster clock with sub-microsecond precision across heterogeneous media.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 129,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Why cannot standard unmanaged commercial Ethernet (IEEE 802.3) alone satisfy hard real-time CPS requirements?",
    "options": [
      "CSMA/CD arbitration, buffer queue contention, and non-deterministic queuing delays introduce unbounded jitter and packet loss",
      "Commercial Ethernet cables cannot carry digital bits",
      "Commercial Ethernet is strictly limited to 300 baud transmission speeds",
      "Commercial Ethernet cannot interface with RJ45 connectors"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Standard best-effort Ethernet allows unpredictable queuing delays, buffer overflows, and packet collisions, causing unbounded latency and jitter incompatible with hard real-time control.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 130,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What key advantage does Data Distribution Service (DDS, OMG standard) provide in distributed Cyber-Physical Systems?",
    "options": [
      "Data-centric publish-subscribe architecture with rich configurable Quality of Service (QoS) policies (deadline, reliability, durability, latency budget)",
      "Strict requirement that all nodes must connect to one central database server",
      "Elimination of all binary data transfer",
      "Manual paper routing of all data requests"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "DDS is a peer-to-peer data-centric pub/sub middleware featuring over 20 configurable QoS parameters governing real-time delivery guarantees without broker bottlenecks.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 131,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What constitutes the communication cycle in PROFINET IRT (Isochronous Real-Time)?",
    "options": [
      "A deterministic cycle divided into an Isochronous Real-Time phase (reserved time-slots) and an Open Communication phase (standard TCP/IP)",
      "Random transmission without any scheduled periods",
      "Only sending data when human operators press an emergency stop button",
      "Strict transmission of data exactly once every 24 hours"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "PROFINET IRT splits every bus communication cycle into a scheduled deterministic phase reserved for motion control, and an open phase for standard TCP/IP traffic.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 132,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In an OPC UA Information Model, nodes in the AddressSpace are interconnected using:",
    "options": [
      "Typed References (e.g., Organizes, HasComponent, HasProperty)",
      "Simple unindexed comma-separated text values",
      "Physical copper jumpers between circuits",
      "Magnetic tape reels"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "OPC UA represents complex asset hierarchies as an object-oriented graph of Nodes interconnected by semantically defined References such as HasComponent or HasTypeDefinition.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 133,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which single-pair cabling standard brings Ethernet directly to field-level smart sensors and actuators up to 1000 meters in Industry 4.0?",
    "options": [
      "Single-Pair Ethernet (SPE, 10BASE-T1L / IEEE 802.3cg)",
      "Standard USB 2.0 cable",
      "Fiber-optic trans-Atlantic undersea cables",
      "Coaxial analog antenna cable"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Single-Pair Ethernet (10BASE-T1L) transmits 10 Mbps Ethernet and Power over Data Lines (PoDL) over a single twisted pair up to 1000m, replacing legacy 4-20mA loops.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 134,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "How does Modbus TCP compare to OPC UA in modern Cyber-Physical systems?",
    "options": [
      "Modbus TCP is a simple register-based protocol lacking native encryption and semantics, whereas OPC UA provides rich object modeling and end-to-end security",
      "Modbus TCP has built-in quantum cryptography while OPC UA has no security",
      "Modbus TCP only runs on wireless satellite links",
      "Modbus TCP requires specialized supercomputers to decode 16-bit integers"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Modbus TCP is a lightweight legacy protocol reading/writing raw registers without native metadata or security, while OPC UA offers comprehensive semantic modeling, encryption, and authorization.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 135,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which framing mechanism in IEEE 802.1Qbu (Frame Preemption) ensures express real-time frames are not blocked by large non-critical frames?",
    "options": [
      "Interrupting the transmission of a preemptable frame midway and resuming it after the express frame has passed",
      "Discarding all network frames permanently",
      "Buffering express frames until midnight",
      "Converting the Ethernet cable into an optical prism"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "IEEE 802.1Qbu Frame Preemption and IEEE 802.3br allow an urgent real-time frame to preempt the transmission of a low-priority standard frame, minimizing store-and-forward latency.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 136,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "In OPC UA security, how is message integrity and confidentiality guaranteed between client and server?",
    "options": [
      "Through Security Policies negotiating asymmetric RSA/ECC keys for mutual digital certificate validation and symmetric AES-GCM/CBC encryption",
      "By sending all messages in plain text without checksums",
      "By using only random port numbers",
      "By asking users to manually verify every packet with a keypad"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "OPC UA defines formal Security Profiles utilizing X.509 PKI certificates for mutual authentication, digital signatures (SHA-256) for integrity, and AES encryption for confidentiality.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 137,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which transport protocol is typically paired with MQTT when connecting constrained IoT devices over low-bandwidth cellular connections?",
    "options": [
      "TCP/IP with TLS",
      "Unreliable raw UDP without transport reliability",
      "AppleTalk",
      "Analog AM radio modulation"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "MQTT is an application layer protocol operating over reliable byte-stream TCP connections, typically wrapped with TLS for secure remote edge-to-cloud telemetry.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 138,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "What is the primary role of a Centralized Network Controller (CNC) in a TSN-enabled industrial network?",
    "options": [
      "Calculating global transmission schedules (gate control lists) based on stream reservation requirements and deploying them to TSN bridges",
      "Physically drilling holes in factory machine casings",
      "Replacing network switches with passive hubs",
      "Managing human resource employee vacation schedules"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Centralized Network Configuration (CNC) entity discovers topology, receives stream traffic requests from CUCs, and computes conflict-free Gate Control Lists for all IEEE 802.1Qbv bridges.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 139,
    "sourcePdfName": "nptl 6 weeks.pdf",
    "questionText": "Which architecture pattern decouples industrial producers from consumers, allowing dynamic multi-vendor interoperability across Industry 4.0 factories?",
    "options": [
      "Publish-Subscribe (PubSub) event-driven messaging with semantic topic schemas",
      "Hardcoded static point-to-point analog wiring harnesses",
      "Proprietary vendor-locked serial communication loops",
      "Single-master synchronous token-passing rings"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "PubSub decouples endpoints in space, time, and synchronization, enabling distributed sensors, controllers, and cloud applications to consume events dynamically without hardcoded dependencies.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  ...IIOT_6_WEEKS_QUESTIONS,
  ...IIOT_WEEKS_7_8_9_QUESTIONS,
];
