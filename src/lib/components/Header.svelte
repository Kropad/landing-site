<script>
	import { page } from "$app/stores"
	import { IconBars } from "$lib/icons/IconBars"
	import { IconKropad } from "$lib/icons/Kropad"
	import { isMenuOpen } from "$lib/stores/isMenuOpen"
</script>

<header
	class="sticky top-0 z-40 flex h-14 justify-center border-b border-neutral-200 bg-white/70 backdrop-blur-xl"
>
	<div class="flex w-full max-w-7xl items-center justify-between px-4">
		<a
			href="/"
			aria-label="Kropad's homepage"
			class="flex items-center gap-2 text-xl font-extrabold"
			on:click={isMenuOpen.close}
		>
			{@html IconKropad("30")}
			Kropad
		</a>
		<nav class="hidden gap-8 text-sm text-neutral-900/60 md:flex">
			<a
				href="/"
				aria-label="Kropad's homepage"
				class={$page.url.pathname === "/" ? "text-neutral-900" : ""}
			>
				Homepage
			</a>
			<a
				href="https://discord.com"
				target="_blank"
				aria-label="Kropad's Discord server"
				class="hover:text-green-600 hover:underline"
				on:click={isMenuOpen.toggle}
			>
				Discord
			</a>
			<a
				href="https://twitter.com/kropadcom"
				target="_blank"
				aria-label="Kropad's Twitter profile"
				class="hover:text-green-600 hover:underline"
				on:click={isMenuOpen.toggle}
			>
				X / Twitter
			</a>
			<a
				href="https://t.me/kropad"
				target="_blank"
				aria-label="Kropad's Telegram channel"
				class="hover:text-green-600 hover:underline"
				on:click={isMenuOpen.toggle}
			>
				Telegram
			</a>
			<a
				href="https://github.com/Kropad"
				target="_blank"
				aria-label="Kropad's GitHub profile"
				class="hover:text-green-600 hover:underline"
				on:click={isMenuOpen.toggle}
			>
				GitHub
			</a>
			<a
				href="mailto:contact@kropad.com"
				class="hover:text-green-600 hover:underline"
				aria-label="Kropad's mail address"
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
