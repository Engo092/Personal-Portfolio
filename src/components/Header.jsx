import aboutSvg from '../assets/svgs/header/about.svg';
import projectsSvg from '../assets/svgs/header/work.svg';
import contactSvg from '../assets/svgs/header/contact.svg';
import '../styles/Header.css';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

    const nav = document.querySelector("nav");

    nav.addEventListener("animationend", () => {
      document.getElementsByTagName('body')[0].style.overflow = 'visible';
    });

    const navButtons = document.querySelectorAll(".navButton");

    navButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        switch (e.target.id) {
          case "about":
            setTimeout(() => document.querySelector(".about").scrollIntoView({behavior: "smooth"}), 0);
            break;
          case "projects":
            setTimeout(() => document.querySelector(".projects").scrollIntoView({behavior: "smooth"}), 0);
            break;
          default:
            setTimeout(() => document.querySelector("footer").scrollIntoView({behavior: "smooth"}), 0);
            break;
        }
      });
    });
  }, []);

  return (
    <header>
      <nav>
        <button className="navButton" id="about"><img src={aboutSvg} alt="" className="navIcon" id="about"/>About</button>
        <button className="navButton" id="projects"><img src={projectsSvg} alt="" className="navIcon" id="projects"/>Projects</button>
        <button className="navButton" id="contact"><img src={contactSvg} alt="" className="navIcon" id="contact"/>Contact</button>
      </nav>
      <section className="introduction">
        <h1>Hello, I'm <span>Enzo Kusuki</span></h1>
        <p>A Brazil-based Full Stack web developer.</p>
      </section>
    </header>
  );
}

export default Header;