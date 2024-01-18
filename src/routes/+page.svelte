<script>
	import { IconDiscord } from "$lib/icons/Discord"
	import { IconGithub } from "$lib/icons/GitHub"
	import { IconKropad } from "$lib/icons/Kropad"
	import { Bolt } from "$lib/icons/Bolt"
	import { Lock } from "$lib/icons/Lock"
	import { IconMail } from "$lib/icons/Mail"
	import { People } from "$lib/icons/People"
	import { Rocket } from "$lib/icons/Rocket"
	import { IconTelegram } from "$lib/icons/Telegram"
	import { IconX } from "$lib/icons/X"
</script>

<main class="flex flex-1 flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
	<section class="flex flex-col items-center gap-8 px-4 py-12 text-center">
		<div class="w-96 px-12">
			{@html IconKropad("100%")}
		</div>
		<div class="flex flex-col gap-8">
			<div class="flex flex-col items-center gap-8">
				<h1 class="text-5xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl">
					Decentralized <br /> Launchpad
				</h1>
				<div class="flex max-w-[32ch] flex-col sm:text-lg md:text-xl lg:text-2xl">
					Kropad is a decentralized launchpad being developed on Kroma.
				</div>
			</div>
			<div class="flex justify-center gap-5">
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#6264ef] fill-white duration-150 hover:scale-110 hover:opacity-70"
					aria-label="Kropad's Discord server"
					href="https://discord.gg/m3GDZWsFmF"
					target="_blank"
				>
					{@html IconDiscord()}
				</a>
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#000000] fill-white duration-150 hover:scale-110 hover:opacity-70"
					aria-label="Kropad's Twitter profile"
					href="https://twitter.com/kropadcom"
					target="_blank"
				>
					{@html IconX()}
				</a>
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#229ED9] fill-white duration-150 hover:scale-110 hover:opacity-70"
					aria-label="Kropad's Telegram channel"
					href="https://t.me/kropad"
					target="_blank"
				>
					{@html IconTelegram()}
				</a>
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#1d2128] fill-white duration-150 hover:scale-110 hover:opacity-70"
					aria-label="Kropad's GitHub profile"
					href="https://github.com/Kropad"
					target="_blank"
				>
					{@html IconGithub()}
				</a>
				<a
					class="flex h-13 w-13 items-center justify-center rounded-full bg-[#da453c] fill-white duration-150 hover:scale-110 hover:opacity-70"
					aria-label="Kropad's mail address"
					href="mailto:contact@kropad.com"
					target="_blank"
				>
					{@html IconMail()}
				</a>
			</div>
		</div>
	</section>
	<section class="flex flex-col items-center py-12 text-center">
		<div class="flex w-full max-w-7xl flex-col px-4">
			<div
				class="grid w-full grid-cols-1 gap-x-5 gap-y-4 text-3xl font-extrabold text-white sm:text-3xl md:grid-cols-2"
			>
				<div
					class="flex h-96 flex-col items-center justify-center rounded-2xl bg-green-400 px-6 md:col-span-2"
				>
					You are the owner of the platform
				</div>
				<div class="flex h-96 flex-col items-center justify-center rounded-2xl bg-green-400 px-6">
					Vote projects and choose their fate
				</div>
				<div class="flex h-96 flex-col items-center justify-center rounded-2xl bg-green-400 px-6">
					Join and launch your project
				</div>
			</div>
		</div>
	</section>
	<section class="flex flex-col items-center py-12">
		<div class="flex w-full max-w-7xl flex-col gap-8 px-4 py-14 sm:gap-10 lg:gap-11">
			<div class="flex flex-col gap-4 text-center sm:gap-6 lg:gap-7">
				<h2 class="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">What is Kropad</h2>
				<p class="sm:text-lg md:text-xl lg:text-2xl">A dapp that is just safe and fun to use</p>
			</div>
			<div class="grid w-full grid-cols-1 gap-x-5 gap-y-4 text-left md:grid-cols-2">
				<div class="flex flex-col gap-6 rounded-2xl bg-neutral-100 p-10">
					<div
						class="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200 fill-neutral-950 lg:h-16 lg:w-16"
					>
						{@html Rocket("h-6 w-6 lg:h-8 lg:w-8")}
					</div>
					<h3 class="text-3xl font-extrabold lg:text-4xl">Launchpad</h3>
					<p class="text-neutral-500 lg:text-lg">Kropad is a launchpad that launches projects.</p>
				</div>
				<div class="flex flex-col gap-6 rounded-2xl bg-neutral-100 p-10">
					<div
						class="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200 fill-neutral-950 lg:h-16 lg:w-16"
					>
						{@html Lock("h-6 w-6 lg:h-8 lg:w-8")}
					</div>
					<h3 class="text-3xl font-extrabold lg:text-4xl">Safe</h3>
					<p class="text-neutral-500 lg:text-lg">
						No centralized parties. No need to transfer your funds.
					</p>
				</div>
				<div class="flex flex-col gap-6 rounded-2xl bg-neutral-100 p-10">
					<div
						class="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200 fill-neutral-950 lg:h-16 lg:w-16"
					>
						{@html People("h-6 w-6 lg:h-8 lg:w-8")}
					</div>
					<h3 class="text-3xl font-extrabold lg:text-4xl">Decentralized</h3>
					<p class="text-neutral-500 lg:text-lg">
						All the projects are always elected by the users before launch.
					</p>
				</div>
				<div class="flex flex-col gap-6 rounded-2xl bg-neutral-100 p-10">
					<div
						class="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200 fill-neutral-950 lg:h-16 lg:w-16"
					>
						{@html Bolt("h-6 w-6 lg:h-8 lg:w-8")}
					</div>
					<h3 class="text-3xl font-extrabold lg:text-4xl">Fast & Sleek</h3>
					<p class="text-neutral-500 lg:text-lg">
						You've never used a dapp that lightweight, fast, and easy.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>
