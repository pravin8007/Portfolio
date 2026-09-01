
import { motion } from "framer-motion";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiRedux,
    SiBootstrap,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
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
        "w-24 h-24 rounded-2xl border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 hover:border-cyan-500/60 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-cyan-500/10";

    const iconClass = "text-4xl";

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
                className="max-w-6xl mx-auto mt-8 border-2 border-neutral-700 rounded-3xl p-8 bg-slate-700 hover:bg-black duration-700 ease-in-out"
            >

                
                    <h1 className="text-2xl sm:text-3xl font-serif text-cyan-500 text-center mb-8">
                        &lt; Web Technology /&gt;
                    </h1>

                    <div className="flex flex-wrap justify-center items-center gap-4">

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <RiReactjsLine className={`${iconClass} text-[#61DAFB]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                React
                            </span>
                        </motion.div>


                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiRedux className={`${iconClass} text-[#764ABC]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Redux
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiHtml5 className={`${iconClass} text-[#E34F26]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                HTML5
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiCss3 className={`${iconClass} text-[#1572B6]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                CSS3
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiJavascript className={`${iconClass} text-[#F7DF1E]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                JavaScript
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiTypescript className={`${iconClass} text-[#3178C6]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                TypeScript
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <RiNextjsLine className={`${iconClass} text-white`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Next.js
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiBootstrap className={`${iconClass} text-[#7952B3]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Bootstrap
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiTailwindcss className={`${iconClass} text-[#06B6D4]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Tailwind
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiNodedotjs className={`${iconClass} text-[#339933]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Node.js
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.4)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiExpress className={`${iconClass} text-white`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Express.js
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.2)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiMongodb className={`${iconClass} text-[#47A248]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                MongoDB
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiMysql className={`${iconClass} text-[#4479A1]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                MySQL
                            </span>
                        </motion.div>
                
                </div>


                <div className="w-full h-[1px] bg-neutral-900 my-12"></div>

                <div>
                    <h1 className="text-2xl sm:text-3xl font-serif text-cyan-500 text-center mb-8">
                        &lt; Tools /&gt;
                    </h1>

                    <div className="flex flex-wrap justify-center items-center gap-4">

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiGit className={`${iconClass} text-[#F05032]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Git
                            </span>
                        </motion.div>


                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiGithub className={`${iconClass} text-white`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                GitHub
                            </span>
                        </motion.div>


                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiGitlab className={`${iconClass} text-[#FC6D26]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                GitLab
                            </span>
                        </motion.div>


                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiVitest className={`${iconClass} text-[#6E9F18]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Vitest
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiPostman className={`${iconClass} text-[#FF6C37]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Postman
                            </span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiVercel className={`${iconClass} text-white`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Vercel
                            </span>
                        </motion.div>


                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiVisualstudiocode className={`${iconClass} text-[#007ACC]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                VS Code
                            </span>
                        </motion.div>


                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className={skillCard}
                        >
                            <SiFigma className={`${iconClass} text-[#F24E1E]`} />
                            <span className="text-white mt-2 text-xs font-bold">
                                Figma
                            </span>
                        </motion.div>
                        
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
