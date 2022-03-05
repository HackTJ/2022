<script>
	import Menu from '@svicons/ionicons-solid/menu.svelte';
	import Close from '@svicons/ionicons-solid/close.svelte';

	export let navItems = [];
	let mobileNavOpen = false;

	function toggleNav() {
		mobileNavOpen = !mobileNavOpen;
	}

	// Taken from https://svelte.dev/repl/0a9f812027da4d99b253f39a1941986c?version=3.31.0
	function handleNavAnchorClick(event) {
		event.preventDefault();
		mobileNavOpen = false;

		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<nav
	class="md:h-24 px-8 md:px-12 py-8 text-white text-lg font-black bg-blackberry-800 md:bg-transparent w-full h-full z-10 md:static {mobileNavOpen
		? 'fixed'
		: 'static'}"
>
	<!-- TODO: Mobile dropdown -->
	<div on:click={toggleNav}>
		<svelte:component this={mobileNavOpen ? Close : Menu} width="32px" class="static md:hidden" />
	</div>
	<div
		class="justify-start md:justify-end flex md:flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8 mt-8 md:mt-0 {mobileNavOpen
			? ''
			: 'hidden'}"
	>
		{#each navItems as { href, text }}
			<a {href} on:click={handleNavAnchorClick} class="hover:text-theme">{text}</a>
		{/each}
	</div>
</nav>
