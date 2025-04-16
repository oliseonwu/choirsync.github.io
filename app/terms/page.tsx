import Link from "next/link";
import { ArrowRight, FileMusic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Header } from "@/components/header";

export default function TermsPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-gray-50"
      suppressHydrationWarning
    >
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-neutral-500">Last Updated: Feb 25, 2025</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg">
              By accessing and using ChoirSync ("the App"), you agree to be
              bound by these Terms and Conditions. If you disagree with any part
              of these terms, you may not access the App.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              1. Acceptance of Terms 📝
            </h2>
            <p>
              These terms and conditions govern your use of our website and app;
              by using our website or app, you accept these terms and conditions
              in full. If you disagree with these terms and conditions or any
              part of these terms and conditions, you must not use our website
              or app.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              2. User Accounts 👤
            </h2>
            <ul>
              <li>You must have a valid Google account to use the App</li>
              <li>You must be a member of a registered choir group</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account
              </li>
              <li>
                You agree to provide accurate information about your choir
                membership
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              3. Content Usage 🎵
            </h2>
            <p>YouTube Integration:</p>
            <ul>
              <li>The App uses YouTube to host and play choir recordings</li>
              <li>Users must comply with YouTube's terms of service</li>
              <li>
                Users are responsible for the content they upload to YouTube
              </li>
              <li>
                The App only stores references to YouTube videos, not the videos
                themselves
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              4. User Responsibilities 📢
            </h2>
            <p>You agree to:</p>
            <ul>
              <li>Use the App only for legitimate choir-related activities</li>
              <li>Not share access to restricted choir content</li>
              <li>Respect the privacy of other choir members</li>
              <li>Not misuse or attempt to manipulate the App's features</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              5. Intellectual Property 📋
            </h2>
            <ul>
              <li>
                The App and its original content (excluding YouTube content) are
                the property of ChoirSync
              </li>
              <li>
                Choir recordings remain the property of their respective owners
              </li>
              <li>
                The App's design and functionality are protected by copyright
                and trademark laws
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              6. Privacy and Data 🔒
            </h2>
            <ul>
              <li>
                We collect and process data as outlined in our Privacy Policy
              </li>
              <li>We use secure methods to store user information</li>
              <li>We do not sell or share user data with third parties</li>
              <li>
                YouTube integration is subject to Google's privacy policies
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              7. Service Availability ⚡
            </h2>
            <p>We strive to provide uninterrupted service</p>
            <p>We may occasionally:</p>
            <ul>
              <li>Perform maintenance</li>
              <li>Update the App</li>
              <li>Modify features</li>
            </ul>
            <p>We are not liable for any temporary service interruptions</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              8. Termination ❌
            </h2>
            <p>We may terminate or suspend your account if you:</p>
            <ul>
              <li>Violate these terms</li>
              <li>Misuse the App</li>
              <li>Engage in unauthorized sharing of choir content</li>
              <li>Breach choir group guidelines</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              9. Changes to Terms 📝
            </h2>
            <ul>
              <li>We may modify these terms at any time</li>
              <li>
                Continued use of the App constitutes acceptance of new terms
              </li>
              <li>Users will be notified of significant changes</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              10. Disclaimer ⚠️
            </h2>
            <p>
              The App is provided "as is" without warranties of any kind, either
              express or implied.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              11. Contact Us 📬
            </h2>
            <p>
              For questions about these terms, please contact us at{" "}
              <a
                href="mailto:choirsync@gmail.com"
                className="text-neutral-800 underline"
              >
                choirsync@gmail.com
              </a>
            </p>

            <p className="mt-8">
              By using ChoirSync, you acknowledge that you have read,
              understood, and agree to these Terms and Conditions.
            </p>
          </div>
        </div>
      </main>

      <Footer showJoinWaitlist={false} />
    </div>
  );
}
