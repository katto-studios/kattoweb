import Image from "next/image";
import Link from "next/link";

export type ContactPageProps = {};

export default function ContactPage(props: ContactPageProps) {
  return (
    <div>
      <div>
        <div>
          <Image src="/logo-black.png" alt="logo" width={140} height={90} />
          <div>
            <Link href={"mailto:contact@katto.studio"}>
              <p>
                email us at <b>contact@katto.studio</b>
              </p>
            </Link>
            <p>address: we are fully remote 🚀 (for now)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
