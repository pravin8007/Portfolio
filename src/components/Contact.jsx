import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC_KEY;

export default function Contact() {
    const [formData, setFormData] = useState({ user_name: "", user_email: "", user_message: "" });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setStatus({ type: "error", message: "Contact form is not configured yet. Please email me directly instead." });
            return;
        }

        setIsSending(true);
        setStatus({ type: "", message: "" });

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
            setStatus({ type: "success", message: "Thanks for reaching out! Your message has been sent." });
            setFormData({ user_name: "", user_email: "", user_message: "" });
        } catch {
            setStatus({ type: "error", message: "Your message could not be sent. Please try again or contact me by email." });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="section-shell content-section">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="section-heading">
                <p className="eyebrow">Let&apos;s connect</p>
                <h2 className="section-title"><span className="text-cyan-400">&lt;</span> Contact Me <span className="text-indigo-400">/&gt;</span></h2>
                <p className="section-subtitle">Have an opportunity or project in mind? I&apos;d be happy to hear from you.</p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <motion.aside initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="contact-info-panel">
                    <h3 className="text-xl font-semibold text-white">Get in touch</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">I&apos;m open to frontend development opportunities and conversations about building useful web experiences.</p>
                    <a className="contact-detail" href="mailto:pravinshivajipatil37@gmail.com"><FaEnvelope /><span>pravinshivajipatil37@gmail.com</span></a>
                    <div className="contact-detail"><FaMapMarkerAlt /><span>Jalgaon, Maharashtra, India</span></div>
                    <div className="mt-5 flex gap-3">
                        <a href="https://github.com/pravin8007" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="contact-social"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/pravin-patil-528922216/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="contact-social"><FaLinkedin /></a>
                    </div>
                </motion.aside>

                <motion.form initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} onSubmit={handleSubmit} className="contact-form">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="form-field">
                            <label htmlFor="user_name">Your name</label>
                            <input id="user_name" name="user_name" type="text" autoComplete="name" value={formData.user_name} onChange={handleChange} required placeholder="Enter your name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="user_email">Email address</label>
                            <input id="user_email" name="user_email" type="email" autoComplete="email" value={formData.user_email} onChange={handleChange} required placeholder="you@example.com" />
                        </div>
                    </div>
                    <div className="form-field mt-5">
                        <label htmlFor="user_message">Message</label>
                        <textarea id="user_message" name="user_message" rows="5" value={formData.user_message} onChange={handleChange} required placeholder="Tell me a little about your message..." />
                    </div>
                    {status.message && <p role="status" className={`form-status ${status.type === "success" ? "form-status-success" : "form-status-error"}`}>{status.message}</p>}
                    <button type="submit" disabled={isSending} className="primary-cta mt-5 disabled:cursor-not-allowed disabled:opacity-60">
                        {isSending ? "Sending..." : "Send Message"} <IoSend />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
