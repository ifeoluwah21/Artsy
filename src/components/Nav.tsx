import { type FC, type RefObject } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

import artsyLogo from "../assets/ARTSY.svg";
import { Link } from "@tanstack/react-router";

type NavPropsType = {
  ref: RefObject<HTMLElement | null>;
  onToggleNav: (type: "open" | "close") => void;
};

const Nav: FC<NavPropsType> = ({ ref: navRef, onToggleNav }) => {
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-2 h-full w-full -translate-x-full bg-white px-4 pt-6 transition duration-200 ease-linear lg:static lg:translate-x-0 lg:p-0"
    >
      <div className="flex items-center justify-between lg:hidden">
        <figure>
          <img src={artsyLogo} alt="Artsy Logo" className="flex items-center" />
        </figure>
        <button type="button" onClick={onToggleNav.bind(null, "close")}>
          <RiCloseLargeLine className="h-7 w-7" />
        </button>
      </div>
      <ul className="lg:center mt-16 space-y-8 text-2xl font-medium lg:mt-0 lg:flex lg:justify-center lg:space-y-0 lg:space-x-8 lg:font-normal">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auctions">Auctions</Link>
        </li>
        <li>
          <Link to="/marketplace">Marketplace</Link>
        </li>
        <li>
          <Link to="/drops">Drops</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
