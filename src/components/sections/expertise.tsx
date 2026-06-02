import { motion } from 'framer-motion';
import { SiHtml5, SiJavascript, SiPython, SiPhp, SiMysql } from 'react-icons/si';
import { FaCss3Alt, FaGamepad } from 'react-icons/fa6';

const skills = [
  { name: 'HTML',       icon: SiHtml5,      iconColor: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/30', border: 'border-orange-200 dark:border-orange-800/40', bar: 'bg-orange-500', level: 95 },
  { name: 'CSS',        icon: FaCss3Alt,    iconColor: 'text-blue-500',   bg: 'bg-blue-50 dark:bg-blue-950/30',     border: 'border-blue-200 dark:border-blue-800/40',     bar: 'bg-blue-500',   level: 90 },
  { name: 'JavaScript', icon: SiJavascript, iconColor: 'text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-950/30',border: 'border-yellow-200 dark:border-yellow-800/40', bar: 'bg-yellow-400', level: 85 },
  { name: 'Python',     icon: SiPython,     iconColor: 'text-green-500',  bg: 'bg-green-50 dark:bg-green-950/30',   border: 'border-green-200 dark:border-green-800/40',   bar: 'bg-green-500',  level: 75 },
  { name: 'PHP',        icon: SiPhp,        iconColor: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-950/30',border: 'border-indigo-200 dark:border-indigo-800/40', bar: 'bg-indigo-500', level: 80 },
  { name: 'PAWN',       icon: FaGamepad,    iconColor: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/30',border: 'border-purple-200 dark:border-purple-800/40', bar: 'bg-purple-500', level: 70 },
  { name: 'MySQL',      icon: SiMysql,      iconColor: 'text-cyan-500',   bg: 'bg-cyan-50 dark:bg-cyan-950/30',     border: 'border-cyan-200 dark:border-cyan-800/40',     bar: 'bg-cyan-500',   level: 75 },
];

const categories = [
  {
    title: 'Frontend',
    icon: '✨',
    items: ['Responsive Design', 'UI/UX Implementation', 'Animations & Transitions', 'Cross-browser Compatibility'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    items: ['REST API Development', 'Database Design', 'Server-side Scripting', 'Game Server Scripting'],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    items: ['Git & Version Control', 'VS Code', 'Figma (Basic)', 'Linux CLI'],
  },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      className={`flex items-center gap-4 p-4 rounded-2xl border ${skill.border} ${skill.bg} group`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${skill.iconColor} bg-white/70 dark:bg-black/20 shadow-sm`}>
        <Icon size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-sm text-foreground">{skill.name}</span>
          <span className={`text-xs font-bold ${skill.iconColor}`}>
            {skill.level}%
          </span>
        </div>
        <div className="h-2.5 bg-white/60 dark:bg-black/20 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${skill.bar}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Expertise() {
  return (
    <section id="skills" className="py-32 bg-accent/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-sm font-bold tracking-widest uppercase text-primary">My Skills</span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Languages &amp; <span className="text-primary">Proficiency</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            A multi-language developer who loves picking the right tool for every challenge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-4">
            <motion.h3
              className="font-serif text-2xl font-bold mb-6 text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Skill <span className="text-primary">Progress</span>
            </motion.h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          <div>
            <motion.h3
              className="font-serif text-2xl font-bold mb-6 text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Areas of <span className="text-primary">Expertise</span>
            </motion.h3>
            <div className="space-y-6">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{cat.icon}</span>
                    <h4 className="font-bold text-primary text-base">{cat.title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
