"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileMusic } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  tagline?: string;
  showWaitlistButton?: boolean;
}

export function Header({
  tagline = "Lets organize your\nchoir files.",
  showWaitlistButton = true,
}: HeaderProps) {
  return (
    <header className="container mx-auto py-6 px-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-md border flex items-center justify-center">
          <FileMusic className="w-5 h-5 text-choir-brown" />
        </div>
        <span className="text-xl font-medium text-neutral-800">
          ChoirSync
        </span>
      </Link>
      
      <div className="hidden md:block text-center text-neutral-500 whitespace-pre-line">
        {tagline}
      </div>
      
      {showWaitlistButton && (
        <div className="hidden md:block">
          <Link href="/waitlist">
            <Button variant="outline" className="rounded-md px-4 gap-2">
              <ArrowRight className="w-4 h-4" />
              Join Waitlist
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}