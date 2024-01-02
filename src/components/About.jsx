import { useEffect } from 'react';
import '../styles/About.css';

function About() {
  useEffect(() => {
    const about = document.querySelector(".about p");

    const aboutObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const title = document.querySelector('.about h2');
        const paragraph = document.querySelector('.about p');
        const logos = document.querySelector('.about .logos');
        if (entry.isIntersecting) {
          title.classList.add('animation');
          paragraph.classList.add('animation');
          logos.classList.add('animation');
        }
      });
    });

    aboutObserver.observe(about);
  }, []);
  
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>Hello World! I am Enzo Kusuki, a Full Stack web developer based in São Paulo, Brazil.
        <br/><br/>
        Ever since I was a kid, I have always had an affinity with technologies and
        computer-related topics. So much so that I decided to start programming in 2020,
        during the pandemic, after reflecting upon what I wanted to do as a professional career.<br/><br/>
        From that point onwards, I have developed a huge interest in anything related to web development, and am
        always in search of new projects to create, as to challenge myself and learn along the way.
        I always strive to create beautiful and responsive websites, with various fun and different functionalities.
        <br/><br/>Other than coding, I also love to play the electric guitar, and I would say that I can play quite well overall.
        <br/><br/>Check out my skillset!
      </p>
      <div className="logos">
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
          <span>Git</span>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
          <span>HTML</span>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
          <span>CSS</span>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
          <span>Javascript</span>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="" />
          <span>Npm</span>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt="" />
          <span>Visual Studio</span>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="" />
          <span>Webpack</span>
        </div>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <span>React</span>
        </div>
        <div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          <span>Node.js</span>
        </div>
        <div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
          <span>MongoDB</span>
        </div>
        <div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" />
          <span>MySQL</span>
        </div>
      </div>
    </section>
  );
}

export default About;