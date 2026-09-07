/* ============================================================
   BALAMUGUNDAN I — Portfolio Script
   ============================================================ */

/* ── 1. DATA SOURCES ────────────────────────────────────────── */

const projects = [
  {
    id: "dustbin",
    index: "01",
    name: "Dustbin Project",
    tagline: "Smarter waste management, rethought.",
    problem: "Traditional waste bins provide zero visibility into capacity levels or fill trends, causing untimely overflows and inefficient collection routes.",
    solution: "An innovative smart dustbin concept engineered to monitor waste levels and optimize collection schedules for cleaner environments.",
    tech: ["Embedded Concepts", "System Architecture", "Problem Solving"],
    contribution: "Framed the core problem, designed system workflows, and prepared the technical presentation.",
    features: [
      "Real-time waste fill monitoring concept",
      "Optimized municipal / institutional collection workflow",
      "Practical, low-cost architectural design"
    ],
    github: "https://github.com/Balamugundan/Smartbin-Monitor",
    demo: "",
    image: "/projects/dustbin.png"
  },
  {
    id: "mediguard",
    index: "02",
    name: "MediGuard",
    tagline: "Technology in service of proactive healthcare.",
    problem: "Healthcare triage and patient assistance systems frequently struggle with response latency and intelligent data coordination.",
    solution: "An intelligent healthcare concept designed to assist patient workflows, successfully awarded 1st Prize in Paper Presentation.",
    tech: ["Intelligent Systems", "Healthcare Tech", "Technical Presentation"],
    contribution: "Conceived the research hypothesis, structured the architecture, and presented the paper to winning judges.",
    features: [
      "Intelligent patient assistance workflows",
      "Awarded 1st Prize in Paper Presentation",
      "Comprehensive research foundation and healthcare design"
    ],
    github: "",
    demo: "https://mediguard-3.vercel.app/",
    image: "/projects/mediguard.png"
  },
  {
    id: "blockchain-complaint",
    index: "03",
    name: "Blockchain Complaint System",
    tagline: "Transparent complaints, tamper-proof by design.",
    problem: "Institutional grievance channels often lack auditability, transparency, and guaranteed accountability for students.",
    solution: "A blockchain-backed student complaint management system guaranteeing immutable grievance logging and transparent resolution tracking.",
    tech: ["Blockchain", "Web Development", "Smart Workflow"],
    contribution: "Architected the complaint logging process and developed the web-based grievance interface.",
    features: [
      "Immutable and verifiable complaint records",
      "Transparent multi-role tracking (Student / Admin)",
      "Tamper-resistant audit log"
    ],
    github: "https://github.com/Balamugundan/Blockchain-Complaint-System",
    demo: "",
    image: "/projects/blockchain-complaint.png"
  },
  {
    id: "rainwater-harvesting",
    index: "04",
    name: "Rainwater Harvesting",
    tagline: "Technology meets environmental stewardship.",
    problem: "Unpredictable meteorological patterns and poor rainwater catchment management lead to substantial freshwater waste.",
    solution: "A technology-driven concept combining environmental condition sensors with efficient rainwater collection planning.",
    tech: ["Environmental Tech", "Concept Design", "Sensor Systems"],
    contribution: "Researched regional precipitation conditions and formulated the technical catchment model.",
    features: [
      "Condition-responsive catchment logic",
      "Water conservation & storage optimization",
      "Eco-conscious engineering blueprint"
    ],
    github: "https://github.com/Balamugundan/AI-based-Rainwater-Harewesting",
    demo: "",
    image: "/projects/rainwater-harvesting.png"
  },
  {
    id: "kulfi-corner",
    index: "05",
    name: "Kulfi Corner",
    tagline: "A responsive brand showcase, crafted with care.",
    problem: "Traditional local food brands often lack modern, aesthetically appealing, and mobile-ready web presences.",
    solution: "A clean, highly responsive website built to highlight handcrafted kulfi varieties with appetizing visuals and smooth user navigation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    contribution: "Crafted the complete UI design, responsive stylesheet, and interactive catalog.",
    features: [
      "Full cross-device responsive layout",
      "Brand-first visual storytelling",
      "Fast, lightweight loading performance"
    ],
    github: "",
    demo: "https://your-kulficorner-demo.vercel.app",
    image: "/projects/kulfi-corner.png"
  },
  {
    id: "grandshopping",
    index: "06",
    name: "GrandShopping",
    tagline: "A modern webpage project with a clean user interface.",
    problem: "Web interfaces require careful typographic rhythm, creative layouts, and seamless responsiveness across diverse screen sizes.",
    solution: "A modern and visually engaging webpage project designed to showcase clean UI design, creative web styling, and responsive layout techniques.",
    tech: ["HTML5", "CSS3", "JavaScript", "UI / UX Design"],
    contribution: "Structured the layout, designed the component hierarchy, and built responsive interactions.",
    features: [
      "Creative modern webpage layout",
      "Clean UI component hierarchy",
      "Fluid responsive execution across viewport sizes"
    ],
    github: "",
    demo: "https://grand-shopping.vercel.app/",
    image: "/projects/grandshopping.png"
  }
];

