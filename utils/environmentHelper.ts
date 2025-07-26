import { env } from '../env';

// Helper to get the appropriate URLs based on test type
export const getTestUrls = (useBugUrls: boolean = false) => {
  if (useBugUrls && env.BUG_BASE_URL && env.BUG_API_URL) {
    return {
      BASE_URL: env.BUG_BASE_URL,
      API_URL: env.BUG_API_URL
    };
  }

  return {
    BASE_URL: env.BASE_URL,
    API_URL: env.API_URL
  };
};

// Helper for bug-specific tests
export const getBugUrls = () => getTestUrls(true);
