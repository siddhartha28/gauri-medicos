import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { WHATSAPP_ORDER_URL } from '../config/constants';

const steps = [
  {
    num: '01',
    title: 'Send Your Order',
    desc: 'Send us your prescription or medicine name on WhatsApp — photo or text, your choice.',
  },
  {
    num: '02',
    title: 'We Confirm & Quote',
    desc: 'We confirm availability and share the total price with you instantly.',
  },
  {
    num: '03',
    title: 'Pay & Get Delivered',
    desc: 'Pay easily online or cash on delivery — your medicines arrive fast!',
  },
];

export default function WhatsAppOrder() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-green-500 to-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FaWhatsapp className="text-white text-4xl" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Order on WhatsApp — It&apos;s Super Easy!
          </h2>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            No app download needed. Just send a message and we'll handle the rest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative"
            >
              <div className="text-5xl font-black text-white/30 mb-3 leading-none">{step.num}</div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-green-100 text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-3 z-10">
                  <span className="text-white/50 text-2xl font-light">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.45 }}
          className="flex justify-center"
        >
          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-600 hover:bg-green-50 font-extrabold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-200 group"
          >
            <FaWhatsapp className="text-2xl text-green-500 group-hover:scale-110 transition-transform" />
            Start Ordering on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
