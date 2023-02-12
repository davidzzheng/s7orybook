import { getStoryContext, TestRunnerConfig } from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import AxeBuilder from "@axe-core/playwright";
import { injectAxe, checkA11y, configureAxe } from "axe-playwright";
import { buildAxe, violationFingerprints } from "../axe-test";

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
    const browser = page.context().browser()?.browserType().name();

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: `${context.id}-${browser}`,
      failureThreshold: 1,
      failureThresholdType: "percent",
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

    const accessibilityScanResults = buildAxe(page).analyze();

    expect(violationFingerprints(accessibilityScanResults)).toMatchSnapshot();
  },
};

export default config;
