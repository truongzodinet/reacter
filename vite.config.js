import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath } from "url"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "~/": `${path.resolve(
                path.dirname(fileURLToPath(import.meta.url)),
                "src"
            )}/`,
        },
    },
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: {
                cleanupOutdatedCaches: true,
            },
            includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
            manifest: {
                name: "Reacter",
                short_name: "Reacter",
                description: "The special template for React",
                theme_color: "#ffffff",
                icons: [{
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    }
                ],
            }
        })
    ],
})
