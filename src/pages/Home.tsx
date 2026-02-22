import { motion } from "framer-motion";
import ChatWidget from "../components/ChatWidget";
import React from "react";
import { FaDatabase } from "react-icons/fa";
import {
  SiC,
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiFastapi,
  SiNodedotjs,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
  SiFigma,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: SiC, link: "https://en.cppreference.com/w/c/language" },
      { name: "Java", icon: SiOpenjdk, link: "https://www.java.com/" },
      { name: "Python", icon: SiPython, link: "https://www.python.org/" },
      { name: "JavaScript", icon: SiJavascript, link: "https://developer.mozilla.org/docs/Web/JavaScript" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, link: "https://react.dev/" },
      { name: "TypeScript", icon: SiTypescript, link: "https://www.typescriptlang.org/" },
      { name: "HTML/CSS", icon: SiHtml5, link: "https://developer.mozilla.org/docs/Web/HTML" },
      { name: "TailwindCSS", icon: SiTailwindcss, link: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", icon: SiFastapi, link: "https://fastapi.tiangolo.com/" },
      { name: "Node.js", icon: SiNodedotjs, link: "https://nodejs.org/" },
      { name: "REST API Design", icon: FaDatabase, link: "https://restfulapi.net/" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, link: "https://www.mysql.com/" },
      { name: "SQLite", icon: SiSqlite, link: "https://www.sqlite.org/" },
      { name: "MongoDB", icon: SiMongodb, link: "https://www.mongodb.com/" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, link: "https://git-scm.com/" },
      { name: "GitHub", icon: SiGithub, link: "https://github.com/" },
      { name: "Linux CLI", icon: SiLinux, link: "https://www.linux.org/" },
      { name: "Figma", icon: SiFigma, link: "https://www.figma.com/" },
    ],
  },
];

const Home = () => {

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isAIModalOpen, setIsAIModalOpen] = React.useState(false);
  const [openChat, setOpenChat] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* 🔥 MOUSE GLOW BACKGROUND */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-150"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.22), transparent 72%)`,
        }}
      />
    <div className="relative z-10 min-h-screen px-10 py-28">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mb-28"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Ayush Thakur
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-400 mt-4 font-medium">
          Full Stack Developer | Backend-Focused Engineer
        </h2>

        <p className="text-slate-400 mt-6 max-w-2xl leading-relaxed text-lg">
          Computer Science undergraduate focused on building structured,
          scalable backend systems and intelligent web applications.
          I specialize in clean API design, database integration,
          and AI-powered features.
        </p>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-28"
      >
        <h2 className="text-3xl font-semibold mb-8">About Me</h2>

        <p className="text-slate-400 leading-relaxed text-lg">
          I am currently pursuing B.E in Computer Science and actively
          developing full-stack applications with a strong emphasis on backend systems.
          My work focuses on REST API design, database persistence using SQLAlchemy,
          and integrating AI-driven features into real-world web platforms.
        </p>

        <p className="text-slate-400 leading-relaxed text-lg mt-5">
          I aim to build maintainable, scalable systems by following structured
          architecture patterns and clean coding principles.
        </p>
      </motion.section>

      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-32"
      >
        <h2 className="text-4xl font-semibold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-blue-400 mb-5">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <motion.a
                    key={`${category.title}-${skill.name}`}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center gap-3 text-slate-300 hover:text-blue-400 hover:border-blue-500 transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
                  >
                    <div className="text-4xl">
                      {React.createElement(skill.icon as React.ElementType)}
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

    {/* PROJECTS */}
<motion.section
  id="projects"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="max-w-6xl mx-auto mb-28"
