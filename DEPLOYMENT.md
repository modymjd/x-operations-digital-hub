
# X Operations Website Deployment Guide

This document outlines the steps needed to deploy the X Operations website to a production environment.

## Prerequisites

- Node.js (v16 or later)
- NPM or Yarn package manager
- A web server (NGINX or Apache)
- Access to a domain registrar to configure DNS
- SSL certificate (Let's Encrypt recommended)

## Deployment Steps

### 1. Preparing the Application

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-account/x-operations-website.git
cd x-operations-website
npm install
```

Build the application for production:

```bash
npm run build
```

This will create a `dist` folder with all the static assets.

### 2. Server Configuration

#### NGINX Configuration (Recommended)

Create a new NGINX configuration file at `/etc/nginx/sites-available/xoperations`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Redirect all HTTP requests to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    # SSL configuration
    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
    
    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.example.com;" always;
    
    # Document root
    root /var/www/xoperations/dist;
    index index.html;
    
    # Rate limiting for contact form API
    location /api/contact {
        limit_req zone=mylimit burst=5 nodelay;
        proxy_pass http://localhost:3000/api/contact;
    }
    
    # Serve the static files
    location / {
        try_files $uri $uri/ /index.html;
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # Don't cache index.html
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        expires 0;
    }
}
```

Enable the site and restart NGINX:

```bash
sudo ln -s /etc/nginx/sites-available/xoperations /etc/nginx/sites-enabled/
sudo nginx -t  # Test the configuration
sudo systemctl restart nginx
```

#### Apache Configuration

Create an Apache vhost configuration:

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    
    # Redirect to HTTPS
    Redirect permanent / https://yourdomain.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    
    DocumentRoot /var/www/xoperations/dist
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /path/to/ssl/cert.pem
    SSLCertificateKeyFile /path/to/ssl/key.pem
    
    # Security headers
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "DENY"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.example.com;"
    
    <Directory /var/www/xoperations/dist>
        Options -MultiViews
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^ index.html [QSA,L]
    </Directory>
</VirtualHost>
```

Enable the required modules and restart Apache:

```bash
sudo a2enmod ssl rewrite headers
sudo systemctl restart apache2
```

### 3. SSL Certificate (Let's Encrypt)

Install Certbot:

```bash
sudo apt-get install certbot
```

For NGINX:

```bash
sudo apt-get install python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

For Apache:

```bash
sudo apt-get install python3-certbot-apache
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com
```

### 4. File Permissions

Set proper permissions for web files:

```bash
sudo chown -R www-data:www-data /var/www/xoperations
sudo chmod -R 755 /var/www/xoperations
```

### 5. Firewall Configuration

Configure firewall to allow HTTP and HTTPS:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### 6. Connect to a CDN (Optional)

For enhanced security and performance, you can use Cloudflare as a CDN and security provider:

1. Create a Cloudflare account
2. Add your domain to Cloudflare
3. Update your domain's nameservers to those provided by Cloudflare
4. Enable Cloudflare's security features like DDoS protection and WAF

### 7. Monitor and Update

Set up regular updates and monitoring:

```bash
# Create a simple update script
cat > /usr/local/bin/update-xoperations.sh << 'EOF'
#!/bin/bash
cd /path/to/repository
git pull
npm install
npm run build
rsync -av --delete dist/ /var/www/xoperations/dist/
EOF

chmod +x /usr/local/bin/update-xoperations.sh
```

Add to crontab for automated dependency checks:

```bash
# Check for npm updates weekly
0 0 * * 0 /usr/local/bin/update-xoperations.sh
```

## Testing Deployment

After deployment, verify:

1. The site loads correctly over HTTPS
2. No mixed content warnings appear
3. Contact form works properly
4. All social links open in new tabs
5. The SSL certificate is valid

## Security Checklist

✅ HTTPS is enforced
✅ Security headers are configured
✅ Contact form has input validation
✅ reCAPTCHA is implemented
✅ Rate limiting is configured
✅ All social media links use rel="noopener noreferrer"
✅ All dependencies are up to date

For any issues or questions, contact the development team.
