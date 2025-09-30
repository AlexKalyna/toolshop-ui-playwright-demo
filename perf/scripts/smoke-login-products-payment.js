import { sleep } from 'k6';
import { getEnv } from '../lib/env.js';
import { get, post } from '../lib/http.js';
import { checkOkJson, checkMessage } from '../lib/checks.js';

export const options = {
  vus: 1,
  duration: '1m',
  thresholds: {
    http_req_failed: ['rate==0'],
    http_req_duration: ['p(95)<800'],
    'checks{endpoint:login}': ['rate>0.99'],
    'checks{endpoint:products}': ['rate>0.99'],
    'checks{endpoint:payment_check}': ['rate>0.99']
  }
};

export default function () {
  const env = getEnv();

  // Login
  const loginRes = post(
    `${env.API_URL}users/login`,
    {
      username: env.CUSTOMER_USERNAME || env.CUSTOMER_EMAIL,
      email: env.CUSTOMER_EMAIL,
      password: env.CUSTOMER_PASSWORD
    },
    { tags: { endpoint: 'login', scenario: 'smoke' } }
  );
  checkOkJson(loginRes);

  let token;
  try {
    token = loginRes.json().access_token || loginRes.json().token;
  } catch {
    // ignore parse errors; checks will fail accordingly
  }

  // Products
  const productsRes = get(`${env.API_URL}products`, { tags: { endpoint: 'products', scenario: 'smoke' } }, token);
  checkOkJson(productsRes);

  // Payment check
  const paymentRes = post(
    `${env.API_URL}payment/check`,
    {
      amount: 1,
      currency: 'USD',
      method: 'Credit Card'
    },
    { tags: { endpoint: 'payment_check', scenario: 'smoke' } },
    token
  );
  checkOkJson(paymentRes);
  checkMessage(paymentRes, 'Payment was successful');

  sleep(1);
}
