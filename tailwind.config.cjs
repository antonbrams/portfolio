export default {
	content: ['./src/**/*.{html,js,svelte,css}'],

	theme: {
		spacing: {
			'40': 'var(--s40)',
			'30': 'var(--s30)',
			'20': 'var(--s20)',
			'10': 'var(--s10)',
			'DEFAULT': 'var(--s00)',
			'01': 'var(--s01)',
			'02': 'var(--s02)',
			'03': 'var(--s03)',
			'1': '1px',
			'0': '0px',
		},
		borderRadius: {
			'full': '9999px',
			'40': 'var(--s40)',
			'30': 'var(--s30)',
			'20': 'var(--s20)',
			'10': 'var(--s10)',
			'DEFAULT': 'var(--s00)',
			'01': 'var(--s01)',
			'02': 'var(--s02)',
			'03': 'var(--s03)',
		},
		colors: {
			transparent: 'transparent',
			bg: 'var(--bg)',
			sa: 'var(--sa)',
			sl: 'var(--sl)',
			ma: 'var(--ma)',
			ml: 'var(--ml)',
			fg: 'var(--fg)',
			active: 'var(--active)',
			success: 'var(--success)',
			error: 'var(--error)',
			warning: 'var(--warning)',
		},
		backgroundImage: {
			g1: 'linear-gradient(135deg, #b8ecff, #cbffc3)',
			g2: 'linear-gradient(135deg, #f1c9ff, #ffab91)',
			g3: 'linear-gradient(135deg, #eac9ff, #b8d1ff)',
			g4: 'linear-gradient(135deg, #ffefcb, #c7ffef)',
			g5: 'linear-gradient(135deg, #b0f6ff, #c7c2ff)',
		},
		fontSize: {
			'30': ['var(--t30)', {lineHeight: '1.25'}],
			'20': ['var(--t20)', {lineHeight: '1.25'}],
			'10': ['var(--t10)', {lineHeight: '1.25'}],
			'00': ['var(--t00)', {lineHeight: '1.5'}],
			'01': ['var(--t01)', {lineHeight: '1.4'}],
		},
		screens: {
			tablet: {raw: '(min-width:760px) and (min-height:700px)'},
			desktop: {raw: '(min-width:1780px) and (min-height:1024px)'},
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '0',
			2: '2px',
		},
		gridTemplateColumns: {
			DEFAULT: 'repeat(auto-fill, minmax(var(--default-grid), 1fr))',
			2: '1fr 1fr',
		},
		transitionDuration: {
			'20': '2s',
			'10': '1s',
			'00': '0.5s',
			'01': '0.1s',
		},
	},
}
