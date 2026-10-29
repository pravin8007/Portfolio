import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { EDUCATION } from "../constants/index";

export default function Education() {
    return (
        <section id="education" className="section-shell content-section">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="section-heading">
                <p className="eyebrow">Academic background</p>
                <h2 className="section-title tracking-normal transition-all duration-300 hover:tracking-widest"><span className="text-cyan-400">&lt;</span> Education <span className="text-indigo-400">/&gt;</span></h2>
                <p className="section-subtitle">The learning and foundations behind my development journey.</p>
            </motion.div>

            <div className="education-timeline mx-auto max-w-4xl">
                {EDUCATION.map((edu, index) => (
                    <motion.article key={edu.title} initial={{ opacity: 0, x: index % 2 ? 18 : -18 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="education-card">
                        <div className="education-icon"><FaGraduationCap /></div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-white sm:text-xl">{edu.title}</h3>
                                    <p className="mt-1 text-sm text-slate-400">{edu.company}</p>
                                </div>
                                <span className="education-year">{edu.year}</span>
                            </div>
                            {edu.CGPA && <p className="text-sm text-cyan-200">CGPA: {edu.CGPA}</p>}
                            <ul className="space-y-2">
                                {edu.description.map((description, itemIndex) => (
                                    <li key={itemIndex} className="education-bullet">{description}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
