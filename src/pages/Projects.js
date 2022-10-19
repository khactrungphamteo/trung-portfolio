import React from "react";

var project1 = require("../assets/img/fullstack-ecommerce.png");
var project2 = require("../assets/img/flashy.png");
var project3 = require("../assets/img/extreme-landing.png");

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="row .gx-5 justify-content-center section-title">
          <div className="col-lg-7 text-center">
            <h2>My Projects</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-lg-4 my-1">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={project1} title="" alt="" />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-info-in">
                  <h5>Skill</h5>
                  <span>Website design</span>
                </div>
                <a className="gallery-link" href={"https://github.com/khactrungphamteo/Full-stack-Furniture-Ecommerce"} target="_blank">
                  <span></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 my-1">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={project2} width="200" height="400" title="" alt="" />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-info-in">
                  <h5>Skill</h5>
                  <span>Android Development</span>
                </div>
                <a className="gallery-link" href={"https://github.com/khactrungphamteo/Flashy"} target="_blank">
                  <span></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 my-1">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={project3} title="" alt="" />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-info-in">
                  <h5>Skill</h5>
                  <span>Game Development</span>
                </div>
                <a className="gallery-link" href={"https://github.com/khactrungphamteo/Extreme-Landing"} target="_blank">
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
