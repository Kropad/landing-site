<script>
	import { IconClose } from "$lib/icons/Close"
	import { isMenuOpen } from "$lib/stores/isMenuOpen"
	import { slide } from "svelte/transition"
</script>

{#if $isMenuOpen}
	<menu
		transition:slide={{ duration: 150, delay: 0 }}
		class="fixed top-0 z-50 flex h-full w-full flex-col border-b border-neutral-200 bg-white md:hidden"
	>
		<div class="flex h-14 items-center justify-end fill-neutral-900 px-4">
			<button on:click={isMenuOpen.close}>
				{@html IconClose()}
			</button>
		</div>
		<nav class="flex flex-col gap-10 px-10 py-1 text-4xl font-bold">
			<a href="/" aria-label="Kropad's homepage" on:click={isMenuOpen.toggle}> Homepage </a>
			<a
				href="https://discord.com"
				aria-label="Kropad's Discord server"
				target="_blank"
				on:click={isMenuOpen.toggle}
			>
				Discord
			</a>
			<a
				href="https://twitter.com/kropadcom"
				aria-label="Kropad's Twitter profile"
				target="_blank"
				on:click={isMenuOpen.toggle}
			>
				X / Twitter
			</a>
			<a
				href="https://t.me/kropad"
				aria-label="Kropad's Telegram channel"
				target="_blank"
				on:click={isMenuOpen.toggle}
			>
				Telegram
			</a>
			<a
				href="https://github.com/Kropad"
				aria-label="Kropad's GitHub profile"
				target="_blank"
				on:click={isMenuOpen.toggle}
			>
				GitHub
			</a>
			<a
				href="mailto:contact@kropad.com"
				aria-label="Kropad's mail address"
				target="_blank"
				on:click={isMenuOpen.toggle}
			>
				Mail
			</a>
		</nav>
	</menu>
{/if}
