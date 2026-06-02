import { motion } from 'framer-motion';
import { FaMobileAlt, FaCheckCircle, FaHome } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    num: '01',
    icon: <FaMobileAlt className="text-2xl" />,
    title: 'Send Your Medicines List',
    desc: 'Type the medicine names or upload your prescription photo on WhatsApp.',
  },
  {
    num: '02',
    icon: <FaCheckCircle className="text-2xl" />,
    title: 'Get Instant Confirmation',
    desc: "We'll confirm availability and share the exact price with you right away.",
  },
  {
    num: '03',
    icon: <FaHome className="text-2xl" />,
    title: 'Receive at Your Door',
    desc: 'We deliver fast with safe packaging directly to your address.',
  },
];

export default function HowItWorks() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 bg-primary-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
            Simple Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            How to Order in 3 Simple Steps
          </h2>
        </motion.div>

        <div className="relative">
          {/* Dotted connector line - desktop only */}
          <div className="hidden lg:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 border-t-2 border-dashed border-primary/30 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center text-primary shadow-lg">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div className="text-5xl font-black text-primary/15 mb-2 leading-none">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
