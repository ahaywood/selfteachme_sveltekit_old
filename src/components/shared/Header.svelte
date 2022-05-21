<script lang="ts">
import Search from "./Icon/Search.svelte";

  let isNavOpen = false;
  let isSearchOpen = false;

  const toggleNav = ():void => {
    console.log('toggle nav');
    isNavOpen = !isNavOpen;
  };

  const toggleSearch = ():void => {
    console.log('toggle search');
    isSearchOpen = !isSearchOpen;
  };
</script>

<header class="bg-black flex justify-between items-center p-3 fixed left-0 w-full z-50">
  <!-- <ProgressBar /> -->
  <button
    class="flex flex-1 hover:text-brightPink text-white focus:outline-none items-center"
    on:click|preventDefault={toggleNav}
    type="button"
  >
    <div class="flex flex-col mr-2">
      <div class="h-0.5 bg-white inline-block w-8" />
      <div class="h-0.5 bg-white inline-block w-8 my-2" />
      <div class="h-0.5 bg-white inline-block w-8" />
    </div>
    <div class="uppercase font-sans font-bold">Menu</div>
  </button>
  <!-- <Nav isNavOpen={isNavOpen} toggleNav={toggleNav} /> -->
  <div class="flex-1 text-right">
    <button class="text-white hover:text-brightPink focus:outline-none" on:click|preventDefault={toggleSearch} type="button">
      <Search className="ml-auto" />
    </button>
  </div>
  <!-- <Search isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} /> -->
</header>