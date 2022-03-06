<script>
	import { base } from '$app/paths';

	import Home from '@svicons/ionicons-solid/home.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<section class="text-blueberry-200 flex flex-col justify-between min-h-screen">
	<div class="p-8 md:p-12 flex flex-col grow">
		<a href={`${base}/`}><Home width="32px" class="text-theme" /></a>
		<h1 class="text-5xl font-black text-white mt-8">Registration</h1>
    <div class="flex flex-col md:flex-row space-y-4 md:space-x-12 mt-8 md:mt-0 h-full items-center grow">
      <div class="flex-1 items-center">
        <h2 class="text-theme text-3xl font-black">Participants</h2> 
        <p class="mt-2">Participants must be current high school students. Computer science
        and engineering experience is not necessary, as we&#39;ll have
        workshops and mentors so you can learn. Please note that registering
        alone does not guarantee you will receive a ticket. Admission
        decisions will be made based on a variety of factors including the
        date/time you register.</p>
        <a
          href="https://forms.gle/gSKmo9ptgAi5rF636"
          target="_blank"
          rel="noopener noreferred"
          class="block mt-4 text-center py-3 bg-theme text-blueberry-800 font-bold rounded-2xl"
          >Student Registration</a
        >
      </div>
      <div class="flex-1">
        <h2 class="text-theme text-3xl font-black">Mentor/Judge/Volunteer</h2> 
        <p class="mt-2">Judges must be present during the entire judging process (5:00 p.m.
        to 7:30 p.m. on Sunday), but not necessarily during the entire
        hackathon. Computer science and engineering experience is preferred
        but not required.</p><br>
        <p>
          Mentors help students if they have any technical questions, and don't have to be present online the entire time. Computer science and engineering experience is required.
        </p>
        <a
          href="https://forms.gle/R5cgvRmeKSaVhZNY9"
          target="_blank"
          rel="noopener noreferred"
          class="block mt-4 text-center py-3 bg-theme text-blueberry-800 text font-bold rounded-2xl"
          >Mentor/Judge/Volunteer Registration</a
        >
      </div>
    </div>
	</div>
	<Footer class="mt-8" />
</section>
