import { type FC, type RefObject } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

import artsyLogo from "../assets/ARTSY.svg";

type NavPropsType = {
  ref: RefObject<HTMLElement | null>;
  onToggleNav: (type: "open" | "close") => void;
};

const Nav: FC<NavPropsType> = ({ ref: navRef, onToggleNav }) => {
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 h-full w-full -translate-x-full bg-white px-4 pt-6 transition duration-200 ease-linear lg:static lg:translate-x-0 lg:p-0"
    >
      <div className="flex items-center justify-between lg:hidden">
        <figure>
          <img src={artsyLogo} alt="Artsy Logo" className="flex items-center" />
        </figure>
        <button type="button" onClick={onToggleNav.bind(null, "close")}>
          <RiCloseLargeLine className="h-7 w-7" />
        </button>
      </div>
      <ul className="lg:center mt-16 space-y-8 text-2xl font-medium lg:mt-0 lg:flex lg:justify-center lg:space-y-0 lg:space-x-8">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Auctions</a>
        </li>
        <li>
          <a href="#">Marketplace</a>
        </li>
        <li>
          <a href="#">Drops</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
