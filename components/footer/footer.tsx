"use client";

import Image from "next/image";
import Link from "next/link";

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <div className="bg-slate-700 text-slate-300 px-8 py-12">
      <div className="container mx-auto flex flex-col gap-8">
        <Image src="/logo-white.svg" width="100" height="50" alt="logo" />
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-2.5 text-lg py-4">
            <p className="text-white">Pages</p>
            <Link href={"/"}>
              <p>Home</p>
            </Link>
            <Link href={"/gallery"}>
              <p>Gallery</p>
            </Link>
            <Link href={"/contact"}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-between border-t border-t-slate-600 py-4 text-slate-400">
          <p>
            🚀 powered by{" "}
            <Link className="text-slate-300" href="https://ui.aceternity.com">
              aceternity ui
            </Link>{" "}
            and{" "}
            <Link className="text-slate-300" href="https://vercel.com">
              vercel
            </Link>
          </p>
          <p className="text-xs">
            <br />© Copyright Katto Studios LLP 2024 🇸🇬
          </p>
        </div>
      </div>
    </div>
  );
}
