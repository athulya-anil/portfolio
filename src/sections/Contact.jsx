export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-20 bg-secondary/30 text-center">
      <h2 className="text-4xl font-bold text-accent mb-6">Let’s Connect</h2>
      <p className="text-lg text-gray-700 mb-8">
        Feel free to reach out for collaborations, ideas, or just to chat about AI and
        engineering!
      </p>
      <a
        href="mailto:athulya.p.anil@gmail.com"
        className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-accent transition"
      >
        Say Hello 👋
      </a>
    </section>
  );
}

