import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

export default function Home(props) {
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
    if (props.location.state) {
      const { to } = props.location.state;
      document.getElementById(to).scrollIntoView();
    }
  }, [props]);

  return (
    <div>
      <header>
        <div className="logo">
          <img src={require("./img/devben.jpg")} alt="headerpic" />
        </div>
        <button className="nav-toggle" type="button" onClick={handleClick}>
          <span className="hamburger" />
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                My Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About me
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                My Work
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am
          <strong> Benjamin Lim</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          mobile / web dev
        </p>
        <img
          src={require("./img/dev-ben-01.jpg")}
          alt="nme smiling"
          className="intro__img"
        />
      </section>

      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
          <div className="service">
            <h3>Design + Development</h3>
            <p>
              <strong>MERN Stack:</strong> MongoDB, Express, React (Proficient),
              Node.js.
            </p>
            <p>
              <strong>Web development tools</strong>: Django (basic), HTML, CSS,
              SASS, JavaScript, TypeScript, jQuery, Firebase, GraphQL, Redux.
            </p>
            <p>
              <strong>Mobile App Development</strong>: React Native (Proficient)
              /Java/Kotlin (basic)
            </p>
          </div>

          <div className="service">
            <h3>Blockchain technology, Machine learning & Iot</h3>
            <p>
              Experience with Hyperledger Fabric & Composer, Ethereum web3.js
            </p>
            <p>Experience with Keras.</p>
            <p>Experience with MQTT, Arduino, Raspberry Pi.</p>
          </div>

          <div className="service">
            <h3>Photography</h3>
            <p>Avid traveller and photographer with a keen eye for details</p>
          </div>
        </div>

        <a href="#work" className="btn">
          My Work
        </a>
      </section>

      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Front end developer, blockchain enthusiast, photographer
        </p>

        <div className="about-me__body">
          <p>
            Always on the lookout for new front-end technologies to add to my
            tookit, and never afraid to learn new things.
          </p>
          <p>Self taught cryptocurrency investor.</p>
          <a
            href="https://www.youtube.com/watch?v=aaL4imb-rJ8"
            className="about-me-crypto__link"
          >
            How to buy Bitcoin in Singapore?
          </a>
          <p>
            I believe that the future of our world will be unimaginably advanced
            with the pace at which new technology is developing. I look forward
            to a future whereby constructs of the past will would have been
            replaced by better alternatives, and I hope to be part of this
            revolution.
          </p>
        </div>
        <img
          src={require("./img/dev-ben-02.jpg")}
          alt="me against bus"
          className="about-me__img"
        />
      </section>

      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">
          A selection of my range of work
        </p>

        <div className="portfolio">
          <Link to="/projects/1" className="portfolio__item">
            <img
              src={require("./img/portfolioOne/header-image.png")}
              alt="portfolio-1"
              className="portfolio__img"
            />
          </Link>

          <Link to="/projects/2" className="portfolio__item">
            <img
              src={require("./img/portfolioTwo/header-image.jpg")}
              alt="portfolio-2"
              className="portfolio__img"
            />
          </Link>
          <Link to="/projects/3" className="portfolio__item">
            <img
              src={require("./img/portfolioThree/header-image.jpg")}
              alt="portfolio-3"
              className="portfolio__img"
            />
          </Link>
          <Link to="/projects/4" className="portfolio__item">
            <img
              src={require("./img/portfolioFour/header-image.jpg")}
              alt="portfolio-4"
              className="portfolio__img"
            />
          </Link>
          <Link to="#!" className="portfolio__item-unavailable">
            <img
              src={require("./img/portfolio-05.jpg")}
              alt="portfolio-5"
              className="portfolio__img-unavailable"
            />
          </Link>
          <Link to="#!" className="portfolio__item-unavailable">
            <img
              src={require("./img/portfolio-06.jpg")}
              alt="portfolio-6"
              className="portfolio__img-unavailable"
            />
          </Link>
          <Link to="#!" className="portfolio__item-unavailable">
            <img
              src={require("./img/portfolio-07.jpg")}
              alt="portfolio-7"
              className="portfolio__img-unavailable"
            />
          </Link>
          <Link to="#!" className="portfolio__item-unavailable">
            <img
              src={require("./img/portfolio-08.jpg")}
              alt="portfolio-8"
              className="portfolio__img-unavailable"
            />
          </Link>
          <Link to="#!" className="portfolio__item-unavailable">
            <img
              src={require("./img/portfolio-09.jpg")}
              alt="portfolio-9"
              className="portfolio__img-unavailable"
            />
          </Link>
          <Link to="#!" className="portfolio__item-unavailable">
            <img
              src={require("./img/portfolio-10.jpg")}
              alt="portfolio-10"
              className="portfolio__img-unavailable"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
