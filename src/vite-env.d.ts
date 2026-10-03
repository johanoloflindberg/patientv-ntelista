/// <reference types="vite/client" />

declare module "*.css";

interface ImportMetaEnv {
  readonly MODE: string;
  readonly VITE_APP_NAME?: string;
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_ENABLE_ANALYTICS?: string;
  readonly VITE_SENTRY_DSN?: string;
  readonly VITE_FEATURE_DARK_MODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
