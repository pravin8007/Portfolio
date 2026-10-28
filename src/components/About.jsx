import { motion } from "framer-motion";
import pravinImg from "../assets/Profile.png";
import { ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3, ABOUT_TEXT_4 } from "../constants/index";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const HIGHLIGHTS = [
    { icon: FaCode, title: "Frontend Development", detail: "Responsive interfaces and reusable React components." },
    { icon: FaLaptopCode, title: "Practical Projects", detail: "Interactive apps using APIs, state, and Firebase." },
    { icon: FaGraduationCap, title: "Continuous Learning", detail: "MCA graduate with a strong foundation in web development." },
];

export default function About() {
    return (
        <section id="about" className="section-shell content-section">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="section-heading">
                <p className="eyebrow">A little about me</p>
                <h2 className="section-title"><span className="text-cyan-400">&lt;</span> About Me <span className="text-indigo-400">/&gt;</span></h2>
            </motion.div>

            <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
                <motion.div initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="about-photo-card mx-auto w-full max-w-sm">
                    <div className="about-photo-frame">
                        <img src={pravinImg} alt="Pravin Patil" loading="lazy" className="about-photo" />
                    </div>
                    <div className="about-photo-caption">
                        <span className="status-dot" />
                        <span>Building, learning, improving</span>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="min-w-0">
                    <div className="about-copy">
                        {[ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3, ABOUT_TEXT_4].map((paragraph, index) => (
                            <p key={index}>{paragraph.replace(/^👋\s*/, "")}</p>
                        ))}
                    </div>
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                        {HIGHLIGHTS.map(({ icon: Icon, title, detail }) => (
                            <article key={title} className="mini-feature-card">
                                <Icon className="mb-3 text-xl text-cyan-300" />
                                <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
                                <p className="mt-2 text-xs leading-5 text-slate-400">{detail}</p>
                            </article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
