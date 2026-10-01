export const profile = {
  name: "Agnik Saha",
  role: "PhD student, Computer Science",
  affiliation: "Georgia State University",
  location: "Atlanta, Georgia",
  email: "asaha8@gsu.edu",
  portraitAlt: "Portrait of Agnik Saha",
  links: [
    { label: "Email", href: "mailto:asaha8@gsu.edu" },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=pAlh9XQAAAAJ&hl=en",
    },
    { label: "GitHub", href: "https://github.com/agnik2019" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/agnik-saha/" },
    { label: "CV", href: "/cv", internal: true },
  ],
};

export const bio = [
  [
    "I am an AI researcher with 4+ years of experience in ",
    { strong: "neuro-symbolic AI" },
    " and integrating knowledge graphs into modern ML systems, including ",
    { strong: "generative" },
    " and ",
    { strong: "agentic AI" },
    ". I develop end-to-end neural–symbolic architectures for generation, prediction, and reasoning, and I design robust evaluation frameworks.",
  ],
  "My focus is integrating knowledge graphs with large language models. The use cases are health communication, marketing communication, and data democratization for the enterprise, by combining heterogeneous knowledge communities.",
  "Language models are now used to help clinicians explain care and to help marketers decide what to do next. They sound fluent, but they are not built for decisions that have to be accurate, culturally appropriate, and easy to follow.",
  "I work on that gap in two places. In healthcare, I test whether models can explain cancer screening in language that is safe and accessible, including across a full conversation rather than a single reply. In marketing, I connect theory with consumer behavior by building knowledge graphs and using them to guide what a model generates.",
  "The approach joins flexible language with knowledge that can be checked. I am a PhD student in computer science at Georgia State University.",
];

export const publications = [
  {
    id: "jamia-multiturn",
    featured: false,
    title:
      "Theory-Guided Multi-Turn Cancer Screening Communication With Large Language Models: Framework Development and Evaluation Study",
    authors: "Agnik Saha (first author) et al.",
    venue: "Under review, JAMIA Open",
    year: 2026,
    links: [],
  },
  {
    id: "ieee-kg",
    featured: false,
    title:
      "Bridging Theory and Practice through LLM-Driven Knowledge Graph Construction",
    authors: "Agnik Saha et al.",
    venue: "Under review, IEEE International Conference on Big Data",
    year: 2026,
    links: [],
  },
  {
    id: "jmir-cancer",
    featured: true,
    title:
      "Large Language Models for Breast and Cervical Cancers Communication: Mixed Methods Evaluation Study Assessing Linguistic Quality, Safety, and Accessibility",
    authors:
      "Agnik Saha, Victoria Churchill, Anny D. Rodriguez, Ugur Kursuncu, and Muhammed Y. Idris",
    venue: "JMIR Cancer",
    year: 2026,
    links: [
      { label: "Paper", href: "https://cancer.jmir.org/2026/1/e82971" },
      { label: "Preprint", href: "https://arxiv.org/abs/2505.10472" },
    ],
  },
  {
    id: "aacr-multiturn",
    featured: true,
    title:
      "Evaluating Multi-turn Capability of Large Language Models in Cancer Communication",
    authors:
      "Agnik Saha, Victoria Churchill, Ugur Kursuncu, and Muhammed Y. Idris",
    venue:
      "Cancer Epidemiology, Biomarkers & Prevention, 34(9 Supplement), abstract B022. 18th AACR Conference on the Science of Cancer Health Disparities",
    year: 2025,
    links: [
      {
        label: "Abstract",
        href: "https://aacrjournals.org/cebp/article/34/9_Supplement/B022/764625/Abstract-B022-Evaluating-multi-turn-capability-of",
      },
    ],
  },
  {
    id: "lvlm-toxicity",
    featured: true,
    title:
      "Playing Devil’s Advocate: Unmasking Toxicity and Vulnerabilities in Large Vision-Language Models",
    authors:
      "Abdulkadir Erol, Trilok Padhi, Agnik Saha, Mehmet Emin Aktas, and Ugur Kursuncu",
    venue: "ACM Transactions on Intelligent Systems and Technology",
    year: 2026,
    links: [
      {
        label: "Paper",
        href: "https://dl.acm.org/doi/10.1145/3821418",
      },
    ],
  },
  {
    id: "tinyml",
    featured: false,
    title:
      "TinyML for Cybersecurity: Deploying Optimized Deep Learning Models for On-Device Threat Detection on Resource-Constrained Devices",
    authors:
      "Sonali Arcot, Mohammad Masum, Mohammad Shahidul Kader, Agnik Saha, and Mohammed Chowdhury",
    venue: "IEEE International Conference on Big Data, pp. 5542–5550",
    year: 2024,
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1109/bigdata62323.2024.10825955",
      },
    ],
  },
  {
    id: "stackexchange",
    featured: true,
    title:
      "Unveiling User Engagement Patterns on Stack Exchange Through Network Analysis",
    authors: "Agnik Saha, Mohammad Shahidul Kader, and Mohammad Masum",
    venue: "arXiv:2409.08944",
    year: 2024,
    links: [{ label: "Preprint", href: "https://arxiv.org/abs/2409.08944" }],
  },
  {
    id: "ebb-flow",
    featured: false,
    title:
      "Evaluating the Ebb and Flow: An In-depth Analysis of Question-Answering Trends across Diverse Platforms",
    authors:
      "Rima Hazra, Agnik Saha, Somnath Banerjee, and Animesh Mukherjee",
    venue: "arXiv:2309.05961. Accepted as a poster",
    year: 2024,
    links: [{ label: "Preprint", href: "https://arxiv.org/abs/2309.05961" }],
  },
];

