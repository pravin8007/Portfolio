import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Spotlight from "./components/Spotlight";

export default function App() {
    return (
        <div className="app-shell min-h-screen overflow-x-clip text-slate-200 antialiased selection:bg-cyan-300 selection:text-slate-950">
            <div className="ambient-background" aria-hidden="true">
                <div className="ambient-glow ambient-glow-one" />
                <div className="ambient-glow ambient-glow-two" />
                <div className="ambient-grid" />
            </div>
            <Spotlight />
            <Navbar />
            <main className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                <Footer />
            </div>
            <BackToTop />
        </div>
    );
}
