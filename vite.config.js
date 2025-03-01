import {defineConfig} from 'vite'

export default defineConfig({

    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL
});