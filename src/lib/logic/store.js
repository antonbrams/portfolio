import {writable, get} from 'svelte/store'

export const protect_with_pin = (() => {
	const hidden_locked = writable(true)
	return () => {
		if (get(hidden_locked)) {
			if (prompt('Enter Pin')?.toLowerCase() !== 'hello') return true
			hidden_locked.set(false)
		}
		return false
	}
})()

export const show_all_projects = (() => {
	const store = writable(false)
	return {...store, get: () => get(store)}
})()
