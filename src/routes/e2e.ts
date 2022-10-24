import { expect, test } from '@playwright/test';

test('expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to Svienna');
});

test('expected h2', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h2')).toBe('Home');
});
