import http from 'k6/http';

export function authHeaders(token) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

export function get(url, params = {}, token) {
  const res = http.get(url, { headers: authHeaders(token), tags: params.tags });
  return res;
}

export function post(url, body, params = {}, token) {
  const res = http.post(url, JSON.stringify(body), { headers: authHeaders(token), tags: params.tags });
  return res;
}
