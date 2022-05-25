<script lang="ts">
  export let className: string = '';
  export let src: string = '';
  export let title: string = '';
  export let subtitle: string = '';
</script>

<div class={`col-span-3 ${className}`}>
  <div class="text-center h-48 md:h-64 w-full relative pt-4 bg-black">
    {#if src}
      <img
        {src}
        alt={title}
        class="w-full h-full absolute left-0 top-0 right-0 bottom-0 object-cover opacity-30"
      />
    {/if}
    <a href="/" class="w-40 block mx-auto logo">
      <img src="/img/logo.svg" width="267" height="70" alt="SelfTeach.me" />
    </a>
    {#if title}<h1 class="text-serenade uppercase text-6xl lg:text-8xl relative font-modern mt-4">
        {title}
      </h1>{/if}
    {#if subtitle}<h2 class="font-condensed uppercase text-gold text-4xl relative">
        {subtitle}
      </h2>{/if}
  </div>
  <div class="bg-brightPink h-2 my-2" />
</div>
