import AxeBuilder from "@axe-core/playwright";
import { test as base } from "@playwright/test";
import type { Page } from "playwright-core";

type AxeFixture = {
  makeAxeBuilder: () => AxeBuilder;
};

export const violationFingerprints = (accessibilityScanResults) => {
  const violationFingerprints = accessibilityScanResults.violations.map((violation) => ({
    rule: violation.id,
    targets: violation.nodes.map((node) => node.target),
  }));

  return JSON.stringify(violationFingerprints, null, 2);
};

export const buildAxe = (page: Page) =>
  new AxeBuilder({
    page,
  })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .include("#storybook-root");

export const test = base.extend<AxeFixture>({
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () => buildAxe(page);

    await use(makeAxeBuilder);
  },
});
