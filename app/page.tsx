import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import Features from "@/components/Features";
import ContactPage from "./contact/page";

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
