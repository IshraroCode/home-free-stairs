// astro.config.ts (or .mjs if preferring JS)
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import compress from "astro-compress";

// Import all adapters for multi-platform support
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify/functions";
import cloudflare from "@astrojs/cloudflare";

import astrowind from "./vendor/integration";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hasExternalScripts = false;

// Helper to select adapter based on env var (e.g., ADAPTER=node, vercel, netlify, cloudflare)
function getAdapter() {
  const adapterEnv = process.env.ADAPTER?.toLowerCase();
  switch (adapterEnv) {
    case "vercel":
      return vercel({}); // ✅ Added empty config object to satisfy argument requirement
    case "netlify":
      return netlify({}); // ✅ Empty config for Netlify options (e.g., can add { edge: true } if needed)
    case "cloudflare":
      return cloudflare({}); // ✅ Fixed: Empty object for Cloudflare options (e.g., { platformProxy: true } if using Workers/Pages)
    case "node":
    default:
      return node({ mode: "standalone" }); // Default to Node.js for local/custom servers
  }
}

export default defineConfig({
  output: "server", // ✅ Changed to "server" (full SSR) since "hybrid" isn't supported in your Astro version; upgrade to >=3.0 for "hybrid"
  
  adapter: getAdapter(), // Dynamically set based on ADAPTER env var
  
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