export const researchProjects = [
  {
    id: "cancer-communication",
    title: "Language models for cancer communication",
    status: "Published, JMIR Cancer, 2026",
    description:
      "People looking up breast and cervical cancer often meet explanations that are difficult to read or unsafe to trust. I compared general-purpose and medical language models on real questions, and scored the answers for fluency, accuracy, toxicity, bias, readability, and empathy.",
    contribution:
      "First author. I led the evaluation across linguistic quality, safety, and accessibility.",
    links: [
      { label: "Paper", href: "https://cancer.jmir.org/2026/1/e82971" },
      { label: "Preprint", href: "https://arxiv.org/abs/2505.10472" },
    ],
  },
  {
    id: "multiturn",
    title: "Multi-turn cancer conversations",
    status: "Conference abstract, AACR, 2025",
    description:
      "Patients do not get an answer in one turn. This project simulates screening conversations that carry culturally specific concerns, then scores the dialogues for accuracy, completeness, context, communication quality, and whether the model follows the conversation.",
    contribution:
      "First author. I led the dialogue study reported in the AACR abstract.",
    links: [
      {
        label: "Abstract",
        href: "https://aacrjournals.org/cebp/article/34/9_Supplement/B022/764625/Abstract-B022-Evaluating-multi-turn-capability-of",
      },
    ],
  },
  {
    id: "lvlm",
    title: "Toxicity in vision-language models",
    status: "Published, ACM Transactions on Intelligent Systems and Technology, 2026",
    description:
      "Models that read images and text can still be prompted into toxic replies. This study tests that failure with adversarial prompts based on how people manipulate conversations, including dark humor and prompts that ask the model to finish harmful text.",
    contribution:
      "Co-author. I worked on the evaluation of toxicity and vulnerabilities in large vision-language models.",
    links: [
      {
        label: "Paper",
        href: "https://dl.acm.org/doi/10.1145/3821418",
      },
    ],
  },
  {
    id: "stackexchange",
    title: "Who keeps Stack Exchange active",
    status: "Preprint, 2024",
    description:
      "Several Stack Exchange communities have been losing participation. I represented users as nodes and replies as edges, then used degree, betweenness, and PageRank to see whether influence sits with a few people or is spread across the community.",
    contribution:
      "First author. I built the interaction networks and the engagement analysis for Data Science, AI, software engineering, project management, and GenAI.",
    links: [{ label: "Preprint", href: "https://arxiv.org/abs/2409.08944" }],
  },
  {
    id: "mtech-thesis",
    title:
      "Analysis and Enrichment of Online Knowledge Communities: Stack Exchange and Wikipedia",
    status: "M.Tech thesis, IIT Kharagpur, 2023",
    description:
      "The thesis relates question structure and user interaction to response time on community question-answering sites, and proposes using book content to improve Wikipedia.",
    contribution:
      "Author. This is my M.Tech thesis at the Indian Institute of Technology Kharagpur.",
    links: [
      {
        label: "Thesis",
        href: "https://drive.google.com/file/d/1AQ04RnHzJLqnlQeF-YhaVAyKTzCYOuIk/view",
      },
    ],
  },
  {
    id: "response-time",
    title: "What makes a question get a fast answer",
    status: "Preprint, accepted as a poster",
    description:
      "On community question-answering sites, some questions wait a long time for a first reply. This project relates that wait to metadata, how the question is written, and how users interact, then uses those signals to predict which questions are answered promptly.",
    contribution:
      "Co-author. This continues my M.Tech work at IIT Kharagpur on online knowledge communities.",
    links: [{ label: "Preprint", href: "https://arxiv.org/abs/2309.05961" }],
  },
  {
    id: "tinyml",
    title: "Threat detection on small devices",
    status: "Published, IEEE BigData, 2024",
    description:
      "Edge devices often cannot wait for a cloud model to notice an attack. This paper measures how quantization changes accuracy, model size, and inference time when deep learning models for threat detection run on the device.",
    contribution: "Co-author on the IEEE BigData paper.",
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1109/bigdata62323.2024.10825955",
      },
    ],
  },
];

