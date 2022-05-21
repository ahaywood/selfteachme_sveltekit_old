// reference: https://githubmemory.com/repo/pngwn/MDsveX/issues/294

export type Blog = {
  title: string;
};

const modules = import.meta.globEager("../../content/blog/**/*.md");

export const posts: Blog[] = Object.entries(modules).map(([filepath, module]) => {
  const { metadata } = module;
  const { html } = module.default.render();
  return {
    filepath,
    html,
    ...metadata,
  };
});