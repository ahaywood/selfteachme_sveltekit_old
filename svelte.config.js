import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from 'svelte-preprocess';
import path from 'path'
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  "extensions": [".svelte", ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess({ postcss: true, }), mdsvex(mdsvexConfig)],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    vite: {
      resolve: {
        alias: {
          // these are the aliases and paths to them
          '$content': path.resolve('./src/content'),
          '$components': path.resolve('./src/components'),
          '$routes': path.resolve('./src/routes'),
          '$utils': path.resolve('./src/utils'),
        }
      },
    },
    adapter: vercel()
  }
};

export default config;