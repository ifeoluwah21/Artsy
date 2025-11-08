import { Link } from "@tanstack/react-router";
import { type FC } from "react";

type ProductPropsType = {
  productImg: string;
  productPrice: number;
  productName: string;
  id: string;
};

const ProductCard: FC<ProductPropsType> = ({
  productImg,
  productName,
  productPrice,
  id,
}) => {
  return (
    <article className="my-6 lg:w-max lg:rounded-2xl lg:bg-white lg:px-2 lg:py-4 lg:shadow-[0_34px_68px_0_#D9E1F45C]">
      <Link to={`/marketplace/` + id}>
        <figure className="mx-auto w-9/10 lg:mx-0 lg:w-max">
          <img
            src={productImg}
            alt={productName}
            className="h-96 w-full object-cover lg:h-[280px] lg:w-[241px] lg:rounded-lg"
          />
          <figcaption className="flex justify-between font-Barlow lg:flex-col lg:gap-y-6 lg:py-3">
            <p className="text-base font-light uppercase lg:text-xl">
              {productName}
            </p>
            <p className="text-base font-semibold lg:text-2xl">
              ${productPrice.toFixed(2)}
            </p>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default ProductCard;
