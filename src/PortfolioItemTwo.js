import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

import logo from './img/devben.jpg';
import projectTwoTitleImage from './img/portfolioTwo/header-image.jpg';
import image2 from './img/portfolioTwo/image1.jpg';
import image1 from './img/portfolioTwo/image2.jpg';
import image3 from './img/portfolioTwo/image3.jpg';
import image4 from './img/portfolioTwo/image4.jpg';
import image5 from './img/portfolioTwo/image5.jpg';

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
          Food Identification and Nutrition Calculator
          <strong>Hanyang University</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
          Exchange Programme Final Project
        </p>
        <img
          src={projectTwoTitleImage}
          alt='portfolio 1'
          className='intro__img'
        />
      </section>
      <div className='portfolio-item-individual'>
        <p>
          For details on the project and implementation methods, please click{' '}
          <a href='https://medium.com/@benjaminlpa1996/react-native-firebase-smart-food-recognition-app-a7bfc513aa8'>
            here.
          </a>
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
        <img
          src={image5}
          alt='portfolio details'
          className='portfolio-project-img'
        />
      </div>
      <Footer />
    </div>
  );
}
