import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years Coding' },
  { value: '7', label: 'Languages' },
  { value: '10+', label: 'Projects Built' },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-10 bg-primary" />
          <span className="text-sm font-bold tracking-widest uppercase text-primary">About Me</span>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Hey, I'm <span className="text-primary">Seth</span>!
            </h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-10">
              <p>
                I am a passionate <strong className="text-foreground">Web Developer and Software Engineer</strong> from Cambodia with expertise in designing, developing, and maintaining scalable, high-performance web applications and software solutions. With a strong foundation in software engineering principles, I specialize in building secure, efficient, and user-centric systems that deliver exceptional performance and reliability.
              </p>
              <p>
                My technical expertise spans across frontend development with HTML, CSS, and JavaScript, backend development with PHP and Python, and database design and optimization using MySQL. I am committed to writing clean, maintainable code and implementing industry best practices to create solutions that meet both technical and business requirements.
              </p>
              <p>
                In addition to web development, I serve as a developer for <strong className="text-foreground">SABAY COMMUNITY</strong>, where I contribute to the development and maintenance of Pawn-based game server systems. My responsibilities include designing server-side features, optimizing performance, maintaining source code architecture, and delivering engaging gameplay experiences for the community.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-card border border-border rounded-2xl shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(236,72,153,0.15)' }}
                >
                  <div className="font-serif text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
