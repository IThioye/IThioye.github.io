// Global data object is available because data.js is loaded first.

// --- Navigation and Setup Logic ---

function setActiveNav() {
    const path = window.location.pathname;
    let currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    
    if (currentPage === '') {
        currentPage = 'index.html';
    }
    
    const pageAnchorMap = {
        'index.html': 'About',
        'skills.html': 'Skills',
        'articles.html': 'Articles',
        'projects.html': 'Projects',
    };

    const targetAnchorText = pageAnchorMap[currentPage.toLowerCase()];

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('nav-active');
        if (link.textContent === targetAnchorText) {
            link.classList.add('nav-active');
        }
    });
}

// --- Content Rendering Functions for index.html (Home Page) ---

function renderEducation(education) {
    const container = document.getElementById('education-container');
    if (!container) return;

    const educationHTML = education.map(item => `
        <div class="timeline-item">
            <span class="timeline-year">${item.year}</span>
            <h3 class="timeline-title">${item.degree}</h3>
            <p class="timeline-subtitle">${item.institution}</p>
            <div class="timeline-details">${item.details}</div> </div>
    `).join('');

    container.innerHTML = educationHTML;
}

function renderExperience(experience) {
    const container = document.getElementById('experience-container');
    if (!container) return;

    const experienceHTML = experience.map(item => `
        <div class="timeline-item">
            <span class="timeline-year">${item.year}</span>
            <h3 class="timeline-title">${item.title} at ${item.company}</h3>
            <div class="timeline-details">${item.details}</div> <div class="skill-items" style="margin-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 1rem;">
                ${(item.tools || []).map(tool => `<span class="skill-tag">${tool}</span>`).join('')}
            </div>
        </div>
    `).join('');

    container.innerHTML = experienceHTML;
}

// --- Project Filtering and Rendering Logic (for projects.html) ---

let currentLevel1Filter = null; 

function renderProjects(projects, containerId = 'projects-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (projects.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 3rem;">No projects found matching the current criteria.</p>`;
        return;
    }

    const projectHTML = projects.map(project => `
        <div class="project-card" data-project-id="${project.project_id}">
            <div class="project-header">
                <div class="project-icon">${project.icon}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-company">${project.company}</p>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="project-cta">
                <a href="${project.github_link}" target="_blank" class="cta-btn cta-github">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                </a>
                ${project.demo_link && project.demo_link !== '#' ? 
                `<a href="${project.demo_link}" target="_blank" class="cta-btn cta-demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Demo
                </a>` : ''}
                <span style="margin-left: auto; color: var(--accent-purple); font-weight: 500; display: flex; align-items: center; gap: 0.5rem;">
                    Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </span>
            </div>
        </div>
    `).join('');

    container.innerHTML = projectHTML;

    // Attach click listener for modal
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent modal from opening if a CTA button was clicked
            if (e.target.closest('.cta-btn')) {
                return;
            }
            const projectId = card.dataset.projectId;
            if (projectId) {
                openProjectModal(projectId);
            }
        });
    });
}

function openProjectModal(projectId) {
    const project = profileData.projects.find(p => p.project_id === projectId);
    const modal = document.getElementById('project-modal');
    
    if (!project || !modal) return; // Fails if modal element is not found

    // Populate Modal Header
    document.getElementById('modal-icon').innerHTML = project.icon;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-company').textContent = project.company;
    
    // Populate Tags
    document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Populate Details (safely injects HTML)
    document.getElementById('modal-details').innerHTML = project.full_details;

    // Populate CTA Footer
    const ctaFooter = document.getElementById('modal-cta');
    let ctaHTML = '';
    
    if (project.github_link) {
        ctaHTML += `
            <a href="${project.github_link}" target="_blank" class="cta-btn cta-github">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
            </a>
        `;
    }
    if (project.demo_link && project.demo_link !== '#') {
        ctaHTML += `
            <a href="${project.demo_link}" target="_blank" class="cta-btn cta-demo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Demo
            </a>
        `;
    }
    ctaFooter.innerHTML = ctaHTML;

    // Show the modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore background scrolling
}