>
  <h2 className="text-3xl font-semibold mb-12">Projects</h2>

  <div className="grid md:grid-cols-2 gap-10">

    {/* 1. AI Portfolio */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900 border border-slate-700 p-8 rounded-2xl hover:border-blue-500 transition duration-300"
    >
      <h3 className="text-2xl font-semibold mb-3">
        AI-Integrated Portfolio System
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Developed a full-stack portfolio website integrated with an AI chat assistant.
        Built REST APIs using FastAPI, implemented persistent chat storage using
        SQLite and SQLAlchemy, and connected OpenRouter for intelligent responses.
      </p>

      <div className="mt-6 flex gap-4">

  <a
    href="https://github.com/yourusername/ai-portfolio"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm transition"
  >
    View Code
  </a>

  <button
    onClick={() => setIsAIModalOpen(true)}
    className="px-4 py-2 border border-blue-500 hover:bg-blue-500/10 rounded-lg text-blue-400 text-sm transition"
  >
    Try AI Demo →
  </button>

</div>
    </motion.div>

    {/* 2. GitHub Profile Analyzer */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900 border border-slate-700 p-8 rounded-2xl hover:border-blue-500 transition duration-300"
    >
      <h3 className="text-2xl font-semibold mb-3">
        GitHub Profile Analyzer
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Built a GitHub profile analysis tool that fetches and evaluates public
        repository data using GitHub APIs. The system analyzes commit activity,
        languages used, repository quality, and overall contribution patterns
        to generate structured insights.
      </p>

      <div className="mt-5 flex justify-between items-center">
        <span className="text-sm text-blue-400">
          React · REST API · GitHub API · Data Processing
        </span>

        <a
          href="https://github.com/ayush-thakur01/github-Profile-analyzer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Code →
        </a>
      </div>
    </motion.div>

    {/* 3. Krishi Sahyog */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900 border border-slate-700 p-8 rounded-2xl hover:border-blue-500 transition duration-300"
    >
      <h3 className="text-2xl font-semibold mb-3">
        Krishi Sahyog Platform
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Developed a web-based agricultural support platform designed to assist
        farmers with crop guidance, resource management, and digital communication.
        The system focuses on improving accessibility to information and enhancing
        farm productivity through structured digital solutions.
      </p>

      <div className="mt-5 flex justify-between items-center">
        <span className="text-sm text-blue-400">
          Full Stack · Database Integration · Web Platform
        </span>

        <a
          href="https://github.com/ayush-thakur01/krishi-sahyog-webpage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Code →
        </a>
      </div>
    </motion.div>

    {/* 4. Smart Composting Bin */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900 border border-slate-700 p-8 rounded-2xl hover:border-blue-500 transition duration-300"
    >
      <h3 className="text-2xl font-semibold mb-3">
        Smart Composting Bin (IoT System)
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Designed and developed an IoT-based smart composting system aimed at
        reducing biodegradable waste. The system integrates temperature and
        moisture sensors, a rotating cutting mechanism, water spray nozzles,
        heating elements, and a monitoring display.
      </p>

      <p className="text-slate-400 leading-relaxed mt-3">
        The goal of the project was to accelerate compost decomposition
        through automated environmental control and real-time monitoring.
        The system architecture combines embedded hardware logic with
        sensor-based feedback mechanisms to optimize compost quality.
      </p>

      <div className="mt-5 flex justify-between items-center">
        <span className="text-sm text-blue-400">
          Arduino · Sensors · Embedded Systems · Automation
        </span>

        <span className="text-blue-400">
          More Information →
        </span>
      </div>
    </motion.div>

  </div>
</motion.section>
<motion.section
  id="ai-demo"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="max-w-5xl mx-auto mt-32"
>
  <h2 className="text-3xl font-semibold mb-6">
    AI Portfolio Assistant
  </h2>

  <p className="text-slate-400 leading-relaxed mb-6">
    This AI assistant allows users to interact directly with my resume
    and project information. It is powered by FastAPI backend,
    persistent database storage, and OpenRouter-based AI integration.
  </p>

  <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
    <p className="text-slate-300">
      💬 Open the AI Chat button at the bottom-right to interact.
    </p>
  </div>
</motion.section>

<motion.section
  id="certifications"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="max-w-5xl mx-auto mt-40 mb-28"
>
  <h2 className="text-3xl font-semibold mb-8">
    Certifications & AI Foundations
  </h2>

  <p className="text-slate-400 leading-relaxed mb-8">
    Completed foundational AI certifications focused on machine learning
    concepts, transformer architecture, generative models, and cloud-based
    AI development tools. Applied these learnings while building AI-integrated
    backend systems.
  </p>

  <div className="space-y-6">

    <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
      <h3 className="font-semibold text-blue-400">
        IBM – Getting Started with Artificial Intelligence (Feb 2026)
      </h3>
      <p className="text-sm text-slate-400 mt-2">
        Covered AI fundamentals, machine learning basics,
        and practical AI system workflows.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
      <h3 className="font-semibold text-blue-400">
        Google – AI Vertex Studio & Generative AI Foundations (Aug 2025)
      </h3>
      <p className="text-sm text-slate-400 mt-2">
        Learned model deployment workflows, image generation concepts,
        and transformer-based attention mechanisms.
      </p>
    </div>

  </div>
</motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-semibold mb-8">Contact</h2>

        <div className="text-slate-400 space-y-4 text-lg">
          <p>📧 Email: <span className="text-blue-400">ayushthakurr007@gmail.com</span></p>
          <p>📱 Phone: <span className="text-blue-400">+91-9906795531</span></p>
          <p>
            🔗 LinkedIn:
            <a
              href="https://linkedin.com/in/ayushh-thakurr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-2"
            >
              linkedin.com/in/ayushh-thakurr
            </a>
          </p>
          <p>
            💻 GitHub:
            <a
              href="https://github.com/ayush-thakur01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-2"
            >
              github.com/ayush-thakur01
            </a>
          </p>
        </div>
      </motion.section>
      {isAIModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 border border-slate-700 rounded-2xl p-10 max-w-lg w-full relative"
    >
      {/* Close Button */}
      <button
        onClick={() => setIsAIModalOpen(false)}
        className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
      >
        ✕
      </button>

      <h3 className="text-2xl font-semibold mb-4">
        AI Portfolio Assistant
      </h3>

      <p className="text-slate-400 leading-relaxed mb-6">
        This AI system allows users to interact directly with my resume
        and technical experience. The backend is built using FastAPI,
        integrates SQLite for persistent chat storage, and uses OpenRouter
        to generate intelligent responses.
      </p>

      <div className="text-sm text-blue-400 mb-6">
        React · TypeScript · FastAPI · SQLite · OpenRouter
      </div>

     <button
  onClick={() => {
    setIsAIModalOpen(false);
    setOpenChat(true);
  }}
  className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-white transition"
>
  Launch AI Chat
</button>

    </motion.div>
  </div>
)}

      <ChatWidget forceOpen={openChat} />
    </div>
    </div>
  );
};

export default Home;
