import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

export default function Hero() {
    return (
        <section id="home" className="hero-section section-shell">
            <div className="hero-orb hero-orb-cyan" aria-hidden="true" />
            <div className="hero-orb hero-orb-violet" aria-hidden="true" />
            <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
                <div className="relative z-10">
                    <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-3 text-lg font-medium text-cyan-300 sm:text-xl">
                        Hello, I&apos;m
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Pravin <span className="gradient-name">Patil</span>
                    </motion.h1>
                    <motion.h2 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="mt-4 text-2xl font-medium text-sky-300 sm:text-3xl">
                        Frontend Developer
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }} className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                        I build clean, responsive, and user-friendly web experiences using React.js, JavaScript, and TypeScript.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} className="mt-7 flex flex-wrap items-center gap-4">
                        <a href="#projects" className="primary-cta">View Projects <span aria-hidden="true">→</span></a>
                        <a href="#contact" className="secondary-cta">Contact Me <span aria-hidden="true">→</span></a>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }} className="mt-8 flex items-center gap-5 text-xl text-slate-300">
                        <a href="https://github.com/pravin8007" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="social-link"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/pravin-patil-528922216/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="social-link"><FaLinkedin /></a>
                        <a href="https://drive.google.com/file/d/1b4MMgm-XserNbHmUtDYAp5EuAJmAW5cw/view" target="_blank" rel="noreferrer" aria-label="Open resume" className="social-link"><IoMdOpen /></a>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, x: 22, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="code-window relative z-10 mx-auto w-full max-w-xl" aria-label="Code-themed developer panel">
                    <div className="code-window-header">
                        <span className="window-dot window-dot-red" />
                        <span className="window-dot window-dot-yellow" />
                        <span className="window-dot window-dot-green" />
                        <span className="ml-auto text-xs text-slate-500">developer.js</span>
                    </div>
                    <pre className="code-content"><code>
                        <span className="code-purple">const</span>{" "}<span className="code-blue">developer</span> = {"{"}{"\n"}
                        {"  "}name: <span className="code-green">&quot;Pravin Patil&quot;</span>,{"\n"}
                        {"  "}role: <span className="code-green">&quot;Frontend Developer&quot;</span>,{"\n"}
                        {"  "}skills: [<span className="code-green">&quot;React&quot;</span>, <span className="code-green">&quot;TypeScript&quot;</span>,{"\n"}
                        {"           "}<span className="code-green">&quot;JavaScript&quot;</span>, <span className="code-green">&quot;Tailwind CSS&quot;</span>],{"\n"}
                        {"  "}passion: <span className="code-green">&quot;Building great web experiences&quot;</span>{"\n"}
                        {"};"}{"\n\n"}
                        <span className="code-comment">{"// Always learning..."}</span>
                    </code></pre>
                </motion.div>
            </div>
            <a href="#about" className="scroll-cue" aria-label="Scroll to About section"><span /></a>
        </section>
    );
}
