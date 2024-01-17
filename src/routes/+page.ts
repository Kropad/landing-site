import type { Seo } from "$lib/types/Seo"
import type { PageLoad } from "./$types"

export const load: PageLoad = () => {
	return {
		title: "Kropad",
		description: "Kropad is a decentralized launchpad being developed on Kroma.",
	} satisfies Seo
}
