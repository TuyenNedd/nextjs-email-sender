import Head from 'next/head';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js Email Sender</title>
        <meta name="description" content="Send emails with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Next.js Email Sender
        </h1>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ContactForm />
        </div>

        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">About This Project</h2>
          <p className="mb-4">
            This is a simple demonstration of how to send emails from a Next.js application
            using either Nodemailer with SMTP or SendGrid. The project includes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>A contact form with validation</li>
            <li>API routes for sending emails</li>
            <li>Support for both SMTP and SendGrid</li>
            <li>Responsive design with Tailwind CSS</li>
          </ul>
          <p>
            Check out the project's GitHub repository for more information and documentation.
          </p>
        </div>
      </main>
    </Layout>
  );
}