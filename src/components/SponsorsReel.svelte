<script>
  import SponsorsCard from "./SponsorsCard.svelte";

  export let title = "";
  export let cardsData = []
  export let bg;
</script>

<!-- TODO: Carousel buttons & Gradient for scrolling -->
<div class="{bg} w-full p-8 md:p-12">
  <h3 class="font-bold text-2xl text-black opacity-50 mb-4">{title}</h3>
  {#each cardsData as card}
    <SponsorsCard srcLogo={card.src} alt={card.alt} />
  {/each}
</div>