/* THREE WINS ONLY — NO DUPLICATE HEADINGS */
const achievements = [
  {
    id: "first-prize",
    rank: "1st",
    title: "FIRST PRIZE",
    detail: "1st Prize &ndash; Paper Presentation (Healthcare &amp; MediGuard Project)",
    countLabel: "3 PHOTOGRAPHS",
    images: [
      { src: "/achievements/first-prize/first-prize-1.jpg", alt: "First Prize Photo 1" },
      { src: "/achievements/first-prize/first-prize-2.jpg", alt: "First Prize Photo 2" },
      { src: "/achievements/first-prize/first-prize-3.jpg", alt: "First Prize Photo 3" }
    ]
  },
  {
    id: "second-prize",
    rank: "2nd",
    title: "SECOND PRIZE",
    detail: "Awarded Second Prize in technical competition.",
    countLabel: "3 PHOTOGRAPHS",
    images: [
      { src: "/achievements/second-prize/second-prize-1.jpg", alt: "Second Prize Photo 1" },
      { src: "/achievements/second-prize/second-prize-2.jpg", alt: "Second Prize Photo 2" },
      { src: "/achievements/second-prize/second-prize-3.jpg", alt: "Second Prize Photo 3" }
    ]
  },
  {
    id: "third-prize",
    rank: "3rd",
    title: "THIRD PRIZE",
    detail: "Awarded Third Prize in technical symposium / event.",
    countLabel: "2 PHOTOGRAPHS",
    images: [
      { src: "/achievements/third-prize/third-prize-1.jpg", alt: "Third Prize Photo 1" },
      { src: "/achievements/third-prize/third-prize-2.jpg", alt: "Third Prize Photo 2" }
    ]
  }
];

const skillCategories = [
  {
    number: "01",
    title: "PROGRAMMING",
    description: "Core languages & computational logic",
    skills: ["C", "C++", "Java", "Python", "JavaScript"]
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description: "Modern web standards, responsive execution & UX design",
    skills: ["HTML5", "CSS3", "Responsive Web Design", "UI / UX Design"]
  },
  {
    number: "03",
    title: "EMERGING TECHNOLOGY",
    description: "Intelligent architectures, ledgers & connected hardware",
    skills: ["Artificial Intelligence", "Blockchain Technology", "Internet of Things (IoT)"]
  },
  {
    number: "04",
    title: "DATA",
    description: "Exploration, pattern analysis & engineering pipelines",
    skills: ["Exploratory Data Analysis (EDA)", "Data Engineering"]
  },
  {
    number: "05",
    title: "TOOLS",
    description: "Version control, collaboration & development environments",
    skills: ["Git", "GitHub", "Visual Studio Code"]
  },
  {
    number: "06",
    title: "PROFESSIONAL SKILLS",
    description: "Stage delivery, structured problem solving & rapid adaptability",
    skills: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Technical Presentation",
      "Quick Learning",
      "Adaptability"
    ]
  }
];

const whatIDo = [
  { title: "BUILD", text: "I turn ideas into working, scalable, and responsive software projects." },
  { title: "SOLVE", text: "I enjoy solving real-world challenges with clean algorithmic and architectural thinking." },
  { title: "LEARN", text: "I continuously explore emerging technologies, tools, and best engineering practices." },
  { title: "CREATE", text: "I design and build visually engaging, intuitive digital interfaces and user experiences." },
  { title: "PARTICIPATE", text: "I actively participate in competitions, tech symposiums, presentations, and events." }
];

const rolesList = ["Tech Enthusiast", "Problem Solver", "Software Developer", "Creative Builder"];

/* ── 2. CINEMATIC INTRO ──────────────────────────────────────── */

