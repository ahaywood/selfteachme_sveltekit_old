<script lang="ts">
  import Footer from '$components/shared/Footer.svelte';
  import Header from '$components/shared/Header.svelte';
  import '../app.css';
  import '../styles/globals.css';
</script>

<svelte:head>
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<Header />
<div class="relative pt-12">
  <slot><!-- optional fallback --></slot>
</div>
<Footer />
