import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: "Observable List",
            fileName: 'observable_list',
            formats: ['es', 'umd']
        },
    },
    plugins: [],
})
