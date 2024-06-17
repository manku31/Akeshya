import AboutPage from "./about/page";
import Clients from "@/components/Clients";
import ContactPage from "./contact/page";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <main className="mt-36">
      <Hero />
      <Clients />
      <AboutPage />
      <ServicesPage />
      <Features />
      <ContactPage />
    </main>
  );
}
