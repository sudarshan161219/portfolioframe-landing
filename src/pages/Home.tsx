import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import FeatureRail from "../components/FeatureRail/FeatureRail";
import Pricing from "../components/Pricing/Pricing";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import { usePageMeta } from "../hooks/usePageMeta";
import { useLocale } from "../i18n/LocaleContext";

export default function Home() {
  const { locale, dict } = useLocale();

  usePageMeta({
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    path: "/",
    locale,
    image: "https://portfolioframe.com/og-image.png",
  });

  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <FeatureRail />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
