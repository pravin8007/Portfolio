import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="site-footer">
            <a href="#home" className="footer-brand"><span className="text-cyan-300">P</span> Pravin Patil</a>
            <p>Designed and built with React.js <span aria-hidden="true" className="text-cyan-300">♥</span></p>
            <div className="flex items-center gap-4">
                <a href="https://github.com/pravin8007" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="nav-social"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/pravin-patil-528922216/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="nav-social"><FaLinkedin /></a>
            </div>
            <a href="#home" className="footer-top-link">Back to top ↑</a>
        </footer>
    );
}
