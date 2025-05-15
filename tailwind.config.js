import { createTailwindConfig, defaultTargets } from '@bull-shark/tdh-lib-mason/theme/tailwind.config.js'

const extendedTargets = [
	...defaultTargets,
	'./src/**/*.{html,js,svelte,ts}',
	'../node_modules/@bull-shark/tdh-lib-mason/**/*.{html,js,svelte,ts}'
]


export default createTailwindConfig(extendedTargets)

