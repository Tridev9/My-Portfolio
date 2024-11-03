import "./portfolio.css";

import IMG1 from "../../assets/Electronic ecommerce Website.png";
import IMG2 from "../../assets/College forms.png";
import IMG3 from "../../assets/Birthday wish website.png";
import IMG4 from "../../assets/Happy birthday wishes.png";
import IMG5 from "../../assets/Bakery smile .png";
import IMG6 from "../../assets/Feb14 .png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Ecommerce  Website with React.js",
      img: IMG1,
      description:
        "An Ecommerce website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://proshop-7lhm.onrender.com",
      github: "https://github.com/Tridev9/Proshop",
    },
    {
      id: 2,
      title: "College automation forms",
      img: IMG2,
      description:
        "A personal website assembled for a College. Firebase is the basis of the website assembled as a full stack",
      technologies: "HTML | CSS | JavaScript ",
      link: "https://tridev9.github.io/College-home/",
      github: "https://github.com/Tridev9/College-home",
    },
    {
      id: 3,
      title: "Birthday Wish website",
      img: IMG3,
      description: "A Birthday wish website for spl once in our life. The website is mainly functionally developed with JavaScript",
      technologies: "HTML | CSS | JavaScript",
      link: "https://tridev9.github.io/Birthday/",
      github: "https://github.com/Tridev9/Birthday",
    },
    {
      id: 4,
      title: "Birthday Wish website",
      img: IMG4,
      description:
        "A Birthday wish website for spl once in our life. The website is mainly functionally developed with JavaScript",
      technologies: "Html | CSS | JavaScript ",
      link: "",
      github: "",
    },
    {
      id: 5,
      title: "Bakery website",
      img: IMG5,
      description:
        "For when you need a fast Order management, Dashboard.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "",
      github: "https://github.com/Tridev9/Smile-Dream-Cakes",
    },
    {
      id: 6,
      title: "Feb-14",
      img: IMG6,
      description:
        "Different way of expresing feeling to the spl one in life...",
      technologies: "Html | Scss | Javascript",
      link: "https://tridev9.github.io/Feb-14/",
      github: "https://github.com/Tridev9/Feb-14",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
