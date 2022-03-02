<script>
  export let title;
  export let bg = "bg-blueberry-200";
  
  let classNames = "";
  export  { classNames as class }
</script>

<div class="p-8 xl:p-9 {bg} text-blueberry-800 w-full h-full rounded-2xl basis-full {classNames}">
  <h1 class="text-4xl font-bold">{title}</h1>
  <p class="mt-3"><slot/></p>
</div>

