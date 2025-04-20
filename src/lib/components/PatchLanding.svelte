<script>
    import { patches } from '$lib/data/patches'; // Import patch data
	import PatchCard from './PatchCard.svelte';
    const latestPatches = patches.slice(0, 3);
</script>

<section id="patches" class="py-16 md:py-24 bg-dark-bg">
    <div class="container mx-auto px-4 max-w-5xl">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-light">
            Latest News & Patches
        </h2>

        {#if latestPatches.length > 0}
            <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {#each latestPatches as patch (patch.slug)}
                    <PatchCard {...patch} />
                {/each}
            </div>

             <div class="text-center mt-12">
                <a href="/patches" class="text-primary-light hover:underline font-semibold">
                    View All Patch Notes →
                </a>
            </div>
        {:else}
             <p class="text-center text-dark-subtle">No recent patches found.</p>
        {/if}
    </div>
</section>