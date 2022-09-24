import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

import "../css/css/components/Navbar.css";
function Navbar() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  //toggle menu
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <Link to="/"><a class="navbar-brand h-nav" href="#">
          Başak Aktaş
        </a></Link> 
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav ">
            <li class="nav-item  ">
              <Link to="/">
                <a class="nav-link" href="#">
                  Ana sayfa <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Biyografi">
                <a class="nav-link">Biyografi</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Hizmetler">
                <a class="nav-link" href="">
                  Hizmetler
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Egitimlerim">
                <a class="nav-link" href="#">
                  Eğitimlerim
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Urunlerim">
                <a class="nav-link" href="#">
                  Ürünler
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Blog"><a class="nav-link" href="#">
                Blog
              </a></Link> 
            </li>
            <li class="nav-item">
              <Link to="/Iletisim">
                <a class="nav-link" href="#">
                  İletişim
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Girisyap">
                {" "}
                <a class="nav-link active">Giriş Yap</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Uyeol">
                {" "}
                <a class="nav-link active">Kayıt Ol</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
