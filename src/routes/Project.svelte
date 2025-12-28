<script>
	import {mdiArrowLeft, mdiPlayCircle} from '@mdi/js'
	import Icon from 'mdi-svelte'
	import Section from '$lib/ui/Section.svelte'
	import {projects} from '$lib/logic/model.js'
	import {protect_with_pin} from '$lib/logic/store.js'
	import {pop, push} from 'svelte-spa-router'
	import {parallax, auto_play_in_view} from '$lib/logic/helpers.js'

	export let params = {}

	const {info, metadata = {}, sections, settings} = projects.find(p => p.info?.name === params.name)
	if (settings?.locked && protect_with_pin.prompt()) push('/')

	const metadata_styles = {
		'date': {box: 'bg-sa text-ml', text: 'text-fg text-30'},
		'responsibilities': {box: 'bg-sa text-ml', text: 'text-fg'},
		'client': {box: 'bg-sa text-ml', text: 'text-fg text-10'},
		'tools': {box: 'bg-sa text-ml', text: 'text-fg'},
		'status': {box: 'bg-sa text-ml', text: 'text-fg text-10'},
		'project url': {box: 'bg-active text-bg', text: 'text-fg [&>*]:text-bg text-20'},
	}

	// Reactive array of sections
	let sections_processed = sections
		.filter(s => !s.hidden)
		.map(s => ({
			asset: s,
			url: `/projects/${info.name}/${s.file}`,
			loaded: false,
		}))
</script>

<div
	class="fixed cursor-pointer z-[1] left bottom bg-active rounded-full p-01 hover:scale-110 transition-transform duration-00"
	on:click={() => pop()}
	role="button"
	tabindex="0"
>
	<Icon path={mdiArrowLeft} color="var(--bg)" size={2} />
</div>

<Section first class="flex items-center justify-between gap">
	<div class="text-30 header">{info.name}</div>
</Section>

{#each sections_processed as item, i}
	<Section class="flex flex-col">
		<div class="relative">
			{#if !item.loaded}
				<div class="absolute inset-0 rounded-01 skeleton" />
			{/if}

			{#if ['jpg', 'png'].includes(item.asset.file.split('.')[1])}
				<a href={item.url} target="_blank">
					<img
						class="max-h-[90vh] max-w-full w-full object-contain rounded-01 transition-opacity duration-500"
						src={item.url}
						alt=""
						class:opacity-0={!item.loaded}
						on:load={() => (item.loaded = true)}
					/>
				</a>
			{/if}

			{#if ['mp4', 'mov'].includes(item.asset.file.split('.')[1])}
				<video
					class="max-h-[90vh] max-w-full w-full object-contain rounded-01 transition-opacity duration-500"
					src={item.url}
					muted
					loop
					playsinline
					webkit-playsinline
					controls={false}
					autoplay
					preload="metadata"
					disablepictureinpicture
					class:opacity-0={!item.loaded}
					on:canplaythrough={() => (item.loaded = true)}
					use:auto_play_in_view={0.25}
				/>
				<div class="absolute right bottom">
					<Icon path={mdiPlayCircle} color="var(--fg)" size={1} />
				</div>
			{/if}
		</div>

		<div
			class="max-w-[50ch] [text-shadow:_0_2px_4px_black] tablet:mx-20 -mt"
			class:place-self-end={i % 2 === 0}
			use:parallax={50}
		>
			<div class="text-10 header">{item.asset.title}</div>
			<br />
			<div>{@html item.asset.description}</div>
		</div>
	</Section>

	{#if i === 0}
		<Section class="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap grid-flow-dense">
			{#each Object.entries(metadata) as [key, value]}
				<div
					class={`grid grid-rows-[1fr_auto] text-center gap items-center rounded-10 p-10 pb ${metadata_styles[key]?.box}`}
				>
					<div class={metadata_styles[key]?.text}>{@html value}</div>
					<div class="text-01">{key}</div>
				</div>
			{/each}
		</Section>
	{/if}
{/each}

<style>
	.skeleton {
		background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 37%, #2a2a2a 63%);
		background-size: 400% 100%;
		animation: shimmer 1.4s ease infinite;
	}
	@keyframes shimmer {
		0% {
			background-position: 100% 0;
		}
		100% {
			background-position: -100% 0;
		}
	}
</style>
