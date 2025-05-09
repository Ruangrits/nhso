import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { translator } from '@bull-shark/tdh-lib-mason/i18n'
import { Dictionary, Language } from './src/lib/core/l10n'

export default defineConfig({
	plugins: [sveltekit(),
		translator(Dictionary, Language, './src/lib/core/l10n/generated/index.js')
	]
});
