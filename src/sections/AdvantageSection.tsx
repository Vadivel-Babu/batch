import { motion } from "framer-motion";
import Advantage from "../components/Advantage";

const AdvantageSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto overflow-hidden p-2 flex flex-col lg:flex-row-reverse lg:justify-between flex-wrap items-center">
      <img
        src="./Star2.svg"
        className="hidden lg:block absolute right-[20px] top-[1800px]"
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
        <img
          src="./advantage.png"
          className=" hidden md:flex lg:w-[700px] w-[500px] h-[500px] lg:h-[700px]"
          alt=""
        />
        <img
          src="./featuregradient.png"
          className="absolute hidden md:flex top-0 z-[-1]"
          alt=""
        />
        <img
          src="./OnHold.png"
          className="absolute hidden md:flex  sm:top-[180px] sm:right-[80px] lg:top-[280px] lg:right-[140px]"
          alt="hold"
        />
      </motion.div>
      <Advantage />
    </section>
  );
};

export default AdvantageSection;