export const news = [
  {
    id: "icwsm",
    date: "May 2026",
    text: "Tutorial accepted at ICWSM 2026: “Knowledge-Infused Multimodal Learning.”",
    href: "https://www.linkedin.com/posts/agnik-saha_icwsm2026-aaai-knowledgegraphs-activity-7465116489096916992-vLlY",
    linkLabel: "Announcement",
  },
  {
    id: "jmir",
    date: "2026",
    text: "Paper published in JMIR Cancer on large language models for breast and cervical cancer communication.",
    href: "https://cancer.jmir.org/2026/1/e82971",
    linkLabel: "Paper",
  },
  {
    id: "aacr",
    date: "September 2025",
    text: "Abstract presented at the AACR Conference on the Science of Cancer Health Disparities in Baltimore.",
    href: "https://aacrjournals.org/cebp/article/34/9_Supplement/B022/764625/Abstract-B022-Evaluating-multi-turn-capability-of",
    linkLabel: "Abstract",
  },
];

export const education = [
  {
    id: "phd",
    degree: "Ph.D., Computer Science",
    school: "Georgia State University",
    logo: "gsu",
    dates: "2024 – present",
    detail: "GPA 3.86 / 4.0. Atlanta, Georgia.",
  },
  {
    id: "mtech",
    degree: "M.Tech, Computer Science and Engineering",
    school: "Indian Institute of Technology Kharagpur",
    logo: "iitkgp",
    dates: "2021 – 2023",
    detail: "GPA 8.67 / 10.",
    thesis: {
      title:
        "Analysis and Enrichment of Online Knowledge Communities: Stack Exchange and Wikipedia",
      href: "https://drive.google.com/file/d/1AQ04RnHzJLqnlQeF-YhaVAyKTzCYOuIk/view",
      note:
        "The thesis relates question structure and user interaction to response time, and proposes using book content to improve Wikipedia.",
    },
  },
  {
    id: "btech",
    degree: "B.Tech, Computer Science and Engineering",
    school: "Institute of Engineering & Management, Kolkata (MAKAUT)",
    logo: "iem",
    dates: "2017 – 2021",
    detail: "GPA 9.20 / 10.",
  },
];

export const experience = [
  {
    id: "gsu",
    role: "Graduate Research Assistant",
    org: "Georgia State University",
    logo: "gsu",
    dates: "Jan 2024 – present",
    detail:
      "Applied AI for public health communication and online communities, including language models, text analysis, and graph mining.",
  },
  {
    id: "rpshaha",
    role: "Faculty Lecturer",
    org: "R. P. Shaha University",
    logo: "rpsu",
    dates: "Aug 2023 – Dec 2023",
    detail:
      "Taught undergraduate courses in VLSI design, computer architecture, visual and .NET programming, and biostatistics.",
  },
  {
    id: "iit-ta",
    role: "Teaching Assistant",
    org: "IIT Kharagpur",
    logo: "iitkgp",
    dates: "Sep 2022 – May 2023",
    detail:
      "Programming and Data Structures, theory (Fall 2022, CS10003) and lab (Spring 2023, CS19003).",
  },
];

export const advisors = [
  {
    name: "Ugur Kursuncu",
    role: "Ph.D. advisor, Georgia State University",
    logo: "gsu",
    href: "https://www.ugurkursuncu.com/",
  },
  {
    name: "Esra Akbas",
    role: "Ph.D. co-advisor, Georgia State University",
    logo: "gsu",
    href: "https://sites.google.com/view/esraakbas/",
  },
  {
    name: "Animesh Mukherjee",
    role: "M.Tech advisor, IIT Kharagpur",
    logo: "iitkgp",
    href: "https://cse.iitkgp.ac.in/~animeshm/",
  },
];

