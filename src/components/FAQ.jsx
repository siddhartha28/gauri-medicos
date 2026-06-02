import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BUSINESS } from '../config/constants';

const faqs = [
  {
    q: 'Do you deliver 24/7?',
    a: 'Yes! We are available 24 hours a day, 7 days a week. You can place orders any time via WhatsApp and we will arrange delivery as soon as possible.',
  },
  {
    q: 'How do I place an order on WhatsApp?',
    a: 'Simply click the "Order on WhatsApp" button on this page, type your medicine names or send a photo of your prescription, and our team will respond within minutes.',
  },
  {
    q: 'What medicines do you stock?',
    a: 'We stock a wide range of prescription medicines, OTC drugs, vitamins, supplements, baby care, personal care, and health products from all major brands.',
  },
  {
    q: 'Do I need a prescription for all medicines?',
    a: 'Prescription (Rx) medicines require a valid doctor\'s prescription. OTC medicines can be ordered without one. We follow all government regulations strictly.',
  },
  {
    q: 'What is your delivery area?',
    a: `We primarily deliver within ${BUSINESS.city} and surrounding areas. Contact us on WhatsApp to confirm delivery to your specific location.`,
  },
  {
    q: 'Do you offer discounts or bulk pricing?',
    a: 'Yes! We offer regular discounts and special pricing for bulk/monthly orders. WhatsApp us for a customized quote.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Cash on Delivery (COD), UPI (Google Pay, PhonePe, Paytm), bank transfer, and online payments. Pay what is most convenient for you.',
  },
  {
    q: 'Can you suggest medicine alternatives?',
    a: 'Yes, our licensed pharmacists can suggest generic alternatives or similar medicines if your requested brand is unavailable. We always confirm with you before substituting.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        open ? 'border-primary shadow-sm' : 'border-gray-200'
      }`}
    >
      <button
        className={`w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm transition-colors ${
          open ? 'bg-primary text-white' : 'bg-white text-gray-800 hover:bg-gray-50'
        }`}
        onClick={() => setOpen(!open)}
      >
        <span>{faq.q}</span>
        <FaChevronDown
          className={`shrink-0 ml-3 text-sm transition-transform duration-300 ${
            open ? 'rotate-180 text-white' : 'text-primary'
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 py-4 bg-primary-light text-gray-600 text-sm leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
            Got Questions?
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {visible && (
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
