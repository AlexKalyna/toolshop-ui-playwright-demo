import { cleanEnv, str, url } from 'envalid';
import process from 'node:process';

export const env = cleanEnv(process.env, {
  BASE_URL: url(),
  API_URL: url(),
  BUG_BASE_URL: url(),
  BUG_API_URL: url(),
  ADMIN_EMAIL: str(),
  ADMIN_PASSWORD: str(),
  ADMIN_USERNAME: str(),
  CUSTOMER_EMAIL: str(),
  CUSTOMER_PASSWORD: str(),
  CUSTOMER_USERNAME: str()
});
