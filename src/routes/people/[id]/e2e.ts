import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('/list');

	await page.getByRole('link', { name: 'Luke Skywalker' }).click();
	await expect(page).toHaveURL('/people/cGVvcGxlOjE=');
});

test('SSR', async ({ page }) => {
	await page.goto('/people/cGVvcGxlOjIw');
	try {
		await page.waitForResponse('https://swapi-graphql.netlify.app/.netlify/functions/index', {
			timeout: 2000
		});
		expect(1).toBe(0);
	} catch (error) {
		expect(1, 'no response came').toBe(1);
	}

	const content = await page.locator('pre').first().textContent();
	expect(content).toContain('Yoda');
});
