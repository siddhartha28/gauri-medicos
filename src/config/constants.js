export const BUSINESS = {
  name: 'Gauri Medicos',
  tagline: 'Your trusted medicine partner, always',
  year: 2019,
  city: 'Moradabad',
  area: 'Ramganga Vihar, Moradabad',
  whatsappNumber: '919927081917',
  phone: '9927080913',
  email: 'gaurimedicos2019@gmail.com',
  address: 'Gauri Medicos, Ramganga Vihar, Budh Bazaar, Moradabad, Uttar Pradesh 244001',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.6!2d78.8!3d28.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGauri+Medicos+Moradabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.whatsappNumber}`;
export const WHATSAPP_ORDER_URL = `${WHATSAPP_URL}?text=${encodeURIComponent('Hi Gauri Medicos, I want to order medicines')}`;

export const getWhatsAppCategoryUrl = (category) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(`Hi Gauri Medicos, I need medicines for ${category}`)}`;
