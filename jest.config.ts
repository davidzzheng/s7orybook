import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/mocks/**"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              useBuiltins: true,
              runtime: "automatic",
            },
          },
        },
      },
    ],
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};

export default config;
