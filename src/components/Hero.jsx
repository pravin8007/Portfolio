import { HERO_CONTENT } from "../constants"
import PravinPic from "../assets/Pravin-Logo.png"
import { motion } from "framer-motion"

const Hero = () => {

    return (
        <section id="home" className="border-b border-neutral-900 pt-28 lg:pt-20 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 md:mt-5">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.2 }}
                            className="pb-16 text-6xl dark:text-gray-300 dark:font-thin tracking-tight lg:mt-16 lg:text-8xl">Pravin Patil</motion.h1>
                        <motion.span
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration:  0.4 }}
                            className="text-center lg:text-start bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Frontend Developer</motion.span>
                        <motion.p
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6 }}
                            className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>
                        <motion.a
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.4 }}
                            href="https://drive.google.com/file/d/1DDOhXf_UyWIwMPw1WEZmdqkoiVfPeYmU/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-200 my-6 transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-pink-500 via-slate-500 to-purple-700 font-bold py-2 px-4 rounded-full inline-block">
                            Check Resume
                        </motion.a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
                    <div className="flex justify-center">
                        <motion.img
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.8 }}
                            src={PravinPic} alt="Pravin Patil" className="w-60 h-60 border-4 border-slate-900 rounded-full lg:w-80 lg:h-80" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 