<script>
  export let alt;
  export let srcLogo;
  export let href;
  export let onclick = () => {};
</script>

<a href="{href}" class="w-[300px] h-[150px] flex items-center flex-row mt-2 bg-black p-8 rounded-2xl shrink-0">
  <img onclick={onclick} alt={alt} src={srcLogo} class="m-auto"/>
</a>
