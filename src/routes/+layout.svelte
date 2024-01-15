<Seo
	data={{
		title: $page.data.title,
		description: $page.data.description,
	}}
/>
<slot />

<script lang="ts">
	import { page } from "$app/stores"
	import Seo from "$lib/components/Seo.svelte"
	import "../app.css"
</script>
