import Image from "next/image";
import { Meteors } from "./meteors";
import { FlipWords } from "./flip-words";

export type HeroProps = {};

const BUZZWORDS = ["digital", "web3", "llm", "gen-ai", "AR/VR/XR"];

export default function Hero() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-900 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center p-8">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className="flex flex-col items-center gap-6">
          <Image
            className=" animate-spin-slow"
            src="/img/dog.png"
            width={150}
            height={150}
            alt="dog in space"
          />
          <h1 className="text-8xl text-white font-bold">
            artisans of the{" "}
            <span className="font-mono text-7xl">
              {"{'"}
              <FlipWords words={BUZZWORDS} />
              {"'}"}
            </span>{" "}
            age
          </h1>
          <p className="text-3xl text-blue-400 font-bold">
            We hand craft all sorts of digital solutions.
          </p>
        </div>

        <Meteors number={100} />
      </div>
    </>
  );
}
