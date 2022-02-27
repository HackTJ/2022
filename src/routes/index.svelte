<nav class="h-24 px-8 md:px-12 py-8 flex text-white text-lg font-black">
	<!-- TODO: Mobile dropdown -->
	<ul class="flex items-center ml-auto space-x-8">
		<li><a href="/about" class="hover:text-theme">About</a></li>
		<li><a href="/faq" class="hover:text-theme">FAQ</a></li>
		<li><a href="/sponsors" class="hover:text-theme">Sponsors</a></li>
		<li><a href="/team" class="hover:text-theme">Team</a></li>
		<li><a href="/location" class="hover:text-theme">Location</a></li>
	</ul>
</nav>
<div class="h-[calc(100vh_-_8rem)]">
	<div class="flex justify-start lg:justify-around items-center mt-18 px-8 md:px-12 h-[calc(100%_-_8rem)]">
		<div class="flex flex-col">
			<!-- TODO: Add TJ Dome on top of HackTJ branding for small screens -->
			<div class="text-white font-bold text-6xl md:text-8xl">
				HackTJ
				<!-- TODO: `Overpass Mono`: -->
				<sup class="text-3xl md:text-4xl font-mono align-super text-theme">9.0</sup>
			</div>
			<div class="text-white font-medium text-xl md:text-2xl w-3/4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</div>
			<div class="inline-block mt-3 w-48">
				<a
					href="/register"
					target="_blank"
					rel="noopener noreferred"
					class="block text-center py-3 bg-theme text-blueberry-800 text-xl font-black rounded-2xl"
					>Register</a
				>
				<a
					href="/schedule"
					target="_blank"
					rel="noopener noreferred"
					class="block mt-2 text-center py-3 bg-spruce-100 text-blueberry-800 text-xl font-black rounded-2xl"
					>Schedule</a
				>
			</div>
		</div>
		<div class="hidden lg:flex self-end max-h-full object-cover">
			<img src="dome.svg" />
		</div>
	</div>
	<div class="w-full absolute bottom-0 lg:w-auto lg:relative">
		<svg class="-mt-1 mb-2 md:mb-6" viewBox="0 0 1440 61" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="-326" width="599" height="61" rx="30.5" fill="#FE5F55" />
			<path
				d="M321 30.5C321 13.6553 334.655 0 351.5 0H1441V61H351.5C334.655 61 321 47.3447 321 30.5V30.5Z"
				fill="#737AB0"
			/>
		</svg>
		<svg class="mb-6" viewBox="0 0 1440 61" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="-323" width="470" height="61" rx="30.5" fill="#F3F7F0" />
			<rect x="195" width="271" height="61" rx="30.5" fill="#B8DBD9" />
			<rect x="514" width="458" height="61" rx="30.5" fill="#FB6376" />
			<rect x="1020" width="599" height="61" rx="30.5" fill="#FED049" />
		</svg>
	</div>
</div>

<section class="mt-6 p-8 md:p-12">
	<h1 class="text-blueberry-200 text-4xl md:text-6xl font-black">
		Welcome to the Future Generation of <span class="text-theme">Coders</span>
	</h1>
</section>
