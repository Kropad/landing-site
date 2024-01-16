<script lang="ts">
	import { page } from "$app/stores"
	import Header from "$lib/components/Header.svelte"
	import Footer from "$lib/components/Footer.svelte"
	import Seo from "$lib/components/Seo.svelte"
	import "../app.css"
	import Menu from "$lib/components/Menu.svelte"
</script>

<Seo
	data={{
		title: $page.data.title,
		description: $page.data.description,
	}}
/>

<Header />
<Menu />
<slot />
<Footer />