export const collaboratorGroups = [
  {
    id: "advisors",
    title: "Advisors",
    people: [
      {
        id: "kursuncu",
        name: "Ugur Kursuncu",
        role: "Ph.D. advisor",
        affiliation: "Georgia State University, Institute for Insight",
        interests:
          "Agentic AI, trustworthy AI, neurosymbolic AI, knowledge graphs, human–AI interaction",
        scholar: "https://scholar.google.com/citations?user=cHUVoW0AAAAJ&hl=en",
        homepage: "https://www.ugurkursuncu.com/",
      },
      {
        id: "akbas",
        name: "Esra Akbas",
        role: "Ph.D. co-advisor",
        affiliation: "Georgia State University",
        interests: "Graph machine learning, data and graph mining, network science",
        scholar: "https://scholar.google.com/citations?user=jlN9gEYAAAAJ&hl=en",
        homepage: "https://sites.google.com/view/esraakbas/",
      },
      {
        id: "mukherjee",
        name: "Animesh Mukherjee",
        role: "M.Tech advisor",
        affiliation: "Professor of Computer Science, IIT Kharagpur",
        interests: "Language dynamics, complex systems and networks, web and social media",
        scholar: "https://scholar.google.com/citations?user=lf7-deEAAAAJ&hl=en",
        homepage: "https://cse.iitkgp.ac.in/~animeshm/",
      },
    ],
  },
  {
    id: "coauthors",
    title: "Research collaborators",
    people: [
      {
        id: "padhi",
        name: "Trilok Padhi",
        role: "Coauthor",
        affiliation: "Georgia State University",
        interests:
          "Multimodal learning, vision-language models, large language models, knowledge graphs, reasoning",
        scholar: "https://scholar.google.com/citations?user=TwY8frYAAAAJ&hl=en",
        shared: "Playing Devil’s Advocate: Unmasking Toxicity and Vulnerabilities in Large Vision-Language Models",
      },
      {
        id: "aktas",
        name: "Mehmet Emin Aktas",
        role: "Coauthor",
        affiliation: "School of Data Science and Analytics, Kennesaw State University",
        scholar: "https://scholar.google.com/citations?user=t6NsNvoAAAAJ&hl=en",
        shared: "Playing Devil’s Advocate: Unmasking Toxicity and Vulnerabilities in Large Vision-Language Models",
      },
      {
        id: "erol",
        name: "Abdulkadir Erol",
        role: "Coauthor",
        affiliation: "Ph.D. student, University of Central Florida",
        shared: "Playing Devil’s Advocate: Unmasking Toxicity and Vulnerabilities in Large Vision-Language Models",
        paper: "https://dl.acm.org/doi/10.1145/3821418",
      },
      {
        id: "singla",
        name: "Yaman Kumar Singla",
        role: "Collaborator",
        affiliation: "Adobe",
        interests:
          "Machine learning, behavioral science, computational marketing, large language models",
        scholar: "https://scholar.google.com/citations?user=Y7rIA24AAAAJ&hl=en",
      },
      {
        id: "shalin",
        name: "Valerie Shalin",
        role: "Collaborator",
        affiliation:
          "2024–25 Brage Golding Distinguished Professor of Research, Wright State University",
        interests: "Applied cognitive science",
        scholar: "https://scholar.google.com/citations?user=trFx5GIAAAAJ&hl=en",
      },
      {
        id: "fronczek",
        name: "Lane Peterson Fronczek",
        role: "Collaborator",
        affiliation: "Assistant Professor of Marketing, California Polytechnic State University",
        interests:
          "Consumer well-being, consumer technologies, food consumption and perceptions",
        scholar: "https://scholar.google.com/citations?user=IYBvfboAAAAJ&hl=en",
      },
      {
        id: "idris",
        name: "Muhammed Y. Idris",
        role: "Coauthor",
        affiliation: "Assistant Professor, Morehouse School of Medicine",
        interests: "Digital health, health data science",
        scholar: "https://scholar.google.com/citations?user=QyPvblUAAAAJ&hl=en",
        shared:
          "Large Language Models for Cancer Communication: Evaluating Linguistic Quality, Safety, and Accessibility in Generative AI",
      },
      {
        id: "churchill",
        name: "Victoria Churchill",
        role: "Coauthor",
        affiliation: "Postdoctoral Fellow, Morehouse School of Medicine",
        interests: "Health communication, substance use",
        scholar: "https://scholar.google.com/citations?user=1IkuwfYAAAAJ&hl=en",
        shared:
          "Large Language Models for Cancer Communication: Evaluating Linguistic Quality, Safety, and Accessibility in Generative AI",
      },
    ],
  },
];

export const skills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Hugging Face",
  "Neo4j",
  "Network analysis",
  "Natural language processing",
];
