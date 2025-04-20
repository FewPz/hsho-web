<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { patch } = data; // Assuming patch data includes optional coverImageUrl
</script>

<svelte:head>
	<title>{patch.version} – {patch.title} | Patch Notes | HSH Private Server</title>
    <meta name="description" content="Details for patch {patch.version}: {patch.title}. Release date: {patch.date}">
    {#if patch.coverImageUrl}
      <meta property="og:image" content={patch.coverImageUrl} />
    {/if}
</svelte:head>

<section class="bg-dark-bg min-h-screen py-16 md:py-24">
	<div class="container mx-auto max-w-4xl px-4">
        <!-- Back Navigation Link -->
		<div class="mb-6 md:mb-8">
            <a href="/patches" class="inline-flex items-center gap-1.5 text-sm text-primary-light hover:underline transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                View All Patch Notes
            </a>
        </div>

        <!-- Main Patch Article -->
		<article class="bg-dark-card rounded-lg shadow-xl overflow-hidden">
			
            <!-- Cover Image (if available) -->
            {#if patch.coverImageUrl}
                <img 
                    src={patch.coverImageUrl} 
                    alt={`Cover image for ${patch.title}`} 
                    class="w-full h-auto max-h-[450px] object-cover bg-dark-bg" 
                    loading="eager"
                    on:error={(e) => (e.currentTarget as HTMLElement).style.display = 'none'}
                />
            {/if}

            <!-- Text Content Area -->
			<div class="p-6 md:p-10">
				
                <!-- Header: Title & Date -->
                <div class="mb-6 md:mb-8">
                    <h1 class="text-light-text mb-3 text-2xl font-bold leading-tight md:text-4xl">
                        {patch.version} – {patch.title}
                    </h1>
                    <p class="text-dark-subtle text-sm flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        Published on: {patch.date}
                    </p>
                </div>

                <!-- Divider (Optional but adds separation) -->
                <hr class="border-dark-border mb-6 md:mb-8" />

				<!-- Main Content -->
				<div class="prose prose-lg prose-invert text-light-subtle max-w-none"> 
					{@html patch.content}
				</div>
			</div>
		</article>
	</div>
</section>