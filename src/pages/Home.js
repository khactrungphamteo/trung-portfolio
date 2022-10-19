import React from "react";
import { BsLinkedin } from "react-icons/bs";

var homePagePic = require("../assets/img/homepage-pic.png");

export default function Home() {
  return (
    <section id="home" class="home-banner">
      <div class="hb-avatar d-flex align-items-end justify-content-center">
        <img src={homePagePic} alt="" title="" />
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-end full-screen">
          <div class="col-lg-6">
            <div class="hb-typo">
              <h6>Hello</h6>
              <h1>My name is Trung Nguyen</h1>
              <h2>
                I am an Entry-level Software Engineer<span id="type-it"></span>
              </h2>
              <div class="nav justify-content-center justify-content-lg-start">
                <div class="col-md-3">Connect with me</div>
                <div class="col-md-3">
                  <a
                    href={"https://www.linkedin.com/in/trung-nguyen-3956b616a/"}
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
