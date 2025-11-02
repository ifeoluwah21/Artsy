import { type FC } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

import img_5 from "../assets/img-5.jpg";
import avatar from "../assets/avatar.png";

type FeatureCardProps = {
  title: string;
  img: string;
  content: string;
};

const FeatureCardDetails: FeatureCardProps = {
  title: " The Boolean Egyptian",
  img: img_5,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor pur`,
};

const FeaturedCard: FC<FeatureCardProps> = ({ title, img, content }) => {
  return (
    <article className="space-y-6 border-0 border-t-[#333333] py-4 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-8 lg:border-t-[0.5px] lg:py-10">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="space-y-6">
        <h3 className="hidden font-Exo text-3xl font-medium lg:block">
          {title}
        </h3>
        <p className="font-Barlow font-normal">{content}</p>
        <figure className="flex items-center">
          <div className="inline-flex w-[175px]">
            <img
              src={avatar}
              alt=""
              className="h-[42px] w-[42px] rounded-full"
            />
            <img
              src={avatar}
              alt=""
              className="relative -left-4 h-[42px] w-[42px] rounded-full"
            />
            <img
              src={avatar}
              alt=""
              className="relative -left-8 h-[42px] w-[42px] rounded-full"
            />
            <img
              src={avatar}
              alt=""
              className="relative -left-12 h-[42px] w-[42px] rounded-full"
            />
            <img
              src={avatar}
              alt=""
              className="relative -left-16 h-[42px] w-[42px] rounded-full"
            />
          </div>
          <figcaption className="inline-block text-base font-semibold">
            64 major creators
          </figcaption>
          <button className="ml-auto hidden rounded-full border p-2 lg:block">
            <HiArrowLongRight className="h-10 w-10" />
          </button>
        </figure>
      </div>
    </article>
  );
};

const Featured: FC = () => {
  return (
    <section className="px-4 pt-6 lg:px-20 lg:pt-12">
      <h2 className="mb-10 font-Exo text-3xl font-bold">Featured Products</h2>
      <FeaturedCard {...FeatureCardDetails} />
      <FeaturedCard {...FeatureCardDetails} />
    </section>
  );
};

export default Featured;
