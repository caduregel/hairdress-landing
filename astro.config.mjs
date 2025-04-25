// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://caduregel.github.io',
    base: 'hairdress-landing',
    vite: {
        plugins: [tailwindcss()],
      },
});
