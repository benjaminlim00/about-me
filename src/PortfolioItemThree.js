import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

import logo from './img/devben.jpg';
import projectThreeTitleImage from './img/portfolioThree/header-image.jpg';
import image2 from './img/portfolioThree/image1.jpg';
import image1 from './img/portfolioThree/image2.jpg';
import image3 from './img/portfolioThree/image3.jpg';
import image4 from './img/portfolioThree/image4.jpg';
import demo from './img/portfolioThree/demo.gif';

export default function PortfolioItemTwp() {
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

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id='top'>
      <header>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <button className='nav-toggle' type='button' onClick={handleClick}>
          <span className='hamburger' />
        </button>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link to='/' className='nav__link'>
                Home
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                className='nav__link'
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
            <li className='nav__item'>
              <Link
                className='nav__link'
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
            <li className='nav__item'>
              <Link
                className='nav__link'
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
      <section className='intro'>
        <h1 className='section__title section__title--intro'>
          Smart User Verification
          <strong>CIMB</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
          CIMB Bank Hackathon Finals
        </p>
        <img
          src={projectThreeTitleImage}
          alt='portfolio 1'
          className='intro__img'
        />
      </section>
      <div className='portfolio-item-individual'>
        <p>
          This application was made during the finals of CIMB hosted hackathon
          with the challenge statement of creating an innovative method of user
          verification methods. With competitors from all over South-east Asia,
          we had 24 hours to come up with an innovative idea and prototype
          within 24 hours to allow secure financial transactions. For the
          hackathon, I created this prototype which combined the use of Telegram
          bots together with an native android app which made use of gestures as
          a flexible and secure option for identity verification.
        </p>
        <img
          src={image1}
          alt='portfolio details'
          className='portfolio-project-img'
        />
        <img
          src={image2}
          alt='portfolio details'
          className='portfolio-project-img'
        />
        <img
          src={image3}
          alt='portfolio details'
          className='portfolio-project-img'
        />
        <img
          src={image4}
          alt='portfolio details'
          className='portfolio-project-img'
        />
        <p>
          Below is a video demostration of how the application only allows for
          access when the user inputs the gesture that he/she registered with.
        </p>
        <img
          src={demo}
          alt='portfolio details'
          className='portfolio-project-img'
        />
      </div>
      <Footer />
    </div>
  );
}
