import { motion } from "framer-motion";
import Hero from "../components/Hero";
import HeroImages from "../components/HeroImages";

const HeroSection = ({ theme }: { theme: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-[1440px] relative mx-auto mt-10 p-2 flex gap-5 justify-center lg:justify-start flex-wrap"
    >
      <img
        src="./Star.svg"
        className="hidden lg:block absolute right-0 top-[-50px]"
        alt="star"
      />
      <img
        src="./Star2.svg"
        className="hidden lg:block absolute left-[-20px] top-[-50px]"
        alt="star"
      />
      <img
        src="./Star2.svg"
        className="hidden lg:block absolute left-[80px] bottom-[350px]"
        alt="star"
      />
      <Hero theme={theme} />
      <HeroImages />
    </motion.section>
  );
};

export default HeroSection;
