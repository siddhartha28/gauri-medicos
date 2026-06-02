import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';
import { BUSINESS, WHATSAPP_ORDER_URL } from '../config/constants';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                <MdLocalPharmacy className="text-white text-xl" />
              </div>
              <span className="font-bold text-xl">{BUSINESS.name}</span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-5">{BUSINESS.tagline}</p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-green-500/80 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-green-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-200 hover:text-white text-sm transition-colors"
                >
                  <FaWhatsapp className="text-green-400 shrink-0" />
                  +{BUSINESS.whatsappNumber}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2 text-green-200 hover:text-white text-sm transition-colors"
                >
                  <FaPhone className="text-primary shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-2 text-green-200 hover:text-white text-sm transition-colors"
                >
                  <FaEnvelope className="text-blue-400 shrink-0 mt-0.5" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-green-200 text-sm">
                <FaMapMarkerAlt className="text-red-400 shrink-0 mt-0.5" />
                {BUSINESS.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-green-300">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-green-400 hover:text-white transition-colors font-medium"
          >
            <FaWhatsapp />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
