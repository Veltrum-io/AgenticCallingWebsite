import Ambient from "@/components/Ambient";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VoicesDemo from "@/components/VoicesDemo";
import Features from "@/components/Features";
import IndustryTabs from "@/components/IndustryTabs";
import Analytics from "@/components/Analytics";
import Enterprise from "@/components/Enterprise";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Ambient />
      <Navbar />
      <main>
        <Hero />
        <VoicesDemo />
        <Features />
        <IndustryTabs />
        <Analytics />
        <Enterprise />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
