import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('http://localhost:5173/list');

  await page.getByRole('link', { name: 'Luke Skywalker' }).click();
  await expect(page).toHaveURL('http://localhost:5173/people/cGVvcGxlOjE=');

});