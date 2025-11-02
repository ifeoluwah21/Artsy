import { type FC } from "react";
import bg from "../assets/overlay.jpg";

const Upcoming: FC = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#4693ED] from-10% via-[#79C2D2] via-30% to-[rgba(192,86,9,0.49)] to-90% px-8 py-10 text-white lg:px-20 lg:pb-24 xl:px-40">
      <h2 className="hidden pb-6 font-Inter text-4xl lg:block">
        See Upcoming Auctions and Exhibitions
      </h2>
      <div
        className="relative space-y-8 bg-cover bg-center bg-no-repeat p-6 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-x-8 lg:px-16 lg:pt-60 lg:pb-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 m-0 bg-black/40"></div>
        <h3 className="relative z-10 font-Exo text-3xl font-medium">
          MONALISA REDEFINED IN STYLE.
        </h3>
        <p className="relative z-10 lg:col-[1/2]">
          Start on : 08:00 GTS . Monday{" "}
        </p>
        <p className="relative z-10 max-w-[600px] font-Barlow text-base uppercase lg:col-[1/2]">
          Get exclusive viewing of contemporary art and connect with investors
          and auctioneers across the world bringing their highest and lowest
          bids.
        </p>
        <div className="relative z-10 inline-flex w-full justify-center space-x-8 lg:inline lg:place-self-center">
          <button type="button" className="ml-auto border-b-2 pb-2">
            See more
          </button>
          <button type="button" className="rounded-xl border-2 px-2 py-4">
            Set a reminder
          </button>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
