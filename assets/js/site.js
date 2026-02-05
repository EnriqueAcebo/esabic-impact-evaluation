document.documentElement.classList.remove('no-js');

const btn = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-main-nav]');

if (btn && nav) {
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !btn.contains(event.target)) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

const resourceSearch = document.querySelector('[data-resource-search]');
const resourceYear = document.querySelector('[data-resource-year]');
const resourceChips = document.querySelector('[data-year-chips]');
const resourceSummary = document.querySelector('[data-resource-summary]');
const resourceResults = document.querySelector('[data-resource-results]');

const resourcesData = [
  {
    year: 2026,
    category: 'REPORTS',
    title: 'Impacto economico preliminar de incubadoras ESA-BIC en regiones europeas',
    meta: 'Equipo ESA-BIC Evaluation · Informe tecnico',
    keywords: 'impacto economico incubadoras europa'
  },
  {
    year: 2026,
    category: 'OPEN DATA',
    title: 'Dataset v1 · Empresas incubadas y grupo de comparacion',
    meta: 'Version depurada · CSV y diccionario de variables',
    keywords: 'dataset open data empresas incubadas'
  },
  {
    year: 2026,
    category: 'PAPERS',
    title: 'Do space incubators improve startup survival? Early evidence from ESA-BIC',
    meta: 'Working paper · En revision',
    keywords: 'paper survival startup esabic'
  },
  {
    year: 2025,
    category: 'REPORTS',
    title: 'Diseno metodologico y estrategia de identificacion causal',
    meta: 'Entregable metodologico',
    keywords: 'metodologia diff in diff psm'
  },
  {
    year: 2025,
    category: 'OPEN DATA',
    title: 'Inventario de variables y criterios de calidad del dato',
    meta: 'Anexo tecnico abierto',
    keywords: 'diccionario variables calidad dato'
  },
  {
    year: 2025,
    category: 'PAPERS',
    title: 'Public support and high-tech incubation performance',
    meta: 'Conference paper · Presentado',
    keywords: 'public policy incubation performance'
  },
  {
    year: 2024,
    category: 'REPORTS',
    title: 'Documento marco del proyecto FCT-24-19933',
    meta: 'Plan de trabajo y objetivos',
    keywords: 'proyecto marco objetivos'
  },
  {
    year: 2024,
    category: 'OPEN DATA',
    title: 'Catalogo inicial de fuentes para construccion de base de datos',
    meta: 'Listado de fuentes y cobertura',
    keywords: 'fuentes datos catalogo'
  }
];

if (resourceSearch && resourceYear && resourceChips && resourceSummary && resourceResults) {
  const years = [...new Set(resourcesData.map((item) => item.year))].sort((a, b) => b - a);
  const categories = ['REPORTS', 'OPEN DATA', 'PAPERS'];
  let activeYear = 'all';

  function normalize(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function fillYearControls() {
    const options = ['<option value="all">Todos los anios</option>'].concat(
      years.map((year) => `<option value="${year}">${year}</option>`)
    );
    resourceYear.innerHTML = options.join('');

    const chips = ['<button class="year-chip active" data-year="all" type="button">Todos</button>'].concat(
      years.map((year) => `<button class="year-chip" data-year="${year}" type="button">${year}</button>`)
    );
    resourceChips.innerHTML = chips.join('');
  }

  function render() {
    const searchTerm = normalize(resourceSearch.value.trim());
    const filtered = resourcesData.filter((item) => {
      const matchesYear = activeYear === 'all' ? true : String(item.year) === String(activeYear);
      const matchesSearch = !searchTerm
        ? true
        : normalize(`${item.title} ${item.meta} ${item.keywords} ${item.category}`).includes(searchTerm);
      return matchesYear && matchesSearch;
    });

    resourceSummary.textContent = `${filtered.length} resultados`;

    if (!filtered.length) {
      resourceResults.innerHTML = '<div class="resource-empty">No hay resultados para ese filtro. Prueba otra palabra clave o selecciona otro anio.</div>';
      return;
    }

    const groupedByYear = filtered.reduce((acc, item) => {
      if (!acc[item.year]) acc[item.year] = [];
      acc[item.year].push(item);
      return acc;
    }, {});

    const yearsToRender = Object.keys(groupedByYear)
      .map(Number)
      .sort((a, b) => b - a);

    resourceResults.innerHTML = yearsToRender
      .map((year) => {
        const yearItems = groupedByYear[year];
        const categoryHtml = categories
          .map((category) => {
            const items = yearItems.filter((item) => item.category === category);
            if (!items.length) return '';
            const list = items
              .map(
                (item) => `
                <li class="resource-item">
                  <p class="resource-item-title">${item.title}</p>
                  <p class="resource-item-meta">${item.meta}</p>
                </li>
              `
              )
              .join('');
            return `
              <div class="resource-category">
                <h3>${category}</h3>
                <ul class="resource-list">${list}</ul>
              </div>
            `;
          })
          .join('');

        return `
          <section class="resource-year">
            <h2>${year}</h2>
            ${categoryHtml}
          </section>
        `;
      })
      .join('');
  }

  function setActiveYear(yearValue) {
    activeYear = yearValue;
    resourceYear.value = String(yearValue);
    resourceChips.querySelectorAll('.year-chip').forEach((chip) => {
      chip.classList.toggle('active', chip.dataset.year === String(yearValue));
    });
    render();
  }

  fillYearControls();
  render();

  resourceSearch.addEventListener('input', render);
  resourceYear.addEventListener('change', () => setActiveYear(resourceYear.value));
  resourceChips.addEventListener('click', (event) => {
    const target = event.target.closest('.year-chip');
    if (!target) return;
    setActiveYear(target.dataset.year);
  });
}
