import { type FC } from "react";

import img_6 from "../assets/img-6.jpg";

const Upcoming: FC = () => {
  return (
    <section className="relative mt-12 h-[400px] overflow-hidden lg:h-[600px]">
      {/* Background image div */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img_6})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content (optional - can be added later) */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center text-white">
          <h2 className="font-Exo text-4xl font-bold lg:text-6xl">
            Upcoming Events
          </h2>
          <p className="mt-4 font-Barlow text-lg lg:text-2xl">
            Discover what's coming next
          </p>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
