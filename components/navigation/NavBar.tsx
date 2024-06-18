"use client";

import Image from "next/image";
import { ComponentProps, useMemo } from "react";
import { navLinks } from "./nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowScrollPositions } from "../../utils/use-scroll-position";
import { cn } from "../../utils/cn";

export type NavBarProps = {};

function NavStack(props: ComponentProps<"div">) {
  return (
    <div className="flex flex-row gap-8" {...props}>
      {navLinks.map((navLink, i) => (
        <Link
          className="font-medium hover:text-slate-400"
          key={navLink.label}
          href={navLink.url}
        >
          {navLink.label}
        </Link>
      ))}
    </div>
  );
}

function NavContent() {
  return (
    <>
      <Image src="/logo-black.png" alt="logo" width={90} height={90} />
      <NavStack />
    </>
  );
}

function HeroNavBar(props: ComponentProps<"div">) {
  const { scrollY } = useWindowScrollPositions();
  const isAtTop = useMemo(() => scrollY < 10, [scrollY]);

  return (
    <div
      className={cn(
        "fixed w-screen z-10 transition-all duration-300 ease-in-out shadow-sm border-b",
        isAtTop
          ? "bg-transparent text-white shadow-transparent border-transparent"
          : "bg-white text-black"
      )}
    >
      <div
        className={`container mx-auto flex flex-row justify-between p-8`}
        {...props}
      >
        <Image
          src="/logo-white.svg"
          className={cn(isAtTop ? "brightness-100" : "brightness-0")}
          alt="logo"
          width={90}
          height={90}
        />
        <NavStack />
      </div>
    </div>
  );
}

export default function NavBar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <HeroNavBar>
        <NavContent />
      </HeroNavBar>
    );
  }

  return (
    <div className="bg-white shadow-sm border-b sticky z-10	top-0">
      <div className="container mx-auto flex flex-row justify-between p-8">
        <NavContent />
      </div>
    </div>
  );
}
