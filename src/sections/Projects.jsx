export default function Projects() {
  const projects = [
    {
      name: "QueryMind",
      description:
        "An AI SQL agent that self-corrects query errors and learns from feedback.",
      tech: "Groq LLaMA 3.3, Streamlit, SQLite",
      link: "https://querymind-ai.streamlit.app/",
    },
    {
      name: "Vertex-RAG-Engine",
      description:
        "A metadata-enriched Retrieval-Augmented Generation engine using Vertex AI and FAISS.",
      tech: "Python, FAISS, SentenceTransformers, Groq API",
      link: "https://github.com/athulya-anil/vertex-RAG-engine",
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 md:px-20 bg-background">
      <h2 className="text-4xl font-bold text-center text-accent mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-xl shadow-lg border border-secondary bg-white/70 p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold text-primary">{p.name}</h3>
            <p className="text-gray-700 mt-2">{p.description}</p>
            <p className="text-sm text-gray-500 mt-2">{p.tech}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-accent font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

