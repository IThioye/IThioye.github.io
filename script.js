const grid = document.getElementById('projectsGrid');
const positionFilter = document.getElementById('positionFilter');
const categoryFilter = document.getElementById('categoryFilter');
const keywordSearch = document.getElementById('keywordSearch');
const dateFilter = document.getElementById('dateFilter');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalDate = document.getElementById('modalDate');
const modalImages = document.getElementById('modalImages');
const modalLinks = document.getElementById('modalLinks');
const closeModal = document.getElementById('closeModal');

let projects = [];

fetch('projects.json')
  .then(res => res.json())
  .then(data => {
    projects = data;
    renderProjects();
  });

function renderProjects() {
  const pos = positionFilter.value;
  const cat = categoryFilter.value;
  const key = keywordSearch.value.toLowerCase();
  const date = dateFilter.value; // format YYYY-MM

  const filtered = projects.filter(p => {
    const matchPos = !pos || p.position === pos;
    const matchCat = !cat || p.category === cat;
    const matchKey = !key ||
      p.title.toLowerCase().includes(key) ||
      p.description.toLowerCase().includes(key) ||
      p.keywords.some(k => k.toLowerCase().includes(key));
    const matchDate = !date || p.date >= date;
    return matchPos && matchCat && matchKey && matchDate;
  });

  grid.innerHTML = filtered.map((p,i) => `
    <div class="card" onclick="openModal(${i})">
      <h3>${p.title}</h3>
      <p class="date">${p.date}</p>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function openModal(index) {
  const p = projects[index];
  modalTitle.textContent = p.title;
  modalDate.textContent = `Date: ${p.date}`;
  modalDescription.textContent = p.description;
  modalImages.innerHTML = p.images.map(src => `<img src="${src}" alt="">`).join('');
  modalLinks.innerHTML = `
    ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ''}
    ${p.demo ? `<a href="${p.demo}" target="_blank">Live Demo</a>` : ''}
  `;
  modal.style.display = 'flex';
}

closeModal.onclick = () => modal.style.display = 'none';
modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

[positionFilter, categoryFilter, keywordSearch, dateFilter]
  .forEach(el => el.addEventListener('input', renderProjects));
