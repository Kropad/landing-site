import { writable } from "svelte/store"

const createIsMenuOpen = () => {
	const { set, update, subscribe } = writable<boolean>(false)

	return {
		subscribe,
		toggle: () => update((isOpen) => !isOpen),
		close: () => set(false),
	}
}

export const isMenuOpen = createIsMenuOpen()
