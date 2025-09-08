# AK-COMM TECH AND SOLUTIONS Website

A mobile-friendly business website for AK COMM TECH SOLUTIONS built with React + Tailwind (Vite) and Node.js (Express) for handling form submissions.

## Features
- Home with hero, intro, and featured services
- Services page with detailed service cards
- Contact page with form and Google Maps embed
- Request Quote page with service selection and details
- Responsive navbar and footer
- Backend endpoints to receive form submissions and send emails

## Tech Stack
- Frontend: React, Vite, Tailwind CSS, React Router, React Icons
- Backend: Node.js, Express, Nodemailer

## Getting Started

### 1) Install
```bash
npm run install-all
```

### 2) Development (two servers)
```bash
npm run dev
```
- Frontend dev: http://localhost:5173
- API server: http://localhost:5000
- Vite proxies /api to the server in dev

### 3) Production build & start
```bash
npm run build
npm start
```
This serves the built frontend from the Express server (port 5000 by default).

## Environment Variables (Email)
Create `server/.env` with your SMTP details:
```env
# Required: where to send received form emails
CONTACT_EMAIL=info@akcommtechsolutions.com

# Optional: customize the From header
MAIL_FROM=AK COMM Website <no-reply@akcommtechsolutions.com>

# SMTP provider (recommended)
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
```
If not provided, the server attempts to use an Ethereal dev SMTP account. Replace with your real provider for production.

## Deployment (Replit)
- Create a Replit Node.js project.
- Import this repository.
- Set the Run command to:
```bash
npm run build && npm start
```
- Add environment variables in the Replit Secrets UI as shown above.

## Endpoints
- POST `/api/contact` { name, email, phone?, message }
- POST `/api/quote` { name, email, phone?, serviceId, details }

## Customization
- Update branding colors in `client/tailwind.config.js`
- Replace `client/public/logo.svg` with your logo
- Edit service list in `client/src/data/services.js`
- Update contact details in `Footer` and `Contact` pages

## License
Proprietary – for AK-COMM TECH AND SOLUTIONS.