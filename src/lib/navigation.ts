// Smooth Scroll Utility
export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// WhatsApp Link Generator
export function generateWhatsAppLink(phoneNumber: string, message: string = '') {
  // Remove any non-digit characters from phone number
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Generate WhatsApp link
  return `https://wa.me/${cleanNumber}${message ? `?text=${encodedMessage}` : ''}`;
}

// Social Media Link Helper
export function getSocialMediaLink(platform: 'facebook' | 'youtube' | 'whatsapp', id: string): string {
  const links = {
    facebook: `https://facebook.com/${id}`,
    youtube: `https://youtube.com/${id}`,
    whatsapp: generateWhatsAppLink(id)
  };
  
  return links[platform];
}
