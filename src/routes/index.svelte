<script lang="ts">
  import { onMount } from 'svelte';
  import ThreeUp from '$components/home/ThreeUp.svelte';
  import ButtonLink from '$components/shared/ButtonLink.svelte';
  import LatestPosts from '$components/shared/LatestPosts.svelte';
  import { env } from '$utils/constants';

  let latestPostsData = [];

  // get data
  onMount(async () => {
    const url = `${env.SITE_URL}/api/blog.json`;
    const response = await fetch(url);
    latestPostsData = await response.json();
    // sort items based on the publish date in the frontmatter
    latestPostsData.sort((firstEl, secondEl) => {
      return firstEl.publishedDate < secondEl.publishedDate
        ? -1
        : firstEl.publishedDate > secondEl.publishedDate
        ? 1
        : 0;
    });
  });
</script>

<svelte:head>
  <title>SelfTeach.me</title>
</svelte:head>

<section
  class="text-center min-h-9 md:min-h-screen bg-hero bg-no-repeat bg-cover bg-top flex justify-center"
>
  <div class="pt-10">
    <div class="mb-8">
      <div class="w-48 h-10 md:w-64 md:h-16 mx-auto">
        <img alt="SelfTeach.me" height="70" src="/img/logo.svg" width="267" />
      </div>
    </div>
    <h1 class="mb-8">
      <div class="hero-title">Build</div>
      <div class="with-rules text-white">with</div>
      <div class="hero-title ">Confidence</div>
    </h1>
    <p class="text-white large-body-copy mb-10 font-serif">
      I teach designers how to code.{' '}
      <span role="img" aria-label="robot"> 🤖 </span>
      <br />I teach developers how to design.{' '}
      <span role="img" aria-label="paint"> 🎨 </span>
    </p>
    <div class="w-28 md:w-auto h-28 md:h-auto mx-auto">
      <img
        alt="Amy Dutton"
        height="167"
        width="167"
        src="/img/avatar@2x.jpg"
        class="rounded-full mx-auto"
      />
    </div>
  </div>
</section>

<section class="bg-black text-center text-white py-10 px-1 md:px-0">
  <p class="text-lg md:text-xl font-serif">
    Want to code your own website, but not sure where to start?
    <br />
    Or maybe, you've tried to learn before, but nothing seems to stick?
    <br />
    The idea of looking at code is enough to make you want to vomit.
  </p>

  <h5 class="font-sans font-bold uppercase text-brightPink mt-3 mb-8 text-xl">I can help!</h5>

  <ButtonLink href="https://selfteachme.ck.page/621ac7c092" target="_blank">
    Not sure where to begin? <span class="ml-1 underline block sm:inline">Start Here!</span>
  </ButtonLink>
</section>

<section class="bg-brightPink text-white text-center pt-10 pb-8 md:py-16 mb-20 md:mb-0">
  <p class="mb-10 md:mb-8 px-1 md:px-0 text-lg md:text-xl font-serif">
    Over the past 20 years, I've built hundreds of websites. I can teach you.
  </p>
  <ul class="list-none flex justify-between items-center max-w-6xl mx-auto">
    <li class="px-2 md:px-6 lg:px-0">
      <img
        class="blend-screen"
        src="/img/logo__janet-jackson@2x.png"
        alt="Janet Jackson"
        width="284"
        height="52"
      />
    </li>
    <li class="px-2 md:px-6 lg:px-0">
      <img
        class="blend-screen"
        src="/img/logo__counting-crows@2x.png"
        alt="Counting Crows"
        width="202"
        height="107"
      />
    </li>
    <li class="px-2 md:px-6 lg:px-0">
      <img
        class="blend-screen"
        src="/img/logo__ice-cube@2x.png"
        alt="IceCube"
        width="236"
        height="72"
      />
    </li>
    <li class="px-2 md:px-6 lg:px-0">
      <img
        class="blend-screen"
        src="/img/logo__kelly-clarkson@2x.png"
        alt="Kelly Clarkson"
        width="170"
        height="74"
      />
    </li>
  </ul>
</section>

<ThreeUp />
<LatestPosts latestPosts={latestPostsData} />

<!-- <EmailNewsletter /> -->
<style lang="postcss">
  .hero-title {
    @apply text-5xl md:text-8xl lg:text-9xl font-modern uppercase text-white;
  }
</style>
