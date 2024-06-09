//@ts-nocheck
import { IoMdSunny, IoIosMoon } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  handleTheme: () => void;
  theme: string;
};

const Header = ({
  handleTheme,
  theme,
  onOpen,
}: {
  handleTheme: Props;
  theme: Props;
}) => {
  return (
    <header id="home">
      <nav className="flex max-w-[1440px] mx-auto justify-between items-center px-2 py-8">
        <div className="flex gap-20 items-center">
          <div className="flex items-center gap-1">
            <img src="./Frame.png" className="w-6 h-6 " alt="logo" />
            <h1 className="text-2xl font-semibold">
              uifry <sup className="text-[10px]">TM</sup>{" "}
            </h1>
          </div>
          <ul className="hidden md:flex gap-4 text-lg">
            <li>
              <a
                href="#home"
                className="hover:text-red-500 transition-all hover:font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                className="hover:text-red-500 transition-all  hover:font-bold"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#price"
                className="hover:text-red-500 transition-all  hover:font-bold"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-red-500 transition-all  hover:font-bold"
              >
                features
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => handleTheme()}
            className="px-3 py-3 bg-black rounded-full text-white transition  hover:bg-orange"
          >
            {theme === "light" ? <IoIosMoon /> : <IoMdSunny />}
          </button>
          <button className="px-5 py-2 bg-black text-white transition hover:bg-orange">
            Download
          </button>
        </div>
        <button
          onClick={() => onOpen(true)}
          className="inline-block text-[20px] md:hidden"
        >
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
