import { initSearchFilter } from './features/searchFilter.js';

document.addEventListener('DOMContentLoaded', () => {
  initSearchFilter({
    buttonSelector: '.filter-btn[data-filter]',
    cardSelector: 'section[data-category]',
    noResultsSelector: '#no-results',
  });

  const cards = document.querySelectorAll('.place-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
