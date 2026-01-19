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
    // Vercel serverless functions
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
