import Image from "next/image";

export type HeroProps = {};

export default function Hero(props: HeroProps) {
  return (
    <div>
      <div>
        <div>
          <div>
            <Image
              src="/img/dog.png"
              width={200}
              height={200}
              alt="dog in space"
            />
          </div>
          <h1>
            Artisans of the <span>&apos;digital&apos;</span> age
          </h1>
          <p>We hand craft user centric digital solutions</p>
        </div>
      </div>
    </div>
  );
}
