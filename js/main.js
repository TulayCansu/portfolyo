/* ===================================================
   TÜLAY CANSU - PERSONAL PORTFOLIO
   Fully dashboard-driven: skills, projects, experiences
   all rendered dynamically from data.
   =================================================== */

// ─── Default Skills ──────────────────────────────────
const defaultSkills = [
  { name: 'C++', emoji: '🔷' },
  { name: 'Java', emoji: '☕' },
  { name: 'HTML5', emoji: '⚡' },
  { name: 'CSS3', emoji: '🎨' },
  { name: 'JavaScript', emoji: '📜' },
  { name: 'MySQL', emoji: '🗄️' },
  { name: 'Git / GitHub', emoji: '📦' },
  { name: 'Figma', emoji: '🖌️' },
  { name: 'WordPress', emoji: '📝' },
  { name: 'Yapay Zeka', emoji: '🤖' },
  { name: 'Responsive Design', emoji: '📱' },
  { name: 'VS Code', emoji: '💻' }
];

// ─── Default Projects ──────────────────────────────
const defaultProjects = [
  {
    id: 'p1',
    title_tr: 'Capybara Platformu',
    title_en: 'Capybara Platform',
    desc_tr: 'c-API-bara ekibiyle geliştirdiğimiz kredi tabanlı yetenek paylaşım platformu. Yapay zeka destekli video ön eleme ve puanlama sistemi, UML diyagramları ve veritabanı şemaları tasarladım.',
    desc_en: 'Credit-based skill sharing platform developed with the c-API-bara team. I designed the AI-powered video screening and scoring system, UML diagrams, and database schemas.',
    category: 'software',
    tech: 'Java, MySQL, UML, AI',
    github: '',
    demo: '',
    image: '',
    images: []
  },
  {
    id: 'p2',
    title_tr: 'DevLens 🏆',
    title_en: 'DevLens 🏆',
    desc_tr: 'Dezenformasyonla mücadele odaklı hackathon projesi. Chrome eklentisi ve doğrulama web sitesinden oluşan medya okuryazarlığı aracı. Üniversite hackathonunda 3. oldu. 🏆',
    desc_en: 'Hackathon project focused on fighting disinformation. A media literacy tool consisting of a Chrome extension and verification website. Won 3rd place in university hackathon. 🏆',
    category: 'web',
    tech: 'Chrome Ext., HTML/CSS, JavaScript',
    github: '',
    demo: '',
    image: '',
    images: []
  },
  {
    id: 'p3',
    title_tr: 'Anadolu Atlası',
    title_en: 'Anadolu Atlas',
    desc_tr: "Responsive harita tasarımlarını içeren interaktif şehir tanıtım web sitesi. HTML, CSS ve JavaScript ile Türkiye'nin şehirlerini keşfetmeyi sağlayan modern bir arayüz.",
    desc_en: "Interactive city guide website with responsive map designs. A modern interface built with HTML, CSS, and JavaScript for exploring Turkey's cities.",
    category: 'web',
    tech: 'HTML, CSS, JavaScript, Responsive',
    github: '',
    demo: '',
    image: '',
    images: []
  },
  {
    id: 'p4',
    title_tr: 'Nikah Randevu Sistemi',
    title_en: 'Marriage Appointment System',
    desc_tr: "Tarsus Belediyesi için yönetim paneli (admin dashboard) arayüz wireframe'leri tasarladım ve projenin GitHub repository süreçlerini başlattım.",
    desc_en: "Designed admin dashboard interface wireframes for Tarsus Municipality and initiated the project's GitHub repository processes.",
    category: 'design',
    tech: 'Figma, Wireframe, UI/UX, GitHub',
    github: '',
    demo: '',
    image: '',
    images: []
  },
  {
    id: 'p5',
    title_tr: 'Öğrenci Staj Sistemi',
    title_en: 'Student Internship System',
    desc_tr: 'Java ve MySQL kullanarak geliştirdiğim komut satırı tabanlı staj yönetim sistemi. Maven projesi olarak yapılandırılmış, veritabanı entegrasyonlu bir uygulama.',
    desc_en: 'Command-line based internship management system developed with Java and MySQL. Structured as a Maven project with database integration.',
    category: 'software',
    tech: 'Java, Maven, MySQL, NetBeans',
    github: '',
    demo: '',
    image: '',
    images: []
  },
  {
    id: 'p6',
    title_tr: 'Engelsiz Üniversite Web',
    title_en: 'Accessible University Web',
    desc_tr: 'OHU Engelsiz Üniversite topluluğunun web sitesi. WordPress altyapısında Gutenberg blok editörü ile erişilebilir web içerikleri üreterek Web Koordinatörü olarak görev alıyorum.',
    desc_en: 'OHU Accessible University community website. I serve as Web Coordinator, producing accessible web content using WordPress with Gutenberg block editor.',
    category: 'web',
    tech: 'WordPress, Gutenberg, Erişilebilirlik',
    github: '',
    demo: 'https://ohu.edu.tr',
    image: '',
    images: []
  }
];

