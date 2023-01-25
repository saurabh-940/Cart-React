import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";

export default function Home() {
  const productList = [
    {
      name: "macbook",
      price: 999,
      imgSrc:
        "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",
      id: "macbook1",
      qty:1
    },
    {
      name: "Black Shoes",
      price: 1999,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260",
      id: "blackshoes1",
    },
  ];
  const dispatch = useDispatch();
  const addToCart = (options) => {
    dispatch({ type: "addToCart", payload: options });
    toast.success("Added to Cart");
    dispatch({ type: "calculatePrice" });
  };
  return (
    <>
      <div className="grid mt-5">
        {productList.map((i) => {
          const { name, imgSrc, price, id } = i;
          return (
            <ProductCard
              key={id}
              name={name}
              imgSrc={imgSrc}
              price={price}
              id={id}
              handler={addToCart}
            />
          );
        })}
      </div>
    </>
  );
}
