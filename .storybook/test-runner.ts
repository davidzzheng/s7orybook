import { getStoryContext, TestRunnerConfig } from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { injectAxe, checkA11y, configureAxe } from "axe-playwright";

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

const config: TestRunnerConfig = {
  setup: async () => {
    expect.extend({ toMatchImageSnapshot });
  },
  preRender: async (page) => {
    await injectAxe(page);
  },
  postRender: async (page, context) => {
    const storyContext = await getStoryContext(page, context);

    // If you want to take screenshot of multiple browsers, use
    // page.context().browser().browserType().name() to get the browser name to prefix the file name

    page.context().browser()?.browserType().name();

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });

    // a11y testing
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      axeOptions: storyContext.parameters?.a11y?.options,
    });

    const accessibilityTree = await page.accessibility.snapshot();
    expect(accessibilityTree).toMatchSnapshot();
  },
};

export default config;