// ─── Default Experiences ────────────────────────────
const defaultExperiences = [
  {
    id: 'exp_1',
    title_tr: 'Web Koordinatörü',
    company_tr: 'Engelsiz Üniversite Topluluğu — OHU',
    desc_tr: 'WordPress altyapısında erişilebilir web içerikleri üretimi ve yönetimi. Gutenberg blok editörü, medya kütüphaneleri ve tipografi ayarları ile topluluk web sitesinin bakımını yapıyorum.',
    date: '2025 - Günümüz'
  },
  {
    id: 'exp_2',
    title_tr: 'UI/UX Tasarımcı (Stajyer)',
    company_tr: 'Tarsus Belediyesi',
    desc_tr: "Nikah Randevu Sistemi projesinde yönetim paneli wireframe'lerini Figma ile tasarladım. GitHub repository süreçlerini başlatarak ekip içi iş birliğini koordine ettim.",
    date: 'Temmuz 2026'
  },
  {
    id: 'exp_3',
    title_tr: 'Hackathon Yarışmacısı — 3. 🏆',
    company_tr: 'Üniversite Hackathonu',
    desc_tr: "DevLens projesiyle dezenformasyonla mücadele temalı hackathonda 3.'lük elde ettik. Chrome eklentisi ve web sitesinden oluşan medya okuryazarlığı aracı geliştirdik.",
    date: 'Ekim - Kasım 2025'
  },
  {
    id: 'edu_1',
    title_tr: 'Bilgisayar Mühendisliği (Devam Ediyor)',
    company_tr: 'Niğde Ömer Halisdemir Üniversitesi',
    desc_tr: '2. sınıf öğrencisiyim. Veri yapıları, algoritmalar, OOP, veritabanı yönetimi ve web teknolojileri alanlarında derinlemesine eğitim alıyorum. AIdea Camp, Türk Telekom AI Kampı ve She-nergy programlarına katıldım.',
    date: '2024 - Günümüz',
    isEducation: true
  }
];

