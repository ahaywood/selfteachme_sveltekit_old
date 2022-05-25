<script>
  import CodePen from '$components/shared/Icon/CodePen.svelte';
  import GitHub from '$components/shared/Icon/GitHub.svelte';
  import Instagram from '$components/shared/Icon/Instagram.svelte';
  import Twitch from '$components/shared/Icon/Twitch.svelte';
  import Twitter from '$components/shared/Icon/Twitter.svelte';
  import YouTube from '$components/shared/Icon/YouTube.svelte';
  import { Constants } from '$utils/constants';
</script>

<div class="elsewhere-online flex justify-between flex-col lg:flex-row">
  <div class="flex-1 md:mr-8 lg:mr-0">
    <h3>
      <span class="font-modern uppercase text-6xl sm:text-8xl lg:pl-24 text-serenade block"
        >Elsewhere</span
      >
      <span class="font-handwriting text-8xl relative -top-2 flex">
        <div class="flex-1 float-left h-0 w-full border-t-2 border-black" />
        <div>Online</div>
      </span>
    </h3>
  </div>
  <div class="flex-1 md:pr-24 pt-4">
    <ul class="flex flex-center md:justify-between flex-wrap md:flex-nowrap">
      <!-- youtube -->
      {#if Constants?.YOUTUBE}
        <li>
          <a href={Constants.YOUTUBE} target="_blank" rel="noreferrer">
            <YouTube />
            YouTube
          </a>
        </li>
      {/if}
      <!-- twitter -->
      {#if Constants?.TWITTER}
        <li>
          <a href={Constants.TWITTER} target="_blank" rel="noreferrer">
            <Twitter />
            Twitter
          </a>
        </li>
      {/if}
      <!-- instsagram -->
      {#if Constants?.INSTAGRAM}
        <li>
          <a href={Constants.INSTAGRAM} target="_blank" rel="noreferrer">
            <Instagram />
            Instagram
          </a>
        </li>
      {/if}
      <!-- twitch -->
      {#if Constants?.TWITCH}
        <li>
          <a href={Constants.TWITCH} target="_blank" rel="noreferrer">
            <Twitch />
            Twitch
          </a>
        </li>
      {/if}
      <!-- codepen -->
      {#if Constants?.CODEPEN}
        <li>
          <a href={Constants.CODEPEN} target="_blank" rel="noreferrer">
            <CodePen />
            CodePen
          </a>
        </li>
      {/if}
      <!-- github -->
      {#if Constants?.GITHUB}
        <li>
          <a href={Constants.GITHUB} target="_blank" rel="noreferrer">
            <GitHub />
            GitHub
          </a>
        </li>
      {/if}
    </ul>
  </div>
</div>
