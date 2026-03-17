import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://piscinessantanyicalador.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'ca',
        locales: {
          ca: 'ca-ES',
          es: 'es-ES',
          en: 'en-GB',
          de: 'de-DE',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
  build: {
    assets: '_astro',
  },
});
