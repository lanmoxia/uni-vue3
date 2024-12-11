import {
	defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';

export default defineConfig({
	plugins: [uni()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '.'),
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
});