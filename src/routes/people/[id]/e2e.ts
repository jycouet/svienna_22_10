import { test, expect } from '@playwright/test';

test('SSR', async ({ page }) => {
	await page.goto('/people/cGVvcGxlOjIw');

	// We should not have a network call
	try {
		await page.waitForResponse('https://swapi-graphql.netlify.app/.netlify/functions/index', {
			timeout: 2000
		});
		expect(1, 'We should never be here!').toBe(0);
	} catch (error) {
		expect(1, 'No response came, perfecto!').toBe(1);
	}

	const content = await page.locator('pre').first().textContent();
	expect(content).toContain('Yoda');
});

test('CSR', async ({ page }) => {
	await page.goto('/list');

	try {
		const res = await Promise.all([
			page.waitForResponse('https://swapi-graphql.netlify.app/.netlify/functions/index'),
			page.getByRole('link', { name: 'Yoda' }).click()
		]);
		expect(await res[0].json()).toMatchObject({
			data: {
				person: {
					id: 'cGVvcGxlOjIw',
					name: 'Yoda'
				}
			}
		});
	} catch (error) {
		expect('we should have').toBe('received data!');
	}

	const content = await page.locator('pre').first().textContent();
	expect(content).toContain('Yoda');
});
