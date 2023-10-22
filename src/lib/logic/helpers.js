export const parallax = (node, speed = 100) => {
	const on_scroll_listener = e => {
		// calc
		const {top, height} = node.getBoundingClientRect()
		const half = window.innerHeight / 2
		const delta = (top + height / 2 - half) / half
		if (Math.abs(delta) > 2) return
		const map = Math.round(delta * speed)
		// animate
		window.requestAnimationFrame(() => {
			node.style.transform = `translateY(${map}px)`
		})
	}
	window.addEventListener('scroll', on_scroll_listener)
	window.addEventListener('resize', on_scroll_listener)
	return {
		destroy() {
			window.removeEventListener('scroll', on_scroll_listener)
			window.removeEventListener('resize', on_scroll_listener)
		},
	}
}
