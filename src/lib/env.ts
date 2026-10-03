import { z } from "zod";

/**
 * Typed environment variables (Vite).
 * Only VITE_* keys are available in the client bundle.
 */
const envSchema = z.object({
  MODE: z.enum(["development", "production", "test"]).default("development"),
  VITE_APP_NAME: z.string().default("PhysioQueue"),
  VITE_API_BASE_URL: z.string().url().optional(),
  VITE_ENABLE_ANALYTICS: z
    .enum(["true", "false"])
    .default("false")
    .transform((value) => value === "true"),
  VITE_SENTRY_DSN: z.string().optional(),
  VITE_FEATURE_DARK_MODE: z
    .enum(["true", "false"])
    .default("true")
    .transform((value) => value === "true"),
});

export type AppEnv = z.infer<typeof envSchema>;

function readEnv(): AppEnv {
  const candidate = {
    MODE: import.meta.env.MODE,
    VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
    VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    VITE_ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS ?? "false",
    VITE_SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
    VITE_FEATURE_DARK_MODE: import.meta.env.VITE_FEATURE_DARK_MODE ?? "true",
  };

  return envSchema.parse(candidate);
}

export const env = readEnv();
