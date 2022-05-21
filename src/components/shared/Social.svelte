<script lang="ts">
  import { Constants } from '../../utils/constants';
  import CodePen from './Icon/CodePen.svelte';
  import DevTo from './Icon/DevTo.svelte';
  import Dribbble from './Icon/Dribbble.svelte';
  import Facebook from './Icon/Facebook.svelte';
  import GitHub from './Icon/GitHub.svelte';
  import Hashnode from './Icon/Hashnode.svelte';
  import Instagram from './Icon/Instagram.svelte';
  import LinkedIn from './Icon/LinkedIn.svelte';
  import Medium from './Icon/Medium.svelte';
  import Patreon from './Icon/Patreon.svelte';
  import Pinterest from './Icon/Pinterest.svelte';
  import Twitter from './Icon/Twitter.svelte';
  import Vimeo from './Icon/Vimeo.svelte';
  import YouTube from './Icon/YouTube.svelte';

  export let className: string = '';
</script>

<ul class={`text-white flex flex-wrap md:flex-nowrap justify-center list-none ${className}`}>
  <!-- youtube -->
  {#if Constants?.YOUTUBE}
    <li class="px-3">
      <a href={Constants.YOUTUBE} target="_blank" rel="noreferrer" class="hover:text-gold">
        <YouTube />
      </a>
    </li>
  {/if}

  <!-- pinterest -->
  {#if Constants?.PINTEREST}
    <li class="px-3">
      <a href={Constants.PINTEREST} target="_blank" rel="noreferrer" class="hover:text-gold">
        <Pinterest />
      </a>
    </li>
  {/if}

  <!-- instagram -->
  {#if Constants?.INSTAGRAM}
    <li class="px-3">
      <a href={Constants.INSTAGRAM} target="_blank" rel="noreferrer" class="hover:text-gold">
        <Instagram />
      </a>
    </li>
  {/if}

  <!-- facebook -->
  {#if Constants?.FACEBOOK}
    <li class="px-3">
      <a href={Constants.FACEBOOK} target="_blank" rel="noreferrer" class="hover:text-gold">
        <Facebook />
      </a>
    </li>
  {/if}

  <!-- dribbble -->
  {#if Constants?.DRIBBBLE}
    <li class="px-3">
      <a href={Constants.DRIBBBLE} target="_blank" rel="noreferrer" class="hover:text-gold">
        <Dribbble />
      </a>
    </li>
  {/if}

  <!-- github -->
  {#if Constants?.GITHUB}
    <li class="px-3">
      <a href={Constants.GITHUB} target="_blank" rel="noreferrer" class="hover:text-gold">
        <GitHub />
      </a>
    </li>
  {/if}

  <!-- linkedin -->
  {#if Constants?.LINKEDIN}
    <li class="px-3">
      <a href={Constants.LINKEDIN} target="_blank" rel="noreferrer" class="hover:text-gold">
        <LinkedIn />
      </a>
    </li>
  {/if}

  <!-- vimeo -->
  {#if Constants?.VIMEO}
    <li class="px-3">
      <a href={Constants.VIMEO} target="_blank" rel="noreferrer" class="hover:text-gold">
        <Vimeo />
      </a>
    </li>
    {/if}

  <!-- codepen -->
  {#if Constants?.CODEPEN}
    <li class="px-3">
      <a href={Constants.CODEPEN} target="_blank" rel="noreferrer" class="hover:text-gold">
        <CodePen />
      </a>
    </li>
  {/if}

  <!-- twitter -->
  {#if Constants?.TWITTER}
    <li class="px-3">
      <a href={Constants.TWITTER} target="_blank" rel="noreferrer" class="hover:text-gold">
        <Twitter />
      </a>
    </li>
  {/if}

  <!-- patreon -->
  {#if Constants?.PATREON}
    <li class="px-3">
      <a href={Constants.PATREON} target="_blank" rel="noreferrer" class="hover:text-gold">
        <Patreon />
      </a>
    </li>
  {/if}

  <!-- medium -->
  {#if Constants?.MEDIUM}
    <li class="px-3">
      <a href={Constants.MEDIUM} target="_blank" rel="noreferrer" class="hover:text-gold">
        <Medium />
      </a>
    </li>
  {/if}

  <!-- hashnode -->
  {#if Constants?.HASHNODE}
    <li class="px-3">
      <a href={Constants.HASHNODE} target="_blank" rel="noreferrer" class="hover:text-gold">
        <Hashnode />
      </a>
    </li>
  {/if}

  <!-- dev.to -->
  {#if Constants?.DEVTO}
    <li class="px-3">
      <a href={Constants.DEVTO} target="_blank" rel="noreferrer" class="hover:text-gold">
        <DevTo />
      </a>
    </li>
  {/if}
</ul>