<script lang="ts">
  import { getPostDate, getPostMonth, getPostYear } from '$utils/date';

  import ButtonLink from './ButtonLink.svelte';
  import Arrow from './Icon/Arrow.svelte';
  import Post from './Icon/Post.svelte';
  import Video from './Icon/Video.svelte';

  export let content: SelfTeach.Blog;
  export let buttonStyle: string = '';
</script>

<div class="full-width-card grid md:grid-cols-12 md:gap-8 xl:gap-28 mb-12">
  <div class="image">
    <!-- blog category -->
    {#if content?.category}
      <div class={`blog-category block py-4 px-5 absolute w-32 xl:w-auto ${content.category}`}>
        <a
          href={`/blog/c/${content?.category}`}
          class="font-condensed uppercase text-brightPink text-lg md:text-2xl"
        >
          {content.category}
        </a>
      </div>
    {/if}

    <!-- image -->
    <img
      src={content.hero}
      class="h-60 sm:h-48 md:h-full w-full md:absolute inset-0 object-cover"
      loading="lazy"
      alt={content.title}
    />

    <!-- date -->
    {#if content.datePublished}
      <div
        class="blog-date bg-bunting text-white font-condensed text-center md:px-6 py-4 md:py-5 w-32 lg:w-24 absolute"
      >
        <div class="uppercase text-xl">{getPostMonth(content.datePublished)}</div>
        <div class="text-7xl">{getPostDate(content.datePublished)}</div>
        <div class="text-xl tracking-wider">{getPostYear(content.datePublished)}</div>
      </div>
    {/if}
  </div>
  <div class="content">
    <!-- type of post -->
    <div class="font-condensed text-lg md:text-2xl uppercase text-baliHai mb-2">
      {#if content.video}
        <Video className="float-left mr-4" /> Video
      {:else}
        <Post className="float-left mr-4" /> Post
      {/if}
    </div>

    <!-- title -->
    <a href={`/blog/${content.slug}`}>
      <h2 class="font-modern text-4xl md:text-6xl highlight">{content.title}</h2>
      {#if content.subtitle}<h3 class="font-mono text-xl">{content.subtitle}</h3>{/if}
    </a>
    <br />

    <!-- excerpt -->
    <p class="mt-4 mb-10">{content.excerpt}</p>

    <!-- read post link -->
    <div class="ml-2 md:ml-0">
      <ButtonLink href={`/blog/${content.slug}`} className={buttonStyle}>
        <Arrow className="float-left mr-2" /> Read Article
      </ButtonLink>
    </div>
  </div>
</div>
