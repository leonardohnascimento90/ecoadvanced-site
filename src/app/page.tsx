import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { Rental } from "@/components/home/Rental";
import { Services } from "@/components/home/Services";
import { WhyChoose } from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Projects />
      <Rental />
      <Contact />
    </>
  );
}