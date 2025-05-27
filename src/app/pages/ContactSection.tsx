import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8 bg-yellow-200">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Let&rsquo;s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-gray-700"
        >
          I&apos;m always open to discussing new opportunities or collaborations.
        </motion.p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-white text-yellow-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-100"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}