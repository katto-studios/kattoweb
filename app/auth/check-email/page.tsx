import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-[70vh]">
      <Image
        src="/img/dog.png"
        alt="Check your email"
        width={150}
        height={150}
      />
      <h1 className="text-3xl font-light">
        Check your email for a magic link! 🎩🔗
      </h1>
    </div>
  );
}
