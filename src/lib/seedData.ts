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
    "sourcePdfName": "NPTEL Assignment 7",
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
    "explanation": "LoRa uses Chirp Spread Spectrum (CSS) modulation, maintaining low power characteristics while significantly increasing communication range and robustness against interference.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 96,
    "sourcePdfName": "NPTEL Assignment 7",
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
    "explanation": "SIGFOX achieves maximum wireless throughput of up to 100 bits per second (bps) using ultra-narrowband (UNB) technology.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 97,
    "sourcePdfName": "NPTEL Assignment 7",
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
    "explanation": "A Zigbee network typically covers a communication range of 10 to 100 meters depending on transmit power, device variant, and environmental obstacles.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 98,
    "sourcePdfName": "NPTEL Assignment 7",
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
    "explanation": "In Zigbee architectures, a Router relays data packets to other nodes in the mesh topology and can also execute localized small-scale applications.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 99,
    "sourcePdfName": "NPTEL Assignment 7",
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
    "explanation": "Digi XCTU is the multi-platform configuration tool used to discover, configure, test, and update Digi XBee RF modules.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 100,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "Which type of IIoT analytics primarily focuses on answering the questions \"What already happened?\" and \"What is currently happening?\"",
    "options": [
      "Diagnostic Analytics",
      "Predictive Analytics",
      "Descriptive Analytics",
      "Prescriptive Analytics"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Descriptive analytics summarizes past historical performance and current real-time operations to answer what happened and what is happening now.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 101,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "What is one of the most widely adopted middleware architectures in IIoT?",
    "options": [
      "Service-Oriented Architecture (SOA)",
      "Monolithic Architecture",
      "Peer-to-Peer Only Architecture",
      "Point-to-Point Architecture"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Service-Oriented Architecture (SOA) is widely adopted in IIoT middleware because it enables heterogeneous devices and protocols to interact through standard services.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 102,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "In the FarmBeats system, which component is primarily responsible for weather-aware duty cycling and UAV flight planning?",
    "options": [
      "IoT Base Station",
      "Cloud Processing Unit",
      "Sensor Nodes",
      "Farm Drones"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "In Microsoft FarmBeats, the local IoT Base Station performs weather-aware energy duty cycling and automates flight trajectory planning for unmanned aerial vehicles (UAVs).",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 103,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "In the video module of AR Drones for Precision Agriculture, what is the primary purpose of processing aerial images?",
    "options": [
      "Measure soil temperature",
      "Detect weeds and generate coordinates",
      "Spray pesticides directly",
      "Monitor worker movement"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "In precision agriculture AR drone video analytics, aerial imagery is analyzed to detect weed patches and generate precise GPS coordinates for targeted intervention.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 104,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "In the iRobot-Factory architecture, which component uses artificial intelligence to perform predictive and operational analytics?",
    "options": [
      "Physical Robotic Arm",
      "Industrial Sensor Node",
      "Cognitive Engine",
      "Network Gateway"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Cognitive Engine in the iRobot-Factory framework applies artificial intelligence to deliver predictive operational analytics and automated decision making.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 105,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "According to the Big Data framework for Smart Manufacturing, what is the key focus of Phase 2?",
    "options": [
      "Data generation and collection from sensors",
      "Physical storage of raw data files",
      "Hardware decommissioning",
      "Synthesis and analysis to build knowledge for decision making"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Phase 2 focuses on data synthesis, correlation, and analysis to transform aggregated factory floor data into actionable manufacturing intelligence.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 106,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "In a Smart Warehousing system, which module is responsible for analyzing real-time events and historical data to make automated operational decisions?",
    "options": [
      "Administrative module",
      "RFID Reader",
      "Barcode Scanner",
      "Conveyor Belt Sensor"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Administrative module acts as the core controller, processing incoming telemetry alongside historical records to automate warehousing workflows.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 107,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "What does the term \"Set Point\" refer to in an Industrial Control System (ICS)?",
    "options": [
      "The point where the system shuts down permanently",
      "Standard value of the process parameter for controlled operation",
      "The highest error registered by a sensor",
      "The physical location where the controller is mounted"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The Set Point (SP) is the desired or target reference value that a feedback control loop aims to maintain for a controlled industrial process variable.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 108,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "Which statement correctly describes an Open Loop Control System?",
    "options": [
      "Control action depends entirely on the output measurement",
      "Requires continuous feedback sensors to operate",
      "Control action is completely independent of the output of the system",
      "Automatically corrects disturbances in real time"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "An open-loop control system does not use feedback from the output to adjust control input; the control action operates completely independent of the system's output.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w7-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 7,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 109,
    "sourcePdfName": "NPTEL Assignment 7",
    "questionText": "Which of the following is a primary component of a SCADA system responsible for interfacing directly with physical sensors and actuators?",
    "options": [
      "Enterprise Resource Planning (ERP) server",
      "Human Machine Interface (HMI) screen",
      "Database Historian",
      "Remote Telemetry Units (RTUs)"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Remote Telemetry Units (RTUs) connect directly to field instruments, converting physical analog/digital signals into network communications for the SCADA master station.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 110,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "Which type of analytics is used to calculate the Remaining Useful Life (RUL) of industrial machinery typically over an hours-based timescale?",
    "options": [
      "Descriptive analytics",
      "Diagnostic analytics",
      "Prescriptive analytics",
      "Prognostic analytics"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Prognostic analytics assesses equipment health indicators to forecast Remaining Useful Life (RUL) and anticipate failures before they occur.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 111,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "Which of the following big data technologies is specifically designed as a real-time distributed stream processing tool capable of Complex Event Processing (CEP)?",
    "options": [
      "Apache Hadoop",
      "Apache Hive",
      "Apache Storm",
      "Apache Pig"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Apache Storm is a distributed real-time stream computation system designed for high-throughput stream processing and Complex Event Processing (CEP).",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 112,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "What is the primary distinction between the Fuzzy C-Means (FCM) clustering algorithm and the K-Means clustering algorithm?",
    "options": [
      "FCM allows a data point to belong to more than one cluster with varying membership degrees",
      "FCM works only with 1-dimensional categorical data",
      "K-Means allows fuzzy probabilities while FCM enforces strict hard boundaries",
      "FCM does not require specifying the number of clusters"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Fuzzy C-Means (FCM) assigns soft membership degrees between 0 and 1 allowing points to belong to multiple clusters, unlike K-Means which enforces hard, mutually exclusive partitioning.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 113,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "Which machine learning approach is used when the output variable to be predicted is a continuous real-valued number (such as temperature or pressure)?",
    "options": [
      "Classification",
      "Clustering",
      "Association Rule Mining",
      "Regression"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Regression models predict continuous numerical quantities, whereas classification models predict discrete categorical labels.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 114,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "How does Reinforcement Learning (RL) fundamentally differ from Supervised Learning?",
    "options": [
      "RL relies exclusively on pre-labeled ground truth datasets",
      "RL utilizes a reward function that acts as feedback to the agent based on actions taken in an environment",
      "RL does not interact with any environment or agent",
      "RL only works with offline batch files"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Reinforcement Learning optimizes an agent's policy via feedback from a reward/penalty function interacting dynamically with an environment, without static pre-labeled supervisor targets.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 115,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "What is the key advantage of Deep Learning over traditional Machine Learning in industrial feature extraction?",
    "options": [
      "Deep learning requires manual handcrafted feature engineering by domain experts",
      "Deep learning performs end-to-end learning by automatically extracting hierarchical features directly from raw data",
      "Deep learning works only on small datasets with fewer than 10 rows",
      "Deep learning never requires computational accelerators like GPUs"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Deep learning eliminates tedious manual feature extraction by automatically learning hierarchical representations directly from raw multi-sensor telemetry.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 116,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "Which company developed the Collaborative Distributed Deep Learning platform that allows multiple industrial participants to train neural networks without sharing private raw data?",
    "options": [
      "Intel",
      "Cisco",
      "Siemens",
      "TOSHIBA"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Toshiba developed a Collaborative Distributed Deep Learning framework that allows industrial enterprises to jointly train neural models without centralizing proprietary raw data.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 117,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "Which of the following is an example of an industrial Software as a Service (SaaS) application specifically used for machinery performance monitoring?",
    "options": [
      "Industrial Machinery Catalyst from Siemens",
      "Amazon EC2 Virtual Machines",
      "Google Compute Engine",
      "Microsoft Azure Blob Storage"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Industrial Machinery Catalyst by Siemens is an industrial SaaS application for equipment performance tracking and lifecycle analytics, whereas EC2 and Compute Engine are IaaS.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 118,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "Which cloud deployment model is characterized by combining two or more distinct cloud infrastructures (such as private and public) bound together by standardized technology?",
    "options": [
      "Community Cloud",
      "Private Cloud",
      "Hybrid Cloud",
      "Public Cloud"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "A Hybrid Cloud composition combines distinct private and public cloud infrastructures connected via standardized data and application portability technologies.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 119,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "Which industrial IoT platform, developed by General Electric, is specifically engineered to build and run industrial Digital Twin applications?",
    "options": [
      "Apple HomeKit",
      "GE Predix",
      "Android Things",
      "Samsung SmartThings"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "GE Predix is the industrial IoT platform engineered by General Electric to construct, deploy, and maintain industrial analytics and Digital Twins for physical assets.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 120,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "In the C3 Data Lake architecture, how is unstructured or schema-less industrial data primarily stored?",
    "options": [
      "Relational tables with strict primary keys",
      "CSV text files only",
      "Simple Object format",
      "Magnetic tape drives"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "In C3 Data Lake architectures, unstructured and multi-structured industrial streams are held in Simple Object storage formats for flexible analytical ingestion.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 121,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "Which IIoT platform provides real-time tracking solutions through its 'Now' and 'Tracker' web and mobile application modules?",
    "options": [
      "ThingSpeak",
      "Blynk",
      "Meshify",
      "IFTTT"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Meshify provides industrial IoT asset monitoring using 'Now' for live device tracking and 'Tracker' for historical telemetry review.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 122,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "In the lifecycle management of industrial IoT devices, which feature is critical when a device is retired, compromised, or permanently removed from service?",
    "options": [
      "Device decommission",
      "Firmware update loop",
      "Automatic over-voltage surge",
      "Permanent broadcasting mode"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Device decommissioning is vital to safely deregister the asset, revoke authorization certificates, and prevent unauthorized network access when hardware is retired.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 123,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "According to Sturm et al., which characteristic is essential for a Service Level Agreement (SLA) metric to be meaningful and enforceable in industrial cloud services?",
    "options": [
      "Subjective",
      "Informal",
      "Quantifiable",
      "Ambiguous"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Sturm et al. state that SLA service parameters must be quantifiable so that service levels, availability, and compliance can be objectively evaluated.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w8-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 8,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 124,
    "sourcePdfName": "NPTEL Assignment 8",
    "questionText": "How does Fog Computing directly address the bandwidth and latency limitations of centralized Cloud Computing in large-scale IIoT?",
    "options": [
      "By identifying useful data and reducing the amount of raw data transmitted over the wide area network to the cloud",
      "By moving all cloud servers into mobile phone handsets",
      "By replacing all wired fiber optics with 2G cellular",
      "By completely eliminating the use of routers and switches"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Fog computing filters, aggregates, and analyzes telemetry close to edge devices, significantly reducing the volume of raw data that must traverse the WAN to the central cloud.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-1",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 1,
    "sourcePageNumber": 125,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "In industrial environments, how does Fog Computing prevent 'noisy' big data from crowding the central cloud network?",
    "options": [
      "By transmitting every raw sensor reading without inspection",
      "Prior filtration and preprocessing of raw data at the edge/fog tier",
      "Increasing the sampling frequency to gigahertz levels",
      "Disconnecting all wireless nodes from the internet"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Fog computing applies prior filtration, anomaly scrubbing, and local preprocessing at edge nodes to prevent unrefined noisy streams from flooding the cloud.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-2",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 2,
    "sourcePageNumber": 126,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "Which key capability does a Fog-based industrial computing platform offer that traditional remote cloud servers cannot guarantee for mission-critical manufacturing?",
    "options": [
      "Merging real-time and non-real-time workloads with deterministic low-latency execution",
      "Infinite physical disk storage on a single microcontroller",
      "Free unlimited cellular bandwidth worldwide",
      "Immunity to physical power outages without batteries"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Fog platforms can co-locate deterministic real-time sub-millisecond control alongside soft real-time data aggregation, which remote cloud servers cannot guarantee over WAN links.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-3",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 3,
    "sourcePageNumber": 127,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "Which company provides an edge-node software solution designed to integrate heterogeneous industrial equipment, PLCs, and field protocols?",
    "options": [
      "Uber Technologies",
      "Netflix Media",
      "Twitter Inc.",
      "Nebbiolo Technologies"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Nebbiolo Technologies specializes in edge and fog software nodes that bridge disparate industrial controllers, PLCs, and protocols into modern computing tiers.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-4",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 4,
    "sourcePageNumber": 128,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "What is the purpose of the '%in%' operator in the R programming language when used for IIoT data analysis?",
    "options": [
      "To multiply two large matrices",
      "To check whether elements of the first vector are contained within a second vector",
      "To define an inline lambda function",
      "To import a C++ library into the workspace"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "In R, `%in%` is a vector matching operator that returns a boolean vector indicating whether each element of the left-hand operand is found in the right-hand operand.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-5",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 5,
    "sourcePageNumber": 129,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "Which validation method is commonly demonstrated in machine learning workflows using R to assess model generalization across industrial datasets?",
    "options": [
      "Zero-shot estimation without training data",
      "Single-sample evaluation",
      "Ten-fold cross-validation",
      "Manual guess-and-check"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Ten-fold cross-validation is standard for evaluating predictive model generalization by repeatedly training on 90% and validating on 10% across 10 folds.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-6",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 6,
    "sourcePageNumber": 130,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "In the Julia programming language, which function is used to create an associative collection of key-value pairs (hash map)?",
    "options": [
      "Array()",
      "Set()",
      "Dict()",
      "Tuple()"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "In Julia, `Dict()` creates an associative dictionary collection storing key-value pairs.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-7",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 7,
    "sourcePageNumber": 131,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "Which technique eliminates duplicated and repetitive sensor packets in IIoT networks through detection, filtering, and data compression?",
    "options": [
      "Data amplification",
      "Packet duplication",
      "Redundancy mitigation",
      "Unicast flooding"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Redundancy mitigation identifies, filters, and compresses duplicate telemetry data to prevent bandwidth waste in sensor networks.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-8",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 8,
    "sourcePageNumber": 132,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "In the Apache Hadoop architecture, which core component manages computing resources (CPU, memory, storage) and schedules applications across the cluster?",
    "options": [
      "Hadoop Distributed File System (HDFS)",
      "MapReduce v1",
      "Flume",
      "Yet Another Resource Negotiator (YARN)"
    ],
    "correctAnswerIndex": 3,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "YARN (Yet Another Resource Negotiator) manages cluster resources and schedules execution across distributed nodes in Apache Hadoop.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-9",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 9,
    "sourcePageNumber": 133,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "What is a major advantage of integrating MongoDB with Hadoop for industrial analytics?",
    "options": [
      "Batch aggregation and processing of large volumes of semi-structured document data",
      "Completely replaces the need for network interface cards",
      "Forces all data to be stored strictly in fixed-schema SQL tables",
      "Eliminates the need for RAM in all computers"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Integrating MongoDB with Hadoop enables scalable MapReduce processing and batch aggregation over extensive collections of semi-structured JSON/BSON document data.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-10",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 10,
    "sourcePageNumber": 134,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "In the BCube data-center network topology, which routing mechanism is utilized for efficient packet forwarding without intermediate routing tables?",
    "options": [
      "Open Shortest Path First (OSPF)",
      "BCube Source Routing (BSR)",
      "Border Gateway Protocol (BGP)",
      "Spanning Tree Protocol (STP)"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "BCube Source Routing (BSR) embeds the complete path in packet headers at the source host, eliminating routing state and complex lookup tables in switches.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-11",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 11,
    "sourcePageNumber": 135,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "Why does the inbound network bandwidth demand increase dramatically in an IIoT data center compared to traditional web data centers?",
    "options": [
      "Influx of high-frequency small telemetry messages continuously transmitted by millions of distributed sensors",
      "Users downloading full-length 4K movies from sensors",
      "Nodes requiring human captcha verification for every packet",
      "Sensors requiring continuous video conference calls"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "IIoT data centers receive an enormous influx of continuous, high-frequency, small sensor telemetry packets from millions of connected field devices.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-12",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 12,
    "sourcePageNumber": 136,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "What is the primary operational advantage of a Software-Defined Data Centre (SDDC) in smart industrial operations?",
    "options": [
      "Hardware is glued together so it can never be altered",
      "Physical cables must be manually rewired for every new job",
      "Automated, programmable infrastructure and centralized workload management",
      "Requires zero electricity to operate"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "SDDC abstracts networking, storage, and compute into fully programmable, policy-driven software resources that dynamically adjust to industrial application demands.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-13",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 13,
    "sourcePageNumber": 137,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "In Software-Defined Networking (SDN), how can flow table size be minimized when multiple forwarding rules share matching patterns?",
    "options": [
      "Wildcard-based rule combination",
      "Duplicating every flow entry 100 times",
      "Deleting all rules and shutting down ports",
      "Hardcoding MAC addresses into hardware ASIC registers"
    ],
    "correctAnswerIndex": 0,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Wildcard-based rule aggregation combines multiple specific flow entries sharing common bit patterns into a single TCAM rule using bitmasks.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-14",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 14,
    "sourcePageNumber": 138,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "In an SDN-enabled industrial network, which mechanism enables dynamic adaptation to changing traffic patterns and quality-of-service demands?",
    "options": [
      "Static DIP switches on physical routers",
      "Centralized rule-based forwarding policies updated programmatically by the controller",
      "Power cycling the network core every 5 minutes",
      "Reverting to analog carrier frequencies"
    ],
    "correctAnswerIndex": 1,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "The centralized SDN controller programmatically installs and updates rule-based forwarding policies on OpenFlow switches in real time based on network conditions.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  },
  {
    "id": "q-iiot-w9-15",
    "courseId": "course-iiot-cps-master",
    "weekNumber": 9,
    "originalQuestionNumber": 15,
    "sourcePageNumber": 139,
    "sourcePdfName": "NPTEL Assignment 9",
    "questionText": "What constitutes Software-Defined Automation (SDA) in modern Industry 4.0 factories?",
    "options": [
      "Replacing all software with manual hand cranks and levers",
      "Disabling all digital computers in production lines",
      "Decoupling automation control software from proprietary hardware into a virtualized, real-time software platform",
      "Storing production orders exclusively on printed paper cards"
    ],
    "correctAnswerIndex": 2,
    "answerSource": "Manually Verified",
    "isApproved": true,
    "explanation": "Software-Defined Automation decouples control logic and soft-PLCs from rigid, vendor-locked hardware, running industrial automation software on virtualized, flexible compute platforms.",
    "createdAt": "2026-09-18T14:00:00.000Z"
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  ...IIOT_6_WEEKS_QUESTIONS,
  ...IIOT_WEEKS_7_8_9_QUESTIONS,
];
