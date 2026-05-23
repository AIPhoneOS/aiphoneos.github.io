// Shared navigation for AIPhone OS Knowledge Base
const NAV = [
  { section: 'Overview', items: [
    { title: 'Vision & Thesis', href: 'index.html' },
    { title: 'System Architecture', href: 'stack.html' },
    { title: 'vs iOS / Android', href: 'comparison.html' },
  ]},
  { section: 'App Platform', items: [
    { title: 'Trusted Web Apps', href: 'twa.html' },
    { title: 'Capability Tiers', href: 'capabilities.html' },
    { title: 'Broker API', href: 'broker.html' },
    { title: 'App Lifecycle', href: 'lifecycle.html' },
  ]},
  { section: 'AI System', items: [
    { title: 'AI Architecture', href: 'ai.html' },
    { title: 'App Generation', href: 'generation.html' },
  ]},
  { section: 'Security', items: [
    { title: 'Security Model', href: 'security.html' },
    { title: 'Audit & Permissions', href: 'audit.html' },
  ]},
  { section: 'Business', items: [
    { title: 'Business & Market', href: 'business.html' },
    { title: 'Risks', href: 'risks.html' },
  ]},
  { section: 'Engineering', items: [
    { title: 'OS Build Paths', href: 'os-paths.html' },
    { title: 'OS Foundation', href: 'foundation.html' },
    { title: 'Decisions', href: 'decisions.html' },
    { title: 'Build Path', href: 'buildpath.html' },
    { title: 'Research', href: 'research.html' },
  ]},
];

function initNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  let html = `<div class="logo"><h1>AIPhone OS</h1><p>Knowledge Base v0.3</p><div class="wn">* working name — requires trademark clearance</div></div>`;

  NAV.forEach(section => {
    html += `<div class="nav-section"><div class="nav-section-title">${section.section}</div>`;
    section.items.forEach(item => {
      const active = current === item.href ? ' active' : '';
      html += `<a class="nav-link${active}" href="${item.href}">${item.title}</a>`;
    });
    html += '</div>';
  });

  sidebar.innerHTML = html;

  // Mobile menu
  const menuBtn = document.querySelector('.menu-btn');
  const overlay = document.querySelector('.sidebar-overlay');
  if (menuBtn) {
    menuBtn.onclick = () => { sidebar.classList.toggle('open'); overlay.classList.toggle('open'); };
    overlay.onclick = () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); };
  }
}

document.addEventListener('DOMContentLoaded', initNav);
