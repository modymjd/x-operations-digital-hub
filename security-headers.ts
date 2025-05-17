// Security headers middleware for Vite
// Create this file in the project root to be used in the server configuration

import { Plugin } from 'vite';

export default function securityHeaders(): Plugin {
  return {
    name: 'security-headers',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Force HTTPS
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
        
        // Content Security Policy
        res.setHeader('Content-Security-Policy', 
          "default-src 'self'; " +
          "script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ 'unsafe-inline'; " +
          "style-src 'self' 'unsafe-inline'; " +
          "img-src 'self' data: https:; " +
          "connect-src 'self'; " +
          "font-src 'self'; " +
          "object-src 'none'; " +
          "media-src 'self'; " +
          "frame-src https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/; " +
          "child-src 'none'; " +
          "form-action 'self'; " +
          "base-uri 'self'; " +
          "frame-ancestors 'self';"
        );
        
        // Prevent MIME type sniffing
        res.setHeader('X-Content-Type-Options', 'nosniff');
        
        // Prevent clickjacking
        res.setHeader('X-Frame-Options', 'SAMEORIGIN');
        
        // Enable XSS protection
        res.setHeader('X-XSS-Protection', '1; mode=block');
        
        // Referrer policy
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        
        // Permissions policy
        res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
        
        next();
      });
    }
  };
}
