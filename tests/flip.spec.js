import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('button', { name: 'samsung s24 ultra 5g mobile' }).click();
  await page.getByRole('link', { name: 'Apply the filter 4 to 5.9 GB' }).click();
  await page.locator('#a-autoid-8-announce').click();
  await page.locator('.s-widget-container.s-spacing-small.s-widget-container-height-small.celwidget.slot\\=MAIN.template\\=SEARCH_RESULTS.widgetId\\=search-results_8 > span > .puis-card-container > div > div > .puisg-col.puisg-col-4-of-4.puisg-col-4-of-8.puisg-col-4-of-12.puisg-col-4-of-16.puisg-col-4-of-20.puisg-col-4-of-24.puis-list-col-left > .puisg-col-inner > .s-product-image-container > div > .rush-component > .a-link-normal').click();
  await page.getByRole('link', { name: 'item in cart' }).click();
});