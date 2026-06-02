import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BUSINESS } from '../config/constants';

const highlights = [
  `Est. ${BUSINESS.year} — Years of trusted service`,
  'Licensed & registered pharmacy',
  `Serving ${BUSINESS.city} & surrounding areas`,
  'Trusted by thousands of families',
  '100% genuine, verified medicines',
  'Expert licensed pharmacists on staff',
];

export default function About() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-primary-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
              Our Story
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-5">
              About <span className="text-primary">{BUSINESS.name}</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>{BUSINESS.name}</strong> is your trusted local pharmacy in {BUSINESS.city},
              committed to making medicines and healthcare products accessible and affordable. We
              deliver to your doorstep quickly, with 100% genuine products and expert guidance
              from our licensed pharmacists.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Since {BUSINESS.year}, we have been serving the families of {BUSINESS.city} with
              dedication, care, and a commitment to your health. Whether you need a single tablet
              or a month&apos;s supply, we&apos;re here for you — 24 hours a day, 7 days a week.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.09, duration: 0.4 }}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <FaCheckCircle className="text-primary text-base mt-0.5 shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-primary/10">
                <div className="flex justify-center mb-5">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-xl">
                    <MdLocalPharmacy className="text-white text-6xl" />
                  </div>
                </div>
                <h3 className="text-center text-2xl font-black text-gray-900 mb-1">
                  {BUSINESS.name}
                </h3>
                <p className="text-center text-primary font-semibold text-sm mb-5">
                  {BUSINESS.tagline}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { num: `${new Date().getFullYear() - BUSINESS.year}+`, label: 'Years Serving' },
                    { num: '4.9★', label: 'Rating' },
                    { num: '1000+', label: 'Medicines' },
                    { num: '24/7', label: 'Available' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-primary-light rounded-xl p-3 text-center"
                    >
                      <div className="text-primary font-black text-xl">{stat.num}</div>
                      <div className="text-gray-500 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
