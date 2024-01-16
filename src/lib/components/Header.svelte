<script>
	import { page } from "$app/stores"
	import { IconBars } from "$lib/icons/IconBars"
	import { isMenuOpen } from "$lib/stores/isMenuOpen"
</script>

<header
	class="sticky top-0 z-40 flex h-13 justify-center border-b border-neutral-200 bg-white/70 backdrop-blur-xl"
>
	<div class="flex w-full max-w-7xl items-center justify-between px-4">
		<a
			href="/"
			class="flex items-center gap-1.5 text-xl font-extrabold"
			on:click={isMenuOpen.close}
		>
			<div class="flex h-7 w-7 items-center justify-center rounded-full bg-green-400">
				<div class="h-3.5 w-3.5 rounded-sm bg-white" />
			</div>
			Kropad
		</a>
		<nav class="hidden gap-8 text-sm text-neutral-900/60 md:flex">
			<a href="/" class={$page.url.pathname === "/" ? "text-neutral-900" : ""}> Homepage </a>
			<a
				href="https://discord.com"
				target="_blank"
				class="duration-150 hover:text-green-600 hover:underline"
				on:click={isMenuOpen.toggle}
			>
				Discord
			</a>
			<a
				href="https://twitter.com/kropadcom"
				target="_blank"
				class="duration-150 hover:text-green-600 hover:underline"
				on:click={isMenuOpen.toggle}
			>
				X / Twitter
			</a>
			<a
				href="https://t.me/kropad"
				target="_blank"
				class="duration-150 hover:text-green-600 hover:underline"
				on:click={isMenuOpen.toggle}
			>
				Telegram
			</a>
			<a
				href="https://github.com/Kropad"
				target="_blank"
				class="duration-150 hover:text-green-600 hover:underline"
				on:click={isMenuOpen.toggle}
			>
				GitHub
			</a>
			<a
				href="mailto:contact@kropad.com"
				target="_blank"
				class="duration-150 hover:text-green-600 hover:underline"
				on:click={isMenuOpen.toggle}
			>
				Mail
			</a>
		</nav>
		<button class="fill-neutral-900 md:hidden" on:click={isMenuOpen.toggle}>
			{@html IconBars()}
		</button>
	</div>
</header>
