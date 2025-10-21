export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-20 bg-secondary/40">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold text-accent">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I’m a passionate engineer focused on bridging applied AI with real-world
          engineering. From <span className="font-semibold">QueryMind</span>, a
          self-correcting AI SQL agent, to{" "}
          <span className="font-semibold">Vertex-RAG-Engine</span>, a scalable retrieval
          pipeline, I design systems that think with you.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          I’ve worked at <strong>UnitedHealth Group</strong> and{" "}
          <strong>Blue Cross Blue Shield</strong> in data engineering and analytics,
          developing pipelines that scale. My goal is to shape the future of
          intelligent automation through agentic AI and system design.
        </p>
      </div>
    </section>
  );
}

