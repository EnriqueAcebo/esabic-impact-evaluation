document.documentElement.classList.remove('no-js');

/* ── State ── */
let currentLang = (function () {
  var saved = localStorage.getItem('lang');
  if (saved) return saved;
  var browser = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
  return browser.startsWith('es') ? 'es' : 'en';
})();

/* ── Translations ── */
const T = {
  es: {
    // Títulos
    'title.index': 'Evaluación ESA-BICs | Proyecto FCT-24-19933',
    'title.404': 'Página no encontrada | Evaluación ESA-BICs',

    // Nav
    'nav.inicio': 'Inicio',
    'nav.objeto': 'Objetivo',
    'nav.plan': 'Fases',
    'nav.recursos': 'Resultados',
    'nav.equipo': 'Equipo',

    // Hero
    'index.kicker': 'FECYT · Convocatoria I+P 2024 · FCT-24-19933',
    'index.h1': 'Evaluación del impacto de las incubadoras de la Agencia Espacial Europea',
    'index.hero.p': 'Proyecto de investigación orientado a evaluar el impacto del programa ESA-BIC en Europa, con especial atención al crecimiento empresarial, el empleo cualificado y el impacto regional de las startups incubadas.',
    'index.btn.explore': 'Explorar proyecto',
    'index.btn.resources': 'Ver resultados',

    // Objetivo y alcance
    'proyecto.h2': 'Objetivo y alcance',
    'proyecto.obj.p': 'Evaluar el impacto del programa ESA-BIC y de su red de incubadoras para medir su contribución al crecimiento empresarial, la innovación tecnológica, el empleo cualificado y el desarrollo regional, con el fin de mejorar el diseño y la efectividad del programa y aportar evidencia útil para gestores y responsables de política pública.',
    'proyecto.esp.h3': 'Objetivos específicos',
    'proyecto.card1.h3': 'Base de datos abierta',
    'proyecto.card1.p': 'Construir una base de datos europea de empresas incubadas y de comparación, integrando información económica, financiera, tecnológica y territorial, y ponerla a disposición en formato abierto.',
    'proyecto.card2.h3': 'Innovación y crecimiento empresarial',
    'proyecto.card2.p': 'Analizar en qué medida la incubación en ESA-BIC se asocia con mejores resultados en crecimiento empresarial, innovación tecnológica, acceso a financiación y generación de empleo cualificado.',
    'proyecto.card3.h3': 'Decisiones estratégicas y arraigo',
    'proyecto.card3.p': 'Diseñar un cuestionario estructurado para estudiar por qué las startups eligen una ESA-BIC, cómo valoran el programa y qué factores influyen en su permanencia y vinculación con el territorio.',
    'proyecto.card4.h3': 'Impacto regional y política pública',
    'proyecto.card4.p': 'Evaluar la contribución del programa al desarrollo regional, identificando efectos sobre ecosistemas de innovación, especialización tecnológica y capacidad de las incubadoras para generar evidencia útil para la política pública.',

    // Fases
    'plan.h2': 'Fases',
    'plan.card1.h3': 'Construcción de la base analítica',
    'plan.card1.p': 'Identificación de empresas incubadas y grupo de comparación, integración de variables económicas, financieras, tecnológicas y territoriales, y diseño del protocolo de análisis.',
    'plan.card2.h3': 'Estimación del impacto',
    'plan.card2.p': 'Aplicación de estrategias de identificación y modelos cuantitativos para estimar el efecto del programa sobre crecimiento empresarial, innovación tecnológica, empleo cualificado y acceso a financiación.',
    'plan.card3.h3': 'Validación cualitativa',
    'plan.card3.p': 'Despliegue del cuestionario estructurado y contraste con startups y gestores para interpretar mecanismos, decisiones estratégicas y factores de arraigo territorial.',
    'plan.card4.h3': 'Resultados y transferencia',
    'plan.card4.p': 'Producción de resultados científicos, apertura de la base de datos, elaboración del informe final y formulación de recomendaciones para la mejora del programa y la política pública.',

    // Resultados
    'rec.h2': 'Resultados',
    'rec.p': 'Producción científica, datos abiertos y documentos de trabajo generados en el marco del proyecto.',
    'rec.search.placeholder': 'Buscar por título, autor, revista o palabra clave...',
    'rec.allcats.chip': 'Todos',
    'rec.cat.datasets': 'Dataset',
    'rec.cat.papers': 'Paper',
    'rec.cat.reports': 'Report',
    'rec.result': 'resultado',
    'rec.results': 'resultados',
    'rec.empty': 'No hay resultados para ese filtro. Prueba otra palabra clave o selecciona otra categoría.',
    'rec.showall': 'Ver todos',

    // Equipo
    'equipo.h2': 'Equipo',
    'equipo.p': 'Equipo investigador con experiencia en evaluación de políticas públicas, emprendimiento, innovación, análisis aplicado de datos y conocimiento del sector aeroespacial y su industria.',
    'equipo.card1.meta': 'IP · Profesor Permanente Laboral · ULE',
    'equipo.card2.meta': 'Profesor Titular · ULE',
    'equipo.card3.meta': 'Catedrático · ULE',
    'equipo.card4.meta': 'Catedrático · ULE',
    'equipo.card5.meta': 'Investigador predoctoral · ULE',
    'equipo.card6.meta': 'Investigadora predoctoral · USAL',

    // 404
    '404.p': 'La página que buscas no existe o ha sido movida.',
    '404.btn': 'Volver al inicio',
  },

  en: {
    // Títulos
    'title.index': 'ESA-BICs Evaluation | Project FCT-24-19933',
    'title.404': 'Page not found | ESA-BICs Evaluation',

    // Nav
    'nav.inicio': 'Home',
    'nav.objeto': 'Purpose',
    'nav.plan': 'Phases',
    'nav.recursos': 'Results',
    'nav.equipo': 'Team',

    // Hero
    'index.kicker': 'FECYT · Convocatoria I+P 2024 · FCT-24-19933',
    'index.h1': 'Evaluating the Impact of the European Space Agency\u2019s Incubators',
    'index.hero.p': 'Research project aimed at evaluating the impact of the ESA-BIC programme across Europe, with a focus on business growth, skilled employment and the regional impact of incubated startups.',
    'index.btn.explore': 'Explore project',
    'index.btn.resources': 'View results',

    // Purpose and scope
    'proyecto.h2': 'Purpose and scope',
    'proyecto.obj.p': 'Evaluate the impact of the ESA-BIC programme and its incubator network on business growth, technological innovation, skilled employment and regional development, in order to improve programme design and effectiveness and provide useful evidence for managers and public decision-makers.',
    'proyecto.esp.h3': 'Specific objectives',
    'proyecto.card1.h3': 'Open database',
    'proyecto.card1.p': 'Build a European database of incubated firms and a comparison group, integrating economic, financial, technological and territorial information, and make it available in open format.',
    'proyecto.card2.h3': 'Innovation and business growth',
    'proyecto.card2.p': 'Analyse to what extent incubation in ESA-BIC is associated with stronger outcomes in business growth, technological innovation, access to finance and the creation of skilled employment.',
    'proyecto.card3.h3': 'Strategic decisions and territorial embeddedness',
    'proyecto.card3.p': 'Design a structured questionnaire to study why startups choose an ESA-BIC, how they assess the programme and which factors shape their permanence and connection to the territory.',
    'proyecto.card4.h3': 'Regional impact and public policy',
    'proyecto.card4.p': 'Assess the contribution of the programme to regional development by identifying effects on innovation ecosystems, technological specialisation and the capacity of incubators to generate evidence useful for public policy.',

    // Phases
    'plan.h2': 'Phases',
    'plan.card1.h3': 'Analytical database construction',
    'plan.card1.p': 'Identification of incubated firms and the comparison group, integration of economic, financial, technological and territorial variables, and design of the analytical protocol.',
    'plan.card2.h3': 'Impact estimation',
    'plan.card2.p': 'Application of identification strategies and quantitative models to estimate the effect of the programme on business growth, technological innovation, skilled employment and access to finance.',
    'plan.card3.h3': 'Qualitative validation',
    'plan.card3.p': 'Deployment of the structured questionnaire and validation with startups and managers to interpret mechanisms, strategic decisions and factors of territorial embeddedness.',
    'plan.card4.h3': 'Results and transfer',
    'plan.card4.p': 'Production of scientific results, release of the open database, preparation of the final report and formulation of recommendations to improve the programme and public policy.',

    // Results
    'rec.h2': 'Results',
    'rec.p': 'Scientific outputs, open data and working documents produced within the project.',
    'rec.search.placeholder': 'Search by title, author, journal or keyword...',
    'rec.allcats.chip': 'All',
    'rec.cat.datasets': 'Dataset',
    'rec.cat.papers': 'Paper',
    'rec.cat.reports': 'Report',
    'rec.result': 'result',
    'rec.results': 'results',
    'rec.empty': 'No results for that filter. Try another keyword or select a different category.',
    'rec.showall': 'Show all',

    // Team
    'equipo.h2': 'Team',
    'equipo.p': 'Research team with expertise in public policy evaluation, entrepreneurship, innovation, applied data analysis, and knowledge of the aerospace sector and its industry.',
    'equipo.card1.meta': 'PI · Assistant Professor · ULE',
    'equipo.card2.meta': 'Associate Professor · ULE',
    'equipo.card3.meta': 'Full Professor · ULE',
    'equipo.card4.meta': 'Full Professor · ULE',
    'equipo.card5.meta': 'PhD Researcher · ULE',
    'equipo.card6.meta': 'PhD Researcher · USAL',

    // 404
    '404.p': 'The page you are looking for does not exist or has been moved.',
    '404.btn': 'Back to home',
  }
};

