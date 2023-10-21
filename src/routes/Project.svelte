<script>
	import {mdiCloseCircle} from '@mdi/js'
	import {useParams, navigate} from 'svelte-navigator'
	import {projects} from '$lib/logic/model.js'
	import {onMount} from 'svelte'
	import {protect_with_pin} from '$lib/logic/store.js'

	import Icon from 'mdi-svelte'
	import Section from '$lib/ui/Section.svelte'

	const params = useParams()
	$: ({name} = $params)
	$: ({info, metadata, sections, settings} = projects.find(
		p => p.info.name == name
	))

	onMount(() => {
		if (settings?.locked && protect_with_pin()) return navigate('/')
		window.scrollTo(0, 0)
	})

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
	class="fixed cursor-pointer z-[1] right top tablet:right-20 tablet:top-20"
	on:click={e => navigate(-1)}
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

<Section
	class="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap grid-flow-dense"
>
	{#each Object.entries(metadata) as [key, value]}
		<div
			class="grid grid-rows-[1fr_auto] text-center gap items-center rounded-10 bg-sa p-10 pb"
		>
			<div class={metadata_styles[key]}>{@html value}</div>
			<div class="text-01 text-ml">{key}</div>
		</div>
	{/each}
</Section>

{#each sections.filter(s => !s.hidden) as { title, description, file }, i}
	<Section class="grid tablet:grid-cols-[auto_auto] items-center gap-20 pb-30">
		<div class="container contrast-[.85]" class:tablet:order-2={i % 2}>
			{#if ['jpg', 'png'].includes(file.split('.')[1])}
				<a href="/projects/{info.name}/{file}" target="_blank">
					<img
						class="max-h-[90vh] max-w-full rounded-01"
						src="/projects/{info.name}/{file}"
						alt=""
					/>
				</a>
			{/if}
			{#if ['mp4', 'mov'].includes(file.split('.')[1])}
				<video
					class="max-h-[90vh] max-w-full rounded-01"
					src="/projects/{info.name}/{file}"
					muted
					autoplay
					loop
				/>
			{/if}
		</div>

		<div class="min-w-[20ch] max-w-[40ch]">
			<div class="text-10 header">{title}</div>
			<br />
			<div>{@html description}</div>
		</div>
	</Section>
{/each}
