<script>
	export let title;
	export let link;
	export let linkText;
</script>

<div class="flex flex-col flex-1 justify-between">
	<div>
		<h2 class="text-theme text-3xl font-black mb-2">{title}</h2>
		<slot />
	</div>
	<a
		href={link}
		target="_blank"
		rel="noopener noreferred"
		class="block mt-4 text-center py-3 px-4 bg-theme text-blueberry-800 font-bold rounded-2xl"
		>{linkText}</a
	>
</div>
