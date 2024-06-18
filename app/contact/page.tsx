import Image from "next/image";
import Link from "next/link";

export type ContactPageProps = {};

export default function ContactPage(props: ContactPageProps) {
  return (
    <div className="min-h-[50vh] p-8 flex flex-col items-center justify-center gap-3">
      <h1 className="font-medium text-5xl">let&apos;s get in touch.</h1>
      <div className="flex flex-row gap-6 items-center">
        <Image src="/img/collab.png" alt="logo" width={200} height={200} />
        <div>
          <Link href={"mailto:contact@katto.studio"}>
            <p>
              email us at <b>ryan@katto.studio</b>
            </p>
          </Link>
          <p>address: we are fully remote 🚀 (for now)</p>
        </div>
      </div>
    </div>
  );
}
