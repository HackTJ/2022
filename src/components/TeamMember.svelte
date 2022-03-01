<script>
  export let name;
  export let photoSrc;
  let classNames = "";
  export  { classNames as class }
</script>

<!-- TODO: Dialog Popup -->
<div class="{classNames}">
  <img class="max-h-[250px] max-w-[250px] bg-center bg-cover" src={photoSrc} alt="A team member"/>
  <div class="flex flex-row h-16 items-center justify-between mt-2">
    <h4 class="text-xl font-medium font-mono">{name}</h4>
    <button
      class="flex text-center items-center justify-center h-12 w-12 bg-theme text-blueberry-800 text-2xl font-bold rounded-2xl"
      >+</button>
  </div>
</div>
