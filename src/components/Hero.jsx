import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaStar, FaClock, FaTruck, FaTag } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';
import { BUSINESS, WHATSAPP_ORDER_URL } from '../config/constants';

const stats = [
  { icon: <FaClock />, label: '24×7 Available' },
  { icon: <FaStar />, label: '4.9★ Rated' },
  { icon: <FaTruck />, label: 'Fast Delivery' },
  { icon: <FaTag />, label: 'Best Prices' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 lg:pt-24 min-h-screen bg-gradient-to-br from-primary-light via-white to-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            >
              <MdLocalPharmacy className="text-base" />
              Trusted Local Pharmacy Since {BUSINESS.year}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5"
            >
              Get Your Medicines{' '}
              <span className="text-primary">Delivered Fast,</span> 24/7
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl"
            >
              Order medicines, health products & more from{' '}
              <strong className="text-gray-800">{BUSINESS.name}</strong> — your
              trusted local pharmacy in {BUSINESS.city}.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-base"
              >
                <FaWhatsapp className="text-xl" />
                Order on WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3.5 rounded-full shadow-sm hover:shadow-lg transition-all duration-200 text-base"
              >
                <FaPhone />
                Call Us Now
              </a>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1.5 bg-white rounded-2xl p-3 shadow-sm border border-gray-100 text-center"
                >
                  <span className="text-primary text-xl">{stat.icon}</span>
                  <span className="text-gray-700 text-xs font-semibold">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-primary/10">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-xl">
                    <MdLocalPharmacy className="text-white text-7xl" />
                  </div>
                </div>
                <h3 className="text-center text-xl font-bold text-gray-800 mb-1">
                  {BUSINESS.name}
                </h3>
                <p className="text-center text-gray-500 text-sm mb-6">{BUSINESS.tagline}</p>

                {/* Features pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {['Fast Delivery', 'Genuine Meds', '24/7 Support', 'Best Price', 'Cash on Delivery'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-2xl shadow-lg flex items-center gap-1"
              >
                <FaWhatsapp />
                Order Now
              </motion.div>

              {/* Floating delivery badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white border-2 border-primary text-primary text-xs font-bold px-3 py-2 rounded-2xl shadow-lg flex items-center gap-1"
              >
                <FaTruck />
                Fast Delivery
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
