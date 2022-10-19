import React from "react";

var profilePic = require('../assets/img/profile-pic.png');

export default function About() {
  return (
    <section id="about" class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 my-3 my-lg-0">
            <div class="about-text">
              <h2>My name is Trung Nguyen</h2>
              <p>
                I am a Computer Science senior and aspiring Full-stack Software Developer. My interests span from Web Development with React and Express/Spring Boot to Android Development and Game Development with Unity. 
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-img">
              <img src={profilePic} title="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
