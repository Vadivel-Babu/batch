//@ts-nocheck
import { RxCross1 } from "react-icons/rx";
import { IoMdSunny, IoIosMoon } from "react-icons/io";
const Menu = ({ handleTheme, onOpen, theme }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0  ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-20 p-5`}
    >
      <button onClick={() => onOpen(false)}>
        <RxCross1 />
      </button>
      <ul className="flex flex-col mt-5 gap-4 text-lg">
        <li>
          <a
            href="#home"
            className="hover:text-red-500 transition-all hover:font-bold"
            onClick={() => onOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#aboutus"
            className="hover:text-red-500 transition-all  hover:font-bold"
            onClick={() => onOpen(false)}
          >
            About us
          </a>
        </li>
        <li>
          <a
            href="#price"
            className="hover:text-red-500 transition-all  hover:font-bold"
            onClick={() => onOpen(false)}
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#features"
            className="hover:text-red-500 transition-all  hover:font-bold"
            onClick={() => onOpen(false)}
          >
            features
          </a>
        </li>
      </ul>
      <div className="gap-3 flex flex-col mt-4 items-start">
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
    </div>
  );
};

export default Menu;
