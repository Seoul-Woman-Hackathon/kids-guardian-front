import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginSvgr from 'vite-plugin-svgr';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginSvgr(), VitePluginHtmlEnv({ compiler: true })],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
