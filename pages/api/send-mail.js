import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Input validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: Boolean(process.env.EMAIL_SECURE === 'true'), // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject,
      text: message,
      html: `<div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}