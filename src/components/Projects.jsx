import { PROJECTS } from "../constants/index"
import { IoMdOpen } from "react-icons/io";
import { SiGithub } from "react-icons/si"
import { motion } from "framer-motion";

function Projects() {
    return (
        <section id="projects" className="border-b border-neutral-500 py-4 lg:py-6">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="lg:mt-20 my-8 text-center text-4xl text-white font-semibold hover:tracking-widest transition-all duration-300 ease-in-out">
                &lt; Projects /&gt;
            </motion.h1>
            <div>
                {
                    PROJECTS.map((project, index) => (
                        <div key={index} className="flex flex-wrap mb-8 p-4 bg-neutral-800 lg:bg-transparent lg:justify-center rounded-2xl">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4 flex justify-center items-center ">
                                <img src={project.image} alt="project.title" className="w-full h-full lg:w-[170px] lg:h-[170px] mb-6 rounded" />
                            </motion.div>

                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="flex flex-col w-full max-w-xl lg:w-3/4 gap-4">
                                <div className="flex items-center justify-between gap-4">
                                    <h6 className="text-xl font-bold text-white">{project.title}</h6>
                                   <div className="flex gap-4">
                                   <a href={project.code} target="_blank" rel="noreferrer" title="Code" className="text-white">
                                        <SiGithub className="text-xl" />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer" title="Live Project" className="text-white">
                                        <IoMdOpen className="text-2xl" />
                                    </a>
                                   </div>

                                </div>
                                <p className="text-neutral-400">{project.description}</p>
                                <ul className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <li key={i} className="text-white bg-indigo-500 hover:bg-indigo-700 px-3 py-1 rounded-xl">{tech}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
            </div>

        </section>
    )
}

export default Projects