<script>
	import Tutorial from '$lib/components/Tutorial.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte'; // Optional: Add footer
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>Your Awesome Game - Official Site</title>
	<meta
		name="description"
		content="Welcome to Your Awesome Game! Learn how to play, check the FAQ, and join the battle."
	/>
	<!-- Add other meta tags like Open Graph for social sharing -->
</svelte:head>

<Header/>

<main>
	<Hero />
	<Tutorial />
	<FAQ />
</main>

<Footer />
<!-- Optional: Add footer -->
