import { motion } from "framer-motion";
import { MdMail, MdCall } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto overflow-hidden p-2 lg:py-10 mt-5 lg:mt-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="capitalize flex  md:flex-col lg:flex-row gap-5 lg:justify-evenly flex-wrap my-5"
      >
        <div>
          <div className="flex items-center gap-1">
            <img src="./Frame.png" className="w-6 h-6 " alt="logo" />
            <h1 className="text-2xl font-semibold">
              uifry <sup className="text-[8px]">TM</sup>{" "}
            </h1>
          </div>
          <div className="flex items-center gap-1 my-2">
            <MdMail className="text-orange text-[20px]" />
            <a
              href="mailto:help@frybix.com"
              className="hover:text-red-500 transition-all font-medium"
            >
              help@frybix.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <MdCall className="text-orange text-[20px]" />
            <a
              href="tel:+123456789"
              className="hover:text-red-500 transition-all font-medium"
            >
              +1 234 456 678 89
            </a>
          </div>
        </div>
        <div className="flex  sm:flex-col md:flex-row flex-wrap gap-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-[25px] md:text-[32px]">Links</h1>
            <a
              href="#home"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              Home
            </a>
            <a
              href="#aboutus"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              About Us
            </a>
            <a
              href="#price"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              Bookings
            </a>
            <a
              href="/"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-[25px] md:text-[32px]">Legal</h1>
            <a
              href="/"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              terms of use
            </a>
            <a
              href="/"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              privacy policy
            </a>
            <a
              href="/"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              cookie policy
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-[25px] md:text-[32px]">product</h1>
            <a
              href="/"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              take tour
            </a>
            <a
              href="/"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              live chat
            </a>
            <a
              href="/"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              reveiws
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-[25px] md:text-[32px]">
              Newsletter
            </h1>
            <a
              href="/"
              className="hover:text-red-500 transition-all font-medium text-[16px]"
            >
              Stay up to date
            </a>
            <div className="bg-white p-2">
              <input
                type="text"
                name=""
                className="p-2 outline-none"
                id=""
                placeholder="Your email"
              />
              <button className="px-5 py-2 bg-black text-white transition hover:bg-orange">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <hr />
      <p className="text-center font-medium mt-4">
        Copyright 2022 uifry.com all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
