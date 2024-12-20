import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import {SiHtml5,SiCss3,SiJavascript,SiRedux, SiBootstrap,SiTailwindcss} from "react-icons/si";
import {SiGit,SiGithub,SiPostman,SiVercel,SiVisualstudiocode,SiFigma} from "react-icons/si";

const Skills = () => {
    const iconVariant = (duration) => ({
        initial: { y: -5 },
        animate: {
            y: [5, -5],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    });

    return (
        <section
            id="skills"
            className="border-b border-neutral-500 mt-8 pt-10 pb-24 lg:py-24"
        >
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl text-white font-semibold hover:tracking-widest transition-all duration-300 ease-in-out"
            >
                &lt; Skills /&gt;
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center mt-2 gap-4 overflow-hidden ">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="border-2 rounded-2xl p-6 m-4 sm:p-10 bg-slate-900 hover:bg-black hover:scale-105 duration-700 ease-in-out"
                >
                    <h1 className="text-xl sm:text-2xl font-serif text-cyan-500 text-center my-4">
                        &lt; Web Technology /&gt;
                    </h1>

                    <div className="flex flex-wrap justify-center items-center max-w-80 gap-4">
                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-cyan-600 px-5 py-2"
                        >
                            <RiReactjsLine className="text-5xl text-cyan-400" />
                            <span className="text-white">React</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.2)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-purple-600 px-5 py-2 "
                        >
                            <SiRedux className="text-5xl text-cyan-400" />
                            <span className="text-white">Redux</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-orange-600 px-5 py-2 "
                        >
                            <SiHtml5 className="text-5xl text-cyan-400" />
                            <span className="text-white">Html5</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-blue-600 px-5 py-2 "
                        >
                            <SiCss3 className="text-5xl text-cyan-400" />
                            <span className="text-white">Css3</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.2)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-yellow-600 px-5 py-2"
                        >
                            <SiJavascript className="text-5xl text-cyan-400" />
                            <span className="text-white">JS</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 flex flex-col bg-blue-700 px-3 py-4"
                        >
                            <div className="flex justify-center">
                                <SiBootstrap className="text-4xl text-cyan-400" />
                            </div>
                            <span className="text-white text-sm">Bootstrap</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-sky-600 px-4 py-2 "
                        >
                            <div className="flex justify-center">
                                <SiTailwindcss className="text-5xl text-cyan-400 text-center" />
                            </div>
                            <span className="text-white">Tailwind</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Other Skills */} 
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="border-2 rounded-2xl lg:py-24 p-6 m-4 sm:p-10 bg-slate-900 hover:bg-black hover:scale-105 duration-700 ease-in-out"
                >
                    <h1 className="text-2xl font-serif text-cyan-500 text-center mb-8 mt-10 lg:mt-0">
                        &lt; Tools /&gt;
                    </h1>

                    <div className="flex flex-wrap justify-center items-center max-w-80 gap-4">
                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-red-700 px-5 py-2"
                        >
                            <SiGit className="text-5xl text-cyan-400" />
                            <span className="text-white">Git</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.2)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-black px-5 py-2"
                        >
                            <SiGithub className="text-5xl text-cyan-400" />
                            <span className="text-white">Github</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-orange-600 px-4 py-2"
                        >
                            <div className="flex justify-center">
                                <SiPostman className="text-5xl text-cyan-400" />
                            </div>
                            <span className="text-white text-sm">Postman</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.3)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-black px-5 py-2"
                        >
                            <SiVercel className="text-5xl text-cyan-400" />
                            <span className="text-white">Vercel</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-sky-700 px-4 py-3"
                        >
                            <div className="flex justify-center">
                                <SiVisualstudiocode className="text-4xl text-cyan-400" />
                            </div>
                            <span className="text-white text-sm">VS Code</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariant(2.1)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-2 border-neutral-400 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2"
                        >
                            <SiFigma className="text-5xl text-cyan-400" />
                            <span className="text-white">Figma</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
