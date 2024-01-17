<script lang="ts">
	import { page } from "$app/stores"
	import type { Seo } from "$lib/types/Seo"

	export let data: Seo

	const title = data.title
	const description = data.description
	const url = `https://kropad.com${$page.url.pathname}`
	const keywords = "kropad, launchpad, kromapad, kroma, kroma network"
	const twitter = "@kropadcom"
	const image = "https://kropad.com/kropad-og.png"
	const imageWidth = "1200"
	const imageHeight = "630"
</script>

<svelte:head>
	<title>{$page.url.pathname !== "/" ? `${title} | Kropad` : title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta name="keywords" content={keywords} />
	<meta property="og:locale" content="en" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:site_name" content="Kropad" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content={imageWidth} />
	<meta property="og:image:height" content={imageHeight} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={twitter} />
	<meta name="twitter:creator" content={twitter} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image:src" content={image} />
</svelte:head>
