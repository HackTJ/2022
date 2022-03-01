<script>
import TeamMember from "../components/TeamMember.svelte";
import AboutCard from "../components/AboutCard.svelte";
import SponsorsReel from "../components/SponsorsReel.svelte";

// Sponsorship Tiers Code
const goldTierData = {
	title: 'GOLD TIER',
	bg: 'bg-[#D6B570]',
	cards: [{src: '/sponsorlogos/eastbanc.png', alt: 'East Banc Sponsor Logo'}]
}

const silverTierData = {
	title: 'SILVER TIER',
	bg: 'bg-[#C9D4E5]',
	cards: [{src: '/sponsorlogos/eastbanc.png', alt: 'East Banc Sponsor Logo'}]
}

const bronzeTierData = {
	title: 'BRONZE TIER',
	bg: 'bg-[#AF7A6D]',
	cards: [{src: '/sponsorlogos/eastbanc.png', alt: 'East Banc Sponsor Logo'}]
}

const tierSectionData = [goldTierData, silverTierData, bronzeTierData]
</script>

<!-- Intro Section -->
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
<div class="h-[calc(100vh_-_8rem)] min-h-[512px]">
	<div class="flex justify-start lg:justify-around items-center mt-18 px-8 md:px-12 h-[calc(100%_-_8rem)]">
		<div class="flex flex-col">
			<!-- TODO: Add TJ Dome on top of HackTJ branding for small screens -->
			<img alt="TJHSST Dome" src="dome.svg"  class="block lg:hidden mb-3 w-24 h-24" />
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
					class="block text-center py-3 bg-theme text-blueberry-800 text-xl font-bold rounded-2xl"
					>Register</a
				>
				<a
					href="/schedule"
					target="_blank"
					rel="noopener noreferred"
					class="block mt-2 text-center py-3 bg-spruce-100 text-blueberry-800 text-xl font-bold rounded-2xl"
					>Schedule</a
				>
			</div>
		</div>
			<img alt="TJHSST Dome" src="dome.svg"  class="hidden lg:flex self-end max-h-full" />
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

