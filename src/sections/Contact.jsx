import React from "react";
import { Mail, MapPin, Coffee, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xdkwrzye"); 

  return (
    <section id="contact" className="py-24 bg-white text-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-black">
          Let’s{" "}
          <span className="bg-gradient-to-r from-[#F5C045] to-[#E6AC2A] bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          Have a project idea? Want to chat about tech or AI?  
          I’d love to hear from you — feel free to reach out!
        </p>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div className="space-y-5">
            {/* Email */}
            <div className="border border-amber-200 rounded-2xl p-5 hover:shadow-[0_0_20px_rgba(247,183,51,0.15)] transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 text-amber-600 p-3 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-sm text-gray-600">Drop me a line anytime</p>
                  <a
                    href="mailto:athulyaanil@umass.edu"
                    className="text-amber-600 font-medium hover:underline"
                  >
                    athulyaanil@umass.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="border border-amber-200 rounded-2xl p-5 hover:shadow-[0_0_20px_rgba(247,183,51,0.15)] transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 text-amber-600 p-3 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-sm text-gray-600">Amherst, MA (Open to relocation)</p>
                </div>
              </div>
            </div>

            {/* Coffee Chat */}
            <div className="border border-amber-200 rounded-2xl p-5 hover:shadow-[0_0_20px_rgba(247,183,51,0.15)] transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 text-amber-600 p-3 rounded-xl">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">15-Minute Coffee Chat</h3>
                  <p className="text-sm text-gray-600">Let’s grab a virtual coffee</p>
                  <a
                    href="https://calendly.com/athulyaanil-umass/15-minute-coffee-chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 font-medium hover:underline"
                  >
                    Schedule on Calendly
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side – Contact Form */}
          <div className="bg-white border border-amber-200 rounded-2xl p-8 shadow-[0_0_25px_rgba(247,183,51,0.1)]">
            <h3 className="text-2xl font-bold mb-4 text-black">Send a Message</h3>

            {state.succeeded ? (
              <p className="text-amber-600 text-center text-lg font-medium py-10">
                Message sent successfully! I’ll get back to you soon. 😁
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-300 outline-none transition-all"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-300 outline-none transition-all"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, idea, or just say hi!"
                    rows="5"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-300 outline-none transition-all"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-[#F7B733] text-white font-semibold tracking-wide uppercase px-8 py-3 rounded-full shadow-lg hover:bg-[#E69600] hover:shadow-[0_0_20px_#F7B733]/60 transition-all duration-300 flex items-center justify-center gap-2 w-full"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
