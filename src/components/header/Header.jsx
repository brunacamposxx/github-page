import React from 'react';
import './header.css';
import CTA from './CTA';
import profile from '../../assets/profile-pic.png';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I&apos;m</h5>
        <h1>Bruna Campos</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={profile} alt="bruna" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
