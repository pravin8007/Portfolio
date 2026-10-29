import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
    FaCodeBranch,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaReact,
} from "react-icons/fa";

import { EXPERIENCES } from "../constants/index";



const ExperienceCard = ({ experience, index }) => {
    const Icon = experience.icon;
    const isCyan = experience.accent === "cyan";

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="group relative"
        >
            {/* Timeline icon */}
            <div
                className={`absolute -left-[1.75rem] top-5 z-10 flex h-8 w-8 items-center justify-center rounded-lg border backdrop-blur-xl transition-all duration-300 group-hover:scale-105 ${isCyan
                    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                    : "border-violet-400/30 bg-violet-400/10 text-violet-300"
                    }`}
            >
                <Icon size={14} />
            </div>

            {/* Experience card */}
            <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-slate-900/60 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-slate-900/80 sm:p-5">
                {/* Subtle accent glow */}
                <div
                    className={`pointer-events-none absolute -right-16 -top-20 h-36 w-36 rounded-full blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${isCyan ? "bg-cyan-400/[0.08]" : "bg-violet-500/[0.09]"
                        }`}
                />

                <div className="relative">
                    {/* Header */}
                    <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                            <span
                                className={`mb-2 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] ${isCyan
                                    ? "border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300"
                                    : "border-violet-400/20 bg-violet-400/[0.07] text-violet-300"
                                    }`}
                            >
                                <span
                                    className={`h-1.5 w-1.5 rounded-full ${isCyan ? "bg-cyan-300" : "bg-violet-300"
                                        }`}
                                />
                                {experience.type}
                            </span>

                            <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                                {experience.role}
                            </h3>

                            <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
                                {experience.company}
                            </p>

                            <p className="mt-0.5 text-[11px] text-slate-500">
                                {experience.client}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-slate-400 sm:flex-col sm:items-end sm:gap-2 sm:text-xs">
                            <span className="inline-flex items-center gap-1.5">
                                <FaCalendarAlt className="shrink-0 text-cyan-400" />
                                {experience.period}
                            </span>

                            <span className="inline-flex items-center gap-1.5">
                                <FaMapMarkerAlt className="shrink-0 text-violet-400" />
                                {experience.location}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 max-w-3xl text-xs leading-6 text-slate-400 sm:text-sm">
                        {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                        <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                            Key contributions
                        </h4>

                        <ul className="space-y-2">
                            {experience.responsibilities.map((item, itemIndex) => (
                                <li
                                    key={itemIndex}
                                    className="flex items-start gap-2.5 text-xs leading-5 text-slate-400 sm:text-[13px]"
                                >
                                    <span
                                        className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${isCyan ? "bg-cyan-400" : "bg-violet-400"
                                            }`}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="border-t border-white/[0.07] pt-3">
                        <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                            Technologies & tools
                        </h4>

                        <div className="flex flex-wrap gap-1.5">
                            {experience.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-slate-400 transition-colors duration-200 hover:border-cyan-400/20 hover:text-cyan-200"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

ExperienceCard.propTypes = {
    experience: PropTypes.shape({
        role: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        accent: PropTypes.oneOf(["cyan", "violet"]).isRequired,
        description: PropTypes.string.isRequired,
        responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

const Experience = () => {
    return (
        <section id="experience" className="section-shell">
            <div className="content-section">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="mb-8"
                >
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-xs">
                        <FaCodeBranch />
                        My journey
                    </div>

                    <div className="section-heading">
                        <h2 className="section-title tracking-normal transition-all duration-300 hover:tracking-widest"><span className="text-cyan-400">&lt;</span> Experience <span className="text-indigo-400">/&gt;</span></h2>
                    </div>

                    <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-400 sm:text-sm">
                        My professional experience and practical training in frontend
                        development, web applications, and API integration.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative ml-4 space-y-4 border-l border-slate-700/70 pl-6 sm:ml-5 sm:pl-7">
                    {EXPERIENCES.map((experience, index) => (
                        <ExperienceCard
                            key={experience.company}
                            experience={experience}
                            index={index}
                        />
                    ))}
                </div>

                {/* Closing note */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mt-5 flex items-start gap-3 rounded-lg border border-white/[0.07] bg-white/[0.02] p-3.5 sm:items-center"
                >
                    <FaReact className="mt-0.5 shrink-0 text-lg text-cyan-300 sm:mt-0" />

                    <p className="text-xs leading-5 text-slate-400">
                        Focused on maintainable React applications, reusable components,
                        responsive interfaces, and reliable API integrations.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;

Experience.propTypes = {};
