<script lang="ts">
  import Map from '$components/shared/Icon/Map.svelte';
</script>

<div class="bg-almostWhite bg-map bg-center md:bg-left bg-no-repeat bg-cover pt-80 md:pt-0">
  <div class="bg-sapphire w-full md:w-1/3 px-8 py-16 ml-auto">
    <h4 class="font-condensed uppercase text-center text-white text-2xl mb-4">
      I'm Located outside
    </h4>
    <h3 class="font-handwriting text-white text-7xl md:text-8xl text-center">Music City</h3>
    <hr class="w-1/2 mx-auto mb-8" />
    <div class="font-sans text-white flex w-2/3 mx-auto">
      <Map className="float-left mr-2" />
      <div class="text-lg md:text-xl">
        PO Box 844
        <br />
        Brentwood, TN 37027
      </div>
    </div>
  </div>
</div>
