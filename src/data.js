// // data.js

// import cancerImg from "./assets/cancer-llm.png";
// import vlmImg from "./assets/vlm-safety.png";
// import stackImg from "./assets/stackexchange.png";
// import scholarImg from "./assets/publications.png";
// import kgImg from "./assets/knowledge-graph.png";

// export const featuredPortfolio = [
//   {
//     id: 1,
//     title: "LLMs for Cancer Communication",
//     img: cancerImg,
//     link: "https://arxiv.org/abs/2505.10472",
//   },
//   {
//     id: 2,
//     title: "Multi-turn LLM Evaluation in Cancer Communication",
//     img: cancerImg,
//     link: "https://aacrjournals.org/cebp/article/34/9_Supplement/B022/764625/Abstract-B022-Evaluating-multi-turn-capability-of",
//   },
//   {
//     id: 3,
//     title: "Toxicity & Vulnerabilities in Vision-Language Models",
//     img: vlmImg,
//     link: "https://arxiv.org/abs/2501.09039",
//   },
//   {
//     id: 4,
//     title: "Stack Exchange User Engagement Through Network Analysis",
//     img: stackImg,
//     link: "https://arxiv.org/html/2409.08944v1",
//   },
// ];

// export const llmPortfolio = [
//   {
//     id: 1,
//     title: "Large Language Models for Cancer Communication",
//     img: cancerImg,
//     link: "https://arxiv.org/abs/2505.10472",
//   },
//   {
//     id: 2,
//     title: "Multi-turn Capability of LLMs in Cancer Communication",
//     img: cancerImg,
//     link: "https://aacrjournals.org/cebp/article/34/9_Supplement/B022/764625/Abstract-B022-Evaluating-multi-turn-capability-of",
//   },
//   {
//     id: 3,
//     title: "Marketing Knowledge Graphs with LLMs",
//     img: kgImg,
//     link: "https://scholar.google.com/citations?user=pAlh9XQAAAAJ&hl=en",
//   },
//   {
//     id: 4,
//     title: "Agentic and Generative AI Research",
//     img: scholarImg,
//     link: "https://scholar.google.com/citations?user=pAlh9XQAAAAJ&hl=en",
//   },
// ];

// export const healthAiPortfolio = [
//   {
//     id: 1,
//     title: "Cancer Communication: Quality, Safety, Accessibility",
//     img: cancerImg,
//     link: "https://arxiv.org/abs/2505.10472",
//   },
//   {
//     id: 2,
//     title: "Evaluating Multi-turn LLMs for Health Communication",
//     img: cancerImg,
//     link: "https://aacrjournals.org/cebp/article/34/9_Supplement/B022/764625/Abstract-B022-Evaluating-multi-turn-capability-of",
//   },
// ];

// export const graphPortfolio = [
//   {
//     id: 1,
//     title: "Unveiling User Engagement on Stack Exchange",
//     img: stackImg,
//     link: "https://arxiv.org/html/2409.08944v1",
//   },
//   {
//     id: 2,
//     title: "Wikipedia & Online Knowledge Community Analysis",
//     img: stackImg,
//     link: "https://scholar.google.com/citations?user=pAlh9XQAAAAJ&hl=en",
//   },
//   {
//     id: 3,
//     title: "Knowledge Graph Construction for Marketing",
//     img: kgImg,
//     link: "https://scholar.google.com/citations?user=pAlh9XQAAAAJ&hl=en",
//   },
// ];

// export const publicationsPortfolio = [
//   {
//     id: 1,
//     title: "JMIR Cancer / Cancer Communication Study",
//     img: cancerImg,
//     link: "https://arxiv.org/abs/2505.10472",
//   },
//   {
//     id: 2,
//     title: "AACR Abstract on Multi-turn LLM Evaluation",
//     img: cancerImg,
//     link: "https://aacrjournals.org/cebp/article/34/9_Supplement/B022/764625/Abstract-B022-Evaluating-multi-turn-capability-of",
//   },
//   {
//     id: 3,
//     title: "ACM TIST R&R: LVLM Toxicity and Safety",
//     img: vlmImg,
//     link: "https://arxiv.org/abs/2501.09039",
//   },
//   {
//     id: 4,
//     title: "Google Scholar Profile",
//     img: scholarImg,
//     link: "https://scholar.google.com/citations?user=pAlh9XQAAAAJ&hl=en",
//   },
// ];

