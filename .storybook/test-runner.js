// .storybook/test-runner.js
const { getStoryContext } = require("@storybook/test-runner");
const { toMatchImageSnapshot } = require("jest-image-snapshot");
// const { injectAxe, checkA11y, configureAxe } = require("axe-playwright");

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

module.exports = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  // async preRender(page) {
  //   await injectAxe(page);
  // },
  async postRender(page, context) {
    // Get entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // If you want to take screenshot of multiple browsers, use
    // page.context().browser().browserType().name() to get the browser name to prefix the file name
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });

    // a11y testing
    // // Do not test a11y for stories that disable a11y
    // if (storyContext.parameters?.a11y?.disable) {
    //   return;
    // }

    // // Apply story-level a11y rules
    // await configureAxe(page, {
    //   rules: storyContext.parameters?.a11y?.config?.rules,
    // });

    // // from Storybook 7.0 onwards, the selector should be #storybook-root
    // await checkA11y(page, "#storybook-root", {
    //   detailedReport: true,
    //   detailedReportOptions: {
    //     html: true,
    //   },
    //   // pass axe options defined in @storybook/addon-a11y
    //   axeOptions: storyContext.parameters?.a11y?.options,
    // });

    // const accessibilityTree = await page.accessibility.snapshot();
    // expect(accessibilityTree).toMatchSnapshot();
  },
};
