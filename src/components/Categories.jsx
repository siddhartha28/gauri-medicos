import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getWhatsAppCategoryUrl } from '../config/constants';

const categories = [
  { emoji: '🦴', name: 'Joints & Bone Care', desc: 'Arthritis, calcium, joint pain relief' },
  { emoji: '🫃', name: 'Gut Health', desc: 'Probiotics, digestion, gut wellness' },
  { emoji: '🫀', name: 'Liver Care', desc: 'Liver tonics, hepatitis, detox' },
  { emoji: '❤️', name: 'Heart Care', desc: 'BP, cholesterol, cardiac health' },
  { emoji: '🫘', name: 'Kidney Care', desc: 'Kidney stones, UTI, renal support' },
  { emoji: '🍃', name: 'Stomach Care', desc: 'Acidity, gas, indigestion relief' },
  { emoji: '🫁', name: 'Respiratory Care', desc: 'Cough, asthma, allergies' },
  { emoji: '✨', name: 'Skin & Personal Care', desc: 'Skincare, derma, personal hygiene' },
  { emoji: '💊', name: 'Vitamins & Supplements', desc: 'Daily vitamins, minerals, immunity' },
  { emoji: '👶', name: 'Baby & Mother Care', desc: 'Infant care, maternal health' },
];

export default function Categories() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="categories" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
            Shop by Category
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Browse by Health Category
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Click any category to instantly message us on WhatsApp and get what you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={getWhatsAppCategoryUrl(cat.name)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="group flex flex-col items-center text-center p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-primary hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {cat.emoji}
              </span>
              <h3 className="font-bold text-gray-800 group-hover:text-white text-sm leading-tight mb-1">
                {cat.name}
              </h3>
              <p className="text-gray-400 group-hover:text-green-100 text-xs leading-snug">
                {cat.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
