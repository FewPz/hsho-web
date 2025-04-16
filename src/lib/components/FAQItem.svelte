<script>
	export let question = 'Default Question?';
	export let answer = 'Default answer goes here.';
</script>

<details
	class="group bg-light-card dark:bg-dark-card overflow-hidden rounded-lg transition-colors duration-300"
>
	<summary
		class="hover:bg-light-bg/50 dark:hover:bg-dark-bg/50 flex cursor-pointer list-none items-center justify-between p-4 transition-colors"
	>
		<span class="text-light-text dark:text-dark-text text-lg font-semibold">{question}</span>
		<span class="text-primary transform transition-transform duration-300 group-open:rotate-45">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
			</svg>
		</span>
	</summary>
	<div
		class="border-light-border dark:border-dark-border text-light-subtle dark:text-dark-subtle border-t p-4"
	>
		{@html answer}
	</div>
</details>
