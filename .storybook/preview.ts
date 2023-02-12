import { initialize, mswDecorator } from "msw-storybook-addon";

import "../src/index.css";

initialize();

export const decorators = [mswDecorator];
