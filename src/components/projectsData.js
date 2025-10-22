// src/components/projectsData.js

import vertexrag from "../assets/vertexrag.png";
import querymind from "../assets/querymind.png";
import drone from "../assets/drone-route-optimization.png";
import hospital from "../assets/hospital-readmission.png";

export const projects = [
  {
    id: 1,
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
      "RAG",
    ],
    image: vertexrag,
    github: "https://github.com/athulya-anil/vertex-RAG-engine",
  },
  {
    id: 2,
    title: "QueryMind",
    subtitle: "AI SQL Agent",
    description:
      "An intelligent SQL agent that self-corrects query errors and learns from feedback. Built using Groq LLaMA 3.3 70B, Streamlit, and SQLite.",
    tags: [
      "Groq LLaMA 3.3",
      "Streamlit",
      "SQLite",
      "Self-Reflection Engine",
      "AI Agent",
    ],
    image: querymind,
    github: "https://github.com/athulya-anil/QueryMind",
    live: "https://querymind-ai.streamlit.app/",
  },
  {
    id: 3,
    title: "Drone Route Optimization",
    subtitle: "Real-Time Systems Project",
    description:
      "Dynamic route optimization for delivery drones using real-time weather, traffic, and airspace data via Apache Kafka and Flink.",
    tags: ["Kafka", "Flink", "Python", "Java", "Streaming"],
    image: drone,
    github: "https://github.com/athulya-anil/drone-route-optimization",
  },
  {
    id: 4,
    title: "Hospital Readmission Dashboard",
    subtitle: "Data Visualization",
    description:
      "Interactive dashboard analyzing U.S. hospital readmission trends across diagnoses, medications, and demographics using React + D3.",
    tags: ["React", "D3.js", "Plotly", "TailwindCSS", "DataViz"],
    image: hospital,
    github: "https://github.com/athulya-anil/hospital-readmission",
    live: "https://athulya-anil.github.io/hospital-readmission/",
  },
];
