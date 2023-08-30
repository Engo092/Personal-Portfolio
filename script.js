window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

const nav = document.querySelector("nav");

document.getElementsByTagName('body')[0].style.overflow = 'hidden';

nav.addEventListener("animationend", () => {
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
})

const navButtons = document.querySelectorAll(".navButton");

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', (e) => {
        switch (e.target.id) {
            case "about":
                document.querySelector(".about").scrollIntoView({behavior: 'smooth'});
                break;
            case "projects":
                document.querySelector(".projects").scrollIntoView({behavior: 'smooth'});
                break;
            default:
                document.querySelector("footer").scrollIntoView({behavior: 'smooth'});
                break;
        }
    })
}

const about = document.querySelector(".about p");
const projects = document.querySelector(".project-card");
const footer = document.querySelector("footer");

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
    })
})

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
    })
})

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
    })
})


aboutObserver.observe(about);
projectsObserver.observe(projects);
footerObserver.observe(footer);