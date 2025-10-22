import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-8 md:px-20 bg-[#FFF8E1]/60 text-center"
    >
      <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">
        Let’s <span className="text-[#E69600]">Connect</span>
      </h2>

      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
        Feel free to reach out for collaborations, ideas, or just to chat about{" "}
        <span className="text-[#E69600] font-medium">AI and engineering</span>!
      </p>

      <a
        href="mailto:athulya.p.anil@gmail.com"
        className="bg-[#F7B733] text-white font-semibold tracking-wide px-10 py-4 rounded-full shadow-md hover:bg-[#E69600] hover:shadow-[0_0_20px_#F7B733]/60 transition-all duration-300 inline-block"
      >
        Say Hello 👋
      </a>
    </section>
  );
}
