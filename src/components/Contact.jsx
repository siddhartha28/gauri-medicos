import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BUSINESS, WHATSAPP_ORDER_URL } from '../config/constants';

const contacts = [
  {
    icon: <FaWhatsapp className="text-green-500 text-2xl" />,
    label: 'WhatsApp',
    value: `+${BUSINESS.whatsappNumber}`,
    href: WHATSAPP_ORDER_URL,
    target: '_blank',
    bg: 'bg-green-50',
  },
  {
    icon: <FaPhone className="text-primary text-2xl" />,
    label: 'Phone',
    value: BUSINESS.phone,
    href: `tel:${BUSINESS.phone}`,
    bg: 'bg-primary-light',
  },
  {
    icon: <FaEnvelope className="text-blue-500 text-2xl" />,
    label: 'Email',
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    bg: 'bg-blue-50',
  },
  {
    icon: <FaMapMarkerAlt className="text-red-500 text-2xl" />,
    label: 'Address',
    value: BUSINESS.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}`,
    target: '_blank',
    bg: 'bg-red-50',
  },
  {
    icon: <FaClock className="text-orange-500 text-2xl" />,
    label: 'Working Hours',
    value: '24/7 — Always Open',
    bg: 'bg-orange-50',
  },
];

export default function Contact() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
            Reach Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="text-gray-500 mt-3 text-sm">
            We're available 24/7. Don't hesitate to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -15 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.target}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 ${c.bg} rounded-2xl p-4 hover:shadow-md transition-shadow group`}
                  >
                    <div className="shrink-0">{c.icon}</div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                      <p className="text-gray-800 font-semibold text-sm group-hover:text-primary transition-colors">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className={`flex items-center gap-4 ${c.bg} rounded-2xl p-4`}>
                    <div className="shrink-0">{c.icon}</div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                      <p className="text-gray-800 font-semibold text-sm">{c.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.65 }}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-full mt-2 transition-all shadow-md hover:shadow-lg"
            >
              <FaWhatsapp className="text-xl" />
              Order on WhatsApp Now
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 min-h-64"
          >
            <iframe
              title="Gauri Medicos Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.6292!2d78.8282!3d28.8386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390affad4acba3b5%3A0x0!2sBudh+Bazaar%2C+Moradabad%2C+Uttar+Pradesh+244001!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: '350px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
