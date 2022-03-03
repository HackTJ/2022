<script>
  export let alt;
  export let srcLogo;
  export let onclick = () => {};
</script>

<div class="w-[300px] h-[150px] flex items-center flex-row mt-2 bg-black p-8 rounded-2xl">
  <img onclick={onclick} alt={alt} src={srcLogo} class="m-auto"/>
</div>
