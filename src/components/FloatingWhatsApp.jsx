import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_ORDER_URL } from '../config/constants';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            Order on WhatsApp
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 border-4 border-transparent border-l-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_ORDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors"
      >
        <FaWhatsapp className="text-3xl" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
      </motion.a>
    </div>
  );
}
