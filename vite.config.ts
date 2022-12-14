import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
    plugins: [vue(), Components({ resolvers: [NaiveUiResolver()] }), Unocss()],
});
