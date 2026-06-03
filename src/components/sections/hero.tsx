import { motion } from 'framer-motion';

const floatingPaws = [
  { top: '12%', left: '8%', size: 40, delay: 0, cls: 'paw-float' },
  { top: '25%', right: '10%', size: 32, delay: 1, cls: 'paw-float-2' },
  { top: '65%', left: '5%', size: 28, delay: 2, cls: 'paw-float-3' },
  { top: '70%', right: '8%', size: 36, delay: 0.5, cls: 'paw-float' },
  { top: '45%', left: '15%', size: 22, delay: 1.5, cls: 'paw-float-2' },
];

function PawPrint({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="currentColor" className="text-primary">
      <ellipse cx="20" cy="14" rx="7" ry="9" />
      <ellipse cx="44" cy="14" rx="7" ry="9" />
      <ellipse cx="10" cy="30" rx="6" ry="8" />
      <ellipse cx="54" cy="30" rx="6" ry="8" />
      <ellipse cx="32" cy="42" rx="14" ry="16" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/40">
      {floatingPaws.map((p, i) => (
        <div
          key={i}
          className={`absolute opacity-10 pointer-events-none ${p.cls}`}
          style={{ top: p.top, left: (p as any).left, right: (p as any).right, animationDelay: `${p.delay}s` }}
        >
          <PawPrint size={p.size} />
        </div>
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 z-10 relative text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img
                src="/profile.jpeg"
                alt="Chaochan Piseth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg shadow-md">
              🐱
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-10 bg-primary/50" />
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">My Personal</span>
          <div className="h-px w-10 bg-primary/50" />
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Chaochan{' '}
          <span className="text-primary">Piseth</span>
        </motion.h1>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-muted-foreground/60"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path d="M8 1v14M2 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
