<script lang="ts">
	// Import the page store to access error status and message
	import { page } from '$app/stores';

	// Optionally import dev environment to show more details during development
	// import { dev } from '$app/environment';

	// Access the status code and error message from the $page store
	$: status = $page.status;
	$: message = $page.error?.message; // Use optional chaining as error might be null

</script>

<svelte:head>
	<title>{status} - Page Not Found</title> 
    {#if status === 404}
        <meta name="description" content="The page you were looking for could not be found.">
    {:else}
        <meta name="description" content={message || 'An error occurred on the page.'}>
    {/if}
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center bg-dark-bg px-6 py-12 text-center">
	<div class="max-w-lg">
		<h1 class="mb-4 text-6xl font-bold text-primary-light sm:text-8xl">
			{status}
		</h1>

		{#if status === 404}
			<h2 class="mb-4 text-2xl font-semibold text-light-text sm:text-3xl">
				Page Not Found
			</h2>
			<p class="mb-8 text-base text-dark-subtle sm:text-lg">
				Sorry, we couldn't find the page you're looking for. It might have been moved, deleted,
				or maybe the URL was typed incorrectly.
			</p>
		{:else}
			<h2 class="mb-4 text-2xl font-semibold text-light-text sm:text-3xl">
				Oops! Something went wrong
			</h2>
			<p class="mb-8 text-base text-dark-subtle sm:text-lg">
				An unexpected error occurred on our end. Please try again later.
			</p>
		{/if}

		<a
			href="/"
			class="inline-block rounded-md bg-[#121212] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-dark-bg"
		>
			Go Back Home
		</a>
	</div>
</div>