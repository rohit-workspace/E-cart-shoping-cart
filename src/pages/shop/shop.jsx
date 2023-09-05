import React from "react";
import { Product } from "./product";
import "./shop.css";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
  const { product } = useContext(ShopContext);
  console.log("==>", product);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E-Cart</h1>
      </div>

      <div className="products">
        {product.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
