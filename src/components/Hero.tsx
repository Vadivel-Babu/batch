import { LuMoveRight } from "react-icons/lu";
import { MdOutlinePlayCircle } from "react-icons/md";
const Hero = ({ theme }: { theme: string }) => {
  return (
    <div className="relative">
      <img
        src="./bggradient.png"
        className="absolute top-[-110px] z-[-1] left-[100px]"
        alt=""
      />

      <h1 className="font-bold text-[45px] xl:text-[64px] max-w-[618px]">
        Make The Best Financial Decisions
      </h1>
      <p className="text-[18px] max-w-[638px]">
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </p>
      <div className="mt-5 flex items-center flex-wrap gap-3 text-[18px]">
        <button className="p-3  bg-black flex items-center gap-5  text-white transition  hover:bg-orange">
          Get Started <LuMoveRight className="text-xl" />
        </button>
        <button
          className={`p-3  flex items-center gap-5 ${
            theme === "light" ? "text-black" : " text-white"
          }  hover:text-white transition  hover:bg-orange`}
        >
          <MdOutlinePlayCircle className="text-xl" />
          Watch Video
        </button>
      </div>
      <div className="mt-8">
        <img src="./ribbon.png" alt="ribbon" />
      </div>
    </div>
  );
};

export default Hero;
