import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Kelowna Flooring Superstore — how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://www.kelownaflooringsuperstore.com/privacy",
  },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <h1 className="text-4xl font-black text-charcoal mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: April 10, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">1. Who We Are</h2>
            <p>
              Kelowna Flooring Superstore (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) operates
              the website at <strong>kelownaflooringsuperstore.com</strong>. We are located at Unit 16,
              830 McCurdy Place, Kelowna, BC V1X 8C8. You can reach us at{" "}
              <a href="mailto:kfssteam@gmail.com" className="text-primary hover:underline">
                kfssteam@gmail.com
              </a>{" "}
              or by phone at{" "}
              <a href="tel:2508607847" className="text-primary hover:underline">
                (250) 860-7847
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly when you:</p>
            <ul className="list-disc pl-6 space-y-1.5 mb-4">
              <li>Submit a free estimate request (name, address, phone, email, project details)</li>
              <li>Contact us through our contact form (name, email, message)</li>
              <li>Sign up for our email newsletter (email address)</li>
            </ul>
            <p>
              We also collect certain information automatically when you visit our website, including
              your IP address, browser type, pages visited, and time spent on pages. This is done
              through Google Analytics (see Section 4).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>To respond to your estimate requests and inquiries</li>
              <li>To send you promotional emails and flooring tips (only if you opted in)</li>
              <li>To improve our website based on how visitors use it</li>
              <li>To comply with applicable laws and regulations</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to third parties for their
              marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">4. Google Analytics</h2>
            <p>
              Our website uses Google Analytics, a web analytics service provided by Google LLC.
              Google Analytics uses cookies to collect anonymized information about how visitors use
              our site (pages visited, time on site, referring source, etc.). This data is transmitted
              to and stored by Google on servers in the United States.
            </p>
            <p className="mt-3">
              Google&rsquo;s use of this data is governed by the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Privacy Policy
              </a>
              . You can opt out of Google Analytics tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">5. Form Submissions (Formspree)</h2>
            <p>
              Our contact and estimate forms use Formspree to securely transmit your submitted
              information to our email. Formspree&rsquo;s privacy policy is available at{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                formspree.io/legal/privacy-policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">6. Room Visualizer (Roomvo)</h2>
            <p>
              Our website uses the Roomvo room visualization tool. If you use the visualizer and
              upload photos, those images are processed by Roomvo. Roomvo&rsquo;s privacy practices
              are governed by their own privacy policy available at roomvo.com.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">7. Cookies</h2>
            <p>
              We use cookies primarily through Google Analytics. These are small text files stored
              in your browser. You can control cookies through your browser settings — disabling
              them may affect some website functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">8. Data Retention</h2>
            <p>
              Form submissions (estimate requests, contact messages) are retained in our email inbox
              for as long as needed to respond to your inquiry and conduct business. Newsletter
              subscribers are retained until they unsubscribe.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">9. Your Rights (PIPEDA)</h2>
            <p>
              Under Canada&rsquo;s Personal Information Protection and Electronic Documents Act
              (PIPEDA), you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>Know what personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent for us to use your information (subject to legal requirements)</li>
              <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:kfssteam@gmail.com" className="text-primary hover:underline">
                kfssteam@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-charcoal mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated date at the top.
            </p>
          </div>

          <div className="bg-light rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-charcoal mb-2">Questions?</h2>
            <p className="text-sm">
              Contact us at{" "}
              <a href="mailto:kfssteam@gmail.com" className="text-primary hover:underline">
                kfssteam@gmail.com
              </a>{" "}
              or{" "}
              <a href="tel:2508607847" className="text-primary hover:underline">
                (250) 860-7847
              </a>
              . We&rsquo;re located at Unit 16, 830 McCurdy Place, Kelowna, BC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
