import { getJestConfig } from "@storybook/test-runner";

import jest from "./jest.config";

module.exports = {
  ...getJestConfig(),
  ...jest,
};