// ─── Translations ──────────────────────────────────
const translations = {
  tr: {
    nav_name: "Tülay Cansu",
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_experience: "Deneyim",
    nav_contact: "İletişim",
    hero_greeting: "Merhaba, Ben",
    hero_name: "Tülay Cansu",
    hero_description: "Bilgisayar Mühendisliği öğrencisi, web geliştirici ve yapay zeka meraklısı. Kod, tasarım ve yapay zekanın kesiştiği noktada yaratıcı çözümler üretiyorum.",
    hero_cta_projects: "Projelerimi Gör",
    hero_cta_contact: "İletişime Geç",
    about_label: "Hakkımda",
    about_title: "Kim Olduğumu Keşfedin",
    about_subtitle: "Yazılım mühendisliği prensipleri, algoritmik düşünce ve temiz kod anlayışıyla dijital dünyada iz bırakıyorum.",
    about_heading: "Bilgisayar Mühendisi Adayı & Web Geliştirici",
    about_p1: "Niğde Ömer Halisdemir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Akademik eğitimim boyunca bilgisayar bilimlerinin teorik temellerinden, modern web teknolojilerine ve yapay zeka uygulamalarına kadar geniş bir yelpazede yetkinlik geliştirdim.",
    about_p2: "Çalışmalarımda yazılım mühendisliği prensiplerini, algoritmik düşünce yapısını ve temiz kod yazımını (clean code) merkeze alıyorum. Takım çalışmasına büyük önem veriyor, Git ve GitHub üzerinden çoklu geliştirici süreçlerini başarıyla yönetiyorum.",
    projects_label: "Projeler",
    projects_title: "Çalışmalarım",
    projects_subtitle: "Akademik ve profesyonel süreçte geliştirdiğim projeler.",
    filter_all: "Tümü",
    filter_web: "Web",
    filter_software: "Yazılım",
    filter_design: "Tasarım",
    cat_web: "Web Geliştirme",
    cat_software: "Yazılım",
    cat_design: "UI/UX Tasarım",
    project_demo: "Demo",
    exp_label: "Deneyim",
    exp_title: "Yolculuğum",
    exp_subtitle: "Kariyer yolculuğumda edindiğim deneyimler, eğitimler ve başarılar.",
    exp_present: "Günümüz",
    contact_label: "İletişim",
    contact_title: "Birlikte Çalışalım",
    contact_subtitle: "Bir projeniz mi var? Bir fikriniz mi? Hadi birlikte hayata geçirelim.",
    contact_heading: "Bana Ulaşın",
    contact_text: "Yeni projeler, staj fırsatları, iş birlikleri veya sadece merhaba demek için bana ulaşabilirsiniz. En kısa sürede dönüş yapacağım.",
    contact_location_label: "Konum",
    contact_location: "Niğde, Türkiye",
    form_name: "İsim",
    form_email: "Email",
    form_subject: "Konu",
    form_message: "Mesaj",
    form_submit: "Mesaj Gönder",
    footer_rights: "Tüm hakları saklıdır.",
  },
  en: {
    nav_name: "Tülay Cansu",
    nav_about: "About",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact",
    hero_greeting: "Hello, I'm",
    hero_name: "Tülay Cansu",
    hero_description: "Computer Engineering student, web developer, and AI enthusiast. I create innovative solutions at the intersection of code, design, and artificial intelligence.",
    hero_cta_projects: "View My Projects",
    hero_cta_contact: "Get In Touch",
    about_label: "About Me",
    about_title: "Discover Who I Am",
    about_subtitle: "Leaving my mark in the digital world with software engineering principles, algorithmic thinking, and clean code.",
    about_heading: "Computer Engineering Student & Web Developer",
    about_p1: "I'm a 2nd year Computer Engineering student at Niğde Ömer Halisdemir University. Throughout my academic journey, I've developed competencies spanning from theoretical foundations of computer science to modern web technologies and AI applications.",
    about_p2: "I center my work around software engineering principles, algorithmic thinking, and clean code practices. I value teamwork highly and successfully manage multi-developer workflows through Git and GitHub.",
    projects_label: "Projects",
    projects_title: "My Work",
    projects_subtitle: "Projects I've developed during my academic and professional journey.",
    filter_all: "All",
    filter_web: "Web",
    filter_software: "Software",
    filter_design: "Design",
    cat_web: "Web Development",
    cat_software: "Software",
    cat_design: "UI/UX Design",
    project_demo: "Demo",
    exp_label: "Experience",
    exp_title: "My Journey",
    exp_subtitle: "Experiences, certifications, and achievements throughout my career journey.",
    exp_present: "Present",
    contact_label: "Contact",
    contact_title: "Let's Work Together",
    contact_subtitle: "Have a project? An idea? Let's bring it to life together.",
    contact_heading: "Get In Touch",
    contact_text: "Feel free to reach out for new projects, internship opportunities, collaborations, or just to say hello. I'll get back to you as soon as possible.",
    contact_location_label: "Location",
    contact_location: "Niğde, Turkey",
    form_name: "Name",
    form_email: "Email",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Send Message",
    footer_rights: "All rights reserved.",
  }
};

// ─── State ─────────────────────────────────────────
let currentLang = localStorage.getItem('portfolio-lang') || 'tr';
let portfolioProjects = [];
let portfolioExperiences = [];
let portfolioSkills = [];

// ─── Security: HTML Escaping ──────────────────────
function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ─── Security: URL Validation ──────────────────────
function isValidUrl(str) {
  if (!str || typeof str !== 'string') return false;
  const trimmed = str.trim();
  if (trimmed === '' || trimmed === '#') return false;
  // Only allow http, https, and data: (for uploaded images)
  try {
    const url = new URL(trimmed);
    return ['http:', 'https:', 'data:'].includes(url.protocol);
  } catch {
    return false;
  }
}

