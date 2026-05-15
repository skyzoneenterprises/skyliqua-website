import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Skyliqua",
  description: "Privacy policy for Skyliqua water purifiers",
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-16 py-5 border-b border-gray-100">
        <Link href="/" className="text-xl font-semibold" style={{ color: "#0C0F0D" }}>
          Skyliqua
        </Link>
        <Link href="/" className="text-sm font-medium transition-colors" style={{ color: "#0BABA6" }}>
          Back to Home
        </Link>
      </nav>

      <div className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-10 py-16 sm:py-20">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#0C0F0D" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-8" style={{ color: "rgba(12,15,13,0.5)" }}>
          Last updated: May 15, 2026
        </p>

        <div className="prose prose-lg max-w-none" style={{ color: "rgba(12,15,13,0.7)" }}>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              1. Introduction
            </h2>
            <p>
              Skyliqua ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              2. Information We Collect
            </h2>
            <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and other contact information you provide through our contact forms.</li>
              <li><strong>Device Information:</strong> Browser type, IP address, operating system, and device identifiers.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and other browsing behavior.</li>
              <li><strong>Cookies and Similar Technologies:</strong> We use cookies to enhance your browsing experience.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you promotional communications (with your consent)</li>
              <li>To personalize your experience on our website</li>
              <li>To analyze trends and usage patterns</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              5. Your Rights
            </h2>
            <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              7. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg" style={{ background: "rgba(11,171,166,0.05)" }}>
              <p className="font-semibold mb-2" style={{ color: "#0BABA6" }}>Skyliqua Customer Support</p>
              <p>Email: support@skyliqua.com</p>
              <p>Phone: +91 9483548853</p>
              <p>Address: 123 Pure Water Avenue, Tech Park, City — 400001</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting. Your continued use of our website constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
