// AIPhone OS Knowledge Base — Navigation
// Top nav = sections, Left sidebar = pages within current section

const NAV = [
  { section: 'Overview', items: [
    { title: 'Vision & Thesis', href: 'index.html' },
    { title: 'Founding Story', href: 'founding-story.html' },
    { title: 'System Architecture', href: 'stack.html' },
    { title: 'Android Module Map', href: 'android-architecture.html' },
    { title: 'vs iOS / Android', href: 'comparison.html' },
    { title: 'vs AI App Generators', href: 'competitors.html' },
  ]},
  { section: 'Decisions', items: [
    { title: 'Why Linux Kernel', href: 'why-linux.html' },
    { title: 'Runtime (V8/Chromium)', href: 'runtime.html' },
    { title: 'Why No Native Apps', href: 'no-native-apps.html' },
    { title: 'OS Foundation', href: 'foundation.html' },
    { title: 'GrapheneOS Base', href: 'grapheneos.html' },
    { title: 'AOSP Build Research', href: 'aosp-build.html' },
    { title: 'All Decisions', href: 'decisions.html' },
  ]},
  { section: 'App Platform', items: [
    { title: 'Trusted Web Apps', href: 'twa.html' },
    { title: 'Capability Tiers', href: 'capabilities.html' },
    { title: 'Broker API', href: 'broker.html' },
    { title: 'App Lifecycle', href: 'lifecycle.html' },
    { title: 'UX Open Questions', href: 'ux-gaps.html' },
  ]},
  { section: 'AI', items: [
    { title: 'AI Architecture', href: 'ai.html' },
    { title: 'App Generation', href: 'generation.html' },
    { title: 'On-Device AI', href: 'on-device-ai.html' },
  ]},
  { section: 'Security', items: [
    { title: 'Security Model', href: 'security.html' },
    { title: 'Audit & Permissions', href: 'audit.html' },
  ]},
  { section: 'Business', items: [
    { title: 'Business & Market', href: 'business.html' },
    { title: 'Risks', href: 'risks.html' },
    { title: 'Legal & Regulatory', href: 'legal.html' },
  ]},
  { section: 'Engineering', items: [
    { title: 'OS Build Paths', href: 'os-paths.html' },
    { title: 'Build Phases', href: 'buildpath.html' },
    { title: 'Research & Links', href: 'research.html' },
  ]},
];

function initNav() {
  const current = location.pathname.split('/').pop() || 'index.html';

  // Find which section the current page belongs to
  let currentSection = NAV[0];
  for (const section of NAV) {
    if (section.items.some(item => item.href === current)) {
      currentSection = section;
      break;
    }
  }

  // === TOP NAV ===
  const topNav = document.createElement('nav');
  topNav.className = 'top-nav';
  topNav.innerHTML = `<a class="top-nav-logo" href="index.html">AIPhone OS</a>` +
    NAV.map(section => {
      const active = section === currentSection ? ' active' : '';
      const firstPage = section.items[0].href;
      return `<a class="top-nav-link${active}" href="${firstPage}">${section.section}</a>`;
    }).join('');
  document.body.prepend(topNav);

  // === SIDEBAR ===
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  let html = `<div class="sidebar-section-title">${currentSection.section}</div>`;
  currentSection.items.forEach(item => {
    const active = current === item.href ? ' active' : '';
    html += `<a class="sidebar-link${active}" href="${item.href}">${item.title}</a>`;
  });

  html += `<div class="sidebar-meta">
    <p>v0.5 &middot; 27 pages</p>
    <p class="wn">* working name &mdash; requires trademark clearance</p>
  </div>`;

  sidebar.innerHTML = html;

  // === MOBILE MENU ===
  const menuBtn = document.querySelector('.menu-btn');
  const overlay = document.querySelector('.sidebar-overlay');
  if (menuBtn) {
    menuBtn.onclick = () => { sidebar.classList.toggle('open'); overlay.classList.toggle('open'); };
    if (overlay) overlay.onclick = () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); };
  }
}

document.addEventListener('DOMContentLoaded', initNav);
