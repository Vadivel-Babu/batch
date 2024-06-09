import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";

const BannerSection = () => {
  return (
    <section className="max-w-[1440px] relative mx-auto p-2 lg:py-20 mt-10">
      <img
        src="./bggradient.png"
        className="absolute z-[-1] top-[-80px] left-[-130px]"
        alt="gradient"
      />
      <img
        src="./Star2.svg"
        className="hidden lg:block absolute left-0 top-[190px]"
        alt="star"
      />
      <img
        src="./Star.svg"
        className="hidden lg:block absolute right-0 top-[10px]"
        alt="star"
      />
      <div className="bg-[url('banner.png')] max-w-[1300px] mx-auto h-[550px] bg-no-repeat bg-cover lg:bg-center bg-center p-10">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="sm:text-[35px] md:text-[48px] font-bold capitalize "
          >
            ready to get started?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.7, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[18px] my-4"
          >
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.8, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="px-5 py-3 text-[15px] lg:text-[20px] flex items-center gap-2 bg-white text-black transition hover:bg-orange hover:text-white"
          >
            Download App <FaApple />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
