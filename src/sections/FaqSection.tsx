import { motion } from "framer-motion";

const FaqSection = () => {
  return (
    <section
      id="price"
      className="max-w-[1340px] mx-auto lg:mt-10  p-5 flex flex-col relative items-center md:items-start flex-wrap "
    >
      <img
        src="./Star2.svg"
        className="hidden lg:block absolute top-[-120px] left-[-70px]"
        alt="star"
      />
      <img
        src="./Star.svg"
        className="hidden lg:block absolute left-[600px] top-[100px]"
        alt="star"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-orange uppercase font-medium track-[1.6px]"
      >
        Faq
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="font-bold text-[48px] capitalize max-w-[497px]"
      >
        Frequently asked questions
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap flex-row justify-center lg:justify-start gap-2 mt-4"
      >
        <div className="max-w-[535px] bg-orange text-white p-3 rounded-md">
          <h1 className="font-semibold text-[28px] capitalize">
            the best financial accounting app ever!
          </h1>
          <p className="font-medium text-[18px] capitalize">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className={`max-w-[535px]   p-3 rounded-md`}>
          <h1 className="font-semibold text-[28px] capitalize">
            the best financial accounting app ever!
          </h1>
          <p className="font-medium text-[18px] capitalize">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className={`max-w-[535px] p-3 rounded-md`}>
          <h1 className="font-semibold text-[28px] capitalize">
            the best financial accounting app ever!
          </h1>
          <p className="font-medium text-[18px] capitalize">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="max-w-[535px] bg-orange text-white p-3 rounded-md">
          <h1 className="font-semibold text-[28px] capitalize">
            the best financial accounting app ever!
          </h1>
          <p className="font-medium text-[18px] capitalize">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="max-w-[535px] bg-orange text-white p-3 rounded-md">
          <h1 className="font-semibold text-[28px] capitalize">
            the best financial accounting app ever!
          </h1>
          <p className="font-medium text-[18px] capitalize">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="max-w-[535px]   p-3 rounded-md">
          <h1 className="font-semibold text-[28px] capitalize">
            the best financial accounting app ever!
          </h1>
          <p className="font-medium text-[18px] capitalize">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSection;
