/* global __ENV */
import { sleep } from 'k6';
import { getEnv } from '../lib/env.js';
import { get } from '../lib/http.js';
import { checkOkJson } from '../lib/checks.js';

const queries = ['', '?search=gloves', '?search=goggles'];

const SHORT = __ENV.SHORT_RUN === '1' || __ENV.SHORT_RUN === 'true';
const DEMO_RAMP = __ENV.DEMO_RAMP === '1' || __ENV.DEMO_RAMP === 'true';

export const options = DEMO_RAMP
  ? {
      scenarios: {
        browse: {
          executor: 'ramping-arrival-rate',
          startRate: 1,
          timeUnit: '1s',
          preAllocatedVUs: SHORT ? 2 : 5,
          maxVUs: SHORT ? 5 : 20,
          stages: SHORT
            ? [
                { duration: '10s', target: 2 },
                { duration: '20s', target: 2 },
                { duration: '10s', target: 0 }
              ]
            : [
                { duration: '1m', target: 5 },
                { duration: '3m', target: 5 },
                { duration: '1m', target: 0 }
              ],
          tags: { scenario: 'browse' }
        }
      },
      thresholds: {
        http_req_failed: ['rate==0'],
        http_req_duration: ['p(95)<800'],
        'checks{endpoint:products}': ['rate>0.99']
      }
    }
  : {
      scenarios: {
        browse: {
          executor: 'constant-arrival-rate',
          rate: 2, // 2 req/s
          timeUnit: '1s',
          duration: SHORT ? '20s' : '6m',
          preAllocatedVUs: SHORT ? 1 : 2,
          maxVUs: SHORT ? 5 : 10,
          tags: { scenario: 'browse' }
        }
      },
      thresholds: {
        http_req_failed: ['rate==0'],
        http_req_duration: ['p(95)<800'],
        'checks{endpoint:products}': ['rate>0.99']
      }
    };

export default function () {
  const env = getEnv();
  const q = queries[Math.floor(Math.random() * queries.length)];
  const url = `${env.API_URL}products${q}`;
  const tags = { endpoint: 'products', scenario: 'browse' };
  const res = get(url, { tags });
  checkOkJson(res, 200, tags);
  sleep(0.5);
}
