/* eslint-disable max-len */
import React from 'react';
import './about.css';
import { IoMdSchool } from 'react-icons/io';
import { AiFillFolderOpen } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
import ME from '../../assets/foto_perfil.png';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <IoMdSchool className="about__icon" />
              <h5>Education</h5>
              <small>01/2022 BS | Computer Science</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Software Developer Intern | Iteris</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Portfolio</h5>
              <small>+30 Projects</small>
            </article>
          </div>
          <p>
            Im Bruna Campos and Im a girl from Rio de Janeiro, Brazil. Currently living in Novo Hamburgo/RS, south of the country.
            🔭 Full Stack Web Development graduated from Trybe and freshman at Computer Science at Descomplica.
            ✨ I think about technology as a bridge to connect people. My goal as a developer is to help build solutions through technology that make the future a fairer, sustainable, humanized place with respect for diversity.
          </p>
          <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