// data.js
const aiImg = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200";
const graphImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200";
const healthImg = "https://images.unsplash.com/photo-1581090700227-1e8a3b6f7c3b?w=1200";
const researchImg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200";

// FEATURED
export const featuredPortfolio = [
  {
    id: 1,
    title: "LLMs for Cancer Communication",
    img: healthImg,
    link: "https://arxiv.org/abs/2505.10472",
  },
  {
    id: 2,
    title: "Multi-turn LLM Evaluation",
    img: aiImg,
    link: "https://aacrjournals.org/cebp/article/34/9_Supplement/B022/764625/",
  },
  {
    id: 3,
    title: "Vision-Language Model Safety",
    img: aiImg,
    link: "https://arxiv.org/abs/2501.09039",
  },
  {
    id: 4,
    title: "Knowledge Graph with LLMs",
    img: graphImg,
    link: "#",
  },
  {
    id: 5,
    title: "Stack Exchange Network Analysis",
    img: graphImg,
    link: "#",
  },
  {
    id: 6,
    title: "Wikipedia Knowledge Enrichment",
    img: researchImg,
    link: "#",
  },
];

// LLM / GENAI
export const llmPortfolio = [
  {
    id: 1,
    title: "Generative AI for Health",
    img: healthImg,
    link: "https://arxiv.org/abs/2505.10472",
  },
  {
    id: 2,
    title: "Multi-turn LLM Capability",
    img: aiImg,
    link: "#",
  },
  {
    id: 3,
    title: "Agentic AI Systems",
    img: aiImg,
    link: "#",
  },
  {
    id: 4,
    title: "LLM Evaluation Frameworks",
    img: researchImg,
    link: "#",
  },
  {
    id: 5,
    title: "Neuro-Symbolic AI",
    img: aiImg,
    link: "#",
  },
];

// HEALTH AI
export const healthAiPortfolio = [
  {
    id: 1,
    title: "Cancer Communication Systems",
    img: healthImg,
    link: "https://arxiv.org/abs/2505.10472",
  },
  {
    id: 2,
    title: "Safe & Accessible AI",
    img: healthImg,
    link: "#",
  },
  {
    id: 3,
    title: "Synthetic Data Generation",
    img: aiImg,
    link: "#",
  },
];

// GRAPH / NETWORK
export const graphPortfolio = [
  {
    id: 1,
    title: "Stack Exchange Dynamics",
    img: graphImg,
    link: "#",
  },
  {
    id: 2,
    title: "Network Science Analysis",
    img: graphImg,
    link: "#",
  },
  {
    id: 3,
    title: "Knowledge Graph Construction",
    img: graphImg,
    link: "#",
  },
  {
    id: 4,
    title: "Graph Completion & Reasoning",
    img: graphImg,
    link: "#",
  },
];

// PUBLICATIONS
export const publicationsPortfolio = [
  {
    id: 1,
    title: "JMIR Cancer Paper",
    img: researchImg,
    link: "https://arxiv.org/abs/2505.10472",
  },
  {
    id: 2,
    title: "AACR Paper",
    img: researchImg,
    link: "#",
  },
  {
    id: 3,
    title: "ACM TIST Submission",
    img: researchImg,
    link: "#",
  },
  {
    id: 4,
    title: "IEEE BigData Paper",
    img: researchImg,
    link: "#",
  },
  {
    id: 5,
    title: "Google Scholar",
    img: researchImg,
    link: "https://scholar.google.com/citations?user=pAlh9XQAAAAJ&hl=en",
  },
];