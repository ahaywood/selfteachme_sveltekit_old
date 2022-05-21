import relativeImages from "mdsvex-relative-images";

const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },

  layout: {
    legal: 'src/routes/legal/_legal.svelte'
  },

  "remarkPlugins": [relativeImages],
  "rehypePlugins": []
};

export default config;