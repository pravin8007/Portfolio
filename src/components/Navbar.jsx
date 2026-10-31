
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/Logo.png";

const LINKS = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
];

const RESUME_URL =
    "https://drive.google.com/file/d/1b4MMgm-XserNbHmUtDYAp5EuAJmAW5cw/view";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sections = LINKS
            .map(([, href]) =>
                document.getElementById(href.slice(1))
            )
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    );

                if (visibleSections.length > 0) {
                    const sectionId = visibleSections[0].target.id;

                    window.history.replaceState(
                        null,
                        "",
                        `#${sectionId}`
                    );
                }
            },
            {
                rootMargin: "-15% 0px -70% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="site-nav fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#050a14]/80 backdrop-blur-xl"
        >
            <nav
                className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10"
                aria-label="Main navigation"
            >
                <a
                    href="#home"
                    aria-label="Pravin Patil home"
                    onClick={handleNavClick}
                    className="shrink-0"
                >
                    <img
                        src={logo}
                        alt="Pravin Patil logo"
                        className="h-10 w-auto"
                    />
                </a>

                <div className="hidden items-center gap-6 md:flex lg:gap-8">
                    {LINKS.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            onClick={handleNavClick}
                            className="nav-link"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <div className="hidden items-center gap-4 md:flex">
                    <a
                        href="https://github.com/pravin8007"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub profile"
                        className="nav-social"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/pravin-patil-528922216/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn profile"
                        className="nav-social"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="resume-link inline-flex items-center gap-2 rounded-full border border-cyan-400/80 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-300 hover:text-slate-950 sm:px-5"
                    >
                        <span aria-hidden="true">↓</span> Resume
                    </a>
                </div>

                <button
                    type="button"
                    className="mobile-menu-button md:hidden"
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>

            {menuOpen && (
                <div className="mobile-menu md:hidden">
                    {LINKS.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            onClick={handleNavClick}
                            className="mobile-menu-link"
                        >
                            {label}
                        </a>
                    ))}

                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="mobile-resume-link"
                    >
                        ↓ Download Resume
                    </a>

                    <div className="flex gap-5 px-4 py-3 text-xl">
                        <a
                            href="https://github.com/pravin8007"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/pravin-patil-528922216/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            )}
        </motion.header>
    );
}