function initIntro() {
  const intro = document.getElementById("intro");
  const skipBtn = document.getElementById("introSkip");
  const introName = document.getElementById("introName");

  if (!intro) {
    document.body.classList.add("hero-animated");
    return;
  }

  // Split intro name into character spans for refined stagger animation
  if (introName && !introName.querySelector(".intro-char")) {
    const text = introName.textContent.trim();
    introName.innerHTML = text
      .split("")
      .map((char, i) => `<span class="intro-char" style="--char-i: ${i}">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");
  }

  requestAnimationFrame(() => {
    intro.classList.add("play");
  });

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    document.body.style.overflow = "";
    intro.classList.add("hide");
    
    // Trigger Hero staggered animation as continuous sequence
    document.body.classList.add("hero-animated");

    setTimeout(() => {
      if (intro && intro.parentNode) {
        intro.remove();
      }
    }, 800);
  };

  if (skipBtn) {
    setTimeout(() => { skipBtn.hidden = false; }, 350);
    skipBtn.addEventListener("click", finish);
  }

  document.body.style.overflow = "hidden";
  setTimeout(finish, 2300);
}

/* ── 3. SCROLL PROGRESS BAR ──────────────────────────────────── */

function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");
  if (!progressBar) return;

  let ticking = false;
  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
      progressBar.style.transform = `scaleX(${progress})`;
    }
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  updateProgress();
}

/* ── 4. JOURNEY TIMELINE PROGRESS DRAWING ────────────────────── */

function initJourneyProgress() {
  const track = document.querySelector(".journey-track");
  if (!track) return;

  // Insert progress line inside track if not present
  let line = track.querySelector(".journey-progress-line");
  if (!line) {
    line = document.createElement("div");
    line.className = "journey-progress-line";
    track.appendChild(line);
  }

  const updateJourney = () => {
    const rect = track.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate progress through track
    const startOffset = windowHeight * 0.75;
    const totalTrackHeight = track.offsetHeight;
    const currentScrolled = startOffset - rect.top;
    
    if (currentScrolled <= 0) {
      line.style.height = "0px";
    } else if (currentScrolled >= totalTrackHeight) {
      line.style.height = `${totalTrackHeight}px`;
    } else {
      line.style.height = `${currentScrolled}px`;
    }
  };

  window.addEventListener("scroll", () => {
    requestAnimationFrame(updateJourney);
  }, { passive: true });

  updateJourney();
}

/* ── 5. SUBTLE PARALLAX DEPTH ────────────────────────────────── */

function initParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) {
    return;
  }

  const photoContainer = document.getElementById("profilePhotoContainer");
  const projectCards = document.querySelectorAll(".project-mag");

  let ticking = false;
  const onScroll = () => {
    const scrollY = window.scrollY;

    // Hero Profile subtle depth
    if (photoContainer && scrollY < window.innerHeight * 1.2) {
      photoContainer.style.transform = `translateY(${scrollY * 0.05}px)`;
    }

    // Projects subtle depth
    projectCards.forEach((card) => {
      const img = card.querySelector(".project-mag-img");
      if (!img) return;
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (rect.top - window.innerHeight * 0.5) * 0.035;
        img.style.transform = `translateY(${offset}px)`;
      }
    });

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
}

/* ── 6. HERO PROFILE PHOTO FALLBACK HELPER ──────────────────── */

window.showProfilePlaceholder = function() {
  const img = document.getElementById("profilePhotoImg");
  const ph = document.getElementById("profilePlaceholder");
  if (img) img.style.display = "none";
  if (ph) ph.style.display = "flex";
};

/* ── 7. HERO ROLE ANIMATION ──────────────────────────────────── */

function initRoleAnimation() {
  const el = document.getElementById("roleAnimated");
  if (!el) return;
  let idx = 0;
  setInterval(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(-6px)";
    setTimeout(() => {
      idx = (idx + 1) % rolesList.length;
      el.textContent = rolesList[idx];
      el.style.transform = "translateY(6px)";
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }, 320);
  }, 2600);
}

/* ── 8. EDITORIAL HEADER NAVIGATION ─────────────────────────── */

function initNav() {
  const header = document.getElementById("siteHeader");
  const mobileToggle = document.getElementById("headerMobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("drawerClose");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const gotoButtons = document.querySelectorAll("[data-goto]");
  const desktopNavItems = document.querySelectorAll(".nav-item");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  // Subtle scroll state update
  if (header) {
    const handleScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // Smooth scroll handler with header offset
  gotoButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetId = btn.getAttribute("data-goto");
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 74;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: targetId === "home" ? 0 : offsetPosition,
          behavior: "smooth"
        });
      }
      closeDrawer();
    });
  });

  // Mobile Drawer Open / Close
  const openDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add("open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Scroll spy to highlight active section in navbar
  const sectionIds = ["home", "about", "journey", "skills", "projects", "achievements", "education", "contact"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const currentId = entry.target.id;
        
        desktopNavItems.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("data-goto") === currentId);
        });

        drawerLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("data-goto") === currentId);
        });
      });
    },
    { rootMargin: "-30% 0px -30% 0px" }
  );

  sections.forEach((sec) => observer.observe(sec));
}

/* ── 9. SCROLL REVEALS ───────────────────────────────────────── */

function initReveal() {
  const targets = document.querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .journey-item, .line-draw");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((t) => observer.observe(t));
}

/* ── 9. RENDER SKILLS ────────────────────────────────────────── */

function renderSkills() {
  const wrap = document.getElementById("skillsContainer");
  if (!wrap) return;

  wrap.innerHTML = skillCategories
    .map(
      (cat, catIdx) => `
      <div class="skill-category-row reveal" style="transition-delay: ${catIdx * 60}ms;">
        <div class="skill-cat-header">
          <div class="skill-cat-num-wrap">
            <span class="skill-cat-num">${cat.number}</span>
            <span class="skill-cat-line"></span>
          </div>
          <h3 class="skill-cat-title">${cat.title}</h3>
          <p class="skill-cat-desc">${cat.description}</p>
        </div>
        <div class="skill-cat-items">
          ${cat.skills
            .map(
              (name, pIdx) => `
              <div class="skill-pill" tabindex="0" data-category="${cat.title}" style="transition-delay: ${pIdx * 35}ms;">
                <span class="skill-pill-dot"></span>
                <span class="skill-pill-name">${name}</span>
                <span class="skill-pill-tag">${cat.title}</span>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");

  initReveal();
}

/* ── 10. RENDER WHAT I DO ────────────────────────────────────── */

function renderWhatIDo() {
  const wrap = document.getElementById("whatIDoList");
  if (!wrap) return;
  wrap.innerHTML = whatIDo
    .map(
      (item, i) => `
      <div class="what-row reveal" style="transition-delay: ${i * 70}ms;">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>`
    )
    .join("");
  initReveal();
}

/* ── 11. RENDER PROJECTS (Magazine Alternating Layout) ───────── */

function renderProjects() {
  const wrap = document.getElementById("projectsMagazine");
  if (!wrap) return;

  wrap.innerHTML = projects
    .map((p, i) => {
      const isReverse = i % 2 !== 0;
      const reverseClass = isReverse ? "project-mag--reverse" : "";
      return `
      <div class="project-mag ${reverseClass} reveal" data-project-id="${p.id}">
        <div class="project-mag-image">
          <img 
            src="${p.image}" 
            alt="${p.name} Screenshot" 
            class="project-mag-img"
            loading="lazy"
            onload="const ph = this.parentElement.querySelector('.proj-img-placeholder'); if (ph) ph.remove();"
            onerror="this.onerror=null; const ph = this.parentElement.querySelector('.proj-img-placeholder'); if (ph) ph.style.display='flex'; this.remove();"
          />
          <div class="proj-img-placeholder">
            <span class="proj-num">${p.index}</span>
            <span class="proj-label">${p.name.toUpperCase()}</span>
          </div>
        </div>

        <div class="project-mag-text">
          <span class="project-mag-idx">${p.index} &mdash; CASE STUDY</span>
          <h3 class="project-mag-name">${p.name}</h3>
          <p class="project-mag-tagline">${p.tagline}</p>
          <div class="project-mag-tech">
            ${p.tech.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <div class="project-mag-actions">
            <button class="btn on-light-btn project-mag-btn" data-project-id="${p.id}">
              EXPLORE CASE STUDY &rarr;
            </button>
            ${
              p.demo
                ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn on-light-btn project-code-btn" onclick="event.stopPropagation();">VIEW LIVE &nearr;</a>`
                : (p.github
                    ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn on-light-btn project-code-btn" onclick="event.stopPropagation();">VIEW CODE &nearr;</a>`
                    : "")
            }
          </div>
        </div>
      </div>
      `;
    })
    .join("");

  wrap.querySelectorAll("[data-project-id]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const targetId = el.getAttribute("data-project-id");
      if (targetId) openProjectModal(targetId);
    });
  });

  initReveal();
}

/* ── 12. PROJECT MODAL ───────────────────────────────────────── */

function openProjectModal(id) {
  const p = projects.find((proj) => proj.id === id);
  if (!p) return;

  document.getElementById("modalIndex").textContent = `${p.index} — PROJECT CASE STUDY`;
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalTagline").textContent = p.tagline;

  const img = document.getElementById("modalImage");
  img.src = p.image;
  img.alt = `${p.name} preview`;
  img.onerror = () => {
    img.onerror = null;
    img.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='920' height='517'><rect width='100%' height='100%' fill='#26221C'/><text x='50%' y='50%' fill='#c9a127' font-family='sans-serif' font-size='24' text-anchor='middle' dy='.3em'>${p.name}</text></svg>`);
  };

  document.getElementById("modalProblem").textContent = p.problem;
  document.getElementById("modalSolution").textContent = p.solution;
  document.getElementById("modalContribution").textContent = p.contribution;
  document.getElementById("modalFeatures").innerHTML = p.features.map((f) => `<li>${f}</li>`).join("");
  document.getElementById("modalTech").innerHTML = p.tech.map((t) => `<span>${t}</span>`).join("");

  const links = document.getElementById("modalLinks");
  links.innerHTML = "";
  if (p.demo) {
    links.innerHTML += `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn primary">LIVE DEMO &nearr;</a>`;
  }
  if (p.github) {
    links.innerHTML += `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn primary">VIEW CODE (GITHUB) &nearr;</a>`;
  }

  const overlay = document.getElementById("projectModal");
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add("show"));
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const overlay = document.getElementById("projectModal");
  if (!overlay) return;
  overlay.classList.remove("show");
  document.body.style.overflow = "";
  setTimeout(() => { overlay.hidden = true; }, 300);
}

function initProjectModal() {
  const closeBtn = document.getElementById("modalClose");
  const modal = document.getElementById("projectModal");
  if (closeBtn) closeBtn.addEventListener("click", closeProjectModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.id === "projectModal") closeProjectModal();
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) closeProjectModal();
  });
}

