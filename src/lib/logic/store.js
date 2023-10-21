import {writable, get} from 'svelte/store'

const hidden_locked = writable(true)

export const protect_with_pin = () => {
	if (get(hidden_locked)) {
		if (prompt('Enter Pin')?.toLowerCase() !== 'hello') return true
		hidden_locked.set(false)
	}
	return false
}
