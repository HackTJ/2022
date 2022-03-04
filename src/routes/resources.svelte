<script>
  import Home from '@svicons/ionicons-solid/home.svelte'
  import Footer from '../components/Footer.svelte';
  import resources from '../eventdata/resources';
</script>

<section class="text-blueberry-200 flex flex-col justify-between min-h-screen">
  <div class="p-8 md:p-12">
    <a href="/"><Home width='32px' class="text-theme"/></a>
    <h1 class="text-5xl font-black text-white mt-8">Beginner Resources</h1>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {#each resources as {title, href, description}}
        <div class="p-6 bg-blueberry-200 text-blackberry-800 rounded-2xl flex flex-col justify-between">
          <div>
            <h1 class="font-bold text-2xl">{title}</h1>
            <p class="mt-2">{description}</p>
          </div>
          <a 
            href="{href}"
            target="_blank"
            rel="noopener noreferred"
            class="block mt-4 text-center py-4 px-6 font-bold rounded-xl bg-black text-white w-full">
            Open Resource
          </a>
        </div>
      {/each}
		</div>
  </div>
  <Footer class="mt-8"/>
</section>