/* ── 11. ACHIEVEMENTS & EDITORIAL GALLERIES ─────────────────── */

let lightboxState = { images: [], index: 0, title: "" };

function renderAchievements() {
  const container = document.getElementById("achievementEditorial");
  if (!container) return;

  container.innerHTML = achievements
    .map((ach) => {
      const isThree = ach.images.length === 3;
      const gridClass = isThree ? "ach-photo-grid--3" : "ach-photo-grid--2";

      const photosHtml = ach.images
        .map(
          (imgObj, pIdx) => `
          <div class="aph" data-ach-id="${ach.id}" data-photo-idx="${pIdx}" tabindex="0" role="button" aria-label="View ${ach.title} Photo ${pIdx + 1}" title="Click to view full photo">
            <img 
              src="${imgObj.src}" 
              alt="${imgObj.alt}" 
              class="aph-img" 
              loading="lazy"
              onerror="this.onerror=null; this.style.display='none'; const ph = this.parentElement.querySelector('.aph-placeholder'); if (ph) ph.style.display='flex';"
            />
            <div class="aph-placeholder" style="display: none;">
              <span class="aph-icon">&#9671;</span>
              <span>${ach.title} &bull; PHOTO ${pIdx + 1}</span>
            </div>
            <div class="aph-overlay">
              <span class="aph-overlay-label">VIEW PHOTO &nearr;</span>
            </div>
          </div>
        `
        )
        .join("");

      return `
        <div class="achievement-block reveal">
          <div class="achievement-block-header">
            <div class="ach-rank">${ach.rank}</div>
            <div class="ach-meta">
              <h3 class="ach-title">${ach.title}</h3>
              <p class="ach-desc">${ach.detail}</p>
            </div>
            <div class="ach-count">${ach.countLabel}</div>
          </div>
          <div class="ach-photo-grid ${gridClass}">
            ${photosHtml}
          </div>
        </div>
      `;
    })
    .join("");

  // Attach click and keydown events for lightbox
  container.querySelectorAll(".aph").forEach((aphEl) => {
    const triggerLightbox = () => {
      const achId = aphEl.getAttribute("data-ach-id");
      const pIdx = parseInt(aphEl.getAttribute("data-photo-idx"), 10) || 0;
      const ach = achievements.find((a) => a.id === achId);
      if (ach) openLightbox(ach, pIdx);
    };

    aphEl.addEventListener("click", triggerLightbox);
    aphEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        triggerLightbox();
      }
    });
  });

  initReveal();
}

