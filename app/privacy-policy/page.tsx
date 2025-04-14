import Link from "next/link";
import { ArrowRight, FileMusic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-gray-50"
      suppressHydrationWarning
    >
      <header className="container mx-auto py-6 px-4 flex justify-between items-center bg-white">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md border flex items-center justify-center">
            <FileMusic className="w-5 h-5 text-neutral-700" />
          </div>
          <span className="text-xl font-medium text-neutral-800">
            ChoirSync
          </span>
        </Link>
        <div className="hidden md:block text-center text-neutral-500">
          Lets organize your
          <br />
          choir files.
        </div>
        <div className="hidden md:block">
          <Link href="/waitlist">
            <Button variant="outline" className="rounded-md px-4 gap-2">
              <ArrowRight className="w-4 h-4" />
              Join Waitlist
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-500">Last Updated: Feb 25, 2025</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg">
              Your privacy is important to us. It is ChoirSync's policy to
              respect your privacy regarding any information we may collect from
              you through our app and website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Information We Collect 📝
            </h2>
            <p>We collect the following information:</p>
            <ul>
              <li>Email address</li>
              <li>First and last name</li>
              <li>Choir group membership information</li>
              <li>YouTube video links/IDs for choir recordings</li>
              <li>App usage data</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we're
              collecting it and how it will be used.
            </p>
            <p>Your information is used to:</p>
            <ul>
              <li>Manage your choir membership</li>
              <li>Store and organize YouTube links to choir recordings</li>
              <li>Enable playback of choir recordings via YouTube</li>
              <li>Provide access to choir-specific content</li>
              <li>Improve app functionality and user experience</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Data Storage and Security 🔒
            </h2>
            <p>
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we'll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorized access, disclosure, copying, use or
              modification.
            </p>
            <p>
              We store only references to YouTube videos and basic user
              information using Parse Server infrastructure. The actual video
              content is hosted and managed by YouTube under their own privacy
              policy and terms of service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Third-Party Services 🤝
            </h2>
            <p>We integrate with the following services:</p>
            <ul>
              <li>Google Sign-In for authentication</li>
              <li>YouTube for video hosting and playback</li>
              <li>Parse Server for data storage</li>
            </ul>
            <p>
              Our app may link to external sites that are not operated by us.
              Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Video Content 🎬
            </h2>
            <ul>
              <li>We do not directly store or host any video recordings</li>
              <li>
                All recordings are hosted on YouTube under their privacy policy
              </li>
              <li>
                Users are responsible for their uploaded content on YouTube
              </li>
              <li>We only maintain references to these YouTube videos</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Your Rights ⚖️</h2>
            <p>
              You are free to refuse our request for your personal information,
              with the understanding that we may be unable to provide you with
              some of your desired services. Your continued use of our website
              will be regarded as acceptance of our practices around privacy and
              personal information.
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your data</li>
              <li>Control your notification preferences</li>
              <li>Remove YouTube video references from our system</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Data Retention 📋
            </h2>
            <p>
              We retain your data and YouTube video references as long as you
              maintain an active choir membership. Upon leaving a choir or
              deleting your account, your personal data and video references
              will be removed from our systems. Note that this does not affect
              the actual videos on YouTube.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us 📬</h2>
            <p>
              If you have questions about this privacy policy or your data,
              please contact us at{" "}
              <a
                href="mailto:choirsync@gmail.com"
                className="text-neutral-800 underline"
              >
                choirsync@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
