import { motion } from 'framer-motion';
import { FaTruck, FaWhatsapp, FaHeadset, FaTag, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: <FaTruck />,
    title: 'Fast Delivery',
    desc: 'Get your medicines quickly, right to your doorstep in Moradabad.',
  },
  {
    icon: <FaWhatsapp />,
    title: 'Easy Prescription Upload',
    desc: "Share your prescription on WhatsApp — we'll handle the rest.",
  },
  {
    icon: <FaHeadset />,
    title: '24/7 Support',
    desc: 'Call or WhatsApp us anytime, day or night — we\'re always here.',
  },
  {
    icon: <FaTag />,
    title: 'Best Prices',
    desc: 'Competitive prices with regular discounts on all medicines.',
  },
  {
    icon: <FaShieldAlt />,
    title: '100% Genuine Medicines',
    desc: 'All medicines sourced from verified, licensed suppliers only.',
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Cash on Delivery',
    desc: 'Pay on delivery or pay online — your choice, always.',
  },
];

export default function Features() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Everything you need — hassle-free
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-primary-light group-hover:bg-primary rounded-xl flex items-center justify-center text-primary group-hover:text-white text-xl transition-all duration-300 mb-4">
                {feat.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
