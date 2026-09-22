import { jest } from '@jest/globals';

async function loadMainScript() {
  jest.resetModules();
  await import('../js/main.js');
  document.dispatchEvent(new Event('DOMContentLoaded'));
}

describe('site navigation', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = jest.fn();
    document.body.innerHTML = `
      <button class="nav-toggle" aria-expanded="false">Menu</button>
      <nav class="nav-pill site-nav"><a href="#places">Places</a></nav>
      <main id="places"></main>
    `;
  });

  test('opens and closes the mobile navigation menu', async () => {
    await loadMainScript();

    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-pill');

    toggle.click();
    expect(nav.classList.contains('menu-open')).toBe(true);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');

    toggle.click();
    expect(nav.classList.contains('menu-open')).toBe(false);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  test('closes the mobile navigation after a navigation link is clicked', async () => {
    await loadMainScript();

    const toggle = document.querySelector('.nav-toggle');
    const navLink = document.querySelector('.site-nav a');
    const nav = document.querySelector('.nav-pill');

    toggle.click();
    navLink.click();

    expect(nav.classList.contains('menu-open')).toBe(false);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
