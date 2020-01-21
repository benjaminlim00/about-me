import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

import logo from './img/devben.jpg';
import headerPic from './img/dev-ben-01.jpg';
import mainPic from './img/portfolio-details.jpg';

export default function PortfolioItem() {
  const [showMenu, toggleMenu] = useState(false);
  const navLinks = document.querySelectorAll('.nav__link');

  const handleClick = () => {
    if (showMenu) {
      console.log('closing');
      document.body.classList.remove('nav-open');
    } else {
      console.log('opening');
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
          <img src={logo} alt='headerpic' />
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
          The title
          <strong> of my project</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
          A short subtitle
        </p>
        <img src={headerPic} alt='portfolio 1' className='intro__img' />
      </section>

      <div className='portfolio-item-individual'>
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
        <img
          src={mainPic}
          alt='portfolio details'
          className='portfolio-project-img'
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et
          amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur
          incidunt?
        </p>
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
      </div>

      <Footer />
    </div>
  );
}
