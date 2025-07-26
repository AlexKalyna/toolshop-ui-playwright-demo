import { env, getBugUrls as getBugUrlsFromEnv } from '../env';

// Helper to get the appropriate URLs based on test type
export const getTestUrls = (useBugUrls: boolean = false) => {
  if (useBugUrls) {
    return getBugUrlsFromEnv();
  }

  return {
    BASE_URL: env.BASE_URL,
    API_URL: env.API_URL
  };
};

// Helper for bug-specific tests
export const getBugUrls = () => getTestUrls(true);
