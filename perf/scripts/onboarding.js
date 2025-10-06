/* global __ENV */
import { sleep } from 'k6';
import { getEnv } from '../lib/env.js';
import { get, post } from '../lib/http.js';
import { checkOkJson, checkMessage } from '../lib/checks.js';

const SHORT = __ENV.SHORT_RUN === '1' || __ENV.SHORT_RUN === 'true';

export const options = {
  scenarios: {
    onboarding: {
      executor: 'shared-iterations',
      vus: SHORT ? 2 : 5,
      iterations: SHORT ? 4 : 50,
      tags: { scenario: 'onboarding' }
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

  // Login
  const loginTags = { endpoint: 'login', scenario: 'onboarding' };
  const loginRes = post(
    `${env.API_URL}users/login`,
    {
      username: env.CUSTOMER_USERNAME || env.CUSTOMER_EMAIL,
      email: env.CUSTOMER_EMAIL,
      password: env.CUSTOMER_PASSWORD
    },
    { tags: loginTags }
  );
  const loginOk = checkOkJson(loginRes, 200, loginTags);

  let token;
  try {
    token = loginRes.json().access_token || loginRes.json().token;
  } catch {
    /* empty */
  }
  if (!loginOk) return;

  // Explore products
  const productsTags = { endpoint: 'products', scenario: 'onboarding' };
  const productsRes = get(`${env.API_URL}products?search=goggles`, { tags: productsTags }, token);
  const productsOk = checkOkJson(productsRes, 200, productsTags);
  if (!productsOk) return;

  // Payment check
  const paymentTags = { endpoint: 'payment_check', scenario: 'onboarding' };
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
