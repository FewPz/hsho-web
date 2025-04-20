<script lang="ts">
	// 1. Import the data (as you already have)
	import { patches } from '$lib/data/patches';
	import PatchCard from '$lib/components/PatchCard.svelte';

	// Optional: Define the type for better safety
	interface Patch {
		slug: string;
		version: string;
		title: string;
		date: string;
		content: string;
		coverImageUrl?: string;
	}
</script>

<svelte:head>
	<title>Patch Notes | HSH Private Server</title>
</svelte:head>

<section class="bg-dark-bg min-h-screen py-16">
	<div class="container mx-auto px-4 max-w-5xl">
		<h1 class="text-3xl md:text-4xl font-bold text-primary-light mb-8 text-center">All Patch Notes</h1>
        
        <div class="text-center mb-10 md:mb-12">
            <a href="/" class="inline-flex items-center gap-1.5 text-sm text-primary-light hover:underline transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                Back to Home Page
            </a>
        </div>

		<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{#each patches as patch (patch.slug)}
				<PatchCard {...patch} />
			{/each}
		</div>
	</div>
</section>