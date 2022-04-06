import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/drink_app.jpeg';
import IMG2 from '../../assets/food_app.png';
import IMG3 from '../../assets/wallet.png';
import IMG4 from '../../assets/trivia_quiz.png';
import IMG5 from '../../assets/e-commerce.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'drink delivery app',
    github: 'https://github.com/brunacamposxx/frontend-recipes-app',
    demo: 'https://github.com/brunacamposxx/frontend-recipes-app',
  },
  {
    id: 2,
    image: IMG2,
    title: 'food delivery app',
    github: 'https://github.com/brunacamposxx/frontend-recipes-app',
    demo: 'https://github.com/brunacamposxx/frontend-recipes-app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'wallet delivery app',
    github: 'https://github.com/brunacamposxx/frontend-recipes-app',
    demo: 'https://github.com/brunacamposxx/frontend-recipes-app',
  },
  {
    id: 4,
    image: IMG4,
    title: 'trivia delivery app',
    github: 'https://github.com/brunacamposxx/frontend-recipes-app',
    demo: 'https://github.com/brunacamposxx/frontend-recipes-app',
  },
  {
    id: 5,
    image: IMG5,
    title: 'e-commerce delivery app',
    github: 'https://github.com/brunacamposxx/frontend-recipes-app',
    demo: 'https://github.com/brunacamposxx/frontend-recipes-app',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({
            id, image, title, github, demo,
          }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>

          ))
        }
      </div>
    </section>
  );
}

export default Portfolio;
