import Image from "next/image";
import { ComponentProps, useState } from "react";
import { navLinks } from "./nav-links";
import Link from "next/link";

export type NavBarProps = {};

function NavStack(props: ComponentProps<"div">) {
  return (
    <div {...props}>
      {navLinks.map((navLink, i) => (
        <Link key={navLink.label} href={navLink.url}>
          {navLink.label}
        </Link>
      ))}
    </div>
  );
}

export default function NavBar() {
  return (
    <div>
      <Image src="/logo-black.png" alt="logo" width={90} height={90} />
      <NavStack />
    </div>
  );
}
