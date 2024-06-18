import Hero from "../components/home/Hero";
import Services from "../components/home/Services";

export type HomePageProps = {};

export default function HomePage(props: HomePageProps) {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
}
