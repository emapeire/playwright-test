const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click strong:has-text("English")
  await page.locator('strong:has-text("English")').click();
  await page.waitForURL('https://en.wikipedia.org/wiki/Main_Page');

  // Click text=NASA >> nth=0
  await page.locator('text=NASA').first().click();
  await page.waitForURL('https://en.wikipedia.org/wiki/NASA');

  // ---------------------
  await context.close();
  await browser.close();
})();