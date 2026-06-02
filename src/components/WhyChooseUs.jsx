import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BUSINESS } from '../config/constants';

const points = [
  'Licensed & trusted local pharmacy',
  'Genuine medicines from verified brands',
  'Quick delivery in ' + BUSINESS.city + ' & surrounding areas',
  'Friendly and knowledgeable pharmacist staff',
  'Easy WhatsApp ordering — no app needed',
  'Cash on delivery available',
  'Handles bulk and regular medicine orders',
];

export default function WhyChooseUs() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 bg-primary-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
              Our Promise
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8">
              Why Customers Trust{' '}
              <span className="text-primary">{BUSINESS.name}</span>
            </h2>

            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-primary text-xl mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-sm w-full border border-primary/10">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <MdLocalPharmacy className="text-white text-5xl" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-1">{BUSINESS.name}</h3>
              <p className="text-primary font-semibold text-sm mb-4">Since {BUSINESS.year}</p>
              <div className="bg-primary-light rounded-2xl p-4 text-left space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-primary font-bold">📍</span> {BUSINESS.city}, Uttar Pradesh
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-primary font-bold">⭐</span> 4.9/5 Customer Rating
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-primary font-bold">🏥</span> Licensed Pharmacy
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-primary font-bold">💊</span> 1000+ Medicines in Stock
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
