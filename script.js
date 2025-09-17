import { projects, certifications } from './portfolioData.js';

let filteredProjects = [...projects];
let activePositionFilter = 'all';
let activeCategoryFilter = 'all';
let searchKeyword = '';

function renderProjects() {
    const workGrid = document.getElementById('workExperienceGrid');
    const projectsGrid = document.getElementById('personalProjectsGrid');
    const noResults = document.getElementById('noResults');

    workGrid.innerHTML = '';
    projectsGrid.innerHTML = '';
    
    const workProjects = filteredProjects.filter(p => p.type === 'work');
    const personalProjects = filteredProjects.filter(p => p.type === 'project');

    if (workProjects.length === 0 && personalProjects.length === 0) {
        noResults.classList.add('show');
    } else {
        noResults.classList.remove('show');
    }

    if (workProjects.length > 0) {
        workProjects.forEach(project => {
            workGrid.innerHTML += createProjectCard(project);
        });
    }

    if (personalProjects.length > 0) {
        personalProjects.forEach(project => {
            projectsGrid.innerHTML += createProjectCard(project);
        });
    }

    // Add click event listeners to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            showProjectModal(projectId);
        });
    });
}

function createProjectCard(project) {
    return `
        <div class="project-card" data-project-id="${project.id}">
            <h3 class="project-title">${project.title}</h3>
            <div class="project-meta-info">
                <p>
                    <span>${project.company}</span>                
                    <strong>${project.startDate} - ${project.endDate}</strong>
                </p>
                
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                    ` : ''}
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                            </svg>
                            Live Demo
                        </a>
                    ` : ''}
                </div>
        </div>
    `;
}

function showProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    
    document.getElementById('modalTitle').textContent = project.title;
    
    document.getElementById('projectMeta').innerHTML = `
        ${project.company ? `
            <div class="meta-item">
                <div class="meta-label">Entreprise</div>
                <div class="meta-value">${project.company}</div>
            </div>
        ` : ''}
        <div class="meta-item">
            <div class="meta-label">Durée</div>
            <div class="meta-value">${project.duration}</div>
        </div>
        <div class="meta-item">
            <div class="meta-label">Equipe</div>
            <div class="meta-value">${project.team}</div>
        </div>
        <div class="meta-item">
            <div class="meta-label">Statut</div>
            <div class="meta-value">${project.status}</div>
        </div>
        <div class="meta-item">
            <div class="meta-label">Poste</div>
            <div class="meta-value">${project.position.charAt(0).toUpperCase() + project.position.slice(1)}</div>
        </div>
        <div class="meta-item">
            <div class="meta-label">Catégorie</div>
            <div class="meta-value">
                ${
                    Array.isArray(project.category)
                    ? project.category
                        .map(cat => cat.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))
                        .join(', ')
                    : project.category
                        .replace(/-/g, ' ')
                        .replace(/\b\w/g, l => l.toUpperCase())
                }
            </div>
        </div>
    `;
    
    document.getElementById('projectOverview').textContent = project.overview;
    
    const imagesSection = document.getElementById('projectImages');
    const imageGallery = document.getElementById('imageGallery');
    
    if (project.images && project.images.length > 0) {
        imagesSection.style.display = 'block';
        imageGallery.className = 'image-gallery';
        if (project.images.length === 1) {
            imageGallery.classList.add('single');
        } else if (project.images.length === 2) {
            imageGallery.classList.add('double');
        } else {
            imageGallery.classList.add('multiple');
        }
        
        imageGallery.innerHTML = project.images.map(image => `
            <div class="project-image">
                <img src="${image.url}" alt="${image.caption}" loading="lazy">
                <div class="image-caption">${image.caption}</div>
            </div>
        `).join('');
    } else {
        imagesSection.style.display = 'none';
    }
    
    document.getElementById('techStack').innerHTML = project.techStack.map(tech => 
        `<span class="tech-item">${tech}</span>`
    ).join('');
    
    document.getElementById('featuresList').innerHTML = project.features.map(feature => `
        <li>
            <svg class="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
            ${feature}
        </li>
    `).join('');
    
    document.getElementById('challengesContent').textContent = project.challenges;
    document.getElementById('learningsContent').textContent = project.learnings;
    
    document.getElementById('modalActions').innerHTML = `
        ${project.github ? `
            <a href="${project.github}" target="_blank" class="action-btn primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Voir sur GitHub
            </a>
        ` : ''}
        ${project.demo ? `
            <a href="${project.demo}" target="_blank" class="action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
                Live Demo
            </a>
        ` : ''}
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    grid.innerHTML = certifications.map(cert => `
        <div class="certification-card">
            <h4 class="cert-title">${cert.title}</h4>
            <p class="cert-issuer">${cert.issuer}</p>
            <p class="cert-date">Délivrance: ${cert.date}</p>
            <a href="${cert.link}" target="_blank" class="cert-link">Voir certification</a>
        </div>
    `).join('');
}

function filterProjects() {
    const keyword = searchKeyword ? searchKeyword.toLowerCase() : '';

    // ✅ Update the GLOBAL variable (remove const)
    filteredProjects = projects.filter(project => {
        const matchesPosition =
            activePositionFilter === 'all' || project.position === activePositionFilter;

        const matchesCategory = Array.isArray(project.category)
            ? activeCategoryFilter === 'all' || project.category.includes(activeCategoryFilter)
            : activeCategoryFilter === 'all' || project.category === activeCategoryFilter;

        const matchesKeyword = !keyword ||
            project.title.toLowerCase().includes(keyword) ||
            project.description.toLowerCase().includes(keyword) ||
            (project.keywords || []).some(k => k.toLowerCase().includes(keyword)) ||
            (project.tags || []).some(t => t.toLowerCase().includes(keyword)) ||
            (project.company && project.company.toLowerCase().includes(keyword));

        return matchesPosition && matchesCategory && matchesKeyword;
    });

    // ✅ Call with NO arguments
    renderProjects();
}




document.getElementById('positionFilter').addEventListener('change', (e) => {
    activePositionFilter = e.target.value;
    filterProjects();
});

document.getElementById('categoryFilter').addEventListener('change', (e) => {
    activeCategoryFilter = e.target.value;
    filterProjects();
});

document.getElementById('keywordSearch').addEventListener('input', (e) => {
    searchKeyword = e.target.value;
    filterProjects();
});

document.getElementById('closeModal').addEventListener('click', hideProjectModal);

document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        hideProjectModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideProjectModal();
    }
});

// Initial render
renderProjects();
renderCertifications();