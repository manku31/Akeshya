import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <main className="mt-36"> 
    {/* px-56 */}
      <Hero />
      <Clients />
      <AboutPage />
      <ServicesPage />
      {/* <Process /> */}
      {/* <Features /> */}
      {/* <Contact /> */}
    </main>
  );
}
