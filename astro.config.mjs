import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({

  // TODO: confirmar el dominio real de producción (usado para canonical/OG/hreflang)
  site: 'https://talentoparaeldesarrollo.org',
  output: 'static',
  adapter: vercel(),

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [
    tailwind(),
  ],

});