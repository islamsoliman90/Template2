import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function descount() {
  return (
    <div className="descount d-flex flex-lg-row flex-column ">
      <div className="discount-desc position-relative p-3 p-lg-0  flex-grow-1 w-lg-50 w-100">
        <div className="top ps-5 position-relative">
          <FaQuoteLeft className="icon position-absolute start-0 top-0 fs-1 " />
          <h2 v="discount-title ps-3">penelope</h2>
          <span className="discount-subtitle ps-3">(marketing)</span>
        </div>
        <p className="mt-3 lh-lg text-capitalize fs-5">
          Discounts are reductions to a basic price of goods or services. They
          can occur anywhere in the distribution channel, modifying either the
          manufacturer's list price, the retail price, or the list price.There
          are many purposes for discounting, including; to move off-season
          stock,
        </p>
        <div className="bolletes text-center position-absolute  bottom-0 end-0 p-1 pe-3">
          <span className="d-inline-block  ms-3"></span>
          <span className="d-inline-block  ms-3"></span>
          <span className="d-inline-block  ms-3"></span>
        </div>
      </div>
      <div className="w-lg-50 w-100  d-flex  pt-lg-0 pt-3 ps-lg-3 h-100">
        <div className="discount-item w-50 me-3  position-relative overflow-hidden ">
          <img
            src="images/category-banner1.jpg"
            className="w-100 h-100 position-absolute top-0 start-0 "
            alt="dicount img"
          />
          <div className="discount-info position-absolute top-0 start-0 p-3">
            <h3>30% discount</h3>
            <h3>designing interior</h3>
          </div>
        </div>
        <div className="discount-item w-50   position-relative overflow-hidden ">
          <img
            src="images/category-banner2.jpg"
            className="w-100 h-100 position-absolute top-0 start-0 "
            alt="dicount img"
          />
          <div className="discount-info position-absolute top-0 start-0 p-3 ">
            <h3>30% discount</h3>
            <h3>designing interior</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default descount;
