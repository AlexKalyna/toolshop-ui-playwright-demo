/* global __ENV */
// Minimal env resolution for k6 scripts. Do not import app code to avoid build/lint coupling.
export function getEnv() {
  const BASE_URL = __ENV.BASE_URL;
  const API_URL = __ENV.API_URL;
  if (!BASE_URL || !API_URL) {
    throw new Error('BASE_URL and API_URL are required. Export them from .perf.env or pass inline.');
  }
  return {
    BASE_URL,
    API_URL,
    ADMIN_EMAIL: __ENV.ADMIN_EMAIL,
    ADMIN_PASSWORD: __ENV.ADMIN_PASSWORD,
    CUSTOMER_EMAIL: __ENV.CUSTOMER_EMAIL,
    CUSTOMER_PASSWORD: __ENV.CUSTOMER_PASSWORD
  };
}
