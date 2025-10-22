// src/components/projectsData.js
export const projects = [
  {
    id: 1,
    title: "QueryMind",
    subtitle: "AI SQL Agent",
    description:
      "An intelligent SQL agent that self-corrects query errors and learns from feedback. Built using Groq LLaMA 3.3 70B, Streamlit, and SQLite.",
    tags: ["Groq LLaMA 3.3", "Streamlit", "SQLite", "Self-Reflection Engine"],
    image: "/src/assets/querymind.png",
    github: "https://github.com/athulya-anil/QueryMind",
    live: "https://querymind-ai.streamlit.app/",
  },
  {
    id: 2,
    title: "VertexRAG Engine",
    subtitle: "Retrieval-Augmented Generation Pipeline",
    description:
      "A modular RAG system integrating chunking factories, metadata enrichment, embeddings, FAISS retrieval, and Groq LLMs — deployed via Streamlit UI and ready for cloud scaling.",
    tags: [
      "Python",
      "FAISS",
      "SentenceTransformers",
      "Groq LLMs",
      "Streamlit",
    ],
    image: "/src/assets/vertexrag.png",
    github: "https://github.com/athulya-anil/vertex-RAG-engine",
    live: "",
  },
];

