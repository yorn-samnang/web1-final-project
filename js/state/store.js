export class StorageError extends Error {
  constructor(message, { cause } = {}) {
    super(message, { cause });
    this.name = 'StorageError';
  }
}

function storage() {
  return window.localStorage;
}

/** Reads a JSON value from localStorage, returning the supplied fallback when it is absent. */
export function getStoredValue(key, fallback = null) {
  try {
    const value = storage().getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (cause) {
    throw new StorageError(`Unable to read "${key}" from local storage.`, { cause });
  }
}

/** Stores a JSON-serializable value in localStorage and returns that value. */
export function setStoredValue(key, value) {
  try {
    storage().setItem(key, JSON.stringify(value));
    return value;
  } catch (cause) {
    throw new StorageError(`Unable to save "${key}" to local storage.`, { cause });
  }
}

export function removeStoredValue(key) {
  try {
    storage().removeItem(key);
  } catch (cause) {
    throw new StorageError(`Unable to remove "${key}" from local storage.`, { cause });
  }
}

/** Applies an update function to a stored value and persists its result. */
export function updateStoredValue(key, fallback, update) {
  return setStoredValue(key, update(getStoredValue(key, fallback)));
}
