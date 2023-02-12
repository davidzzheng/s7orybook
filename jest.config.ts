import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
};

export default config;
