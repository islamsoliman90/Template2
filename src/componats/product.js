import React from "react";
import ProductItem from "./product-item";

export default function product() {
  return (
    <div>
      <ul class="product-title list-unstyled d-flex justify-content-center ">
        <li className="px-2">wooden chair</li>
        <li className="px-2">plastic chair</li>
        <li className="px-2">study chair</li>
        <li>plastic chair</li>
      </ul>
      <div class="product-items ">
        <ProductItem img="chair1" img2="chair2" />
        <ProductItem img="chair3" img2="chair4" />
        <ProductItem img="chair5" img2="chair6" />
        <ProductItem img="chair1" img2="chair2" />
        <ProductItem img="chair3" img2="chair4" />
        <ProductItem img="chair5" img2="chair6" />
      </div>
      <div class="product-items padding-y"></div>
    </div>
  );
}
