import { motion } from "framer-motion";
import Feature from "../components/Feature";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="max-w-[1440px] mx-auto  p-2 flex flex-col lg:flex-row lg:justify-between flex-wrap items-center"
    >
      <img
        src="./Star2.svg"
        className="hidden lg:block absolute left-[20px] top-[1000px]"
        alt="star"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative flex-1"
      >
        <img src="./feature.png" className="h-[500px] lg:h-[750px]" alt="" />
        <img
          src="./featuregradient.png"
          className="absolute top-0 z-[-1]"
          alt=""
        />
      </motion.div>
      <Feature />
    </section>
  );
};

export default FeaturesSection;
