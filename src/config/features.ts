/**
 * Feature flags configuration
 *
 * Features can be toggled using environment variables with the NEXT_PUBLIC_ prefix.
 * These are evaluated at build time and embedded in the client bundle.
 *
 * Environment files are loaded automatically by Next.js:
 * - .env.development - loaded when running 'npm run dev' (development mode)
 * - .env.production - loaded when running 'npm run build' (production mode)
 * - .env.local - loaded in all environments, highest priority (gitignored)
 *
 * To enable a feature, set the environment variable to "true" (case-insensitive).
 * Any other value (or unset) will use the default for the current environment.
 */

const isDevelopment = process.env.NODE_ENV === "development";

const isFeatureEnabled = (
  envVar: string | undefined,
  defaultValue: boolean = false
): boolean => {
  if (envVar !== undefined) {
    return envVar.toLowerCase() === "true";
  }
  return defaultValue;
};

export const features = {
  /**
   * Enable/disable the blog feature
   * Default: enabled in development, disabled in production
   * Override: Set NEXT_PUBLIC_ENABLE_BLOG=true or false in environment files
   */
  blog: isFeatureEnabled(
    process.env.NEXT_PUBLIC_ENABLE_BLOG,
    isDevelopment // Default: true in dev, false in prod
  ),
} as const;

export type FeatureName = keyof typeof features;
