import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

import logo from './img/devben.jpg';
import projectFiveTitleImage from './img/portfolioFive/header-image.png';
import image1 from './img/portfolioFive/image2.png';
import image2 from './img/portfolioFive/image1.png';

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
          Noix Photography App
          <strong>Built for photographers</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Personal Project
        </p>
        <img
          src={projectFiveTitleImage}
          alt="portfolio 5"
          className="intro__img"
        />
      </section>
      <div className="portfolio-item-individual">
        <p>
          This is a website I built for my personal use, as a blog to capture my
          travel stories.
          <br />
          <br />
          This website was build in Gatsby and allowed me to understand how I
          can build a blazing fast static site using React with Gatsby. This
          website also allowed me to use Contentful as a CMS to allow easy
          addition of new data to the site.
          <br />
          <br />
          Some additional tools I used are Mailchimp and FormSpree to facilitate
          email sending and subscription.
          <br />
          <br />
          The website can be visited at{' '}
          <a href="https://kopicoffeetravels.netlify.app/">
            https://kopicoffeetravels.netlify.app/
          </a>
        </p>
        <img
          src={projectFiveTitleImage}
          alt="portfolio details"
          className="portfolio-project-large-img"
        />
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
      </div>
      <Footer />
    </div>
  );
}
