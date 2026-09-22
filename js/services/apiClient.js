/**
 * Shared HTTP utilities for Kamsan service modules.
 * This module deliberately knows nothing about page elements or features.
 */
export class ApiError extends Error {
  constructor(message, { status, statusText, body } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}

export async function request(url, options = {}) {
  const response = await fetch(url, options);
  const contentType = response.headers.get('content-type') || '';
  const body = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    throw new ApiError(`Request failed with status ${response.status}.`, {
      status: response.status,
      statusText: response.statusText,
      body,
    });
  }

  return body;
}
