<script lang="ts">
  import ButtonLink from './ButtonLink.svelte';
  // import FullWidthBlogCard from './FullWidthBlogCard.svelte';
  import ThirdBlogCard from './ThirdBlogCard.svelte';

  export let latestPosts: SelfTeach.Blog[] = [];
  const mostRecentPost = latestPosts.slice(0, 1)[0];

  console.log({ latestPosts });
</script>

<div class="latest-posts bg-almostWhite relative pt-20 pb-16">
  <div class="container md:max-w-max lg:container mx-auto">
    <h2 class="text-center font-handwriting text-6xl md:text-8xl absolute -top-4 w-full left-0">
      Latest Posts
    </h2>
    {#if latestPosts}
      <!-- <FullWidthBlogCard content={mostRecentPost} /> -->
      <div class="text-center w-full col-span-3 relative md:hidden mb-8">
        <img src="/img/pluses--horizontal.svg" width="165" height="9" alt="pluses" />
      </div>
    {/if}
    <div class="grid grid-cols-3 gap-6">
      {#if latestPosts}
        {#each latestPosts as post}
          <ThirdBlogCard className="col-span-3 md:col-span-1 mb-0" content={post} />
        {/each}
      {/if}
    </div>
    <div class="text-center mt-12 w-full">
      <ButtonLink className="alt" href="/blog">
        <span role="img" aria-label="nerd" class="mx-2"> 🤓 </span>
        Read all Blog Posts
        <span role="img" aria-label="nerd" class="mx-2"> 🤓 </span>
      </ButtonLink>
    </div>
  </div>
</div>
