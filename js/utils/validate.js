export function required(value) {
  return String(value ?? '').trim().length > 0;
}

export function hasMinimumLength(value, minimum) {
  return String(value ?? '').trim().length >= minimum;
}

export function isRating(value, { minimum = 1, maximum = 5 } = {}) {
  const rating = Number(value);
  return Number.isInteger(rating) && rating >= minimum && rating <= maximum;
}

/**
 * Validates the review fields planned for the Reviews feature.
 * It returns messages rather than changing the page, so the feature owns its UI.
 */
export function validateReview({ name, destination, rating, comment } = {}) {
  const errors = {};

  if (!required(name)) {
    errors.name = 'Please enter your name.';
  }

  if (!required(destination)) {
    errors.destination = 'Please choose a destination.';
  }

  if (!isRating(rating)) {
    errors.rating = 'Please select a rating from 1 to 5.';
  }

  if (!hasMinimumLength(comment, 10)) {
    errors.comment = 'Your comment must be at least 10 characters.';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}
