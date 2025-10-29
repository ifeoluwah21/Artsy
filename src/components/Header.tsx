import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { TbGardenCart } from "react-icons/tb";
import { useRef, type FC } from "react";

import artsyLogo from "../assets/ARTSY.svg";

import Nav from "./Nav";

const Header: FC = () => {
  const navRef = useRef<HTMLElement>(null);
  function onToggleNavHandler(type: "open" | "close") {
    if (type === "open") {
      navRef.current?.classList.add("show");
    } else {
      navRef.current?.classList.remove("show");
    }
  }
  return (
    <header className="flex items-center justify-between px-4 pt-6 lg:px-16 lg:pt-12">
      <button
        type="button"
        className="lg:hidden"
        onClick={onToggleNavHandler.bind(null, "open")}
      >
        <RxHamburgerMenu className="h-7 w-7" />
      </button>
      <figure>
        <img src={artsyLogo} alt="Artsy Logo" />
      </figure>
      <Nav ref={navRef} onToggleNav={onToggleNavHandler} />
      <div className="flex space-x-4">
        <button type="button">
          <FiSearch className="h-7 w-7" />
        </button>
        <button type="button">
          <TbGardenCart className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
