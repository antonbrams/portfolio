<script>
	import {mdiCloseCircle} from '@mdi/js'
	import {projects} from '$lib/logic/model.js'
	import {protect_with_pin} from '$lib/logic/store.js'
	import {pop, push} from 'svelte-spa-router'
	import {fade} from 'svelte/transition'
	import {parallax} from '$lib/logic/helpers.js'

	import Icon from 'mdi-svelte'
	import Section from '$lib/ui/Section.svelte'

	export let params = {}

	const {
		info,
		metadata = {},
		sections,
		settings,
	} = projects.find(p => p.info.name == params.name)

	if (settings?.locked && protect_with_pin()) push('/')

	const metadata_styles = {
		'date': 'text-30',
		'responsibilities': 'text-10',
		'client': 'text-10',
		'tools': 'text-10',
		'status': 'text-10',
		'project url': 'text-20',
	}
</script>

<div
	in:fade={{delay: 200, duration: 1000}}
	class="fixed cursor-pointer z-[1] right bottom"
	on:click={e => pop()}
	on:keydown={e => {}}
	role="button"
	tabindex="0"
>
	<Icon path={mdiCloseCircle} color="var(--active)" size={3} />
</div>

<Section first class="flex items-center justify-between gap">
	<div class="text-30 header">
		{info.name}
	</div>
</Section>

{#each sections.filter(s => !s.hidden) as { title, description, file }, i}
	<Section class="flex flex-col">
		<div class="contrast-[.85]">
			{#if ['jpg', 'png'].includes(file.split('.')[1])}
				<a href={`/projects/${info.name}/${file}`} target="_blank">
					<img
						class="max-h-[90vh] max-w-full w-full object-contain"
						src="/projects/{info.name}/{file}"
						alt=""
					/>
				</a>
			{/if}
			{#if ['mp4', 'mov'].includes(file.split('.')[1])}
				<video
					class="max-h-[90vh] max-w-full w-full object-contain"
					src="/projects/{info.name}/{file}"
					muted
					autoplay
					loop
				/>
			{/if}
		</div>

		<div
			class="max-w-[50ch] [text-shadow:_0_2px_4px_black] tablet:mx-20 -mt"
			class:place-self-end={i % 2 == 0}
			use:parallax={50}
		>
			<div class="text-10 header">{title}</div>
			<br />
			<div>{@html description}</div>
		</div>
	</Section>

	{#if i == 0}
		<Section
			class="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap grid-flow-dense"
		>
			{#each Object.entries(metadata) as [key, value], i}
				<div
					class="grid grid-rows-[1fr_auto] text-center gap items-center rounded-10 bg-sa p-10 pb"
				>
					<div class={metadata_styles[key]}>{@html value}</div>
					<div class="text-01 text-ml">{key}</div>
				</div>
			{/each}
		</Section>
	{/if}
{/each}
