import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reviews = [
  {
    name: 'Priya S.',
    city: 'Moradabad',
    rating: 5,
    text: 'Excellent service! Got my medicines delivered within the hour. Very impressed with the speed and packaging.',
  },
  {
    name: 'Ramesh T.',
    city: 'Moradabad',
    rating: 5,
    text: 'Very easy to order on WhatsApp. Just sent the prescription photo and they handled everything. Highly recommended!',
  },
  {
    name: 'Sunita M.',
    city: 'Ramganga Vihar',
    rating: 5,
    text: 'The staff is very knowledgeable and helpful. They suggested the right medicine when I described my symptoms.',
  },
  {
    name: 'Ajay K.',
    city: 'Moradabad',
    rating: 5,
    text: 'Prices are competitive and delivery is fast. Much better than going to the market. Will keep ordering.',
  },
  {
    name: 'Meena R.',
    city: 'Budh Bazaar',
    rating: 5,
    text: 'I order all my monthly medicines from Gauri Medicos. Genuine medicines, good prices, and always on time.',
  },
  {
    name: 'Vikas P.',
    city: 'Moradabad',
    rating: 5,
    text: 'Ordered medicines at midnight and received them early morning. The 24/7 service is truly amazing!',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, visible] = useScrollAnimation();
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const posRef = useRef(0);
  const animRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        posRef.current += speed;
        if (posRef.current >= track.scrollWidth / 2) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
            Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={trackRef} className="flex gap-5 w-max">
          {doubled.map((review, i) => (
            <div
              key={i}
              className="w-72 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow shrink-0"
            >
              <FaQuoteLeft className="text-primary/30 text-2xl mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.city}</p>
                </div>
                <StarRating count={review.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Fade masks */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
