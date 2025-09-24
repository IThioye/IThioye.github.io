import { projects, certifications } from '../portfolioData.js';

function renderFeaturedProjects() {
    const projectsGrid = document.getElementById('featuredProjectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        const featuredProjects = projects.slice(0, 3);
        featuredProjects.forEach(project => {
            projectsGrid.innerHTML += createProjectCard(project);
        });
    }
}

function createProjectCard(project) {
    return `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderCertifications() {
    const certGrid = document.getElementById('certificationsGrid');
    if (certGrid) {
        certGrid.innerHTML = '';
        certifications.forEach(cert => {
            certGrid.innerHTML += createCertificationCard(cert);
        });
    }
}

function createCertificationCard(cert) {
    return `
        <div class="certification-card">
            <h3 class="certification-title">${cert.title}</h3>
            <p class="certification-issuer"><strong> ${cert.issuer}</strong></p>
            <p class="certification-date"><strong>Date:</strong> ${cert.date}</p>
            <a href="${cert.link}" target="_blank" class="certification-link">Voir Certification</a>
        </div>
    `;
}

function showProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-company').innerHTML = `<strong>Entreprise</strong> ${project.company}`;
    document.getElementById('modal-date').innerHTML = `<strong>Date</strong> ${project.startDate} - ${project.endDate}`;
    document.getElementById('modal-category').innerHTML = `<strong>Catégorie</strong> ${project.category}`;
    document.getElementById('modal-description').innerText = project.description;

    const detailsContent = document.getElementById('modal-details');
    detailsContent.innerHTML = '';
    if (project.details) {
        const detailsArray = project.details.split('\n');
        detailsContent.innerHTML = `<h4>Project Details</h4><ul>${detailsArray.map(line => `<li>${line}</li>`).join('')}</ul>`;
    }
    
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = '';
    if (project.github) {
        linksContainer.innerHTML += `<a href="${project.github}" target="_blank" class="modal-link">GitHub</a>`;
    }
    if (project.demo) {
        linksContainer.innerHTML += `<a href="${project.demo}" target="_blank" class="modal-link">Live Demo</a>`;
    }

    modal.style.display = 'flex';
}

function hideProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Back to top button
function updateBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProjects();
    renderCertifications();
    
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            showProjectModal(projectId);
        });
    });
    
    const modal = document.getElementById('projectModal');
    if (modal) {
        document.getElementById('closeModal').addEventListener('click', hideProjectModal);
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'projectModal') {
                hideProjectModal();
            }
        });
    }
    
    // Other scripts from original index.html
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Scroll event listener
    window.addEventListener('scroll', () => {
        updateBackToTop();
    });
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - nav.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const sections = document.querySelectorAll('section, header');
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const progressIndicator = document.querySelector('.progress-indicator');
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (currentScroll / scrollHeight) * 100;
        progressIndicator.style.width = scrollProgress + '%';
    
        sections.forEach(section => {
            const sectionTop = section.offsetTop - nav.offsetHeight;
            const sectionHeight = section.clientHeight;
            const id = section.getAttribute('id');
    
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                links.forEach(link => link.classList.remove('active'));
                if (id) {
                    const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            }
        });
    });
    
    // Particle animation
    const particlesContainer = document.querySelector('.particles');
    const numParticles = 30;
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
        particlesContainer.appendChild(particle);
    }
    
    // Typing text effect
    const phrases = [
        "Spécialisé en Machine et Deep Learning",
        "Passionné d'Intelligence Artificielle",
    ];
    const typingText = document.querySelector('.typing-text');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        const displayedText = currentPhrase.substring(0, charIndex);
        typingText.textContent = displayedText;
    
        if (!isDeleting) {
            charIndex++;
        } else {
            charIndex--;
        }
    
        if (!isDeleting && charIndex > currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    type();
    
    // Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    document.querySelectorAll('.skill-item').forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});