/* ── i18n engine ── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var val = T[lang] && T[lang][el.dataset.i18n];
    if (val) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var val = T[lang] && T[lang][el.dataset.i18nHtml];
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var val = T[lang] && T[lang][el.dataset.i18nPlaceholder];
    if (val) el.placeholder = val;
  });

  var pageKey = document.body.dataset.page;
  if (pageKey && T[lang] && T[lang]['title.' + pageKey]) {
    document.title = T[lang]['title.' + pageKey];
  }

  var flagEl = document.querySelector('[data-lang-flag]');
  if (flagEl) flagEl.textContent = lang === 'es' ? 'EN' : 'ES';

  var toggleBtn = document.querySelector('[data-lang-toggle]');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
  }
}

/* ── Menu toggle ── */
var btn = document.querySelector('[data-menu-toggle]');
var nav = document.querySelector('[data-main-nav]');

if (btn && nav) {
  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && !btn.contains(event.target)) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Lang toggle ── */
var langToggle = document.querySelector('[data-lang-toggle]');
if (langToggle) {
  langToggle.addEventListener('click', function () {
    applyLang(currentLang === 'es' ? 'en' : 'es');
    if (typeof fillCategoryControls === 'function') {
      fillCategoryControls();
      renderResources();
    }
  });
}

