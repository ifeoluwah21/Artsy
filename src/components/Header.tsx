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
    <header className="px-4 pt-6 lg:px-20 lg:pt-12">
      <div className="flex items-center justify-between">
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
      </div>
      <section className="mt-12 space-y-8">
        <h1 className="max-w-5xl text-center font-DM text-3xl lg:mx-auto lg:text-[64px]">
          Photography is poetry and beautiful untold stories
        </h1>
        <p className="max-w-[964px] text-center text-3xl lg:mx-auto">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
        <figure></figure>
      </section>
    </header>
  );
};

export default Header;
