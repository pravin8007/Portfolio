import { motion } from "framer-motion"

function Footer() {
    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="w-full bg-slate-600 text-center text-white my-6 py-4 font-bold rounded-xl">
            Made With ❤️ by @ Pravin Patil
        </motion.div>
    )
}

export default Footer