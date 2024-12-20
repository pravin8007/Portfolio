import { motion } from "framer-motion"
import { EDUCATION } from "../constants/index"


function Education() {
    return (
        <section id="education" className="border-b border-neutral-500 pb-24 mt-10 mb-6 lg:py-16">
            <motion.h1 
              whileInView={{opacity:1 , y : 0 }}
              initial={{opacity:0 , y : -50}}
              transition={{duration:0.2}} 
              className="text-center text-4xl text-white lg:my-6 my-8 font-semibold hover:tracking-widest transition-all duration-300 ease-in-out">
                &lt; Education /&gt;
            </motion.h1>
            <div className="flex justify-center items-center mt-4 ">
                <div className="flex flex-col justify-center gap-2">
                    {EDUCATION.map((edu, index) => (
                        (index==0 ? 
                            <motion.div 
                            whileInView={{opacity:1 , y : 0 }}
                            initial={{opacity:0 , y : -100}}
                            transition={{duration:0.5}}
                            key={index} className="flex flex-col flex-wrap gap-2 mb-4 p-6 lg:p-6 border-2 rounded-lg hover:scale-105 duration-700 ease-in-out">
                                <h3 className="text-2xl font-bold ">{edu.title}</h3>
                                <p className="text-gray-400">{edu.company}</p>
                                <span className="text-blue-400 italic">{edu.year}</span>
                                {edu.CGPA && <p className="text-yellow-400"><strong>CGPA:</strong> {edu.CGPA}</p>}
                                <ul className="list-disc list-inside mt-2">
                                    {edu.description.map((desc, i) => (
                                        <li key={i} className="text-gray-300">{desc}</li>
                                    ))}
                                </ul>
                            </motion.div> :
                            <motion.div
                            whileInView={{opacity:1 , y : 0 }}
                            initial={{opacity:0 , y : 100}}
                            transition={{duration:0.5}}
                            key={index} className="flex flex-col flex-wrap gap-2 mb-4 p-6 lg:p-6 border-2 rounded-lg hover:scale-105 duration-700 ease-in-out">
                                <h3 className="text-2xl font-bold ">{edu.title}</h3>
                                <p className="text-gray-400">{edu.company}</p>
                                <span className="text-blue-400 italic">{edu.year}</span>
                                {edu.CGPA && <p className="text-yellow-400"><strong>CGPA:</strong> {edu.CGPA}</p>}
                                <ul className="list-disc list-inside mt-2">
                                    {edu.description.map((desc, i) => (
                                        <li key={i} className="text-gray-300">{desc}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education