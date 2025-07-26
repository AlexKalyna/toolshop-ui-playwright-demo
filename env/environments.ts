import { env } from './index';
import process from 'node:process';

// Environment-specific configurations
export const environments = {
  // Default environment (existing logic)
  default: {
    BASE_URL: env.BASE_URL,
    API_URL: env.API_URL
  },

  // Sprint5 with bugs environment
  sprint5WithBugs: {
    BASE_URL: process.env.SPRINT5_BASE_URL || env.BASE_URL,
    API_URL: process.env.SPRINT5_API_URL || env.API_URL
  },

  // Demo environment
  demo: {
    BASE_URL: process.env.DEMO_BASE_URL || env.BASE_URL,
    API_URL: process.env.DEMO_API_URL || env.API_URL
  }
};

// Helper function to get environment config
export function getEnvironmentConfig(environment: keyof typeof environments = 'default') {
  return environments[environment];
}
