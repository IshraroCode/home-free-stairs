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
  output: "server",
  adapter: vercel({
    // Add if needed: runtime: "nodejs18.x"
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
      Image: false,  // Disable for SSR image issues
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    astrowind({ 
      config: new URL("./src/config.yaml", import.meta.url).pathname  // Absolute path fix
    }),
  ],
  image: {
    domains: ["cdn.pixabay.com"],
  },
  vite: {
    resolve: {
      alias: {
        "~": new URL("./src", import.meta.url).pathname,  // SSR-safe alias
      },
    },
  },
});
