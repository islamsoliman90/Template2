import React, { Component } from "react";

export default function sectionHead(props) {
  {
    return (
      <section className="section-header py-5 d-flex align-items-center  flex-column  text-center">
        <h1 className="h2 text-capitalize">{props.title}</h1>
        <span className=" line-section "></span>
      </section>
    );
  }
}
