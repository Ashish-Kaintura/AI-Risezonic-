import React from "react";
import { 
    FaGithub, 
    FaExternalLinkAlt, 
    FaRobot, 
    FaUserGraduate, 
    FaLaptopCode, 
    FaFilePdf, 
    FaFileCsv, 
    FaMicrophone, 
    FaGavel, 
    FaPhoneAlt, 
    FaWhatsapp, 
    FaRocket, 
    FaBrain, 
    FaTrophy, 
    FaBookOpen, 
    FaBolt 
} from "react-icons/fa";

const OurProjects = () => {
    return (
        <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto font-sans text-gray-800 bg-gray-50 ">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-3 flex justify-center items-center gap-2">
                    <FaRocket className="text-blue-700" /> Our Projects
                </h1>
                <p className="text-lg text-gray-600">
                    Explore cutting-edge innovations built by our team and students
                </p>
            </div>

            {/* Section: Our Projects */}
            <section className="mb-16" data-aos="fade-up">
                <div className="flex items-center gap-3 mb-4">
                    <FaLaptopCode className="text-blue-600 text-2xl" />
                    <h2 className="text-2xl font-semibold text-gray-900">Our Projects</h2>
                </div>
                <ul className="list-none space-y-2 text-gray-700 text-base ml-6">
                    <li className="flex items-center gap-2">
                        <FaFilePdf className="text-red-600" />
                        <FaFileCsv className="text-green-600" />
                        Chat with PDF + CSV
                    </li>
                    <li className="flex items-center gap-2">
                        <FaMicrophone className="text-purple-600" />
                        <FaRobot className="text-gray-700" />
                        Voice Controlled Robot with LLM
                    </li>
                    <li className="flex items-center gap-2">
                        <FaGavel className="text-blue-700" />
                        Legal Document RAG QA System
                    </li>
                    <li className="flex items-center gap-2">
                        <FaPhoneAlt className="text-yellow-600" />
                        AI Caller with Human-Like Voice
                    </li>
                    <li className="flex items-center gap-2">
                        <FaWhatsapp className="text-green-500" />
                        WhatsApp AI Assistant
                    </li>
                </ul>
                <div className="mt-4 flex gap-4">
                    <a
                        href="/projects"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm flex items-center gap-1"
                    >
                        <FaExternalLinkAlt /> View All Projects
                    </a>
                    <a
                        href="https://github.com/risezonic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition text-sm flex items-center gap-1"
                    >
                        <FaGithub /> GitHub
                    </a>
                </div>
            </section>

            {/* Section: Student Projects */}
            <section className="mb-16" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-3 mb-4">
                    <FaUserGraduate className="text-green-600 text-2xl" />
                    <h2 className="text-2xl font-semibold text-gray-900">Student-led Projects</h2>
                </div>
                <p className="text-gray-700 text-base ml-6">
                    We empower students to:
                </p>
                <ul className="list-none space-y-2 text-gray-700 text-base ml-6 mt-2">
                    <li className="flex items-center gap-2">
                        <FaRocket className="text-blue-600" />
                        Lead their own mini startups
                    </li>
                    <li className="flex items-center gap-2">
                        <FaBrain className="text-purple-600" />
                        Get mentorship from GenAI experts
                    </li>
                    <li className="flex items-center gap-2">
                        <FaTrophy className="text-yellow-600" />
                        Submit for hackathons and incubation
                    </li>
                </ul>
            </section>

            {/* Section: Hackathons */}
            <section className="mb-16" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-3 mb-4">
                    <FaRobot className="text-purple-600 text-2xl" />
                    <h2 className="text-2xl font-semibold text-gray-900">Hackathons & Challenges</h2>
                </div>
                <ul className="list-none space-y-2 text-gray-700 text-base ml-6">
                    <li className="flex items-center gap-2">
                        <FaBolt className="text-blue-600" />
                        GenAI Build Week – <span className="text-blue-600">August 2025</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaBookOpen className="text-gray-500" />
                        AI in Education Hackathon – <span className="text-gray-500 italic">Coming Soon</span>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default OurProjects;
