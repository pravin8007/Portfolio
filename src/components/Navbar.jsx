import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/Logo_02.png";

const LINKS = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="site-nav fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#050a14]/80 backdrop-blur-xl"
        >
            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10" aria-label="Main navigation">
                <a href="#home" aria-label="Pravin Patil home" onClick={() => setMenuOpen(false)} className="shrink-0">
                    <img src={logo} alt="Pravin Patil logo" className="h-10 w-auto" />
                </a>

                <div className="hidden items-center gap-6 md:flex lg:gap-8">
                    {LINKS.map(([label, href], index) => (
                        <a key={href} href={href} className={`nav-link ${index === 0 ? "nav-link-active" : ""}`}>
                            {label}
                        </a>
                    ))}
                </div>

                <div className="hidden items-center gap-4 md:flex">
                    <a href="https://github.com/pravin8007" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="nav-social"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/pravin-patil-528922216/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="nav-social"><FaLinkedin /></a>
                    <a
                        href="https://drive.google.com/file/d/1b4MMgm-XserNbHmUtDYAp5EuAJmAW5cw/view"
                        target="_blank" rel="noreferrer"
                        className="resume-link inline-flex items-center gap-2 rounded-full border border-cyan-400/80 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-300 hover:text-slate-950 sm:px-5"
                    >
                        <span aria-hidden="true">↓</span> Resume
                    </a>
                </div>

                <button
                    type="button"
                    className="mobile-menu-button md:hidden"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>

            {menuOpen && (
                <div className="mobile-menu md:hidden">
                    {LINKS.map(([label, href]) => (
                        <a key={href} href={href} onClick={() => setMenuOpen(false)} className="mobile-menu-link">{label}</a>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1b4MMgm-XserNbHmUtDYAp5EuAJmAW5cw/view"
                        target="_blank" rel="noreferrer" className="mobile-resume-link"
                    >
                        ↓ Download Resume
                    </a>
                    <div className="flex gap-5 px-4 py-3 text-xl">
                        <a href="https://github.com/pravin8007" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/pravin-patil-528922216/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>
            )}
        </motion.header>
    );
}
