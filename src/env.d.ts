/// <reference types="vite/client" />

declare module "tailwind-config" {
  const config: Config;
  export default config;
}

declare module "tailwindcss/resolveConfig" {
  import type { Config } from "tailwindcss";

  declare function resolveConfig(config: Config): Config;
  export = resolveConfig;
}
