import React from "react";
import { Col, Row, Container } from "react-bootstrap";
export default function details() {
  return (
    <section class="details py-4">
      <Container>
        <Row>
          <Col lg={4}>
            <div class="details-img h-100 position-relative">
              <img
                src="images/banner.PNG"
                alt="img banner"
                className="img w-100"
              />
              <img
                class="details-img-overlay position-absolute start-50 top-50"
                src="images/play.png"
                alt="img play"
              />
            </div>
          </Col>
          <Col lg={8} className="desc-content">
            <div class="details-desc py-1 w-100 position-relative">
              <div class="top position-relative ">
                <div class="date position-absolute start-0 ps-3 d-none d-md-block ">
                  <h1 class="icon ">28</h1>
                  <span class="details-subtitle">february 2018</span>
                </div>
                <h2 class="details-title  p-3 m-3 text-center text-md-end   text-lg-cnter  ">
                  Discounts are reductions to a basic price
                </h2>
              </div>
              <p className="p-3">
                Discounts are reductions to a basic price of goods or services.
                They can occur anywhere in the distribution channel, modifying
                either the manufacturer's list price, the retail price, or the
                list price.There are many purposes for discounting, including;
                to move off-season stock, Discounts are reductions to a basic
                price of goods or services. They can occur anywhere in the
              </p>
              <div class="bolletes">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
