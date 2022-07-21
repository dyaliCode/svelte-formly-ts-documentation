import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  extensions: ['.svelte', '.md'],

  kit: {
    adapter: adapter(),

    prerender: {
      default: true,
      entries: ['*'],
    },
  },
};

export default config;
