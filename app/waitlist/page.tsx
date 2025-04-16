"use client";
import {
  ArrowRight,
  FileMusic,
  MousePointerClick,
  Headphones,
  CircleCheck,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import { Header } from "@/components/header";
import { PhoneDisplay } from "@/components/ui/phone-display";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import Parse from "parse";

// Initialize Parse
const PARSE_APPLICATION_ID = "Yng6iR68L7QVCHeS47FzYNWD7KmzT8TnuqknrFzL";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "l7hO4JJh7RLfy8OQLEtTWfrS9HqBMacD20rOabpu";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    choirName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize Parse on the client side
  useEffect(() => {
    Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
    Parse.serverURL = PARSE_HOST_URL;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in your name and email");
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the cloud function directly from the client
      const result = await Parse.Cloud.run("submitWaitlistRequest", {
        fullName: formData.fullName,
        email: formData.email,
        choirName: formData.choirName,
      });
      toast.success(result.message, {
        style: { backgroundColor: "#F0FDF4", color: "#166534" },
        icon: <CircleCheck className="h-5 w-5 text-green-500" />,
      });
      setFormData({ fullName: "", email: "", choirName: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        style: { backgroundColor: "#FEF2F2", color: "#991B1B" },
        icon: <XCircle className="h-5 w-5 text-red-500" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" suppressHydrationWarning>
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6">
                Join the Waitlist.
              </h1>
              <p className="text-lg text-neutral-600">
                <span className="text-choir-brown">Be the first</span> to access
                and manage your choir's files in one place.
              </p>
            </div>

            <form
              className="space-y-4 max-w-md mx-auto md:mx-0"
              onSubmit={handleSubmit}
            >
              <div>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="h-12 rounded-md border-neutral-300"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="h-12 rounded-md border-neutral-300"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="choirName"
                  placeholder="Choir Name (Optional)"
                  className="h-12 rounded-md border-neutral-300"
                  value={formData.choirName}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-md gap-2 mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </Button>
              <p className="text-sm text-neutral-500 text-center pt-2">
                We'll notify you when ChoirSync is ready.
              </p>
            </form>
          </div>

          <div className="hidden md:flex justify-center">
            <PhoneDisplay />
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-24 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <FileMusic
                color="#BDA293"
                className="w-10 h-10 text-neutral-800"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">Find files easily.</h3>
            <p className="text-neutral-500">
              All your choir materials in one searchable place.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <MousePointerClick
                color="#BDA293"
                className="w-10 h-10 text-neutral-800"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">Easy to use</h3>
            <p className="text-neutral-500">
              Simple interface designed for choir directors and members.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Headphones
                color="#BDA293"
                className="w-10 h-10 text-neutral-800"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">Practice anywhere</h3>
            <p className="text-neutral-500">
              Access your music on any device, anytime.
            </p>
          </div>
        </div>
      </main>

      <Footer showJoinWaitlist={false} />
    </div>
  );
}
