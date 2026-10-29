import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { skillGroups } from "../constants/index";



const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function SkillPill({ skill, accent }) {
  const Icon = skill.icon;

  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.035 }}
      transition={{ duration: 0.18 }}
      className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:text-sm"
    >
      <Icon
        className="shrink-0 text-sm"
        style={{ color: accent }}
        aria-hidden="true"
      />
      {skill.name}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080b14] rounded-2xl border border-white/[0.08] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/[0.08] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            <span className="h-px w-7 bg-cyan-300" />
            What I work with
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              technologies
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            The tools and technologies I use to build interfaces, connect data,
            solve problems, and turn ideas into working applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <motion.article
                key={group.title}
                variants={cardVariants}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0d111d]/90 p-5 transition-colors duration-300 hover:border-white/[0.16] sm:p-6"
              >
                <div
                  className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
                  }}
                />

                <div className="mb-5 flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]"
                    style={{ color: group.color }}
                  >
                    <GroupIcon className="text-lg" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-100">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillPill
                      key={skill.name}
                      skill={skill}
                      accent={group.color}
                    />
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


SkillPill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
  accent: PropTypes.string.isRequired,
};