<!-- About Section -->
<section class="mt-8 p-8 md:p-12 text-blueberry-200">
	<h1 class="text-4xl md:text-6xl lg:text-7xl font-black">
		Welcome to the Future Generation of <span class="text-theme">Coders</span>
	</h1>
	<div class="flex flex-col lg:flex-row mt-4 whitespace-pre-wrap text-lg space-y-8 lg:space-y-0 lg:space-x-8">
		<p>
			HackTJ is a lorem ipsum dolor sit amet, consectetur 24 hours, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex teams of 4 commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt build in 3 different prize tracks anim id est laborum
		</p>
		<p>
			HackTJ is a lorem ipsum dolor sit amet, consectetur 24 hours, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex teams of 4 commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt build in 3 different prize tracks anim id est laborum
		</p>
	</div>
	<div class="flex flex-row mt-6">
		<a
				href="/faq"
				target="_blank"
				rel="noopener noreferred"
				class="block text-center py-3 bg-theme text-blueberry-800 text-xl font-bold rounded-2xl px-8 mr-3"
				>FAQ</a
			>
			<a
				href="/beginnerresources"
				target="_blank"
				rel="noopener noreferred"
				class="block text-center py-3 bg-spruce-200 text-blueberry-800 text-xl font-bold rounded-2xl px-8"
				>Beginner Resources</a
			>
	</div>
	<div class="flex flex-col lg:flex-row mt-12 w-full space-y-6 lg:space-x-6 lg:space-y-0">
		<div class="flex flex-col w-full h-full space-y-6">
			<AboutCard title={"Education"} bg="bg-spruce-200">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper elementum sapien ut imperdiet. Vivamus eu risus a nunc vestibulum mollis. Nulla ac tincidunt mi, ut mollis arcu. Sed congue sagittis bibendum. Donec leo nibh, sagittis at mauris ut, egestas porta eros. Fusce purus risus, tristique rhoncus metus vel, scelerisque condimentum ex. Etiam malesuada leo eget erat ornare, eu malesuada arcu aliquam. In hac habitasse platea dictumst. Nulla laoreet, ex sit amet efficitur egestas, est orci laoreet massa, at viverra turpis elit vitae mauris. Praesent eleifend nibh eget est elementum, id vestibulum urna vestibulum.
			</AboutCard>
			<AboutCard title={"Hardware"} bg="bg-white">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper elementum sapien ut imperdiet. Vivamus eu risus a nunc vestibulum mollis. Nulla ac tincidunt mi, ut mollis arcu. Sed congue sagittis bibendum. Donec leo nibh, sagittis at mauris ut, egestas porta eros. Fusce purus risus, tristique rhoncus metus vel, scelerisque condimentum ex. Etiam malesuada leo eget erat ornare, eu malesuada arcu aliquam. In hac habitasse platea dictumst. Nulla laoreet, ex sit amet efficitur egestas, est orci laoreet massa, at viverra turpis elit vitae mauris. Praesent eleifend nibh eget est elementum, id vestibulum urna vestibulum.
			</AboutCard>
		</div>
		<div class="flex flex-col w-full h-full space-y-6">
			<AboutCard title={"Health"} bg="bg-strawberry-200">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper elementum sapien ut imperdiet. Vivamus eu risus a nunc vestibulum mollis. Nulla ac tincidunt mi, ut mollis arcu. Sed congue sagittis bibendum. Donec leo nibh, sagittis at mauris ut, egestas porta eros. Fusce purus risus, tristique rhoncus metus vel, scelerisque condimentum ex. Etiam malesuada leo eget erat ornare, eu malesuada arcu aliquam. In hac habitasse platea dictumst. Nulla laoreet, ex sit amet efficitur egestas, est orci laoreet massa, at viverra turpis elit vitae mauris. Praesent eleifend nibh eget est elementum, id vestibulum urna vestibulum.
			</AboutCard>
			<AboutCard title={"Other"}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper elementum sapien ut imperdiet. Vivamus eu risus a nunc vestibulum mollis. Nulla ac tincidunt mi, ut mollis arcu. Sed congue sagittis bibendum. Donec leo nibh, sagittis at mauris ut, egestas porta eros. Fusce purus risus, tristique rhoncus metus vel, scelerisque condimentum ex. Etiam malesuada leo eget erat ornare, eu malesuada arcu aliquam. In hac habitasse platea dictumst. Nulla laoreet, ex sit amet efficitur egestas, est orci laoreet massa, at viverra turpis elit vitae mauris. Praesent eleifend nibh eget est elementum, id vestibulum urna vestibulum.
			</AboutCard>
		</div>
	</div>
</section>

<!-- Sponsors Reel -->
<section class="mt-6 text-blueberry-200">
	<div class="p-8 md:p-12">
		<h1 class="text-4xl md:text-6xl font-black text-white">Sponsors</h1>
		<h3 class="mt-2 text-xl md:text-2xl font-bold text-blueberry-200">It wouldn't have been possible without these guys</h3>
	</div>
	{#each tierSectionData as section}
		<SponsorsReel bg={section.bg} cardsData={section.cards} title={section.title}/>
	{/each}
</section>

<section class="mt-6 text-blueberry-200 p-8 md:p-12">
	<h1 class="text-4xl md:text-6xl font-black text-white">Meet The Team</h1>
	<h3 class="mt-2 text-xl md:text-2xl font-bold text-blueberry-200">Hello, us!</h3>
	<div class="flex flex-wrap gap-8 mt-8 m-auto justify-center md:justify-start">
		<TeamMember photoSrc="/teamportraits/johndoe.png" name="John Doe" />
		<TeamMember photoSrc="/teamportraits/johndoe.png" name="John Doe" />
		<TeamMember photoSrc="/teamportraits/johndoe.png" name="John Doe" />
		<TeamMember photoSrc="/teamportraits/johndoe.png" name="John Doe" />
		<TeamMember photoSrc="/teamportraits/johndoe.png" name="John Doe" />
		<TeamMember photoSrc="/teamportraits/johndoe.png" name="John Doe" />
	</div>
</section>
