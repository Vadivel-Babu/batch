import { motion } from "framer-motion";

const Advantage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex-1 mt-5 lg:mt-0"
    >
      <h1 className="text-orange uppercase font-medium">Advantage</h1>
      <h2 className="font-bold sm:text-[35px] md:text-[48px] capitalize">
        why choose Uifry?
      </h2>

      <div className="flex items-center gap-2">
        <img src="./bell.svg" alt="bell" />
        <h1 className="text-[28px] font-semibold">clever notifications</h1>
      </div>
      <p className="mt-5 max-w-[535px]">
        Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
        blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
        nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
        suspendisse aliquam.
      </p>
    </motion.div>
  );
};

export default Advantage;
