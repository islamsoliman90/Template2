import React from "react";
import ProductItem from "./product-item";
import { Col, Row, Container } from "react-bootstrap";

export default function product() {
  return (
    <div>
      <ul className="product-title list-unstyled d-flex justify-content-center ">
        <li className="px-2">wooden chair</li>
        <li className="px-2">plastic chair</li>
        <li className="px-2">study chair</li>
        <li>plastic chair</li>
      </ul>
      <div className="product-items pt-3">
        <Container>
          <Row>
            <Col md={4}>
              <ProductItem img="chair1" img2="chair2" active="2" />
              <ProductItem img="chair3" img2="chair4" active="1" />
            </Col>
            <Col md={4}>
              <ProductItem img="chair5" img2="chair6" active="3" />
              <ProductItem img="chair1" img2="chair2" active="5" />
            </Col>
            <Col md={4}>
              <ProductItem img="chair3" img2="chair4" active="4" />
              <ProductItem img="chair5" img2="chair6" active="5" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="product-items padding-y"></div>
    </div>
  );
}
