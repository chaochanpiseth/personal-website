import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years Coding' },
  { value: '7', label: 'Languages' },
  { value: '20+', label: 'Projects Built' },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 rounded-3xl blur-xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt="Chaochan Piseth"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background border-2 border-primary/20 rounded-2xl px-5 py-4 shadow-lg">
                <div className="text-3xl font-bold text-primary font-serif">KH</div>
                <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase">Cambodia</div>
              </div>
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                🐾
              </div>
            </div>
          </motion.div>

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
                I'm a passionate <strong className="text-foreground">Web Developer and Software Engineer</strong> from the beautiful Kingdom of Cambodia. I love turning ideas into reality through clean, efficient, and beautifully crafted code.
              </p>
              <p>
                Whether it's building interactive frontends with HTML, CSS &amp; JavaScript, crafting server-side logic with PHP &amp; Python, or managing databases with MySQL — I enjoy every layer of the stack.
              </p>
              <p>
                I also have a unique background in game server scripting with <strong className="text-foreground">PAWN</strong>, which gave me a deep appreciation for performance and low-level logic. When I'm not coding, you'll find me exploring new tech, designing cute UIs, and vibing on TikTok.
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
