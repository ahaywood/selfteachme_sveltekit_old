<script lang="ts">
  import Hero from '$components/shared/Hero.svelte';
  import { formatISO } from '$utils/date';

  export let title = '';
  export let updatedAt: Date;
</script>

<div class="content-grid move-content-up">
  <Hero {title} src="/img/bg__terms.jpg" />
  <div class="main">
    <div class="px-12 pt-12">
      <slot />
      {#if updatedAt}
        <p>
          <em>Last updated {formatISO(String(updatedAt))}</em>
        </p>
      {/if}
    </div>
  </div>
</div>
