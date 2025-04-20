<!-- src/lib/components/PatchCard.svelte -->
<script lang="ts">
	// Define the props this component accepts
	export let slug: string;
	export let version: string;
	export let title: string;
	export let date: string;
	export let content: string; // Expecting HTML string here

	// Add a new optional prop for the cover image URL
	export let coverImageUrl: string | undefined = undefined;
</script>

<a
	href={`/patches/${slug}`}
	class="block bg-dark-card hover:bg-dark-card/80 transition-colors rounded-lg shadow-md overflow-hidden"
	aria-label={`View patch notes for ${version} - ${title}`}
>
	<!-- Conditionally render the image if coverImageUrl is provided -->
	{#if coverImageUrl}
		<img
			src={coverImageUrl}
			alt={`Cover image for patch ${version} - ${title}`}
			class="w-full h-40 object-cover"
			loading="lazy"
			onerror={(event) => (event.target as HTMLImageElement).style.display = 'none'}
			/>
	{/if}

	<!-- Padding moved to this inner div to allow image to be flush with card edges -->
	<div class="p-6">
		<h2 class="text-xl font-semibold text-light-text mb-1">
			{version} – {title}
		</h2>
		<p class="text-sm text-dark-subtle mb-3">{date}</p>
		{#if content}
			<div class="text-light-subtle line-clamp-3">
				{@html content}
			</div>
		{/if}
	</div>
</a>