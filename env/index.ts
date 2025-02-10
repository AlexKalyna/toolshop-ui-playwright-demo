import { cleanEnv, str, url } from 'envalid';

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
