import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

import logo from "./img/devben.jpg";
import projectFourTitleImage from "./img/portfolioFour/header-image.jpg";
import image1 from "./img/portfolioFour/image1.jpg";
import image2 from "./img/portfolioFour/image2.jpg";
import image3 from "./img/portfolioFour/image3.jpg";
import image4 from "./img/portfolioFour/image4.jpg";
import image5 from "./img/portfolioFour/image5.jpg";
import image6 from "./img/portfolioFour/image6.png";
import image7 from "./img/portfolioFour/image7.png";
import image8 from "./img/portfolioFour/image8.png";
import image9 from "./img/portfolioFour/image9.png";
import image10 from "./img/portfolioFour/image10.png";

export default function PortfolioItemOne() {
  const [showMenu, toggleMenu] = useState(false);
  const navLinks = document.querySelectorAll(".nav__link");

  const handleClick = () => {
    if (showMenu) {
      document.body.classList.remove("nav-open");
    } else {
      document.body.classList.add("nav-open");
    }
    toggleMenu(!showMenu);
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="top">
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button className="nav-toggle" type="button" onClick={handleClick}>
          <span className="hamburger" />
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to={{
                  pathname: "/",
                  state: {
                    to: "services"
                  }
                }}
              >
                My Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to={{
                  pathname: "/",
                  state: {
                    to: "about"
                  }
                }}
              >
                About Me{" "}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to={{
                  pathname: "/",
                  state: {
                    to: "work"
                  }
                }}
              >
                My Work
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="intro">
        <h1 className="section__title section__title--intro">
          Noix Photography App
          <strong>Built for photographers</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Personal Project
        </p>
        <img
          src={projectFourTitleImage}
          alt="portfolio 4"
          className="intro__img"
        />
      </section>
      <div className="portfolio-item-individual">
        <p>
          This mobile application was created with the intention of providing
          photographers with a user-friendly interface for displaying their
          work, which also allowed them to retain the image settings within the
          app.
          <br />
          <br />
          An interesting feature I conceptualized was a maps function, which
          tagged all popular images on the map. This allows travelers and
          photographers to know where are good spots nearby for taking great
          photos while they are on the mov.e
          <br />
          <br />
          This is an ongoing project, which was designed on Figma and allowed me
          to gain first-hand exposure to mobile design on Figma.
        </p>
        <img
          src={image1}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
        <img
          src={image2}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
        <img
          src={image3}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
        <img
          src={image4}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
        <img
          src={image5}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
        <img
          src={image6}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
        <img
          src={image7}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
        <img
          src={image8}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
        <img
          src={image9}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
        <img
          src={image10}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
      </div>
      <Footer />
    </div>
  );
}
