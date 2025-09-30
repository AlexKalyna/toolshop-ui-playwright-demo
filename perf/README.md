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

## Structure

- scripts/ – entrypoint scripts defining scenarios
- lib/ – shared helpers (env, http, checks, data)
- config/ – thresholds and scenario profiles

Keep loads modest for public endpoints; for meaningful results, test against local/staging only.
