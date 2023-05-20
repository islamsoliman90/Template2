import React, { Component } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function item(props) {
  {
    return (
      <div class="cateagory-item col-lg-4 col-md-6 ">
        <img src="images/category-banner1.jpg" alt="cateimg" />
        <h4 class="cate-subtitle text-lowercase">{props.subtitle}</h4>
        <h3 class="cate-title text-capitalize fw-bold">{props.title}</h3>
        <FaAngleRight />
      </div>
    );
  }
}
