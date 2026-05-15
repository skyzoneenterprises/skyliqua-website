import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Skyliqua",
  description: "Terms of service for Skyliqua water purifiers",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm mb-8" style={{ color: "rgba(12,15,13,0.5)" }}>
          Last updated: May 15, 2026
        </p>

        <div className="prose prose-lg max-w-none" style={{ color: "rgba(12,15,13,0.7)" }}>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              1. Agreement to Terms
            </h2>
            <p>
              By accessing and using the Skyliqua website and services, you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, you may not use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              2. Use License
            </h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Skyliqua's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              3. Disclaimer
            </h2>
            <p>
              The materials on Skyliqua's website are provided on an 'as is' basis. Skyliqua makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              4. Limitations
            </h2>
            <p>
              In no event shall Skyliqua or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Skyliqua's website, even if Skyliqua or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              5. Accuracy of Materials
            </h2>
            <p>
              The materials appearing on Skyliqua's website could include technical, typographical, or photographic errors. Skyliqua does not warrant that any of the materials on the website are accurate, complete, or current. Skyliqua may make changes to the materials contained on the website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              6. Links
            </h2>
            <p>
              Skyliqua has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Skyliqua of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              7. Modifications
            </h2>
            <p>
              Skyliqua may revise these Terms of Service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              8. Governing Law
            </h2>
            <p>
              The materials appearing on Skyliqua's website are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              9. Product Warranty
            </h2>
            <p className="mb-4">
              Skyliqua water purifiers come with a manufacturer's warranty covering defects in materials and workmanship. The warranty period and terms are detailed in the product documentation provided at the time of purchase. This warranty does not cover damage from misuse, neglect, or normal wear and tear.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              10. Service Agreement
            </h2>
            <p>
              Skyliqua provides lifetime service support for our products. Service terms, including service costs and procedures, are detailed in the service agreement provided with your purchase. Regular maintenance and filter replacements may be subject to applicable charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#0C0F0D" }}>
              11. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg" style={{ background: "rgba(11,171,166,0.05)" }}>
              <p className="font-semibold mb-2" style={{ color: "#0BABA6" }}>Skyliqua Customer Support</p>
              <p>Email: support@skyliqua.com</p>
              <p>Phone: +91 9483548853</p>
              <p>Address: 123 Pure Water Avenue, Tech Park, City — 400001</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
