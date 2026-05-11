import { motion } from "framer-motion";
import {RiNextjsLine , RiReactjsLine } from "react-icons/ri";

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiRedux,
    SiBootstrap,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiGitlab,
    SiVitest,
    SiPostman,
    SiVercel,
    SiVisualstudiocode,
    SiFigma,
} from "react-icons/si";

const Skills = () => {
    const iconVariant = (duration) => ({
        initial: { y: -5 },
        animate: {
            y: [5, -5],
            transition: {
                duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    });

    const skillCard =
        "w-24 h-24 rounded-2xl border-2 border-neutral-400 flex flex-col items-center justify-center text-center";

    return (
        <section
            id="skills"
            className="border-b border-neutral-500 mt-8 pt-10 pb-24 lg:py-24"
        >
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl mt-4 text-white font-semibold hover:tracking-widest transition-all duration-300 ease-in-out"
            >
                &lt; Skills /&gt;
            </motion.h1>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.7 }}
                className="max-w-6xl mx-auto mt-8 border-2 border-neutral-700 rounded-3xl p-6 sm:p-10 bg-slate-900 hover:bg-black duration-700 ease-in-out"
            >
                <div>
                    <h1 className="text-2xl sm:text-3xl font-serif text-cyan-500 text-center mb-8">
                        &lt; Web Technology /&gt;
                    </h1>

                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-black`}
                        >
                            <RiNextjsLine className="text-5xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">Next.js</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-cyan-600`}
                        >
                            <RiReactjsLine className="text-5xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">React</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-purple-600`}
                        >
                            <SiRedux className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">Redux</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-orange-600`}
                        >
                            <SiHtml5 className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">HTML5</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-blue-600`}
                        >
                            <SiCss3 className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">CSS3</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-yellow-600`}
                        >
                            <SiJavascript className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">
                                JavaScript
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-blue-700`}
                        >
                            <SiTypescript className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">
                                TypeScript
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-indigo-700`}
                        >
                            <SiBootstrap className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">
                                Bootstrap
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-sky-600`}
                        >
                            <SiTailwindcss className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">
                                Tailwind
                            </span>
                        </motion.div>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-neutral-700 my-12"></div>

                <div>
                    <h1 className="text-2xl sm:text-3xl font-serif text-cyan-500 text-center mb-8">
                        &lt; Tools /&gt;
                    </h1>

                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-red-700`}
                        >
                            <SiGit className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">Git</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-black`}
                        >
                            <SiGithub className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">GitHub</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-white`}
                        >
                            <SiGitlab className="text-4xl text-red-700" />
                            <span className="text-red-700 mt-2 text-xs font-bold">
                                GitLab
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-black`}
                        >
                            <SiVitest className="text-4xl text-yellow-300" />
                            <span className="text-yellow-300 mt-2 text-xs font-bold">
                                Vitest
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-orange-600`}
                        >
                            <SiPostman className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">Postman</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-black`}
                        >
                            <SiVercel className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">Vercel</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-sky-700`}
                        >
                            <SiVisualstudiocode className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">VS Code</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={`${skillCard} bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500`}
                        >
                            <SiFigma className="text-4xl text-cyan-400" />
                            <span className="text-white mt-2 text-xs font-bold">Figma</span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
