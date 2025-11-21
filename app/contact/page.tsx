import Header from "@/components/Header/Index";
import Animation from "@/components/HeartMain/Animation";

export default function ContactPage() {
  return (
    <>
      {/* Same heart background */}
      <Animation />

      {/* Header */}
      <Header />

      {/* Contact Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/5 backdrop-blur-xs">
        <div className="max-w-md w-full">
          <h1 className="text-6xl md:text-7xl font-bold text-white text-center mb-10">
            Get in Touch
          </h1>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-300 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-300 transition"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-300 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 bg-pink-600/80 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-pink-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
