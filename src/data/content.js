export const CONTENT = {
  event: {
    name: "ASTRA-2026",
    taglineWords: ["Dream", "Discover", "Develop"],
    occasion: "An academic competition conducted on the occasion of Children's Day.",
    dateLabel: "15 NOVEMBER 2026 | SUNDAY",
    // ADJUST the start time below when announced (currently assumed 9:00 AM IST)
    dateISO: "2026-11-15T09:00:00+05:30",
    venue: ["RDS Campus, Laxmi Nagar", "Near BEO Office, Mudalgi - 591312"],
    organiser: "Rural Development Society (RDS), Mudalgi",
    eyebrow: "ACADEMIC COMPETITION / CHILDREN'S DAY",
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "eligibility", label: "Eligibility" },
    { id: "prizes", label: "Prizes" },
    { id: "pattern", label: "Exam Pattern" },
    { id: "instructions", label: "Instructions" },
    { id: "contact", label: "Contact" },
  ],

  marquee: [
    "ASTRA-2026",
    "DREAM",
    "DISCOVER",
    "DEVELOP",
    "CHILDREN'S DAY",
    "15 NOVEMBER 2026",
    "RDS · MUDALGI",
  ],
  preMarquee: [
    "KEEP THE CONVERSATION GOING",
    "REGISTER · 15 NOVEMBER 2026",
    "CHILDREN'S DAY EXAM",
    "RURAL DEVELOPMENT SOCIETY",
  ],
  ringText: "ASTRA-2026 · 15 NOVEMBER 2026 · RDS MUDALGI · CHILDREN'S DAY · ",

  about: {
    bandTag: "01 / ABOUT ASTRA-2026",
    bandLine1: "AN ACADEMIC",
    bandLine2: "ARENA.",
    bandSub:
      "One campus. Four grades. Two papers. Six cash prizes. Cheering parents and teachers — all on Children's Day, on RDS soil.",
    lead: "ASTRA-2026 is a one-day academic competition that brings school students of Mudalgi taluk together to think, solve and shine — a Children's Day celebration built around learning rather than spectacle.",
    organiserDesc:
      "Rural Development Society is a community-run education initiative at Mudalgi, working with local schools to build learning opportunities for rural students.",
    association: [
      "RDS's Science PU College, Mudalgi",
      "Vidyaniketan Kannada Medium Primary and High School",
      "Vidyaniketan CBSE School, Mudalgi",
    ],
    affiliation: "830765",
    affiliationNote: "Vidyaniketan CBSE School, Mudalgi · Affiliation No.",
    stats: [
      { value: "2", label: "Categories" },
      { value: "6", label: "Cash Prizes" },
      { value: "3", label: "Boards Eligible" },
    ],
  },

  eligibility: [
    {
      tag: "CATEGORY 01",
      ghost: "IV·V",
      grades: "GRADE IV & V",
      line: "Junior category — a gentle first competitive stage.",
      boards: ["STATE BOARD", "CBSE", "ICSE"],
    },
    {
      tag: "CATEGORY 02",
      ghost: "IX·X",
      grades: "GRADE IX & X",
      line: "Senior category — a serious academic challenge.",
      boards: ["STATE BOARD", "CBSE", "ICSE"],
    },
  ],
  eligibilityNote:
    "Only Grade IV, V, IX and X are eligible. Students of other grades are NOT eligible for this competition.",

  prizes: [
    {
      id: "cat1",
      tag: "CATEGORY 01",
      grades: "GRADE IV & V",
      items: [
        { rank: "First Prize", amount: 25000 },
        { rank: "Second Prize", amount: 20000 },
        { rank: "Third Prize", amount: 15000 },
      ],
      fee: 100,
    },
    {
      id: "cat2",
      tag: "CATEGORY 02",
      grades: "GRADE IX & X",
      flagship: true,
      items: [
        { rank: "First Prize", amount: 50000 },
        { rank: "Second Prize", amount: 30000 },
        { rank: "Third Prize", amount: 20000 },
      ],
      fee: 200,
    },
  ],

  pattern: {
    cat1: {
      grades: "GRADE IV & V",
      basedOn: "Navodaya Vidyalaya Selection Test pattern",
      rows: [
        { subject: "Mental Ability", questions: 20, marks: 25 },
        { subject: "Environmental Studies (EVS)", questions: 20, marks: 25 },
        { subject: "Mathematics", questions: 20, marks: 25 },
        { subject: "Language", questions: 20, marks: 25 },
      ],
      note: "Each question carries 1.25 marks. Total: 80 questions, 100 marks.",
    },
    cat2: {
      grades: "GRADE IX & X",
      basedOn: null,
      rows: [
        { subject: "Mathematics", questions: 20, marks: 20 },
        { subject: "Science", questions: 20, marks: 20 },
        { subject: "Social Science (SST)", questions: 10, marks: 10 },
        { subject: "English", questions: 10, marks: 10 },
        { subject: "Kannada", questions: 10, marks: 10 },
        { subject: "General Knowledge (GK)", questions: 10, marks: 10 },
        { subject: "Mental Ability", questions: 10, marks: 10 },
        { subject: "Current Affairs", questions: 10, marks: 10 },
      ],
      note: "Each question carries 1 mark. Total: 100 questions, 100 marks.",
    },
  },

  registerSteps: [
    { n: "01", t: "Fill the Google Form", d: "Name, grade, school and board — one form per student." },
    { n: "02", t: "Pay the exam fee", d: "₹100 (Grade IV–V) or ₹200 (Grade IX–X) as per [ADD: payment instructions]." },
    { n: "03", t: "Carry school ID", d: "Report by [ADD: reporting time] with your ID / bonafide for check-in." },
  ],

  // DRAFT instructions — replace/adjust with the official list before launch.
  instructions: [
    {
      title: "Official registration only",
      text: "Register through the official ASTRA-2026 Google Form published by RDS. Spot registrations are not allowed.",
    },
    {
      title: "Confirm your grade",
      text: "Open to Grade IV, V, IX and X students of State Board, CBSE and ICSE schools only.",
    },
    {
      title: "Report early",
      text: "Reach the exam campus by [ADD: reporting time]. Check-in closes 15 minutes before the paper begins.",
    },
    {
      title: "What to carry",
      text: "School ID / bonafide certificate, blue or black pens and pencils in a transparent pouch.",
    },
    {
      title: "Not permitted",
      text: "Mobile phones, calculators, smartwatches and printed material are strictly not allowed in the exam hall.",
    },
    {
      title: "Answering the OMR",
      text: "Fill the circles (bubbles) neatly and completely. Read the OMR instructions printed on your sheet.",
    },
    {
      title: "Examination fee",
      text: "₹100 for Grade IV–V and ₹200 for Grade IX–X, payable as per [ADD: payment instructions].",
    },
    {
      title: "Results & prizes",
      text: "First, second and third prizes of both categories will be announced on the event day itself.",
    },
  ],

  contact: {
    phone: "9886565627",
    email: "shivappasattigeri9@gmail.com",
    officeHours: "Morning 8 AM - Evening 6 PM",
    office: ["Rural Development Society (RDS)", "RDS Campus, Laxmi Nagar", "Near BEO Office, Mudalgi - 591312"],
  },

  links: {
    registration: "https://docs.google.com/forms/d/e/1FAIpQLSejOFo9NQeZNOFJGDxD68gBLo_YGNflYka8OBvHOeAbSyLI5A/viewform",
    map: "https://www.google.com/maps/search/?api=1&query=RDS+Campus+Laxmi+Nagar+Near+BEO+Office+Mudalgi+591312",
  },
};
