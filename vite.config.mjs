import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        noDiscovery: true,
        include: ['quill', 'faker'],
    },
    define: { global: "window" },
    plugins: [
        vue(),
        Components({
            resolvers: [PrimeVueResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    },
    server: {
        host: '0.0.0.0', // binds to all hosts; adjust as necessary for your environment
        port: 5173, // specify a port if the default (3000) is in use or blocked
        hmr: {
            protocol: 'ws', // ensure WebSocket is used for HMR
            port: 5173, // can be same as server port if not behind proxy
        },
        watch: {
          usePolling: true,
        }
    },
});
