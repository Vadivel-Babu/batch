import { motion } from "framer-motion";

const Feature = () => {
  const images = ["diamond.png", "cube.png", "cube-04.png"];
  return (
    <div className="relative">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-orange uppercase font-medium"
      >
        features
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="font-bold sm:text-[35px] md:text-[48px] capitalize my-2"
      >
        uifry premium
      </motion.h2>
      <img
        src="./bggradient.png"
        className="absolute right-[-350px] top-2"
        alt=""
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((image, i) => (
          <div key={i} className="my-3">
            <div className="flex gap-2 items-center">
              <img src={`./${image}`} alt="" />
              <h2 className="text-[18px] font-semibold capitalize">
                budgeting intervals
              </h2>
            </div>
            <p className="font-medium text-[18px] max-w-[638px]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Feature;
