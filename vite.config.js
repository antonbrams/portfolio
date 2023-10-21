import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import path from 'path'

export default defineConfig({
	plugins: [svelte()],
	server: {
		host: true,
		port: 8000,
	},
	build: {
		outDir: './build',
	},
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
		},
	},
})
