/**
 * Madhushree Patil - Portfolio
 * Navigation, scroll animations, detail modals
 */

const DETAIL_CONTENT = {
  oscillation: {
    title: 'Oscillation Simulation',
    tag: 'Python · NumPy · Matplotlib · Euler\'s Method | Individual Academic Project',
    bullets: [
      'Built a Python model simulating aircraft wing oscillation as a damped mass-spring system, coupling structural dynamics with an angle-of-attack-dependent lift/drag model (including stall behavior above 15°)',
      'Solved the coupled equations of motion using Euler integration at 100 Hz resolution across a 20-second flight window, with configurable mass, stiffness, and damping parameters',
      'Built a real-time three-panel animation visualizing wing position, lift, and drag simultaneously, making the aerodynamic-structural coupling intuitive rather than purely numerical'
    ],
    images: [
      { src: 'images/oscillation-1-simulation-output.jpg', caption: 'Simulation output: wing position, lift force, and drag force over a 20-second flight window' }
    ]
  },
  'cd-nozzle': {
    title: 'CD Nozzle Propulsion Analysis',
    tag: 'ANSYS Fluent · CFD | 4-Person Team Project – Conference Submission 2024',
    bullets: [
      'Simulated compressible flow through a converging-diverging nozzle in ANSYS Fluent across a range of Nozzle Pressure Ratios (NPR 1.9 to 8.9), using a density-based solver with k-epsilon turbulence modeling',
      'Characterized shock-cell structure and Mach number distribution via numerical schlieren visualization, identifying the transition between under-expanded, correctly expanded, and over-expanded flow regimes',
      'Based on unpublished research; portfolio report is a condensed project summary, not the full manuscript'
    ],
    images: [
      { src: 'images/cdnozzle-3-domain-schematic.jpg', caption: '2D schematic of the CD nozzle simulation domain' },
      { src: 'images/cdnozzle-1-mach-profile.jpg', caption: 'Mach number variation along the nozzle across 5 NPR conditions' },
      { src: 'images/cdnozzle-2-schlieren.jpg', caption: 'Numerical schlieren visualization showing shock structure' }
    ]
  },
  kaalsync: {
    title: 'KaalSync – UX Research & Product Development',
    tag: 'Figma · Google Calendar API · Outlook API | 5-Person Team Project',
    bullets: [
      'Co-led user research with 40+ survey responses and 6 in-depth interviews across student and early-career profiles, identifying that most time-management tool failures stem from a mismatch between what tools demand and what users can realistically maintain',
      'Designed wireframes and mobile/web prototypes for core flows including calendar sync, task management, and a \'Gap Time Detection\' feature that surfaces free time between events and prompts productive use of it',
      'Built a user persona and journey map to guide prioritization, translating research findings (distraction, procrastination, tool-person mismatch) into specific product opportunities'
    ],
    images: [
      { src: 'images/kaalsync-1-gap-detection.jpg', caption: 'Gap Time Detection - smart scheduling prompt' },
      { src: 'images/kaalsync-2-gap-detection-detail.jpg', caption: 'Gap Time Detection, detail view' },
      { src: 'images/kaalsync-3-task-cards.jpg', caption: 'Task management view with calendar integrations' }
    ]
  },
  foldpack: {
    title: 'FoldPack',
    tag: 'CATIA V5 · Product Design & Prototyping | Ongoing 4-Person Team Project',
    bullets: [
      'Led product concept development and ergonomic design as Product & Design Lead on a 4-person cross-functional team (product, marketing, engineering, finance)',
      'Designed the dual-padded grip system and 5-ring multi-bag carrying mechanism, rated to 100 lbs, addressing a gap where no competitor combined padded grip, shoulder strap, and integrated bag storage under $10',
      'Conducted customer needs analysis across fulfilled, unfulfilled, and latent needs to inform product requirements'
    ],
    images: [
      { src: 'images/foldpack-real-1-carrying.jpg', caption: 'Prototype in use, carrying multiple bags' },
      { src: 'images/foldpack-real-2-prototype-top.jpg', caption: '3D-printed prototype, top view' },
      { src: 'images/foldpack-real-3-worn-front.jpg', caption: 'Shoulder-strap carry mode' },
      { src: 'images/foldpack-real-4-prototype-angle.jpg', caption: 'Prototype, angled view' },
      { src: 'images/foldpack-real-5-worn-side.jpg', caption: 'Shoulder-strap carry mode, side view' },
      { src: 'images/foldpack-real-6-3dprint-1.jpg', caption: '3D printing the prototype' },
      { src: 'images/foldpack-real-7-3dprint-2.jpg', caption: '3D printing in progress' }
    ]
  },
  'financial-plan': {
    title: 'Financial Business Plan – My Story My Book',
    tag: 'Excel · Power BI · Financial Modeling | Strategic Planning Project',
    bullets: [
      'Built a 5-year financial model for a personalized children\'s book business, projecting revenue growth from $6,000 (Year 1) to $30,000 (Year 5) with zero external debt',
      'Modeled unit economics, break-even analysis, and 3 core financial statements (income statement, balance sheet, cash flow) with quarterly detail for Year 1',
      'Built an interactive Power BI dashboard translating the financial model into a visual summary of revenue, EBITDA margin, net income, and cash balance for stakeholder review'
    ],
    images: [
      { src: 'images/mystorymybook-1-dashboard.jpg', caption: 'Power BI dashboard tracking revenue, EBITDA, and cash position across Year 1-5' }
    ]
  },
  'tesla-dashboard': {
    title: 'Tesla Service Operations Analytics',
    tag: 'Python · Streamlit · Plotly',
    bullets: [
      'Simulated 5,000 synthetic service appointments across 6 real Tesla North America service center markets (Service Center, Mobile Service, Collision Center channels)',
      'Built an interactive Streamlit dashboard with filters by service center, channel, and appointment type, surfacing the relationship between technician utilization and cancellation rates',
      'Identified that Alignment appointments show the highest technician utilization alongside the highest cancellation rate, the strongest actionable finding in the dataset',
      'Deployed publicly via Streamlit Community Cloud, version-controlled on GitHub'
    ],
    links: [
      { href: 'https://tesla-service-analytics-tqsemu4whgfug6ae5u9ymy.streamlit.app/#tesla-service-operations-dashboard4', text: 'Live Dashboard' },
      { href: 'https://github.com/mpatil2703/tesla-service-analytics', text: 'GitHub Repository' }
    ],
    images: [
      { src: 'images/tesla-1-overview.jpg', caption: 'Dashboard overview - KPI cards and cancellation rate by service center' },
      { src: 'images/tesla-4-cancellation-trend.jpg', caption: 'Cancellation rate trend as technician utilization rises' },
      { src: 'images/tesla-5-appointment-type-heatmap.jpg', caption: 'Cancellation rate by appointment type × utilization bucket' },
      { src: 'images/tesla-2-channel-breakdown.jpg', caption: 'Appointment mix and cancellation rate by channel' },
      { src: 'images/tesla-3-utilization-bucket.jpg', caption: 'Cancellation rate by technician utilization bucket' }
    ]
  },
  'shock-wave': {
    title: 'Investigating Dynamics of Shock Wave–Flame Interaction',
    tag: 'Springer Nature · ICTAC 2024 · KSCST Funded',
    bullets: [
      'Led experimental design, data collection, and validation for combustion dynamics research; presented findings at ICTAC 2024, IIT Madras as 1 of 2 teams among 16 participating countries with undergraduate representation',
      'Secured ₹50,000 government funding from Karnataka State Council for Science & Technology (KSCST); awarded 1st place Best Research Project across departmental competition field of 15+ submissions',
      'Managed full research lifecycle across 8 months spanning 3 phases (experimental design, data collection, peer review) culminating in international publication in Springer Nature journal'
    ],
    links: [
      { href: 'https://link.springer.com/article/10.1007/s10973-025-14781-w', text: 'View paper on Springer' }
    ],
    images: [
      { src: 'images/shockflame-cert-ictac.jpg', caption: 'ICTAC 2024 participation certificate' },
      { src: 'images/shockflame-1-schlieren.jpg', caption: 'Numerical schlieren of shock-flame interaction, S-shaped shockwave' },
      { src: 'images/shockflame-2-vortex-flow.jpg', caption: 'Vortex flow structure within the flame' },
      { src: 'images/shockflame-3-flame-morphology.jpg', caption: 'Flame morphology evolution post-shock interaction' },
      { src: 'images/shockflame-4-boundary-schematic.jpg', caption: 'Computational domain and boundary conditions' },
      { src: 'images/shockflame-5-grid-dependency.jpg', caption: 'Grid dependency validation plot' }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initSmoothScroll();
  initDetailModals();
  initExperienceMore();
  initFooterYear();
});

function initFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initExperienceMore() {
  document.querySelectorAll('.experience-more').forEach(details => {
    const sum = details.querySelector('.experience-more-summary');
    if (!sum) return;
    const labelClosed = details.getAttribute('data-label-closed') || 'Click for more';
    const labelOpen = details.getAttribute('data-label-open') || 'Show less';
    sum.textContent = labelClosed;
    details.addEventListener('toggle', () => {
      sum.textContent = details.open ? labelOpen : labelClosed;
    });
  });
}

function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  toggle?.addEventListener('click', () => {
    const isOpen = links?.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  links?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-aos]');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function initDetailModals() {
  const modal = document.getElementById('detail-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalTag = document.getElementById('modal-tag');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalTitle || !modalTag || !modalBody) return;

  const openModal = (id) => {
    const data = DETAIL_CONTENT[id];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalTag.textContent = data.tag;
    modalTag.style.display = 'block';

    let bodyHtml = '';
    if (data.meta) {
      bodyHtml += `<p class="modal-meta">${escapeHtml(data.meta)}</p>`;
    }
    if (data.sections) {
      data.sections.forEach(sec => {
        bodyHtml += `<h4 class="modal-sub">${escapeHtml(sec.title)}</h4>`;
        bodyHtml += '<ul class="modal-bullets">';
        sec.bullets.forEach(b => {
          bodyHtml += `<li>${escapeHtml(b)}</li>`;
        });
        bodyHtml += '</ul>';
      });
    } else if (data.bullets && data.bullets.length > 0) {
      bodyHtml += '<ul class="modal-bullets">';
      data.bullets.forEach(b => {
        bodyHtml += `<li>${escapeHtml(b)}</li>`;
      });
      bodyHtml += '</ul>';
    }
    if (data.links && data.links.length > 0) {
      bodyHtml += '<div class="modal-links">';
      data.links.forEach(l => {
        bodyHtml += `<a href="${escapeHtml(l.href)}" target="_blank" rel="noopener noreferrer" class="publication-paper-link">${escapeHtml(l.text)} →</a>`;
      });
      bodyHtml += '</div>';
    }

    if (data.images && data.images.length > 0) {
      bodyHtml += '<div class="modal-gallery" id="modal-gallery" aria-label="Project images and reports">';
      bodyHtml += data.images.map(img => {
        const src = typeof img === 'string' ? img : img.src;
        const caption = typeof img === 'string' ? '' : (img.caption || img.alt || '');
        const figcaption = caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : '';
        return `<figure class="modal-gallery-item"><img src="${escapeHtml(src)}" alt="${escapeHtml(caption || 'Project image')}">${figcaption}</figure>`;
      }).join('');
      bodyHtml += '</div>';
    } else {
      bodyHtml += '<div class="modal-gallery" id="modal-gallery" aria-label="Project images and reports" style="display:none"></div>';
    }

    modalBody.innerHTML = bodyHtml;

    modal.classList.add('modal-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove('modal-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const setupClickable = (selector) => {
    document.querySelectorAll(selector).forEach(el => {
      const id = el.getAttribute('data-detail');
      if (!id) return;

      const handler = (e) => {
        if (e.target.closest('a.publication-paper-link')) return;
        if (e.key && e.key !== 'Enter' && e.key !== ' ') return;
        if (e.key) e.preventDefault();
        openModal(id);
      };

      el.addEventListener('click', handler);
      el.addEventListener('keydown', handler);
    });
  };

  setupClickable('.project-card-clickable');

  modal.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  modal.querySelector('.modal-container')?.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  modal.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
}
