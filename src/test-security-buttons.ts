// Test script for security and button behavior
import { sanitizeInput, validateEmail, validatePhone, validateFileType } from '@/lib/security';
import { smoothScrollTo, generateWhatsAppLink, getSocialMediaLink } from '@/lib/navigation';

// Test security functions
console.log('=== اختبار وظائف الأمان ===');

// Test input sanitization
const testInput = '<script>alert("XSS")</script>';
console.log(`النص الأصلي: ${testInput}`);
console.log(`النص بعد التنظيف: ${sanitizeInput(testInput)}`);

// Test email validation
const validEmail = 'user@example.com';
const invalidEmail = 'invalid-email';
console.log(`البريد الإلكتروني الصحيح (${validEmail}): ${validateEmail(validEmail)}`);
console.log(`البريد الإلكتروني غير الصحيح (${invalidEmail}): ${validateEmail(invalidEmail)}`);

// Test phone validation
const validPhone = '+201015175618';
const invalidPhone = 'abc123';
console.log(`رقم الهاتف الصحيح (${validPhone}): ${validatePhone(validPhone)}`);
console.log(`رقم الهاتف غير الصحيح (${invalidPhone}): ${validatePhone(invalidPhone)}`);

// Test file type validation
const validFile = 'document.pdf';
const invalidFile = 'script.exe';
console.log(`الملف المسموح به (${validFile}): ${validateFileType(validFile)}`);
console.log(`الملف غير المسموح به (${invalidFile}): ${validateFileType(invalidFile)}`);

// Test navigation functions
console.log('\n=== اختبار وظائف التنقل ===');

// Test WhatsApp link generation
const phoneNumber = '201015175618';
const message = 'مرحباً، أود معرفة المزيد عن خدماتكم';
const whatsappLink = generateWhatsAppLink(phoneNumber, message);
console.log(`رابط واتساب: ${whatsappLink}`);

// Test social media links
console.log(`رابط فيسبوك: ${getSocialMediaLink('facebook', 'xoperationsdigitalhub')}`);
console.log(`رابط يوتيوب: ${getSocialMediaLink('youtube', 'xoperationsdigitalhub')}`);
console.log(`رابط واتساب: ${getSocialMediaLink('whatsapp', '201015175618')}`);

console.log('\n=== اكتمل الاختبار بنجاح ===');
