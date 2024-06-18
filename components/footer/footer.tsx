import Image from "next/image";
import Link from "next/link";

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <div>
      <div>
        <div>
          <div>
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
          <div>
            <Image src="/logo-black.png" alt="logo" width={90} height={90} />
            <p>© Copyright Katto Studios 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
