"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer({
  showJoinWaitlist = true,
}: {
  showJoinWaitlist?: boolean;
}) {
  return (
    <footer className="container mx-auto py-8 px-4 text-center">
      {showJoinWaitlist && (
        <Link href="/waitlist">
          <Button variant="outline" className="rounded-md px-6 gap-2">
            <ArrowRight className="w-4 h-4" />
            Join Waitlist
          </Button>
        </Link>
      )}
      <div className="flex justify-center gap-6 mt-6 mb-2">
        <Link
          href="/privacy"
          className="text-sm text-neutral-500 hover:text-neutral-800"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-sm text-neutral-500 hover:text-neutral-800"
        >
          Terms & Conditions
        </Link>
      </div>
      <p className="text-sm text-neutral-500 mt-4">
        © {2025} ChoirSync. All rights reserved.
      </p>
    </footer>
  );
}
