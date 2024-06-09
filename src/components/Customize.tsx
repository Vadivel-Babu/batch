import { motion } from "framer-motion";
import Diamond from "../uicomponents/Diamond";

const Customize = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="flex-1 my-5  lg:mt-0 relative"
    >
      <img
        src="./Star2.svg"
        className="hidden lg:block absolute left-[-100px] top-[-220px]"
        alt="star"
      />
      <img
        src="./Star.svg"
        className="hidden lg:block absolute right-[300px] bottom-[-230px]"
        alt="star"
      />
      <div className="flex items-center gap-2">
        <img src="./diamond.svg" alt="diamond" />
        <h1 className="text-[28px] font-semibold">fully customizable</h1>
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

export default Customize;
