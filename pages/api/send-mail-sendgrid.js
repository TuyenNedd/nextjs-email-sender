import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if SendGrid API key is configured
  if (!process.env.SENDGRID_API_KEY) {
    return res.status(500).json({ error: 'SendGrid API key not configured' });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: subject,
    text: message,
    html: `<div>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>`,
    replyTo: email,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}