// Security utilities for X Operations Digital Hub

/**
 * Sanitizes input to prevent XSS attacks
 * @param input - The user input to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  // Replace potentially dangerous characters
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#96;');
}

/**
 * Validates email format
 * @param email - Email to validate
 * @returns Boolean indicating if email is valid
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format (international format)
 * @param phone - Phone number to validate
 * @returns Boolean indicating if phone number is valid
 */
export function validatePhone(phone: string): boolean {
  // Basic international phone validation
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone);
}

/**
 * Validates file type for uploads
 * @param filename - Name of the file to validate
 * @returns Boolean indicating if file type is allowed
 */
export function validateFileType(filename: string): boolean {
  if (!filename) return false;
  
  // Only allow specific file extensions
  const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png'];
  const ext = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  
  return allowedExtensions.includes(ext);
}

/**
 * Generates nonce for Content-Security-Policy
 * @returns Random nonce string
 */
export function generateNonce(): string {
  // Generate a random string for CSP nonce
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}
