import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/drink_app.jpeg';
import IMG2 from '../../assets/food_app.png';
import IMG3 from '../../assets/wallet.png';

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="drink delivery app" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/brunacamposxx/frontend-recipes-app" className="btn" target="_blank" rel="noreferrer">Github</a>
          <a href="https://github.com/brunacamposxx/frontend-recipes-app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="food delivery app" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/brunacamposxx/frontend-recipes-app" className="btn" target="_blank" rel="noreferrer">Github</a>
          <a href="https://github.com/brunacamposxx/frontend-recipes-app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="wallet app" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/brunacamposxx/frontend-recipes-app" className="btn" target="_blank" rel="noreferrer">Github</a>
          <a href="https://github.com/brunacamposxx/frontend-recipes-app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
