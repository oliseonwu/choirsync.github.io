"use client";

import React from "react";
import Image from "next/image";
import { FileMusic } from "lucide-react";

interface PhoneDisplayProps {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function PhoneDisplay({
  title = "ChoirSync",
  subtitle = "Organize your choir files",
  icon = (
    <FileMusic className="w-10 h-10 mx-auto text-choir-brown opacity-90" />
  ),
}: PhoneDisplayProps) {
  return (
    <div className="relative w-[280px] h-[560px]">
      {/* Shimmer effect layers */}
      <div className="absolute -inset-8 bg-gradient-to-r from-[#bda293]/10 via-[#d8c7bd]/15 to-[#bda293]/5 rounded-[60px] blur-lg opacity-90"></div>
      <div className="absolute -inset-4 bg-gradient-to-br from-[#bda293]/15 via-[#e5dbd5]/20 to-[#bda293]/15 rounded-[50px] blur-md opacity-40"></div>
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#bda293]/20 via-[#f0ebe8]/25 to-[#bda293]/20 rounded-[45px] blur-sm opacity-50"></div>
      <Image
        src="./IPhone2.svg"
        alt="iPhone mockup"
        fill
        priority
        className="object-contain"
      />
      <div className="absolute h-full w-full flex items-center justify-center">
        <div className="h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            {icon}
            <p className="text-lg font-normal">{title}</p>
            <p className="text-sm text-neutral-500">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
