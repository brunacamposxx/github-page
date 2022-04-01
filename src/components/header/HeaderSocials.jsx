import React from 'react';
import {
  BsLinkedin, BsTwitter, BsInstagram, BsStackOverflow,
} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/brunacamposxx/" target="_blank" rel="noreferrer" aria-label="Linkedin"><BsLinkedin /></a>
      <a href="https://github.com/brunacamposxx" target="_blank" rel="noreferrer" aria-label="Github"><FaGithub /></a>
      <a href="https://stackoverflow.com/users/14421916/92brunacampos" target="_blank" rel="noreferrer" aria-label="StackOverflow"><BsStackOverflow /></a>
      <a href="https://www.codewars.com/users/92brunacampos" target="_blank" rel="noreferrer" aria-label="CodeWars"><SiCodewars /></a>
      <a href="https://twitter.com/92brunacampos" target="_blank" rel="noreferrer" aria-label="Twitter"><BsTwitter /></a>
      <a href="https://instagram.com/brunacamposxx" target="_blank" rel="noreferrer" aria-label="Instagram"><BsInstagram /></a>
    </div>
  );
}

export default HeaderSocials;
