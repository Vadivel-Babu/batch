import { motion } from "framer-motion";
import Customize from "../components/Customize";

const CustomisedSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto overflow-hidden p-2 flex flex-col lg:flex-row lg:justify-between flex-wrap items-center">
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
          src="./card.png"
          className="hidden lg:flex absolute left-[230px] bottom-[50%]"
          alt=""
        />
        <img
          src="./custamize.png"
          className=" hidden md:flex lg:w-[700px] w-[500px] h-[500px] lg:h-[700px]"
          alt=""
        />
        <img
          src="./featuregradient.png"
          className="absolute hidden md:flex top-[100px] right-[30px] z-[-1]"
          alt=""
        />
      </motion.div>
      <Customize />
    </section>
  );
};

export default CustomisedSection;
