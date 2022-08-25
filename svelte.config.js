import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify';

export default {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      edge: false,
      split: true
    })
  }
}
