import { motion } from "framer-motion";
import Testimonial from "../components/Testimonial";

const TestimonialSection = () => {
  return (
    <section
      id="aboutus"
      className="max-w-[1440px] mx-auto overflow-hidden p-2 flex flex-col  flex-wrap items-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="uppercase font-medium text-[18px] tracking-[1.6px]"
      >
        testimonial
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="sm:text-[35px] md:text-[48px] max-w-[450px] font-bold capitalize text-center"
      >
        what our users say about us?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-center flex-col lg:flex-row gap-5 lg:gap-32"
      >
        <div className="relative flex-1">
          <img
            src="./testimonial.png"
            className="lg:w-[700px] w-[450px] h-[450px] lg:h-[700px]"
            alt=""
          />
          <img
            src="./bggradient.png"
            className="absolute hidden md:flex top-[120px] z-[-1]"
            alt=""
          />
        </div>
        <Testimonial />
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
