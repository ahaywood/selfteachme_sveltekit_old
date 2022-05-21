// reference: https://githubmemory.com/repo/pngwn/MDsveX/issues/294

export type Ama = {
  title: string;
};

const modules = import.meta.globEager("../../content/ama/*.md");

export const ama: Ama[] = Object.entries(modules).map(([filepath, module]) => {
  const { metadata } = module;
  const { html } = module.default.render();
  return {
    html,
    ...metadata,
  };
});