function sanitizeUrl(str) {
  return isValidUrl(str) ? str.trim() : '';
}

// ─── Footer: always show the current year ─────────
function applyFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

// ─── Shared: GitHub icon (used in project cards + modal) ──
const GITHUB_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;

// ─── DOM Ready ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadPortfolioData();
});

// ─── Portfolio Data Loading ────────────────────────
async function loadPortfolioData() {
  let data = null;

  // 1. Try fetch from data/portfolio-data.json
  try {
    const response = await fetch('data/portfolio-data.json');
    if (response.ok) {
      data = await response.json();
    }
  } catch (e) {
    // fetch failed — fall through
  }

  // 2. Fallback to localStorage
  if (!data) {
    try {
      const saved = localStorage.getItem('portfolio-data');
      if (saved) {
        data = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('localStorage parse error:', e);
    }
  }

  // Apply data
  applyPortfolioData(data);

  // Render all dynamic sections
  renderSkills();
  renderProjects();
  renderExperiences();
  applyFooterYear();

  // Init interactions
  initLanguage();
  initNavigation();
  initScrollAnimations();
  initProjectFilter();
  initProjectModal();
  initContactForm();
  applySocialLinks(data);
  applyContactEmail(data);
  applyProfilePhoto(data);
}

function applyPortfolioData(data) {
  if (data) {
    // Merge translation overrides
    if (data.tr) Object.assign(translations.tr, data.tr);
    if (data.en) Object.assign(translations.en, data.en);

    portfolioProjects = (data.projects && data.projects.length > 0)
      ? data.projects
      : JSON.parse(JSON.stringify(defaultProjects));

    portfolioExperiences = (data.experiences && data.experiences.length > 0)
      ? data.experiences
      : [...defaultExperiences];

    portfolioSkills = (data.skills && data.skills.length > 0)
      ? data.skills
      : [...defaultSkills];
  } else {
    portfolioProjects = JSON.parse(JSON.stringify(defaultProjects));
    portfolioExperiences = [...defaultExperiences];
    portfolioSkills = [...defaultSkills];
  }
}

function applySocialLinks(data) {
  const map = {
    socialGithub: data?.meta?.github,
    socialLinkedin: data?.meta?.linkedin,
    socialTwitter: data?.meta?.twitter
  };
  Object.entries(map).forEach(([id, url]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isValidUrl(url)) {
      el.href = sanitizeUrl(url);
      el.style.display = '';
    } else {
      // No real link set yet — hide instead of leaving a dead "#" link visible
      el.style.display = 'none';
    }
  });
}

function applyContactEmail(data) {
  if (!data || !data.meta || !data.meta.email) return;
  const el = document.getElementById('contactEmail');
  if (el) el.textContent = escapeHtml(data.meta.email);
}

function applyProfilePhoto(data) {
  const avatar = document.getElementById('profileAvatar');
  if (!avatar) return;
  const photoUrl = data?.meta?.profilePhoto;
  if (photoUrl && isValidUrl(photoUrl)) {
    avatar.innerHTML = `<img src="${sanitizeUrl(photoUrl)}" alt="Profil fotoğrafı" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">`;
    avatar.style.fontSize = '0';
  }
}

// ─── Skills Rendering (Dynamic) ─────────────────────
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = portfolioSkills.map((skill, index) => {
    const delay = Math.min(index, 9) * 0.05;
    return `<span class="skill-tag reveal" style="transition-delay:${delay}s"><span class="skill-icon" aria-hidden="true">${escapeHtml(skill.emoji || '🔹')}</span> ${escapeHtml(skill.name)}</span>`;
  }).join('');

  // Observe for scroll animations
  observeReveals(grid);
}

