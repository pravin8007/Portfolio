import logo from "../assets/Logo_02.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { IoPerson, IoApps, IoMail, IoBook } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {

    return (
        <motion.nav
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="bg-slate-500 border-b border-t rounded-3xl border-slate-700 backdrop-blur fixed top-0 left-4 right-4 z-10 flex items-center justify-between px-6 py-2 m-2">

            {/* Logo */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-shrink-0 items-center ">
                <img src={logo} alt="logo" className="h-12 w-20" />
            </motion.div>


            {/* Nav Links */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 1.5 }}
                className="navLinks hidden md:flex items-center justify-center border rounded-lg h-14 gap-6 px-2 ms-20">
                <a href="#home" className="text-3xl text-slate-200 hover:text-white" title="Home">
                    <IoMdHome />
                </a>
                <a href="#about" className="text-2xl text-slate-200 hover:text-white " title="About">
                    <IoPerson />
                </a>
                <a href="#skills" className="text-2xl text-slate-200 hover:text-white" title="Skills">
                    <IoBook />
                </a>
                <a href="#education" className="text-2xl text-slate-200 hover:text-white " title="Education">
                    <RiGraduationCapFill />
                </a>
                <a href="#projects" className="text-2xl text-slate-200 hover:text-white " title="Projects">
                    <IoApps />
                </a>
                <a href="contact" className="text-2xl text-slate-200 hover:text-white" title="Contact">
                    <IoMail />
                </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/pravin-patil-528922216/" target="_blank" rel="noreferrer" className="text-2xl text-slate-200 hover:text-blue-400">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/pravin8007" target="_blank" rel="noreferrer" className="text-2xl text-slate-200 hover:text-white">
                    <FaGithub />
                </a>
                <a href="https://x.com/Pravin_Patil_07" target="_blank" rel="noreferrer" className="text-2xl text-slate-200 hover:text-white">
                    <FaSquareXTwitter />
                </a>
            </motion.div>

        </motion.nav>
    )
}



export default Navbar
