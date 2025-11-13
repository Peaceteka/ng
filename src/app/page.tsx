import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Integrations from "@/components/sections/Integrations";
import ChannelsSection from "@/components/sections/ChannelsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Pricing from "@/components/sections/Pricing";
import GettingStartedSection from "@/components/sections/GettingStartedSection";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-gray-900">
      <main className="w-full">
        <Hero />
        <ChannelsSection />
        <GettingStartedSection />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <Features />
        <Integrations />
      </main>
    </div>
  );
}
