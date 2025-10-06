/* global __ENV */
import { sleep } from 'k6';
import { getEnv } from '../lib/env.js';
import { get, post } from '../lib/http.js';
import { checkOkJson, checkMessage } from '../lib/checks.js';

const SHORT = __ENV.SHORT_RUN === '1' || __ENV.SHORT_RUN === 'true';

export const options = {
  scenarios: {
    quick_purchase: {
      executor: 'ramping-vus',
      startVUs: SHORT ? 1 : 1,
      stages: SHORT
        ? [
            { duration: '10s', target: 3 },
            { duration: '20s', target: 5 },
            { duration: '10s', target: 1 }
          ]
        : [
            { duration: '2m', target: 5 },
            { duration: '3m', target: 10 },
            { duration: '2m', target: 1 }
          ],
      tags: { scenario: 'quick_purchase' }
    }
  },
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

  const loginTags = { endpoint: 'login', scenario: 'quick_purchase' };
  const loginRes = post(
    `${env.API_URL}users/login`,
    {
      username: env.CUSTOMER_USERNAME || env.CUSTOMER_EMAIL || 'customer@practicesoftwaretesting.com',
      email: env.CUSTOMER_EMAIL || 'customer@practicesoftwaretesting.com',
      password: env.CUSTOMER_PASSWORD || 'welcome01'
    },
    { tags: loginTags }
  );
  const loginOk = checkOkJson(loginRes, 200, loginTags);

  let token;
  try {
    token = loginRes.json().access_token || loginRes.json().token;
  } catch {
    token = undefined;
  }
  if (!loginOk) return;

  const productsTags = { endpoint: 'products', scenario: 'quick_purchase' };
  const productsRes = get(`${env.API_URL}products`, { tags: productsTags }, token);
  const productsOk = checkOkJson(productsRes, 200, productsTags);
  if (!productsOk) return;

  const paymentTags = { endpoint: 'payment_check', scenario: 'quick_purchase' };
  const paymentRes = post(
    `${env.API_URL}payment/check`,
    {
      amount: 1,
      currency: 'USD',
      method: 'Credit Card'
    },
    { tags: paymentTags },
    token
  );
  checkOkJson(paymentRes, 200, paymentTags);
  checkMessage(paymentRes, 'Payment was successful', paymentTags);

  sleep(1);
}
