import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaStar,
} from "react-icons/fa";

export default function productItem(props) {
  let star = [];
  let active = props.active;
  for (let i = 0; i < 5; i++) {
    if (active > 0) {
      star.push(<FaStar key={i} className="active" />);
      active--;
    } else {
      star.push(<FaStar key={i} className="fa-star-o" />);
    }
  }
  return (
    <div className="product-item w-100  ">
      <div className="product-img d-flex justify-content-center position-relative">
        <img
          src={`images/${props.img}.jpg`}
          className="d-block w-75 "
          alt="chair img"
        />
        <div className="product-overlay w-100 d-flex justify-content-center position-absolute top-0 start-0 ">
          <img
            src={`images/${props.img2}.jpg`}
            className="d-block w-75"
            alt="chair img"
          />
          <ul className="list-unstyle d-flex w-25 justify-content-center pe-4 position-absolute top-50 start-50">
            <li className="me-1 p-1">
              <FaFacebook />
            </li>
            <li className="me-1 p-1">
              <FaTwitter />
            </li>
            <li className="me-1 p-1">
              <FaLinkedin />
            </li>
            <li className="me-1 p-1">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
      <div className="starContainer d-flex justify-content-center my-2">
        {star.map((e) => e)}
      </div>
      <div className="product-info text-center my-1">
        <span className="d-block my-1">product item</span>
        <h3>$108.6</h3>
      </div>
    </div>
  );
}
