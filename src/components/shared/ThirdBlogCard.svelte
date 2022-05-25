<script lang="ts">
  import { getBlogFolder } from '$utils/files';
  import { getPostMonth, getPostDate } from '$utils/date';

  export let className: string = '';
  export let content: SelfTeach.Blog;
</script>

<a href={`/blog/${content.slug}`} class={className}>
  <div class="relative flex h-64">
    <img
      class="w-full h-full object-cover absolute top-0 left-0 gap-4"
      src={`/src/content/blog/${getBlogFolder(content.filepath)}/${content.hero}`}
      alt={content.title}
    />
    <div class="bg-white text-center relative m-2 px-2 py-6 w-full mt-auto">
      <h4 class="font-condensed uppercase text-baliHai text-lg md:text-2xl">
        {#if content?.datePublished}{getPostMonth(String(content.datePublished))}{/if}&nbsp;
        {#if content?.datePublished}{getPostDate(String(content.datePublished))}{/if}
      </h4>
      <h2 class="highlight font-modern text-3xl md:text-4xl">{content.title}</h2>
      {#if content.subtitle}<h3 class="font-mono text-xl">{content.subtitle}</h3>{/if}
    </div>
  </div>
</a>
<div class="text-center w-full col-span-3 relative md:hidden">
  <img src="/img/pluses--horizontal.svg" width="165" height="9" alt="plusses" />
</div>