// ─── Project Rendering (Dynamic) ────────────────────
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const lang = currentLang;
  const catLabel = {
    web: translations[lang].cat_web || 'Web Geliştirme',
    software: translations[lang].cat_software || 'Yazılım',
    design: translations[lang].cat_design || 'UI/UX Tasarım'
  };

  const githubSvg = GITHUB_SVG;

  grid.innerHTML = portfolioProjects.map((proj, index) => {
    const title = lang === 'tr' ? (proj.title_tr || '') : (proj.title_en || proj.title_tr || '');
    const desc  = lang === 'tr' ? (proj.desc_tr  || '') : (proj.desc_en  || proj.desc_tr  || '');
    const cat   = catLabel[proj.category] || catLabel.web;
    const techs = (proj.tech || '').split(',').map(t => t.trim()).filter(Boolean);
    const delayClass = index % 3 === 1 ? ' reveal-delay-1' : index % 3 === 2 ? ' reveal-delay-2' : '';

    // Cover image or placeholder
    const imgHtml = (proj.image && isValidUrl(proj.image))
      ? `<img src="${escapeHtml(proj.image)}" alt="${escapeHtml(title)}" loading="lazy">`
      : `<div class="project-placeholder" aria-hidden="true">
           <span class="project-placeholder-icon">${proj.category === 'design' ? '🎨' : proj.category === 'software' ? '⚙️' : '🌐'}</span>
         </div>`;

    // Overlay links
    const overlayLinks = [];
    if (isValidUrl(proj.github)) {
      overlayLinks.push(`<a href="${escapeHtml(sanitizeUrl(proj.github))}" class="project-link project-link-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub'da görüntüle" onclick="event.stopPropagation()">${githubSvg} GitHub</a>`);
    }
    if (isValidUrl(proj.demo)) {
      overlayLinks.push(`<a href="${escapeHtml(sanitizeUrl(proj.demo))}" class="project-link project-link-demo" target="_blank" rel="noopener noreferrer" aria-label="Demo görüntüle" onclick="event.stopPropagation()">🔗 Demo</a>`);
    }

    return `
      <article class="project-card reveal${delayClass}" data-category="${escapeHtml(proj.category || 'web')}" data-project="${escapeHtml(proj.id)}">
        <div class="project-image">
          ${imgHtml}
          ${overlayLinks.length ? `<div class="project-overlay">${overlayLinks.join('')}</div>` : ''}
        </div>
        <div class="project-info">
          <span class="project-category">${escapeHtml(cat)}</span>
          <h3 class="project-title">${escapeHtml(title)}</h3>
          <p class="project-description">${escapeHtml(desc)}</p>
          <span class="project-more-hint">${lang === 'tr' ? 'Devamını gör' : 'See more'} →</span>
          <div class="project-tech">
            ${techs.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      </article>
    `;
  }).join('');

  observeReveals(grid);
}

// ─── Experience Rendering (Dynamic) ─────────────────
function renderExperiences() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = portfolioExperiences
    .filter(exp => exp.title_tr)
    .map((exp, index) => {
      const delayClass = index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : '';
      return `
        <div class="timeline-item reveal${delayClass}">
          <div class="timeline-dot" aria-hidden="true"></div>
          <div class="timeline-card">
            <span class="timeline-date">${escapeHtml(exp.date || '')}</span>
            <h3 class="timeline-title">${escapeHtml(exp.title_tr || '')}</h3>
            <p class="timeline-company">${escapeHtml(exp.company_tr || '')}</p>
            <p class="timeline-description">${escapeHtml(exp.desc_tr || '')}</p>
          </div>
        </div>
      `;
    }).join('');

  setTimeout(() => observeReveals(container), 50);
}

// ─── Shared: Observe scroll reveals ────────────────
function observeReveals(container) {
  const reveals = container.querySelectorAll('.reveal:not(.active)');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }
}

// ─── Language System ───────────────────────────────
function initLanguage() {
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update form placeholders
  const nameInput = document.getElementById('name');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  if (nameInput) nameInput.placeholder = lang === 'tr' ? 'İsminiz' : 'Your Name';
  if (subjectInput) subjectInput.placeholder = lang === 'tr' ? 'Konu başlığı' : 'Subject';
  if (messageInput) messageInput.placeholder = lang === 'tr' ? 'Mesajınızı yazın...' : 'Write your message...';

  // Update active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-checked', isActive);
  });

  // Re-render dynamic sections
  renderProjects();
  renderExperiences();
}

// ─── Navigation ────────────────────────────────────
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const links = navLinks.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  mobileToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    mobileToggle.classList.toggle('open');
    navOverlay.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navOverlay.addEventListener('click', closeMobileMenu);
  links.forEach(link => link.addEventListener('click', closeMobileMenu));

  function closeMobileMenu() {
    navLinks.classList.remove('open');
    mobileToggle.classList.remove('open');
    navOverlay.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Scroll spy
  const sections = document.querySelectorAll('.section, .hero');
  const scrollSpy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 });

  sections.forEach(section => scrollSpy.observe(section));
}

