import React from "react";
import "./Nav.css"
export default function Navabar() {
  const toggleNav = () => {
    const mobileNav = document.querySelector(".hamburger");
    const navbar = document.querySelector(".menubar");

    const toggleNav = () => {
      navbar.classList.toggle("active");
      mobileNav.classList.toggle("hamburger-active");
    };
    mobileNav.addEventListener("click", () => toggleNav());
  };
  return (
    <>
      <div>
        <nav>
          <div className="logo">
            <h1>Cryptonet</h1>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <div className="hamburger" onClick={() => toggleNav()}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </nav>
        <div className="menubar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
