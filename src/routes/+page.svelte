<script>
	import { IconDiscord } from "$lib/icons/Discord"
	import { IconGithub } from "$lib/icons/GitHub"
	import { IconMail } from "$lib/icons/Mail"
	import { IconTelegram } from "$lib/icons/Telegram"
	import { IconX } from "$lib/icons/X"
</script>

<main class="flex flex-1 flex-col">
	<section class="flex flex-col items-center gap-8 px-4 py-12 text-center">
		<div class="w-96 px-12">
			<div
				class="flex aspect-square w-full items-center justify-center rounded-full bg-green-400 p-[23%]"
			>
				<div class="aspect-square w-full rounded-[10%] bg-white" />
			</div>
		</div>
		<div class="flex flex-col gap-8">
			<div class="flex flex-col items-center gap-8">
				<h1 class="text-5xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl">
					Decentralized <br /> Launchpad
				</h1>
				<div class="flex max-w-[32ch] flex-col sm:text-lg md:text-xl lg:text-2xl">
					Kropad is a fully on-chain launchpad being developed on Kroma network.
				</div>
			</div>
			<div class="flex justify-center gap-5">
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#6264ef] fill-white duration-150 hover:opacity-70"
					aria-label="Kropad's Discord server"
					href="https://discord.com/"
					target="_blank"
				>
					{@html IconDiscord()}
				</a>
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#000000] fill-white duration-150 hover:opacity-70"
					aria-label="Kropad's Twitter profile"
					href="https://twitter.com/kropadcom"
					target="_blank"
				>
					{@html IconX()}
				</a>
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#229ED9] fill-white duration-150 hover:opacity-70"
					aria-label="Kropad's Telegram channel"
					href="https://t.me/kropad"
					target="_blank"
				>
					{@html IconTelegram()}
				</a>
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#1d2128] fill-white duration-150 hover:opacity-70"
					aria-label="Kropad's GitHub profile"
					href="https://github.com/Kropad"
					target="_blank"
				>
					{@html IconGithub()}
				</a>
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#da453c] fill-white duration-150 hover:opacity-70"
					aria-label="Kropad's mail address"
					href="mailto:contact@kropad.com"
					target="_blank"
				>
					{@html IconMail()}
				</a>
			</div>
		</div>
	</section>
	<section class="flex flex-col items-center text-center">
		<div class="flex w-full max-w-7xl flex-col gap-8 px-4 py-12">
			<h2 class="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">What is Kropad?</h2>
			<div class="grid w-full grid-cols-1 gap-x-5 gap-y-4">
				<div
					class="flex h-96 flex-col items-center justify-center rounded-xl bg-green-400 px-4 text-center text-3xl font-extrabold text-white"
				>
					A decentralized launchpad where users are in control.
				</div>
				<div
					class="flex h-96 flex-col items-center justify-center rounded-xl bg-green-400 px-4 text-center text-3xl font-extrabold text-white"
				>
					A decentralized launchpad where users are in control.
				</div>
			</div>
		</div>
	</section>
</main>
