#!/bin/bash
set -e
npm ci --legacy-peer-deps
npm run update:snapshots
npm run test 