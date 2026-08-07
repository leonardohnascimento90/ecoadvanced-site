import { About } from "@/components/home/About";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyChoose } from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
    </>
  );
}