import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

import logo from './img/devben.jpg';
import projectSixTitleImage from './img/portfolioSix/header-image.png';
import image1 from './img/portfolioSix/image1.png';
import image2 from './img/portfolioSix/image2.png';
import image3 from './img/portfolioSix/image3.png';
import image4 from './img/portfolioSix/image4.png';

export default function PortfolioItemOne() {
  const [showMenu, toggleMenu] = useState(false);
  const navLinks = document.querySelectorAll('.nav__link');

  const handleClick = () => {
    if (showMenu) {
      document.body.classList.remove('nav-open');
    } else {
      document.body.classList.add('nav-open');
    }
    toggleMenu(!showMenu);
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
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
                  pathname: '/',
                  state: {
                    to: 'services',
                  },
                }}
              >
                My Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to={{
                  pathname: '/',
                  state: {
                    to: 'about',
                  },
                }}
              >
                About Me{' '}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to={{
                  pathname: '/',
                  state: {
                    to: 'work',
                  },
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
          Bizsy.me
          <strong>Empowering local businesses</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Online directory
        </p>
        <img
          src={projectSixTitleImage}
          alt="portfolio 5"
          className="intro__img"
        />
      </section>
      <div className="portfolio-item-individual">
        <p>
          During the Covid pandemic period, a conversation with my mom sparked
          an idea in me to boost the outreach of local businesses in Singapore
          whom we felt were lacking the audience that they deserved. I thought
          of a platform where you can filter through individual unique
          home-grown / local businesses. Over the next few months, I spent many
          nights on that idea and achieved the goal to have one single platform
          where people can find the most interesting and undiscovered shops, be
          it shops selling cheesecakes, brownies, earrings, or even manicure
          services.
          <br />
          <br />
          The website provided me a good experience in providing users with good
          UI/UX as well as the development of responsive web design.
          <br />
          <br />
          The website can be visited at <a href="www.bizsy.me">www.bizsy.me</a>
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
      </div>
      <Footer />
    </div>
  );
}
