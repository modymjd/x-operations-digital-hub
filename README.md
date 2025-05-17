# X Operations Digital Hub

هذا المشروع هو منصة رقمية لـ X Operations Digital Hub، مبنية باستخدام React وVite وTypeScript وTailwind CSS.

## المتطلبات

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn أو pnpm

## التثبيت

1. قم بنسخ المستودع:
```bash
git clone https://github.com/modymjd/x-operations-digital-hub.git
cd x-operations-digital-hub
```

2. قم بتثبيت التبعيات:
```bash
npm install
# أو
yarn install
# أو
pnpm install
```

3. قم بإنشاء ملف `.env` من النموذج:
```bash
cp .env.example .env
```

4. قم بتعديل ملف `.env` لإضافة المفاتيح الخاصة بك:
```
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
VITE_RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
VITE_WHATSAPP_NUMBER=201015175618
```

## تشغيل المشروع في بيئة التطوير

```bash
npm run dev
# أو
yarn dev
# أو
pnpm dev
```

سيتم تشغيل المشروع على المنفذ 8080 بشكل افتراضي: http://localhost:8080

## بناء المشروع للإنتاج

```bash
npm run build
# أو
yarn build
# أو
pnpm build
```

سيتم إنشاء ملفات البناء في مجلد `dist`.

## معاينة نسخة الإنتاج محلياً

```bash
npm run preview
# أو
yarn preview
# أو
pnpm preview
```

## نشر المشروع

يمكن نشر المشروع على أي خادم يدعم استضافة مواقع الويب الثابتة. بعد تنفيذ أمر البناء، قم بنقل محتويات مجلد `dist` إلى الخادم.

### متطلبات الخادم

- دعم HTTPS (مطلوب للأمان)
- دعم إعادة توجيه HTTP إلى HTTPS
- القدرة على تعيين رؤوس HTTP للأمان

### إعداد cPanel

1. قم بتحميل ملفات مجلد `dist` إلى المجلد العام للموقع (عادة `public_html`)
2. قم بإنشاء ملف `.htaccess` في المجلد الجذر بالمحتوى التالي:

```apache
# إعادة توجيه HTTP إلى HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# رؤوس الأمان
<IfModule mod_headers.c>
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'; font-src 'self'; object-src 'none'; media-src 'self'; frame-src https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/; child-src 'none'; form-action 'self'; base-uri 'self'; frame-ancestors 'self';"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>

# التعامل مع التوجيه لتطبيق SPA
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### إعداد Nginx

إذا كنت تستخدم Nginx، أضف التكوين التالي إلى ملف تكوين الموقع:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # إعدادات SSL
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;

    # رؤوس الأمان
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'; font-src 'self'; object-src 'none'; media-src 'self'; frame-src https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/; child-src 'none'; form-action 'self'; base-uri 'self'; frame-ancestors 'self';" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

    root /var/www/yourdomain.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # تكوين إضافي للملفات الثابتة
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires max;
        add_header Cache-Control "public, max-age=31536000";
    }
}
```

## ميزات الأمان المضمنة

- إجبار HTTPS مع شهادة SSL
- تنظيف وتحقق من صحة جميع حقول الإدخال
- حماية من هجمات XSS وSQL Injection
- دعم Google reCAPTCHA لحماية النماذج
- توافق مع GDPR وشريط موافقة الكوكيز
- رؤوس أمان المحتوى (CSP، X-Content-Type-Options، X-Frame-Options، X-XSS-Protection)
- تأمين تحميل الملفات (قبول .pdf، .jpg، .png فقط)
- جاهزية للحماية من هجمات DDoS (متوافق مع Cloudflare)

## الترخيص

جميع الحقوق محفوظة © X Operations Digital Hub
