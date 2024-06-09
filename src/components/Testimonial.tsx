import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="flex-1 max-w-[440px] mt-5 lg:mt-0">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-[28px] font-semibold capitalize"
      >
        the best financial accounting app ever!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-3 lg:w-[535px] capitalize"
      >
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
        blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
        nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
        suspendisse aliquam.""
      </motion.p>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        src="./usersimg.png"
        alt=""
      />
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="capialize font-semibold text-[18px] mt-3"
      >
        nick jonas
      </motion.h2>
    </div>
  );
};

export default Testimonial;
