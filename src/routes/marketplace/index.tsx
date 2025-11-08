import { createFileRoute } from "@tanstack/react-router";
import ProductCard from "../../components/ProductCard";

import productImg from "../../assets/product-2.jpg";

const product = { name: "Boolean Egpytian", price: 21.0, img: productImg };

export const Route = createFileRoute("/marketplace/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="px-4 pt-6 lg:px-20 lg:pt-12">
      <h1>
        <span>Home/ Marketplace/</span> <span> Editorials</span>
      </h1>

      <div className="lg:grid lg:grid-cols-3">
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id={"one"}
        />
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id="two"
        />
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id="three"
        />
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id="four"
        />
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id="five"
        />
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id="six"
        />
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id="seven"
        />
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id="eight"
        />
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id="nine"
        />
        <ProductCard
          productImg={product.img}
          productName={product.name}
          productPrice={product.price}
          id="ten"
        />
      </div>
    </section>
  );
}
