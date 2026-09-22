import { createElement, select, selectAll, setText } from '../js/utils/dom.js';
import {
  getStoredValue,
  removeStoredValue,
  setStoredValue,
  updateStoredValue,
} from '../js/state/store.js';
import { isRating, validateReview } from '../js/utils/validate.js';

describe('DOM utilities', () => {
  test('creates safe element content and selects matching elements', () => {
    const card = createElement('article', {
      className: 'destination-card',
      text: '<b>Kampot</b>',
      attributes: { 'aria-label': 'Destination' },
      dataset: { destination: 'kampot' },
    });
    document.body.replaceChildren(card, document.createElement('article'));

    expect(select('.destination-card')).toBe(card);
    expect(selectAll('article')).toHaveLength(2);
    expect(card.textContent).toBe('<b>Kampot</b>');
    expect(card.dataset.destination).toBe('kampot');

    setText(card, 'Kampot, Cambodia');
    expect(card.textContent).toBe('Kampot, Cambodia');
  });
});

describe('validation utilities', () => {
  test('accepts a complete review and rejects invalid ratings', () => {
    expect(
      validateReview({
        name: 'Sokha',
        destination: 'kampot',
        rating: 5,
        comment: 'A peaceful riverside destination.',
      })
    ).toEqual({ isValid: true, errors: {} });
    expect(isRating(6)).toBe(false);
    expect(validateReview({}).errors).toMatchObject({
      name: expect.any(String),
      rating: expect.any(String),
    });
  });
});

describe('storage utilities', () => {
  beforeEach(() => localStorage.clear());

  test('persists, updates, and removes JSON values', () => {
    setStoredValue('kamsan:favorites', ['kampot']);
    expect(getStoredValue('kamsan:favorites', [])).toEqual(['kampot']);

    updateStoredValue('kamsan:favorites', [], (favorites) => [...favorites, 'koh-rong']);
    expect(getStoredValue('kamsan:favorites', [])).toEqual(['kampot', 'koh-rong']);

    removeStoredValue('kamsan:favorites');
    expect(getStoredValue('kamsan:favorites', [])).toEqual([]);
  });
});