/* ── 12. LIGHTBOX HANDLERS ──────────────────────────────────── */

function openLightbox(achievement, startIndex = 0) {
  lightboxState = {
    images: achievement.images,
    index: startIndex,
    title: achievement.title
  };
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  lightbox.hidden = false;
  requestAnimationFrame(() => lightbox.classList.add("show"));
  document.body.style.overflow = "hidden";
  updateLightboxImage();
}

function updateLightboxImage() {
  const img = document.getElementById("lightboxImage");
  const counter = document.getElementById("lightboxCounter");
  if (!img) return;

  img.classList.remove("show");
  const currentObj = lightboxState.images[lightboxState.index];

  setTimeout(() => {
    img.src = currentObj.src;
    img.alt = currentObj.alt || `${lightboxState.title} photo ${lightboxState.index + 1}`;
    img.onerror = () => {
      img.onerror = null;
      img.src =
        "data:image/svg+xml;utf8," +
        encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='880' height='660'><rect width='100%' height='100%' fill='#26221C'/><text x='50%' y='50%' fill='#c9a127' font-family='sans-serif' font-size='22' text-anchor='middle' dy='.3em'>${lightboxState.title} &bull; Photo ${lightboxState.index + 1}</text></svg>`);
    };
    img.classList.add("show");
  }, 120);

  if (counter) {
    counter.textContent = `${lightboxState.title} — ${lightboxState.index + 1} OF ${lightboxState.images.length}`;
  }
}

function lightboxNext() {
  lightboxState.index = (lightboxState.index + 1) % lightboxState.images.length;
  updateLightboxImage();
}

function lightboxPrev() {
  lightboxState.index = (lightboxState.index - 1 + lightboxState.images.length) % lightboxState.images.length;
  updateLightboxImage();
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("show");
  document.body.style.overflow = "";
  setTimeout(() => { lightbox.hidden = true; }, 300);
}

function initLightbox() {
  const closeBtn = document.getElementById("lightboxClose");
  const nextBtn = document.getElementById("lightboxNext");
  const prevBtn = document.getElementById("lightboxPrev");
  const lightbox = document.getElementById("lightbox");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", lightboxNext);
  if (prevBtn) prevBtn.addEventListener("click", lightboxPrev);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (lightbox && !lightbox.hidden) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    }
  });

  // Touch swipe support for mobile
  const stage = document.querySelector(".lightbox-stage");
  if (stage) {
    let touchStartX = null;
    stage.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    stage.addEventListener("touchend", (e) => {
      if (touchStartX === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX;
      if (delta > 45) lightboxPrev();
      if (delta < -45) lightboxNext();
      touchStartX = null;
    }, { passive: true });
  }
}

/* ── 13. CONTACT — COPY EMAIL ────────────────────────────────── */

function initContact() {
  const btn = document.getElementById("copyEmailBtn");
  const label = document.getElementById("copyEmailLabel");
  const email = "balamugundan4@gmail.com";
  if (!btn || !label) return;

  const original = label.textContent;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      label.textContent = "COPIED TO CLIPBOARD!";
    } catch {
      label.textContent = email;
    }
    setTimeout(() => { label.textContent = original; }, 2000);
  });
}

/* ── 14. RESUME FORCED DOWNLOAD HANDLER ──────────────────────── */

function initResumeDownload() {
  const downloadBtns = document.querySelectorAll(".download-resume-btn");
  downloadBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const filename = "resume.html";
      const filePath = btn.getAttribute("href") || "/resume.html";

      try {
        const res = await fetch(filePath);
        if (!res.ok) throw new Error("Fetch failed");
        const blob = await res.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = blobUrl;
        tempLink.download = filename;
        document.body.appendChild(tempLink);
        tempLink.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
          tempLink.remove();
        }, 1000);
      } catch (err) {
        // Fallback for file:// protocol or offline contexts
        const tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = filePath;
        tempLink.setAttribute("download", filename);
        document.body.appendChild(tempLink);
        tempLink.click();
        setTimeout(() => tempLink.remove(), 1000);
      }
    });
  });
}

/* ── 15. INITIALIZATION ──────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  initIntro();
  initScrollProgress();
  initJourneyProgress();
  initParallax();
  initRoleAnimation();
  initNav();
  renderSkills();
  renderProjects();
  renderAchievements();
  renderWhatIDo();
  initProjectModal();
  initLightbox();
  initContact();
  initResumeDownload();
  initReveal();
});
