import { cleanEnv, str, url } from 'envalid';
import process from 'node:process';
import { URL } from 'node:url';

// Core environment variables (required for all tests)
export const env = cleanEnv(process.env, {
  BASE_URL: url(),
  API_URL: url(),
  ADMIN_EMAIL: str(),
  ADMIN_PASSWORD: str(),
  ADMIN_USERNAME: str(),
  CUSTOMER_EMAIL: str(),
  CUSTOMER_PASSWORD: str(),
  CUSTOMER_USERNAME: str()
});

// Optional buggy URLs (only for demo tests)
export const getBugUrls = () => {
  const bugBaseUrl = process.env.BUG_BASE_URL;
  const bugApiUrl = process.env.BUG_API_URL;

  if (bugBaseUrl && bugApiUrl) {
    try {
      new URL(bugBaseUrl);
      new URL(bugApiUrl);
      return {
        BASE_URL: bugBaseUrl,
        API_URL: bugApiUrl
      };
    } catch {
      // Invalid URLs, fall back to normal URLs
    }
  }

  return {
    BASE_URL: env.BASE_URL,
    API_URL: env.API_URL
  };
};
