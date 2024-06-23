import { test, expect } from '@playwright/test';

test('Click action button', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const button = page.getByTestId('action-button');
  await button.click();
  await expect(button).toHaveAttribute('class', 'button clicked');
});

test('Click action button, when one active', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const button = page.getByTestId('action-button');
  await button.click();
  await expect(button).toHaveAttribute('class', 'button clicked');
  
  await button.click();
  await expect(button).toHaveAttribute('class', 'button');
});
