import { useEffect } from 'react';
import '../styles/Projects.css';
import odinBook from '../assets/projects/odin-book.png';
import odinBookLow from '../assets/projects/low/odin-book.png';
import messagingApp from '../assets/projects/messaging-app.png';
import messagingAppLow from '../assets/projects/low/messaging-app.png';
import wheresWaldo from '../assets/projects/wheres-waldo.png';
import wheresWaldoLow from '../assets/projects/low/wheres-waldo.png';
import blogApi from '../assets/projects/blog-api.png';
import blogApiLow from '../assets/projects/low/blog-api.png';
import membersOnly from '../assets/projects/members-only-club.png';
import membersOnlyLow from '../assets/projects/low/members-only-club.png';
import shoppingCart from '../assets/projects/shopping-cart.png';
import shoppingCartLow from '../assets/projects/low/shopping-cart.png';

function Projects() {
  useEffect(() => {
    const projects = document.querySelector(".project-card");

    const projectsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const title = document.querySelector('.projects h2');
        const works = document.querySelectorAll('.project-grid .project-card');
        const grid = document.querySelector('.project-grid');
        if (entry.isIntersecting) {
          title.classList.add('animation');
          grid.classList.add('animation');
          works.forEach(work => {
            work.classList.add('animation');
          });
        }
      });
    });

    projectsObserver.observe(projects);
  }, []);

  return (
    <section className="projects">
      <h2>My Work</h2>
      <div className="project-grid">
        <div className="project-card">
          <img 
            srcSet={odinBookLow + " 1370w, " + odinBook + " 1920w"}
            sizes="(max-width: 1200px) 1370px,
                    1920px"
            src={odinBook} alt="" />
          <div className="desc">
            <span>
              <h3>Odin Book</h3>
              <div>
                <a href="https://github.com/Engo092/Odin-book" target="_blank" rel='noreferrer'><i className="devicon-github-original"></i></a>
              </div>
            </span>
            <p>
              A basic Facebook clone. Implements post creation, comments and likes; friend requests, and
              logging-in with Facebook. Uses Node Express, React and MongoDB.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            srcSet={messagingAppLow + " 1370w, " + messagingApp + " 1920w"}
            sizes="(max-width: 1200px) 1370px,
                    1920px"
            src={messagingApp} alt="" />
          <div className="desc">
            <span>
              <h3>Messaging App</h3>
              <div>
                <a href="https://github.com/Engo092/messaging-app" target="_blank" rel='noreferrer'><i className="devicon-github-original"></i></a>
              </div>
            </span>
            <p>
              A website that allows the user to add and to message other users, as well as alter their own status. Made using Node Express, React and MongoDB.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            srcSet={wheresWaldoLow + " 1370w, " + wheresWaldo + " 1920w"}
            sizes="(max-width: 1200px) 1370px,
                    1920px"
            src={wheresWaldo} alt="" />
          <div className="desc">
            <span>
              <h3>Where's Waldo</h3>
              <div>
                <a href="https://github.com/Engo092/where-s-waldo-" target="_blank" rel='noreferrer'><i className="devicon-github-original"></i></a>
              </div>
            </span>
            <p>
              A simple Where's Waldo game, in which you must find all the given characters in the image, and compare your time with other users in the leaderboard.
              Uses Node.js and React.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img 
            srcSet={blogApiLow + " 1370w, " + blogApi + " 1920w"}
            sizes="(max-width: 1200px) 1370px,
                    1920px"
            src={blogApi} alt="" />
          <div className="desc">
            <span>
              <h3>Blog API</h3>
              <div>
                <a href="https://github.com/Engo092/blog-api" target="_blank" rel='noreferrer'><i className="devicon-github-original"></i></a>
              </div>
            </span>
            <p>
              A simple blog site that displays posts and comments. The blog creator has special privileges, which includes post creation and deletion. Made using Node.js and React.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            srcSet={membersOnlyLow + " 1370w, " + membersOnly + " 1920w"}
            sizes="(max-width: 1200px) 1370px,
                    1920px"
            src={membersOnly} alt="" />
          <div className="desc">
            <span>
              <h3 className='longName'>Members Only Club</h3>
              <div>
                <a href="https://github.com/Engo092/members-only" target="_blank" rel='noreferrer'><i className="devicon-github-original"></i></a>
              </div>
            </span>
            <p>
              A web app that simulates a private club. Users can log in to see and create messages, but they need a secret password to be able to see who sent each message. Uses Node.js.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            srcSet={shoppingCartLow + " 1370w, " + shoppingCart + " 1920w"}
            sizes="(max-width: 1200px) 1370px,
                    1920px"
            src={shoppingCart} alt="" />
          <div className="desc">
            <span>
              <h3>Shopping Cart</h3>
              <div>
                  <a href="https://github.com/Engo092/Shopping-Cart" target="_blank" rel='noreferrer'><i className="devicon-github-original"></i></a>
              </div>
            </span>
            <p>
              A website that simulates an online shop. You can click from a list of products and add them to your shopping cart, which is dynamically updated. Made with React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;