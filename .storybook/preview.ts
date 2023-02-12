import { initialize, mswDecorator } from "msw-storybook-addon";

import "../src/index.css";

initialize();

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
