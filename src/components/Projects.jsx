
import { PROJECTS } from "../constants/index";
import { IoMdOpen } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Projects() {
  const handleCardMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080b14] rounded-2xl border border-white/[0.08] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28 lg:my-6"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            <span className="h-px w-7 bg-cyan-300" />
            Selected work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Projects &{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              experiments
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of applications I&apos;ve built to explore ideas, solve
            problems, and turn concepts into useful experiences.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-2"
        >
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title || index}
              variants={cardVariants}
              onMouseMove={handleCardMouseMove}
              className="project-card group relative isolate flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d111d]/90 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_12px_45px_-25px_rgba(34,211,238,0.25)]"
            >
              {/* Mouse-following highlight */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,211,238,0.07), transparent 70%)",
                }}
              />

              {/* Project image */}
              <div className="relative overflow-hidden border-b border-white/[0.07] bg-[#090d17] p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-xl border border-white/[0.08]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-52 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035] sm:h-60"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b14]/35 via-transparent to-transparent" />
                </div>

                <span className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#080b14]/80 text-xs font-medium text-slate-300 backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-100 transition-colors duration-300 group-hover:text-cyan-200 sm:text-xl">
                    {project.title}
                  </h3>

                  <div className="flex shrink-0 items-center gap-2">
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${project.title} source code`}
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-200 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200"
                      >
                        <SiGithub className="text-base" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${project.title} live`}
                        aria-label={`Open ${project.title} live project`}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-200 hover:border-violet-300/30 hover:bg-violet-300/10 hover:text-violet-200"
                      >
                        <IoMdOpen className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={`${tech}-${techIndex}`}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:border-cyan-300/20 hover:text-cyan-200 sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
