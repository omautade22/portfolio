import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import {
  Code,
  Brain,
  Database,
  Cloud,
  Terminal,
  Wrench
} from "lucide-react";


export default function Home() {
  return (
    <main className="px-6 md:px-20">
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Om Autade
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
          Software Engineer • GenAI Developer
        </h2>

        <p className="max-w-xl text-gray-300 mb-8">
          I build scalable backend systems, AI-powered applications,
          and modern web experiences with a strong focus on clean
          architecture and real-world impact.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 border-t border-gray-900">
        <h3 className="text-3xl font-semibold mb-12">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Multi-Cloud Pricing Intelligence Platform",
              desc: "GenAI-driven platform aggregating real-time pricing from AWS, Azure, and GCP. Built a pricing agent to normalize, compare, and answer intent-based cost queries.",
              link: "https://github.com/your-username/multi-cloud-pricing-agent"
            },
            {
              title: "Intelligent Knowledge Base Agent (RAG)",
              desc: "Enterprise RAG system over SharePoint enabling context-aware Q&A. Implemented automated ingestion, semantic retrieval, and LLM-based response generation.",
              link: "https://github.com/your-username/rag-knowledge-base"
            },
            {
              title: "Intelligent Ticket Routing Agent",
              desc: "AI-powered agent for ticket assignment, escalation prediction, and workload-based assignee recommendation using LLMs.",
              link: "https://github.com/your-username/ticket-routing-agent"
            },
            {
              title: "AI Chatbot (Cohere LLM)",
              desc: "Production-ready AI chatbot powered by Cohere LLM with FastAPI backend and React frontend.",
              link: "https://github.com/your-username/ai-chatbot-cohere"
            }
          ].map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition"
            >
              <h4 className="text-xl font-medium mb-2">
                {project.title}
              </h4>
              <p className="text-gray-400">
                {project.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 border-t border-gray-900"
      >
        <h3 className="text-3xl font-semibold mb-8">
          About Me
        </h3>

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">

          {/* Left: About text */}
          <div className="text-gray-300 space-y-4">
            <p>
              I am a Software Engineer with experience in building scalable backend
              systems, AI-powered platforms, and cloud-native applications, with a
              strong focus on Generative AI, LLM-powered services, agent-based
              architectures, and RAG systems.
            </p>

            <p>
              In addition to AI development, I have hands-on experience in
              intelligent automation and RPA, delivering solutions for application
              health monitoring, system troubleshooting, service sanity checks,
              database operations, and IT infrastructure workflows.
            </p>

            <p>
              My skill set spans Python, Java with Spring Boot, PowerShell, and
              Playwright. I bring a strong foundation in data structures and
              problem-solving, and I enjoy building reliable systems by combining
              clean architecture, automation, and AI-driven decision-making.
            </p>
          </div>

          {/* Right: Experience Timeline */}
          <div className="relative pl-8 border-l border-gray-700">
            <h4 className="text-lg font-medium mb-8">
              Experience
            </h4>

            <div className="space-y-8">

              {/* CURRENT ROLE */}
              <div className="relative pl-2">
                <span className="absolute -left-[9px] top-1.5 w-3 h-3 rounded-full 
                                bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]">
                </span>

                <h5 className="font-medium leading-tight">
                  Software Engineer — Product Development
                </h5>
                <p className="text-sm text-gray-400">
                  Backend & GenAI · April 2024 – Present
                </p>
              </div>

              {/* PREVIOUS ROLE */}
              <div className="relative pl-2">
                <span className="absolute -left-[9px] top-1.5 w-3 h-3 rounded-full 
                                bg-black border border-gray-400">
                </span>

                <h5 className="font-medium leading-tight">
                  Software Engineer — AIOPs Automation
                </h5>
                <p className="text-sm text-gray-400">
                  LTIMindtree · November 2023 – March 2024
                </p>
              </div>

              {/* FIRST ROLE */}
              <div className="relative pl-2">
                <span className="absolute -left-[9px] top-1.5 w-3 h-3 rounded-full 
                                bg-black border border-gray-400">
                </span>

                <h5 className="font-medium leading-tight">
                  Graduate Engineer Trainee
                </h5>
                <p className="text-sm text-gray-400">
                  LTIMindtree · June 2023 – October 2023
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-24 border-t border-gray-900"
      >
        <h3 className="text-3xl font-semibold mb-12">
          Skills
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* GenAI */}
          <div className="border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Brain size={20} />
              <h4 className="text-lg font-medium">Generative AI</h4>
            </div>
            <p className="text-gray-400">
              LLMs, RAG, Agentic AI, OpenAI APIs, LangChain, MCP,
              Vector Databases (Chroma)
            </p>
          </div>

          {/* Backend */}
          <div className="border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Code size={20} />
              <h4 className="text-lg font-medium">Backend Development</h4>
            </div>
            <p className="text-gray-400">
              Python, Java, FastAPI, Flask, Spring Boot,
              REST APIs, Microservices
            </p>
          </div>

          {/* Databases */}
          <div className="border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Database size={20} />
              <h4 className="text-lg font-medium">Databases</h4>
            </div>
            <p className="text-gray-400">
              PostgreSQL, MySQL, ChromaDB,
              SQL & Data Modeling
            </p>
          </div>

          {/* Automation */}
          <div className="border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Wrench size={20} />
              <h4 className="text-lg font-medium">Automation & RPA</h4>
            </div>
            <p className="text-gray-400">
              Python Automation, PowerShell, Playwright,
              System Monitoring, Workflow Automation
            </p>
          </div>

          {/* Cloud & DevOps */}
          <div className="border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Cloud size={20} />
              <h4 className="text-lg font-medium">Cloud & DevOps</h4>
            </div>
            <p className="text-gray-400">
              AWS, Docker, Kubernetes, Git
            </p>
          </div>

          {/* Problem Solving */}
          <div className="border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Terminal size={20} />
              <h4 className="text-lg font-medium">Problem Solving</h4>
            </div>
            <p className="text-gray-400">
              Data Structures & Algorithms, System Design,
              Debugging, Optimization
            </p>
          </div>
        </div>
      </section>

            {/* Contact */}
      <section
        id="contact"
        className="py-24 border-t border-gray-900"
      >
        <h3 className="text-3xl font-semibold mb-6">
          Contact
        </h3>

        <p className="text-gray-400 mb-8 max-w-xl">
          Have an opportunity, idea, or want to collaborate?
          Feel free to reach out.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:omautade22@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
          >
            <Mail size={18} />
            <span>omautade22@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/om-autade"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/omautade22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.instagram.com/om.autade.22/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
        </div>

      </section>
    </main>
  );
}
