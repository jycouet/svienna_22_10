import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	reporter: [['list'], ['html']],
	use: {
		trace: 'retain-on-failure'
	},
	testMatch: '**/*e2e.ts',
	timeout: 2000
};

export default config;
