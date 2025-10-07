import { check } from 'k6';

export function checkOkJson(res, expected = 200, tags) {
  return check(
    res,
    {
      'status OK': r => r.status === expected,
      'is JSON': r => (r.headers['Content-Type'] || '').includes('application/json')
    },
    tags
  );
}

export function checkMessage(res, message, tags) {
  return check(
    res,
    {
      'message matches': r => {
        try {
          const data = r.json();
          return data && data.message === message;
        } catch {
          return false;
        }
      }
    },
    tags
  );
}
