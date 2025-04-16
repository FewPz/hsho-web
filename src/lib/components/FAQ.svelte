<script>
	import FAQItem from './FAQItem.svelte';

	const faqs = [
		{
			question: 'Is the game free to play?',
			answer:
				'Yes, the base game is completely free to play! We offer optional cosmetic items for purchase.'
		},
		{
			question: 'What platforms is the game available on?',
			answer:
				'Currently, the game is available on PC (Windows, Mac) via Steam. We are exploring console and mobile versions for the future.'
		},
		{
			question: 'How do I report a bug or give feedback?',
			answer:
				'We appreciate your feedback! You can report bugs or share suggestions through our <a href="/support" class="text-primary hover:underline">Support Page</a> or join our <a href="#" class="text-primary hover:underline">Discord Server</a>.'
		},
		{
			question: 'Are there system requirements?',
			answer:
				'Minimum requirements are: Windows 10, Intel Core i3, 8GB RAM, Nvidia GTX 660 or equivalent. Recommended: Intel Core i5, 16GB RAM, Nvidia GTX 1060 or better.'
		}
	];
</script>

<section id="faq" class="bg-dark-bg py-16 md:py-24">
	<div class="container mx-auto max-w-3xl px-4">
		<h2 class="text-primary-light mb-12 text-center text-3xl font-bold md:text-4xl">
			Frequently Asked Questions
		</h2>

		<div class="space-y-4">
			{#each faqs as faq}
				<FAQItem question={faq.question} answer={faq.answer} />
			{/each}
		</div>
	</div>
</section>
