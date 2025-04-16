<script>
	// import ThemeToggle from './ThemeToggle.svelte'; // REMOVED Import
</script>

<header class="bg-dark-bg/80 border-dark-border sticky top-0 z-50 w-full border-b backdrop-blur-sm">
	<nav class="container mx-auto flex items-center justify-between px-4 py-4">
		<a href="/" aria-label="HSH Private Server Home">
			<img src="logo.png" alt="HSH Private Server Logo" class="h-12 w-auto" />
		</a>
		<div class="flex items-center space-x-4">
			<ul class="text-dark-text hidden items-center space-x-6 md:flex">
				<li><a href="#welcome" class="hover:text-primary transition-colors">Welcome</a></li>
				<li><a href="#tutorial" class="hover:text-primary transition-colors">Tutorial</a></li>
				<li><a href="#faq" class="hover:text-primary transition-colors">FAQ</a></li>
			</ul>
			<button class="text-dark-subtle hover:text-primary md:hidden" aria-label="Toggle main menu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/></svg
				>
			</button>
		</div>
	</nav>
</header>
