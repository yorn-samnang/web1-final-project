import { initSearchFilter } from './features/searchFilter.js';

document.addEventListener('DOMContentLoaded', () => {
  initSearchFilter({
    buttonSelector: '.filter-btn[data-region]',
    cardSelector: '.dest-card[data-region]',
    noResultsSelector: '#no-results',
    activeClass: 'active',
    allValue: 'all',
  });

  // Only Phnom Penh detail page exists for now; keep other cards view-only.
  document.querySelectorAll('.dest-card-link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href !== 'destination-phnom-penh.html') {
      link.classList.add('is-view-only');
      link.setAttribute('aria-disabled', 'true');
      link.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }
  });
});
