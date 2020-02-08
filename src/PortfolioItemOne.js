import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

import logo from './img/devben.jpg';
import projectOneTitleImage from './img/portfolioOne/header-image.png';
import image1 from './img/portfolioOne/image1.png';
import image2 from './img/portfolioOne/image2.png';
import image3 from './img/portfolioOne/image3.png';
import image4 from './img/portfolioOne/image4.png';
import image5 from './img/portfolioOne/image5.png';

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
          Ticket Request Handling
          <strong>Accenture</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
          SUTD Second Year Project
        </p>
        <img
          src={projectOneTitleImage}
          alt='portfolio 1'
          className='intro__img'
        />
      </section>
      <div className='portfolio-item-individual'>
        <p>
          Created web application for ticket requests handling using MERN stack
          (MongoDB, Express, React, Node). Worked with specific requirements
          issued by Accenture team to expedite company operations. Gained
          exposure to using GraphQL as a replacement to REST 4-month long
          project which promoted intensive app testing as well as detailed
          version control using Git
        </p>
        <img
          src={image1}
          alt='portfolio details'
          className='portfolio-project-large-img'
        />
        <img
          src={image2}
          alt='portfolio details'
          className='portfolio-project-large-img'
        />
        <img
          src={image3}
          alt='portfolio details'
          className='portfolio-project-large-img'
        />
        <img
          src={image4}
          alt='portfolio details'
          className='portfolio-project-large-img'
        />
        <img
          src={image5}
          alt='portfolio details'
          className='portfolio-project-large-img'
        />
      </div>
      <Footer />
    </div>
  );
}
