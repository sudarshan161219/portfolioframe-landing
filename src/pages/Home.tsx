import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import FeatureRail from "../components/FeatureRail/FeatureRail";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../components/Footer/Footer";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Portfolio Frame — a darkroom for screenshots and code",
    description:
      "Frame is a Chrome extension that turns raw screenshots and code into press-ready visuals. No account, no upload — everything stays on your device.",
    path: "/",
    image: "https://portfolioframe.com/og-image.png",
  });

  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <FeatureRail />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
