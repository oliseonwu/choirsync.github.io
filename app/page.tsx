import {
  ArrowRight,
  FileMusic,
  MousePointerClick,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" suppressHydrationWarning>
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md border flex items-center justify-center">
            <FileMusic className="w-5 h-5 text-choir-brown" />
          </div>
          <span className="text-xl font-medium text-neutral-800">
            ChoirSync
          </span>
        </div>
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
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
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
            <div className="relative w-[280px] h-[560px]">
              <div className="absolute inset-0 border-[12px] border-black rounded-[40px] bg-white overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[32px] bg-black"></div>
                <div className="pt-[32px] p-4 h-full">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <FileMusic className="w-10 h-10 mx-auto text-choir-brown opacity-90" />
                      <p className="text-lg font-normal">ChoirSync</p>
                      <p className="text-sm text-neutral-500">
                        Organize your choir files
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-24 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <FileMusic className="w-10 h-10 text-choir-brown" />
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