function setupFilterTags() {
    const level1Container = document.getElementById('level-1-filters');
    const level2Container = document.getElementById('level-2-filters');
    if (!level1Container) return;

    const level1Tags = Object.keys(profileData.filterCategories);

    // Render Level 1 Tags (Primary Filters)
    level1Container.innerHTML = level1Tags.map(tag => `
        <span class="filter-tag" data-tag="${tag}">${tag}</span>
    `).join('');

    // Attach click listeners to Level 1 Tags
    level1Container.querySelectorAll('.filter-tag').forEach(tagEl => {
        tagEl.addEventListener('click', () => {
            document.getElementById('project-search').value = ''; 
            const tag = tagEl.dataset.tag;
            applyLevel1Filter(tag, level1Container, level2Container);
        });
    });

    // Initial render of all projects
    renderProjects(profileData.projects);
}

function applyLevel1Filter(tag, level1Container, level2Container) {
    level1Container.querySelectorAll('.filter-tag').forEach(el => el.classList.remove('active'));
    level2Container.querySelectorAll('.filter-tag').forEach(el => el.classList.remove('active'));

    if (currentLevel1Filter === tag) {
        currentLevel1Filter = null;
        level2Container.innerHTML = ''; 
        renderProjects(profileData.projects); 
    } else {
        currentLevel1Filter = tag;
        level1Container.querySelector(`[data-tag="${tag}"]`).classList.add('active');
        
        // Render Level 2 Tags
        const level2Tags = profileData.filterCategories[tag] || [];
        level2Container.innerHTML = level2Tags.map(l2Tag => `
            <span class="filter-tag level-2" data-tag="${l2Tag}">${l2Tag}</span>
        `).join('');

        const filteredProjects = profileData.projects.filter(p => p.tags.includes(tag));
        renderProjects(filteredProjects);

        // Attach click listeners to Level 2 Tags
        level2Container.querySelectorAll('.filter-tag').forEach(tagEl => {
            tagEl.addEventListener('click', () => {
                const l2Tag = tagEl.dataset.tag;
                applyLevel2Filter(l2Tag, level2Container);
            });
        });
    }
}

function applyLevel2Filter(tag, level2Container) {
    level2Container.querySelectorAll('.filter-tag').forEach(el => el.classList.remove('active'));
    level2Container.querySelector(`[data-tag="${tag}"]`).classList.add('active');

    const filteredProjects = profileData.projects.filter(p => 
        p.tags.includes(currentLevel1Filter) && p.tags.includes(tag)
    );
    renderProjects(filteredProjects);
}

function setupProjectSearch() {
    const searchInput = document.getElementById('project-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll('.filter-tag').forEach(el => el.classList.remove('active'));
        document.getElementById('level-2-filters').innerHTML = '';
        currentLevel1Filter = null;

        const filteredProjects = profileData.projects.filter(p => 
            p.title.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        renderProjects(filteredProjects);
    });
}


// --- Content Rendering Functions for articles.html ---

function renderArticles(articles, containerId = 'articles-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const articleHTML = articles.map(article => `
        <div class="article-card">
            <div class="article-image">📝</div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${article.category}</span>
                    <span>${article.read_time}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-footer">
                    <span class="read-time">${article.date}</span>
                    <a href="${article.link}" style="color: var(--accent-cyan); text-decoration: none;">Read more →</a>
                </div>
            </div>
        </div>
    `).join(''); 

    container.innerHTML = articleHTML;
}

// --- Main Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        // Render Hero static data
        document.getElementById('hero-name').textContent = profileData.hero.name; 
        document.getElementById('hero-title').textContent = profileData.hero.title;
        document.getElementById('hero-description').textContent = profileData.hero.description;
        document.getElementById('cv-link').href = profileData.hero.cv_path;
        
        // Render new sections: Education and Experience
        renderEducation(profileData.education);
        renderExperience(profileData.experience);

    } else if (currentPage === 'projects.html') {
        setupFilterTags(); 
        setupProjectSearch();

        // Modal close listeners
        const modal = document.getElementById('project-modal');
        const closeModalBtn = document.querySelector('.modal-close-btn');

        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) {
                closeModal();
            }
        });

    } else if (currentPage === 'articles.html') {
        renderArticles(profileData.articles);
        
    } 
    
    // Smooth scroll for anchors on the same page (only used on index.html now)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hostname === window.location.hostname && (this.pathname === window.location.pathname || this.pathname === '/')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Scroll Logic for Navigation Bar
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 14, 26, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 14, 26, 0.8)';
        }
    });

    // Intersection Observer setup for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to all renderable elements on the page
    document.querySelectorAll('.skill-box, .article-card, .project-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});