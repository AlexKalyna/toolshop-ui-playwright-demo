# Performance (k6) Suite

This folder contains k6 performance demo scripts designed to run against your local Dockerized frontend/backend.

- Pure JS (no TypeScript) to avoid impacting build, lint, and Sonar.
- Reads BASE_URL and API_URL from environment variables (aligns with your .env).
- Safe, low-load defaults suitable for demos.

## Prerequisites

- k6 installed: https://k6.io/docs/get-started/installation/
- Local app running (Docker): ensure API_URL and BASE_URL are reachable.

## Environment

Copy `.perf.env.sample` to `.perf.env` and export before running:

```bash
cp perf/.perf.env.sample perf/.perf.env
export $(grep -v '^#' perf/.perf.env | xargs -0 echo)
```

Or provide variables inline:

```bash
BASE_URL=http://localhost:4200/ API_URL=http://localhost:8091/ k6 run perf/scripts/smoke-login-products-payment.js
```

## Run

```bash
k6 run perf/scripts/smoke-login-products-payment.js
```

Optional baseline scenario:

```bash
k6 run perf/scripts/baseline.js
```

Other realistic scenarios:

```bash
# Anonymous browse mix
k6 run perf/scripts/browse.js

# Authenticated quick purchase
k6 run perf/scripts/quick-purchase.js

# New user onboarding + explore
k6 run perf/scripts/onboarding.js
```

### NPM scripts

Convenience commands (use project defaults for BASE_URL and API_URL):

```bash
# Short runs (stability checks)
npm run perf:browse:short
npm run perf:quick:short

# Full runs
npm run perf:browse
npm run perf:quick

# All
npm run perf:all:short
npm run perf:all
```

### Note on onboarding

The local API currently doesn’t support the registration flow used in `onboarding.js`, and login behavior within this scenario is inconsistent. We’ve deferred onboarding locally. Use the `browse` and `quick-purchase` scenarios for reliable runs.

## Structure

- scripts/ – entrypoint scripts defining scenarios
- lib/ – shared helpers (env, http, checks, data)
- config/ – thresholds and scenario profiles

Keep loads modest for public endpoints; for meaningful results, test against local/staging only.
