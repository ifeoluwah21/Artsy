import { createFileRoute } from "@tanstack/react-router";

import productImg from "../../assets/product-3.jpg";
import { useState, type FC } from "react";

import { FiChevronDown, FiHeart } from "react-icons/fi";
import { LiaEthereum } from "react-icons/lia";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";

// @ts-expect-error: Ignore missing type declarations for CSS side effect import
import "swiper/css";
// @ts-expect-error: Ignore missing type declarations for CSS side-effect import
import "swiper/css/navigation";

export const Route = createFileRoute("/marketplace/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const [itemCount, setItemCount] = useState<number>(1);
  return (
    <section className="px-4 pt-6 lg:px-20 lg:pt-12">
      <h1>
        <span>Home/ Marketplace/ Editorials/</span>{" "}
        <span className="uppercase"> Boolean Egyptian</span>
      </h1>
      <div className="">
        <article className="my-6 space-y-6">
          <figure className="mx-auto w-9/10">
            <img
              src={productImg}
              alt={"Boolean Egpytian"}
              className="h-96 w-full object-cover"
            />
            <figcaption className="flex justify-between font-Barlow">
              <p className="text-base font-light uppercase">Boolean Egpytian</p>
              <p className="text-base font-semibold">$32.00</p>
            </figcaption>
          </figure>
          <div className="mx-auto w-9/10 space-y-4 font-light text-[#999EA5]">
            <p className="text-black">
              Creator : <span className="text-[#006CA2]">Ali Dawa</span>
            </p>
            <p>Made in Italy</p>
            <p>Total views : 1.7K</p>
            <div className="flex w-min items-center gap-x-2 text-2xl text-black">
              <button
                type="button"
                className="p-2"
                onClick={() => {
                  if (itemCount <= 1) return;
                  setItemCount((prev) => prev - 1);
                }}
              >
                -
              </button>
              <span>{itemCount}</span>
              <button
                type="button"
                className="p-2"
                onClick={() => {
                  setItemCount((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="flex w-min items-center gap-x-4">
              <button
                type="button"
                className="w-[180px] rounded-sm bg-black px-2 py-4 text-base text-white"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="rounded-sm border border-black p-4"
              >
                <FiHeart className="h-[25px] w-[27px] text-black" />
              </button>
            </div>
          </div>
          <div className="space-y-px">
            <details className="group font-light text-[#999EA5]">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-3 py-6 text-left text-black transition-all duration-200">
                <span className="font-normal">Description</span>
                <FiChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-3 py-3 text-[#666]">
                <p>
                  This stunning Boolean Egyptian artwork captures the essence of
                  ancient Egyptian design with a modern twist. Handcrafted in
                  Italy, this piece combines traditional craftsmanship with
                  contemporary aesthetics.
                </p>
              </div>
            </details>
            <details className="group font-light text-[#999EA5]">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-3 py-6 text-left text-black transition-all duration-200">
                <span className="font-normal">Listing</span>
                <FiChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-3 py-3 text-[#666]">
                <p>
                  This stunning Boolean Egyptian artwork captures the essence of
                  ancient Egyptian design with a modern twist. Handcrafted in
                  Italy, this piece combines traditional craftsmanship with
                  contemporary aesthetics.
                </p>
              </div>
            </details>
            <details className="group font-light text-[#999EA5]">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-3 py-6 text-left text-black transition-all duration-200">
                <span className="font-normal">Status</span>
                <FiChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-3 py-3 text-[#666]">
                <p>
                  This stunning Boolean Egyptian artwork captures the essence of
                  ancient Egyptian design with a modern twist. Handcrafted in
                  Italy, this piece combines traditional craftsmanship with
                  contemporary aesthetics.
                </p>
              </div>
            </details>
          </div>
        </article>
      </div>
      <section className="relative space-y-4">
        <h2 className="py-4 font-Exo text-2xl font-normal">
          More from this collection
        </h2>
        <Swiper
          className="relative"
          direction="horizontal"
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={"auto"}
        >
          <SwiperSlide>
            <figure className="border border-black p-3">
              <button type="button" className="ml-auto block pb-4 pl-4">
                <FiHeart className="h-[25px] w-[27px] text-black" />
              </button>
              <img src={productImg} alt="Boolean Egyptian" />
              <figcaption className="flex items-center justify-between pt-2.5 text-xl font-normal">
                <p>Sassy</p>
                <div className="flex items-center gap-x-3.5">
                  <LiaEthereum className="h-[30px] w-[30px]" />
                  <span>3.20</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="border border-black p-3">
              <button type="button" className="ml-auto block pb-4 pl-4">
                <FiHeart className="h-[25px] w-[27px] text-black" />
              </button>
              <img src={productImg} alt="Boolean Egyptian" />
              <figcaption className="flex items-center justify-between pt-2.5 text-xl font-normal">
                <p>Sassy</p>
                <div className="flex items-center gap-x-3.5">
                  <LiaEthereum className="h-[30px] w-[30px]" />
                  <span>3.20</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="border border-black p-3">
              <button type="button" className="ml-auto block pb-4 pl-4">
                <FiHeart className="h-[25px] w-[27px] text-black" />
              </button>
              <img src={productImg} alt="Boolean Egyptian" />
              <figcaption className="flex items-center justify-between pt-2.5 text-xl font-normal">
                <p>Sassy</p>
                <div className="flex items-center gap-x-3.5">
                  <LiaEthereum className="h-[30px] w-[30px]" />
                  <span>3.20</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="border border-black p-3">
              <button type="button" className="ml-auto block pb-4 pl-4">
                <FiHeart className="h-[25px] w-[27px] text-black" />
              </button>
              <img src={productImg} alt="Boolean Egyptian" />
              <figcaption className="flex items-center justify-between pt-2.5 text-xl font-normal">
                <p>Sassy</p>
                <div className="flex items-center gap-x-3.5">
                  <LiaEthereum className="h-[30px] w-[30px]" />
                  <span>3.20</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperNavButtons />
        </Swiper>
      </section>
    </section>
  );
}

const SwiperNavButtons: FC = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-1/2 z-2 flex w-full -translate-y-1/2">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="rounded-full border p-2.5"
      >
        <MdArrowBackIosNew className="h-[30px] w-[30px]" />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="ml-auto rounded-full border p-2.5"
      >
        <MdArrowForwardIos className="h-[30px] w-[30px]" />
      </button>
    </div>
  );
};
