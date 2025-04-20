<script>
	import Tutorial from '$lib/components/Tutorial.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte'; // Optional: Add footer
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import PatchLanding from '$lib/components/PatchLanding.svelte';
</script>

<svelte:head>
	<title>Home Sweet Home: Online - Private Server</title>
	<meta name="description" content="Join the Home Sweet Home: Online private server. Download the launcher, get updates, and play now!" />
</svelte:head>
<Header/>
<main>
	<Hero />
	<PatchLanding />
	<Tutorial />
	<FAQ />
</main>
<Footer />