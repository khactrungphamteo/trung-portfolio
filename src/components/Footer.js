import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer class="footer white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 m-10px-tb">
            <div class="nav justify-content-center justify-content-md-start">
              <a href={"https://www.linkedin.com/in/trung-nguyen-3956b616a/"} target="_blank"><BsLinkedin /></a>
              <a href={"https://github.com/khactrungphamteo"} target="_blank"><BsGithub /></a>
            </div>
          </div>
          <div class="col-md-6 m-10px-tb text-center text-md-right">
            <p>© 2022 copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
