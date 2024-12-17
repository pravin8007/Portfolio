import pravinImg from "../assets/About-Img.jpg";
import { ABOUT_TEXT_1 } from "../constants/index"
import { ABOUT_TEXT_2 } from "../constants/index"
import { ABOUT_TEXT_3 } from "../constants/index"
import { ABOUT_TEXT_4 } from "../constants/index"
import { motion } from "framer-motion";


const About = () => {
    return (
        <section id="about" className="border-b border-neutral-900 mt-10 lg:py-8">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4 }}
                className=" text-center text-4xl text-white my-10 lg:mt-14 font-semibold 
            hover:tracking-widest transition-all duration-300 ease-in-out">
                &lt; About <span className="text-neutral-300 ">Me /&gt; </span> </motion.h1>
            <div className="flex flex-wrap justify-around">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/3 lg:p-4">
                    <div className="flex items-center justify-center">
                        <img src={pravinImg} alt="about-img" className="rounded-2xl " />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 my-6">
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-4 max-w-xl ">{ABOUT_TEXT_1}</p>
                        <p className="mb-4 max-w-xl ">{ABOUT_TEXT_2}</p>
                        <p className="mb-4 max-w-xl ">{ABOUT_TEXT_3}</p>
                        <p className="max-w-xl ">{ABOUT_TEXT_4}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
