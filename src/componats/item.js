import React, { Component } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function item(props) {
  {
    return (
      <div className="cateagory-item col-lg-3 col-md-6  mb-3 ">
        <img
          src="images/category-banner1.jpg"
          className="w-100"
          alt="cateimg"
        />
        <h4 className="cate-subtitle text-lowercase">{props.subtitle}</h4>
        <h3 className="cate-title text-capitalize fw-bold">{props.title}</h3>
        <FaAngleRight className="icon" />
      </div>
    );
  }
}