// ─── Scroll Animations ────────────────────────────
function initScrollAnimations() {
  observeReveals(document);
}

// ─── Project Filter (event delegation) ───────────
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('projectsGrid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cards = grid.querySelectorAll('.project-card');
      let visibleIndex = 0;
      cards.forEach((card) => {
        const category = card.dataset.category;
        const shouldShow = filter === 'all' || category === filter;

        if (shouldShow) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          const delay = visibleIndex * 80;
          setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, delay);
          visibleIndex++;
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ─── Project Detail Modal ──────────────────────────
function initProjectModal() {
  const overlay = document.getElementById('projectModalOverlay');
  const closeBtn = document.getElementById('projectModalClose');
  const grid = document.getElementById('projectsGrid');
  if (!overlay || !grid) return;

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card[data-project]');
    if (!card) return;
    if (e.target.closest('.project-link')) return;
    openProjectModal(card.dataset.project);
  });

  closeBtn.addEventListener('click', closeProjectModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeProjectModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeProjectModal();
  });
}

function openProjectModal(projectId) {
  const proj = portfolioProjects.find(p => p.id === projectId);
  const overlay = document.getElementById('projectModalOverlay');
  if (!proj || !overlay) return;

  const lang = currentLang;
  const title    = lang === 'tr' ? (proj.title_tr || '') : (proj.title_en || proj.title_tr || '');
  const desc     = lang === 'tr' ? (proj.desc_tr  || '') : (proj.desc_en  || proj.desc_tr  || '');
  const catLabel = { web: translations[lang].cat_web, software: translations[lang].cat_software, design: translations[lang].cat_design };
  const cat      = catLabel[proj.category] || proj.category;
  const techs    = (proj.tech || '').split(',').map(t => t.trim()).filter(Boolean);

  document.getElementById('projectModalCategory').textContent = cat;
  document.getElementById('projectModalTitle').textContent = title;
  document.getElementById('projectModalDesc').textContent = desc;
  document.getElementById('projectModalTech').innerHTML = techs.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');

  // Gallery
  const images = (proj.images && proj.images.length > 0)
    ? proj.images.filter(isValidUrl)
    : (isValidUrl(proj.image) ? [proj.image] : []);

  const galleryEl = document.querySelector('.project-modal-gallery');
  const track = document.getElementById('projectModalTrack');
  const dotsContainer = document.getElementById('projectModalDots');

  if (images.length > 0) {
    track.innerHTML = images.map((src, i) => `
      <div class="project-modal-slide"><img src="${escapeHtml(src)}" alt="${escapeHtml(title)} ${i + 1}" loading="lazy"></div>
    `).join('');
  } else {
    const icon = proj.category === 'design' ? '🎨' : proj.category === 'software' ? '⚙️' : '🌐';
    track.innerHTML = `<div class="project-modal-slide"><div class="project-placeholder" style="height:240px;display:flex;align-items:center;justify-content:center;font-size:4rem;">${icon}</div></div>`;
  }
  track.scrollLeft = 0;

  galleryEl.classList.toggle('single-image', images.length <= 1);

  if (images.length > 1) {
    dotsContainer.innerHTML = images.map((_, i) => `
      <button type="button" class="project-modal-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Görsel ${i + 1}"></button>
    `).join('');
  } else {
    dotsContainer.innerHTML = '';
  }

  const goToSlide = (index) => {
    track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
  };

  dotsContainer.querySelectorAll('.project-modal-dot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(Number(dot.dataset.index)));
  });

  const updateActiveDot = () => {
    const index = Math.round(track.scrollLeft / track.clientWidth);
    dotsContainer.querySelectorAll('.project-modal-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };
  track.onscroll = updateActiveDot;

  document.getElementById('projectModalPrev').onclick = () => {
    goToSlide(Math.max(0, Math.round(track.scrollLeft / track.clientWidth) - 1));
  };
  document.getElementById('projectModalNext').onclick = () => {
    goToSlide(Math.min(images.length - 1, Math.round(track.scrollLeft / track.clientWidth) + 1));
  };

  // Links
  const linksContainer = document.getElementById('projectModalLinks');
  const linkButtons = [];
  if (isValidUrl(proj.github)) {
    linkButtons.push(`
      <a href="${escapeHtml(sanitizeUrl(proj.github))}" class="project-link project-link-github" target="_blank" rel="noopener noreferrer">
        ${GITHUB_SVG}
        GitHub
      </a>
    `);
  }
  if (isValidUrl(proj.demo)) {
    linkButtons.push(`
      <a href="${escapeHtml(sanitizeUrl(proj.demo))}" class="project-link project-link-demo" target="_blank" rel="noopener noreferrer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
        Demo
      </a>
    `);
  }
  linksContainer.innerHTML = linkButtons.join('');

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const overlay = document.getElementById('projectModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ─── Contact Form (Formspree) ──────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  // Rate limiting: prevent spam
  let lastSubmitTime = 0;
  const SUBMIT_COOLDOWN = 10000; // 10 seconds

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Rate limit check
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
      showFormFeedback(
        currentLang === 'tr'
          ? 'Lütfen birkaç saniye bekleyip tekrar deneyin.'
          : 'Please wait a few seconds before trying again.',
        'error'
      );
      return;
    }

    const name    = form.querySelector('#name').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !subject || !message) {
      showFormFeedback(
        currentLang === 'tr' ? 'Lütfen tüm alanları doldurun.' : 'Please fill in all fields.',
        'error'
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormFeedback(
        currentLang === 'tr' ? 'Lütfen geçerli bir email adresi girin.' : 'Please enter a valid email address.',
        'error'
      );
      return;
    }

    // Max length validation
    if (name.length > 100 || email.length > 200 || subject.length > 200 || message.length > 5000) {
      showFormFeedback(
        currentLang === 'tr' ? 'Lütfen karakter sınırını aşmayın.' : 'Please respect the character limits.',
        'error'
      );
      return;
    }

    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    const spanEl = submitBtn.querySelector('[data-i18n]');
    const originalText = spanEl.textContent;
    spanEl.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';

    try {
      const response = await fetch('https://formspree.io/f/mdekzqnk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      lastSubmitTime = Date.now();

      if (response.ok) {
        showFormFeedback(
          currentLang === 'tr'
            ? 'Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım. ✨'
            : "Your message has been sent successfully! I'll get back to you soon. ✨",
          'success'
        );
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        const errMsg = data?.errors?.map(err => err.message).join(', ') || '';
        showFormFeedback(
          currentLang === 'tr'
            ? `Mesaj gönderilemedi. ${errMsg || 'Lütfen tekrar deneyin.'}`
            : `Message could not be sent. ${errMsg || 'Please try again.'}`,
          'error'
        );
      }
    } catch (err) {
      showFormFeedback(
        currentLang === 'tr'
          ? 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.'
          : 'Connection error. Please check your internet connection.',
        'error'
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      spanEl.textContent = originalText;
    }
  });
}

function showFormFeedback(message, type) {
  const existing = document.querySelector('.form-feedback');
  if (existing) existing.remove();

  const feedback = document.createElement('div');
  feedback.className = `form-feedback form-feedback-${type}`;
  feedback.textContent = message;
  feedback.style.cssText = `
    padding: 12px 20px; border-radius: 8px; font-size: 0.875rem;
    font-weight: 500; margin-top: 8px; animation: feedbackIn 0.3s ease-out;
    ${type === 'success'
      ? 'background: rgba(34, 197, 94, 0.1); color: #22c55e; border: 1px solid rgba(34, 197, 94, 0.2);'
      : 'background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2);'
    }
  `;

  const form = document.getElementById('contactForm');
  form.appendChild(feedback);

  setTimeout(() => {
    feedback.style.animation = 'feedbackOut 0.3s ease-out forwards';
    setTimeout(() => feedback.remove(), 300);
  }, 5000);
}

// ─── Inject dynamic styles ────────────────────────
const injectedStyles = document.createElement('style');
injectedStyles.textContent = `
  @keyframes feedbackIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes feedbackOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-8px); }
  }
  .project-placeholder {
    width: 100%; height: 100%; min-height: 180px;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, rgba(var(--accent-rgb, 99,102,241), 0.08) 0%, rgba(var(--accent-rgb, 99,102,241), 0.04) 100%);
  }
  .project-placeholder-icon { font-size: 3rem; opacity: 0.5; }
`;
document.head.appendChild(injectedStyles);