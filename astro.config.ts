// astro.config.mjs
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import compress from "astro-compress";
import vercel from "@astrojs/vercel/serverless";
import astrowind from "./vendor/integration";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hasExternalScripts = false;

export default defineConfig({
  output: "server", // ✅ SSR mode
  
  adapter: vercel({
    // Valid Vercel adapter options only
    maxDuration: 10,  // ✅ Extend ISR/static refresh timeout (if using hybrid output)
    // Add if needed:
    // webAnalytics: { enabled: true },  // Enable Vercel Web Analytics
    // imagesConfig: { sizes: [320, 640, 1280] },  // Optimize images
    // isr: true,  // Enable Incremental Static Regeneration
    // edgeMiddleware: true,  // Use Edge Runtime for middleware (faster, but check compat)
  }),
  
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    mdx(),
    icon({
      include: { tabler: ["*"] },
    }),
    ...(hasExternalScripts 
      ? [partytown({ config: { forward: ["dataLayer.push"] } })]
      : []
    ),
    compress({
      CSS: true,
      HTML: { "html-minifier-terser": { removeAttributeQuotes: false } },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    astrowind({ config: "./src/config.yaml" }),
  ],

  image: {
    domains: ["cdn.pixabay.com"],
  },

  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
