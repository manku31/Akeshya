import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <main className="mt-20">
      <Hero />
      <Clients />
      <AboutPage />
      {/* <Counts /> */}
      {/* <Services /> */}
      {/* <Process /> */}
      {/* <Features /> */}
      {/* <Contact /> */}
    </main>
  );
}
