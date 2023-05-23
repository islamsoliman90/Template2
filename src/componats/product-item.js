import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaStar,
} from "react-icons/fa";

export default function productItem(props) {
  {
    return (
      <div class="product-item  ">
        <div class="product-img d-flex justify-content-center ">
          <img
            src={`images/${props.img}.jpg`}
            className="d-block w-75"
            alt="chair img"
          />
          <div class="product-overlay d-flex justify-content-center">
            <img
              src={`images/${props.img2}.jpg`}
              className="d-block w-75"
              alt="chair img"
            />
            <ul class="list-unstyle d-flex w-25 justify-content-center pe-4">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <FaStar className="active" />
          <FaStar className="active" />
          <FaStar className="active" />
          <FaStar className="fa-star-o" />
          <FaStar className="fa-star-o" />
        </div>
        <div class="product-info text-center">
          <span>product item</span>
          <h3>$108.6</h3>
        </div>
      </div>
    );
  }
}
