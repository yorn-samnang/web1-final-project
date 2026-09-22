import { request } from './apiClient.js';

const REVIEWS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

function reviewUrl(reviewId) {
  return `${REVIEWS_API_URL}/${encodeURIComponent(reviewId)}`;
}

function jsonOptions(method, review) {
  return {
    method,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(review),
  };
}

/** Returns demo reviews from JSONPlaceholder. */
export async function getReviews({ limit = 10 } = {}) {
  const parameters = new URLSearchParams({ _limit: String(limit) });
  return request(`${REVIEWS_API_URL}?${parameters}`);
}

/** Creates a demo review. JSONPlaceholder echoes it but does not persist it. */
export function createReview(review) {
  return request(REVIEWS_API_URL, jsonOptions('POST', review));
}

/** Updates a demo review. JSONPlaceholder does not persist this change. */
export function updateReview(reviewId, review) {
  return request(reviewUrl(reviewId), jsonOptions('PUT', review));
}

/** Deletes a demo review. JSONPlaceholder does not persist this change. */
export async function deleteReview(reviewId) {
  await request(reviewUrl(reviewId), { method: 'DELETE' });
  return { id: reviewId, deleted: true };
}