/* ── Resources catalogue ── */
var resourceSearch = document.querySelector('[data-resource-search]');
var resourceYear = document.querySelector('[data-resource-year]');
var resourceChips = document.querySelector('[data-year-chips]');
var resourceSummary = document.querySelector('[data-resource-summary]');
var resourceResults = document.querySelector('[data-resource-results]');

var resourcesData = [
  {
    year: 2025,
    category: 'PAPERS',
    title: {
      es: 'Entrepreneurial Support Organizations in the New Space Economy: Location, Peers, and Experience Effects on Startup Performance',
      en: 'Entrepreneurial Support Organizations in the New Space Economy: Location, Peers, and Experience Effects on Startup Performance'
    },
    meta: {
      es: '2025 · Hernando-Tomé, D., Acebo, E., Abad-González, J., & Miguel-Dávila, J.Á. · R&R',
      en: '2025 · Hernando-Tomé, D., Acebo, E., Abad-González, J., & Miguel-Dávila, J.Á. · R&R'
    },
    keywords: 'entrepreneurial support organizations new space economy location peers experience startup performance ESO incubator'
  }
];

if (resourceSearch && resourceChips && resourceSummary && resourceResults) {
  var categories = ['PAPERS', 'DATASETS', 'REPORTS'];
  var activeCategory = 'all';
  var RESOURCE_LIMIT = 5;
  var showAll = false;

  function normalize(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function fillCategoryControls() {
    var lang = currentLang;
    var allChip = T[lang] && T[lang]['rec.allcats.chip'] || 'Todos';

    var chips = ['<button class="year-chip' + (activeCategory === 'all' ? ' active' : '') + '" data-cat="all" type="button">' + allChip + '</button>'].concat(
      categories.map(function (cat) {
        var label = T[lang] && T[lang]['rec.cat.' + cat.toLowerCase()] || cat;
        return '<button class="year-chip' + (activeCategory === cat ? ' active' : '') + '" data-cat="' + cat + '" type="button">' + label + '</button>';
      })
    );
    resourceChips.innerHTML = chips.join('');
  }

  function renderResources() {
    var lang = currentLang;
    var searchTerm = normalize(resourceSearch.value.trim());
    var filtered = resourcesData.filter(function (item) {
      var matchesCat = activeCategory === 'all' ? true : item.category === activeCategory;
      var titleText = item.title[lang] || item.title.es;
      var metaText = item.meta[lang] || item.meta.es;
      var matchesSearch = !searchTerm
        ? true
        : normalize(titleText + ' ' + metaText + ' ' + item.keywords + ' ' + item.category).includes(searchTerm);
      return matchesCat && matchesSearch;
    });

    var resultsWord = filtered.length === 1
      ? (T[lang] && T[lang]['rec.result'] || 'resultado')
      : (T[lang] && T[lang]['rec.results'] || 'resultados');
    resourceSummary.textContent = filtered.length + ' ' + resultsWord;

    if (!filtered.length) {
      var emptyMsg = T[lang] && T[lang]['rec.empty'] || '';
      resourceResults.innerHTML = '<div class="resource-empty">' + emptyMsg + '</div>';
      return;
    }

    var totalCount = filtered.length;
    var visible = showAll ? filtered : filtered.slice(0, RESOURCE_LIMIT);

    var groupedByCat = {};
    visible.forEach(function (item) {
      if (!groupedByCat[item.category]) groupedByCat[item.category] = [];
      groupedByCat[item.category].push(item);
    });

    var html = categories.filter(function (cat) { return groupedByCat[cat]; }).map(function (cat) {
      var items = groupedByCat[cat];
      var catLabel = T[lang] && T[lang]['rec.cat.' + cat.toLowerCase()] || cat;
      var list = items.map(function (item) {
        var titleText = item.title[lang] || item.title.es;
        var metaText = item.meta[lang] || item.meta.es;
        return '<li class="resource-item">' +
          '<p class="resource-item-title">' + titleText + '</p>' +
          '<p class="resource-item-meta">' + metaText + '</p>' +
          '</li>';
      }).join('');
      return '<section class="resource-year resource-year--' + cat.toLowerCase() + '">' +
        '<h2>' + catLabel + '</h2>' +
        '<ul class="resource-list">' + list + '</ul>' +
        '</section>';
    }).join('');

    if (!showAll && totalCount > RESOURCE_LIMIT) {
      var btnLabel = T[lang] && T[lang]['rec.showall'] || 'Ver todos';
      html += '<button class="btn primary resource-show-all" type="button">' + btnLabel + ' (' + totalCount + ')</button>';
    }

    resourceResults.innerHTML = html;
  }

  function setActiveCategory(catValue) {
    activeCategory = catValue;
    resourceChips.querySelectorAll('.year-chip').forEach(function (chip) {
      chip.classList.toggle('active', chip.dataset.cat === catValue);
    });
    renderResources();
  }

  fillCategoryControls();
  renderResources();

  var debounceTimer;
  resourceSearch.addEventListener('input', function () {
    showAll = false;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(renderResources, 250);
  });
  resourceChips.addEventListener('click', function (event) {
    var target = event.target.closest('.year-chip');
    if (!target) return;
    showAll = false;
    setActiveCategory(target.dataset.cat);
  });
  resourceResults.addEventListener('click', function (event) {
    if (event.target.closest('.resource-show-all')) {
      showAll = true;
      renderResources();
    }
  });
}

/* ── Apply initial language ── */
applyLang(currentLang);
