import React from "react";
import { FaRobot, FaLaptopCode, FaBookOpen, FaUniversity } from "react-icons/fa";

const AiSolutions = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581093588401-ec1e6f1a1f6e')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🤖 AI Solutions & Products
          </h1>
          <p className="text-lg md:text-xl">
            Explore the AI tools we build to revolutionize learning, automation, and innovation.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 space-y-16">
        {/* Section 1: AI Apps */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <FaLaptopCode className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-800">AI Apps We Build</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700 text-lg">
            <li>🎙️ Chatbots with memory and role</li>
            <li>📄 Document Q&A (PDF, DOCX, CSV)</li>
            <li>📚 AI Tutors for LMS and college portals</li>
            <li>🧠 Custom RAG pipelines with low latency</li>
            <li>🧮 Voice + Chat Calculators</li>
            <li>🌐 Websites with embedded GenAI bots</li>
          </ul>
        </div>

        {/* Section 2: AI in Education */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <FaBookOpen className="text-3xl text-purple-600" />
            <h2 className="text-2xl font-bold text-purple-800">AI in Education</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700 text-lg">
            <li>📝 Smart AI Assessments (auto-evaluation, feedback)</li>
            <li>🗣️ Adaptive Learning Chatbots</li>
            <li>🧾 Essay Evaluators with GenAI</li>
            <li>🎓 LMS Assistant (like ChatGPT for your syllabus)</li>
          </ul>
        </div>

        {/* Section 3: Robotics + AI */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <FaRobot className="text-3xl text-green-600" />
            <h2 className="text-2xl font-bold text-green-800">Robotics + AI</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700 text-lg">
            <li>🤖 Voice Controlled Robot (4 Direction + Q&A)</li>
            <li>🚁 AI Drone for Classroom + Surveillance</li>
            <li>📡 IoT Projects + AI integration</li>
          </ul>
        </div>

        {/* Section 4: Consulting */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <FaUniversity className="text-3xl text-red-600" />
            <h2 className="text-2xl font-bold text-red-800">Consulting for Institutions</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700 text-lg mb-8">
            <li>🧪 Setup GenAI Labs</li>
            <li>📘 Design your AI curriculum</li>
            <li>⚙️ Embed AI in your academic workflow</li>
          </ul>

          <div className="flex gap-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              📞 Book a Call
            </a>
            <a
              href="/case-study"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              📂 See Case Study
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiSolutions;
