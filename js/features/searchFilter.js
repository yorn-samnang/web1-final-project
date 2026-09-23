import { select, selectAll } from '../utils/dom.js';

/**
 * Connects a group of filter buttons to a collection of destination cards.
 *
 * The default selectors match the destinations page, while the options make
 * the feature usable by any page with matching data attributes.
 *
 * @param {object} [options]
 * @param {Document | Element} [options.root=document] Element to search within.
 * @param {string} [options.buttonSelector='.filter-btn[data-region]'] Filter button selector.
 * @param {string} [options.cardSelector='.dest-card[data-region]'] Destination card selector.
 * @param {string} [options.noResultsSelector='#no-results'] No-results message selector.
 * @param {string} [options.activeClass='active'] Active button class name.
 * @param {string} [options.allValue='all'] Value that displays every card.
 * @returns {{ filterByRegion: (region: string) => number, destroy: () => void }}
 */
export function initSearchFilter({
  root = document,
  buttonSelector = '.filter-btn[data-region]',
  cardSelector = '.dest-card[data-region]',
  noResultsSelector = '#no-results',
  activeClass = 'active',
  allValue = 'all',
} = {}) {
  const buttons = selectAll(buttonSelector, root);
  const cards = selectAll(cardSelector, root);
  const noResults = select(noResultsSelector, root);

  const filterByRegion = (region) => {
    const normalizedRegion = region || allValue;
    let visibleCount = 0;

    cards.forEach((card) => {
      const cardValue = card.dataset.region || card.dataset.category;
      const matches = normalizedRegion === allValue || cardValue === normalizedRegion;
      card.hidden = !matches;

      if (matches) {
        visibleCount += 1;
      }
    });

    buttons.forEach((button) => {
      const buttonValue = button.dataset.region || button.dataset.filter;
      const isActive = buttonValue === normalizedRegion;
      button.classList.toggle(activeClass, isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    if (noResults) {
      noResults.hidden = visibleCount !== 0;
    }

    return visibleCount;
  };

  const handleFilterClick = (event) => {
    const value = event.currentTarget.dataset.region || event.currentTarget.dataset.filter;
    filterByRegion(value);
  };

  buttons.forEach((button) => {
    button.addEventListener('click', handleFilterClick);
    button.setAttribute('aria-pressed', String(button.classList.contains(activeClass)));
  });

  return {
    filterByRegion,
    destroy() {
      buttons.forEach((button) => button.removeEventListener('click', handleFilterClick));
    },
  };
}
