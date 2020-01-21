import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaFacebook,
  //   FaEye,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <a href='mailto:benjaminlpa1996@gmail.com' className='footer__link'>
        benjaminlpa1996@gmail.com
      </a>
      <div className='social-icons'>
        <a href='https://www.linkedin.com/in/benjaminlimpingan/'>
          <FaLinkedin size='2.5rem' className='social-icons__item' />
        </a>

        {/* <Link to='#!'>
          <FaFacebook size='2.5rem' className='social-icons__item' />
        </Link> */}

        <a href='https://github.com/benjaminlim00'>
          <FaGithub size='2.5rem' className='social-icons__item' />
        </a>

        <a href='https://www.instagram.com/ben_shoots_street/?hl=en'>
          <FaInstagram size='2.5rem' className='social-icons__item' />
        </a>
      </div>
    </div>
  );
}
