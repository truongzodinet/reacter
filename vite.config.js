import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({

    resolve: {
        alias: {
            "~/": `${path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src")}/`,
        },
    },
    plugins: [react()],
})
