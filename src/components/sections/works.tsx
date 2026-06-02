import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    category: 'Frontend Development',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2024',
    description:
      'A responsive, animated personal portfolio site built from scratch with pure HTML, CSS, and JavaScript. Features smooth scroll animations, dark/light mode, and a fully custom design system.',
    color: 'from-pink-200/40 to-rose-100/20',
  },
  {
    id: 2,
    title: 'School Management System',
    category: 'Full-Stack Web App',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    year: '2024',
    description:
      'A complete school management platform with student registration, grade tracking, attendance records, and admin dashboards. Built with PHP backend and MySQL database for fast queries across thousands of records.',
    color: 'from-purple-200/40 to-indigo-100/20',
  },
  {
    id: 3,
    title: 'Game Server Scripts',
    category: 'Game Development',
    tech: ['PAWN', 'MySQL'],
    year: '2023',
    description:
      'Custom PAWN scripts for SA-MP (San Andreas Multiplayer) game servers — including player economy systems, mini-games, anti-cheat modules, and persistent MySQL-powered player data storage.',
    color: 'from-blue-200/40 to-cyan-100/20',
  },
  {
    id: 4,
    title: 'Data Analysis Scripts',
    category: 'Python Scripting',
    tech: ['Python', 'MySQL'],
    year: '2023',
    description:
      'A collection of Python scripts for web scraping, data cleaning, and automated reporting. Connects to MySQL databases to store and query structured data for analysis.',
    color: 'from-green-200/40 to-emerald-100/20',
  },
];

export function Works() {
  return (
    <section id="works" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-sm font-bold tracking-widest uppercase text-primary">Portfolio</span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            A selection of things I've built — from web apps to game servers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group rounded-3xl p-8 bg-gradient-to-br ${project.color} border border-border shadow-sm hover:shadow-lg transition-all duration-300 cursor-default`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="flex items-start justify-end mb-6">
                <div className="font-mono text-xs tracking-widest text-muted-foreground bg-background/60 px-3 py-1 rounded-full border border-border">
                  {project.year}
                </div>
              </div>

              <div className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
                {project.category}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-background/70 border border-primary/20 text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
