/** Returns the first element that matches a selector within an optional scope. */
export function select(selector, scope = document) {
  return scope.querySelector(selector);
}

/** Returns all matching elements as an array, making array methods safe to use. */
export function selectAll(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

/** Creates an element with common content, data, and accessibility properties. */
export function createElement(tagName, options = {}) {
  const { attributes = {}, className, dataset = {}, text } = options;
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  Object.entries(dataset).forEach(([name, value]) => {
    element.dataset[name] = value;
  });

  return element;
}

/** Replaces all children of an element. */
export function clearElement(element) {
  element.replaceChildren();
}

/** Updates text content without treating text as HTML. */
export function setText(element, text) {
  element.textContent = text;
}
