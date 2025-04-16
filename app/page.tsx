"use client";
import {
  ArrowRight,
  FileSearch,
  MousePointerClick,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { PhoneDisplay } from "@/components/ui/phone-display";
import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6">
                Choir Files in
                <br />
                One Place.
              </h1>
              <p className="text-lg text-neutral-600">
                <span className="text-choir-brown">Easily </span>
                upload, access and manage your choir's files in one place.
              </p>
            </div>

            <div>
              <Link href="/waitlist">
                <Button className="h-12 rounded-md gap-2 px-6">
                  <ArrowRight className="w-4 h-4" />
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <PhoneDisplay />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-24 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <FileSearch className="w-10 h-10 text-choir-brown" />
            </div>
            <h3 className="text-xl font-medium mb-2">Find files easily.</h3>
            <p className="text-neutral-500">
              All your choir materials in one searchable place.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <MousePointerClick className="w-10 h-10 text-choir-brown" />
            </div>
            <h3 className="text-xl font-medium mb-2">Easy to use</h3>
            <p className="text-neutral-500">
              Simple interface designed for choir directors and members.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Headphones className="w-10 h-10 text-choir-brown" />
            </div>
            <h3 className="text-xl font-medium mb-2">Practice anywhere</h3>
            <p className="text-neutral-500">
              Access your music on any device, anytime.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
