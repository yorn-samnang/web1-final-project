import { initSearchFilter } from './features/searchFilter.js';

document.addEventListener('DOMContentLoaded', () => {
  initSearchFilter({
    buttonSelector: '.filter-pill[data-filter]',
    cardSelector: '.food-photo-card[data-category]',
    activeClass: 'active',
    allValue: 'all',
  });
});
