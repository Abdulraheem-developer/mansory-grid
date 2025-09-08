import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const CLIENT_DIST = process.env.CLIENT_DIST || path.join(__dirname, '..', 'client', 'dist')

// Email transporter (placeholder config)
function createTransporter() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    })
  }
  // For dev/demo: use Ethereal if no SMTP provided
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: { user: process.env.ETHEREAL_USER || 'user@example.com', pass: process.env.ETHEREAL_PASS || 'password' },
  })
}

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' })
  try {
    const transporter = createTransporter()
    const to = process.env.CONTACT_EMAIL || 'placeholder@akcommtechsolutions.com'
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || `AK COMM Website <no-reply@akcommtechsolutions.com>`,
      to,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\n${message}`,
    })
    res.json({ ok: true, id: info.messageId })
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' })
  }
})

app.post('/api/quote', async (req, res) => {
  const { name, email, phone, serviceId, details } = req.body || {}
  if (!name || !email || !serviceId || !details) return res.status(400).json({ error: 'Missing required fields' })
  try {
    const transporter = createTransporter()
    const to = process.env.CONTACT_EMAIL || 'placeholder@akcommtechsolutions.com'
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || `AK COMM Website <no-reply@akcommtechsolutions.com>`,
      to,
      subject: `New Quote Request: ${serviceId} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${serviceId}\n\nDetails:\n${details}`,
    })
    res.json({ ok: true, id: info.messageId })
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit request' })
  }
})

// Serve client build in production
app.use(express.static(CLIENT_DIST))
// SPA fallback for non-API GET requests (Express 5-safe)
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.join(CLIENT_DIST, 'index.html'))
  }
  return next()
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

