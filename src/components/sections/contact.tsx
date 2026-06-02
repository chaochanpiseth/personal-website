import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaWhatsapp } from 'react-icons/fa6';

const socials = [
  {
    name: 'GitHub',
    handle: '@chaochanpiseth',
    href: 'https://github.com/chaochanpiseth',
    icon: FaGithub,
    iconColor: 'text-gray-800 dark:text-gray-200',
    bg: 'bg-gray-50 dark:bg-gray-900/30',
    border: 'border-gray-200 dark:border-gray-700/50',
    hoverBorder: 'hover:border-gray-400',
    hoverBg: 'hover:bg-gray-100 dark:hover:bg-gray-800/40',
  },
  {
    name: 'Facebook',
    handle: 'Chaochan Piseth',
    href: 'https://www.facebook.com/share/18rJVJfp9Q/?mibextid=wwXIfr',
    icon: FaFacebook,
    iconColor: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    border: 'border-blue-200 dark:border-blue-800/40',
    hoverBorder: 'hover:border-blue-400',
    hoverBg: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
  },
  {
    name: 'Instagram',
    handle: '@s3th.chapter',
    href: 'https://www.instagram.com/s3th.chapter',
    icon: FaInstagram,
    iconColor: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-950/20',
    border: 'border-pink-200 dark:border-pink-800/40',
    hoverBorder: 'hover:border-pink-400',
    hoverBg: 'hover:bg-pink-100 dark:hover:bg-pink-900/30',
  },
  {
    name: 'TikTok',
    handle: '@baby.26feb',
    href: 'https://www.tiktok.com/@baby.26feb?_r=1&_t=ZS-96sDWCMcyj1',
    icon: FaTiktok,
    iconColor: 'text-gray-900 dark:text-white',
    bg: 'bg-gray-50 dark:bg-gray-900/30',
    border: 'border-gray-200 dark:border-gray-700/50',
    hoverBorder: 'hover:border-gray-400',
    hoverBg: 'hover:bg-gray-100 dark:hover:bg-gray-800/40',
  },
  {
    name: 'Telegram',
    handle: '0962798493',
    href: 'https://t.me/+855962798493',
    icon: FaTelegram,
    iconColor: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950/20',
    border: 'border-sky-200 dark:border-sky-800/40',
    hoverBorder: 'hover:border-sky-400',
    hoverBg: 'hover:bg-sky-100 dark:hover:bg-sky-900/30',
  },
  {
    name: 'WhatsApp',
    handle: '0962798493',
    href: 'https://wa.me/855962798493',
    icon: FaWhatsapp,
    iconColor: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-950/20',
    border: 'border-green-200 dark:border-green-800/40',
    hoverBorder: 'hover:border-green-400',
    hoverBg: 'hover:bg-green-100 dark:hover:bg-green-900/30',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-sm font-bold tracking-widest uppercase text-primary">Let's Connect</span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Say <span className="text-primary">Hello!</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm always open to new projects, collaborations, or just a friendly chat. Find me on any of these platforms!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-20">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl border-2 ${social.border} ${social.bg} ${social.hoverBorder} ${social.hoverBg} transition-all duration-300 group`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white dark:bg-black/20 shadow-sm ${social.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-foreground text-sm">{social.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5 truncate">{social.handle}</div>
                </div>
                <svg
                  className="ml-auto w-4 h-4 flex-shrink-0 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for freelance &amp; collaborations
          </div>
        </motion.div>
      </div>

      <footer className="container mx-auto px-6 mt-20">
        <div className="border-t border-border pt-8 flex justify-center items-center">
          <div className="text-sm text-muted-foreground">
            Copyright &bull; {new Date().getFullYear()} Chao Chanpiseth
          </div>
        </div>
      </footer>
    </section>
  );
}
