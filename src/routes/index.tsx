import { createFileRoute } from "@tanstack/react-router";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import Upcoming from "../components/Upcoming";
import { HiArrowLongRight } from "react-icons/hi2";
import About from "../components/About";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <About />
      <Carousel />
      <Featured />
      <Upcoming />
      <div>
        <ul className="py-24 text-2xl">
          <li className="flex items-center border-t border-b px-8 py-6">
            Explore marketplace
            <button className="ml-auto rounded-full border p-2">
              <HiArrowLongRight className="h-10 w-10" />
            </button>
          </li>
          <li className="flex items-center border-b px-8 py-6">
            See auctions
            <button className="ml-auto rounded-full border p-2">
              <HiArrowLongRight className="h-10 w-10" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
