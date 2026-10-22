import {defineConfig} from 'vite';
import {resolve} from 'node:path';
import {slugs} from './src/details.js';
export default defineConfig({base:'./',build:{rollupOptions:{input:{main:resolve('index.html'),...Object.fromEntries(slugs.map(slug=>[slug,resolve(`papers/${slug}/index.html`)]))}}}});
