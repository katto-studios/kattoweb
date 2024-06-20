import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center page-container space-y-4">
      <Image
        src="/img/dog.png"
        alt="Check your email"
        width={150}
        height={150}
      />
      <h1 className="text-3xl font-light">
        Check your email for a magic link! 🎩🔗
      </h1>
      <p className="text-lg font-medium text-slate-500">
        It might end up in your junk/spam folder
      </p>
    </div>
  );
}
