# Next.js Email Sender

A simple Next.js application that demonstrates how to send emails using either Nodemailer with SMTP or SendGrid.

## Features

- Contact form with validation
- Email sending via SMTP (Nodemailer)
- Alternative email sending via SendGrid
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TuyenNedd/nextjs-email-sender.git
cd nextjs-email-sender
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Create a `.env.local` file in the root directory and add your email service credentials:

For SMTP:
```
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=your-email@example.com
EMAIL_TO=recipient@example.com
```

For SendGrid:
```
SENDGRID_API_KEY=your-sendgrid-api-key
EMAIL_FROM=verified-sender@example.com
EMAIL_TO=recipient@example.com
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Fill out the contact form with your name, email, subject, and message.
2. Click the "Send Message" button.
3. You'll see a success or error message depending on whether the email was sent successfully.

## Deployment

You can deploy this application to Vercel, Netlify, or any other Next.js-compatible hosting platform. Make sure to set up the environment variables in your hosting platform's dashboard.

## License

This project is licensed under the MIT License - see the LICENSE file for details.