import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
} from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * External scripts toggle
 * ----------------------------------
 * Set this to true only if you need
 * third-party scripts (analytics, ads, etc.)
 */
const hasExternalScripts = false;

const whenExternalScripts = (
  items: (() => AstroIntegration) | (() => AstroIntegration)[] = []
) =>
  hasExternalScripts
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  output: 'server',       // 🔴 REQUIRED
  adapter: node({          // ✅ FIX: options object required
    mode: 'standalone',    // recommended
  }),   

  integrations: [
    /**
     * Tailwind CSS
     * ----------------------------------
     * Base styles disabled because
     * Astrowind handles its own UI styles
     */
    tailwind({
      applyBaseStyles: false,
    }),

    sitemap(),
    mdx(),

    /**
     * Astro Icons
     * ----------------------------------
     * Icon packs used across the UI
     */
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    /**
     * Partytown
     * ----------------------------------
     * Loads external scripts in a web worker
     * Enabled only when `hasExternalScripts` is true
     */
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    /**
     * Compression
     * ----------------------------------
     * Optimizes CSS, JS, and HTML output
     */
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    /**
     * Astrowind Integration
     * ----------------------------------
     * IMPORTANT:
     * Light/Dark theme is controlled from:
     * 👉 src/config.yaml
     *
     * CURRENT (Light mode only):
     * ui:
     *   theme: light:only
     *
     * FUTURE (Enable dark mode):
     * ui:
     *   theme: system  |  dark
     */
    astrowind({
      config: './src/config.yaml',
    }),
  ],

  /**
   * Image Optimization
   * ----------------------------------
   * Allowed external image domains
   */
  image: {
    domains: ['cdn.pixabay.com'],
  },

  /**
   * Markdown Configuration
   * ----------------------------------
   * Custom remark & rehype plugins
   */
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [
      responsiveTablesRehypePlugin,
      lazyImagesRehypePlugin,
    ],
  },

  /**
   * Vite Configuration
   * ----------------------------------
   * Path alias for cleaner imports
   */
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
