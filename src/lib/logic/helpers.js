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

export const auto_play_in_view = (node, threshold = 0.1) => {
	if (node.tagName !== 'VIDEO') return
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.intersectionRatio >= threshold) {
					node.currentTime = 0
					node.play().catch(() => {})
				} else node.pause()
			})
		},
		{threshold}
	)
	observer.observe(node)
	return {
		destroy() {
			observer.unobserve(node)
		},
	}
}

export function check_video_fully_loaded(video, on_load) {
	if (!video) return
	const buffered = video.buffered
	const duration = video.duration
	if (buffered.length && buffered.end(buffered.length - 1) >= duration) {
		on_load?.()
	}
}
