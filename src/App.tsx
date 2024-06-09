//@ts-nocheck
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdvantageSection from "./sections/AdvantageSection";
import BannerSection from "./sections/BannerSection";
import CustomisedSection from "./sections/CustomisedSection";
import FaqSection from "./sections/FaqSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";
import TestimonialSection from "./sections/TestimonialSection";
import Menu from "./components/Menu";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <main className="font-clash overflow-x-hidden dark:bg-black dark:text-white">
      <Header handleTheme={handleTheme} theme={theme} onOpen={setIsOpen} />
      {isOpen && (
        <Menu onOpen={setIsOpen} handleTheme={handleTheme} theme={theme} />
      )}
      <HeroSection theme={theme} />
      <FeaturesSection />
      <AdvantageSection />
      <CustomisedSection />
      <TestimonialSection />
      <FaqSection />
      <BannerSection />
      <Footer />
    </main>
  );
}

export default App;
