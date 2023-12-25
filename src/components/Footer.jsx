import { useEffect } from 'react';
import '../styles/Footer.css';

function Footer() {
  useEffect(() => {
    const footer = document.querySelector("footer");

    const footerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const title = document.querySelector('footer h2');
        const paragraph = document.querySelector('footer p');
        const contact = document.querySelector('footer > span');
        if (entry.isIntersecting) {
          title.classList.add('animation');
          paragraph.classList.add('animation');
          contact.classList.add('animation');
        }
      });
    });

    footerObserver.observe(footer);
  }, []);

  return (
    <footer>
      <h2>Contact Me!</h2>
      <p>
        Please get in touch if you have an opportunity, a project idea for us to
        work together, or even if you just want to chat, I'm open for anything.
      </p>
      <span className="contact-info">
        <p>
          São Paulo, Brazil
          <br/><br/>
          +55 (15) 99796-5858
          <br/>
          enzokusuki@gmail.com
        </p>
        <span className="contact-logos">
          <a href="https://github.com/Engo092" target="_blank" rel='noreferrer'><i className="devicon-github-original"></i></a>
          <a href="https://www.linkedin.com/in/enzo-kusuki-098245217/" target="_blank" rel='noreferrer'><i className="devicon-linkedin-plain"></i></a>
        </span>
      </span>
    </footer>
  );
}

export default Footer;