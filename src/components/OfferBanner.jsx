import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { WHATSAPP_ORDER_URL } from '../config/constants';

export default function OfferBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-primary text-white text-sm font-medium overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 relative">
            <span className="text-yellow-300 text-base">🎉</span>
            <span>
              First order?{' '}
              <strong className="text-yellow-300">Get FREE delivery!</strong>{' '}
              <span className="hidden sm:inline text-green-100">
                — Order now on WhatsApp
              </span>
            </span>
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white text-primary font-bold text-xs px-3 py-1 rounded-full hover:bg-yellow-50 transition-colors shrink-0"
            >
              <FaWhatsapp className="text-green-500" />
              Order Now
            </a>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <FaTimes size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
