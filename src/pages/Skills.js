import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function Skills() {
  const barStyle = { height: "20px" };

  return (
    <section class="section bg-gray-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6 pr-lg-5 mb-5 mb-lg-0">
            <div class="sm-title">
              <h6>Technical Skills</h6>
            </div>

            <div className="mb-3">
              <span>React</span>
              <ProgressBar now={95} label={`${95}%`} variant="success"/>
            </div>
            <div className="mb-3">
              <span>Nodejs/Express</span>
              <ProgressBar now={80} label={`${80}%`} variant="danger"/>
            </div>
            <div className="mb-3">
              <span>Spring</span>
              <ProgressBar now={70} label={`${70}%`} variant="warning"/>
            </div>
            <div className="mb-3">
              <span>Android Development</span>
              <ProgressBar now={90} label={`${90}%`} variant="info"/>
            </div>


          </div>
          <div class="col-lg-6 counter">
            <div class="sm-title">
              <h6>Languages</h6>
            </div>
            <div class="row">
              <div class="col-6 m-15px-tb">
                <div class="feature-box-3 media align-items-center">
                  <div class="icon percent">
                    <span class="count" data-to="100" data-speed="100">
                      90
                    </span>
                  </div>
                  <div class="media-body">
                    <h5>Java</h5>
                  </div>
                </div>
              </div>
              <div class="col-6 m-15px-tb">
                <div class="feature-box-3 media align-items-center">
                  <div class="icon percent">
                    <span class="count" data-to="70" data-speed="70">
                      9
                    </span>
                  </div>
                  <div class="media-body">
                    <h5>C/C++</h5>
                  </div>
                </div>
              </div>
              <div class="col-6 m-15px-tb">
                <div class="feature-box-3 media align-items-center">
                  <div class="icon percent">
                    <span class="count" data-to="90" data-speed="90">
                      80
                    </span>
                  </div>
                  <div class="media-body">
                    <h5>JavaScript</h5>
                  </div>
                </div>
              </div>
              <div class="col-6 m-15px-tb">
                <div class="feature-box-3 media align-items-center">
                  <div class="icon percent">
                    <span class="count" data-to="50" data-speed="50">
                      100
                    </span>
                  </div>
                  <div class="media-body">
                    <h5>SQL</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
