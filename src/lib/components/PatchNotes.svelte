<script lang="ts">
	// Assuming PatchNote interface and patches import are correct
	import type { PatchNote } from '$lib/data/patches';
	import { patches } from '$lib/data/patches';
</script>

<section id="patches" class="bg-dark-bg py-16 md:py-24">
	<div class="container mx-auto px-4 max-w-4xl"> 
		<h2 class="text-3xl md:text-4xl font-bold text-center text-primary-light mb-12">
            Patch Notes History
        </h2>

		{#if patches.length > 0}
			<div class="space-y-6"> 
				{#each patches as patch (patch.slug)}
					<details class="group bg-dark-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
						<summary class="flex cursor-pointer list-none items-center justify-between p-4 md:p-6 hover:bg-dark-card/80 transition-colors">
							<div class="flex-grow pr-4">
								<h3 class="text-lg md:text-xl font-semibold text-light-text mb-1">
                                    {patch.version} – {patch.title}
                                </h3>
								<p class="text-sm text-dark-subtle flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                    {patch.date}
                                </p>
							</div>
							<div class="flex-shrink-0 text-primary-light transition-transform duration-300 ease-in-out group-open:rotate-90">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
									<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
								</svg>
							</div>
						</summary>
						<div class="border-t border-dark-border p-4 md:p-6 text-light-subtle">
                            {#if patch.coverImageUrl}
                                <img 
                                    src={patch.coverImageUrl} 
									alt={`Cover image for ${patch.title}`} 
									class="w-full max-h-72 object-cover rounded-md mb-6 shadow-md bg-dark-bg" 
									loading="lazy"
									on:error={(e) => (e.currentTarget as HTMLImageElement).style.display = 'none'}
								/>
							{/if}
							<div class="prose prose-invert max-w-none"> 
								{@html patch.content}
							</div>
						</div>
					</details>
				{/each}
			</div>
		{:else}
			<p class="text-center text-dark-subtle">No patch notes available yet.</p>
		{/if}
	</div>
</section>