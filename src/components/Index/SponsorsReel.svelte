<script>
  import SponsorsCard from "./SponsorsCard.svelte";

  export let title = "";
  export let cardsData = []
  export let bg;
</script>

<!-- TODO: Carousel buttons & Gradient for scrolling -->
<div class="{bg} w-full py-8 pl-8 md:py-12 md:pl-8 overflow-scroll">
  <h3 class="font-bold text-2xl text-black opacity-50">{title}</h3>
  {#if cardsData && cardsData.length}
    <div class="flex w-full space-x-4">
      {#each cardsData as {src, alt, href}}
        <SponsorsCard srcLogo={src} alt={alt} href={href} />
      {/each}
    </div>
  {/if}
</div>
