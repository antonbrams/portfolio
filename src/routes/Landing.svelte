<script>
	import {intro, teaser, about, reviews, projects} from '$lib/logic/model.js'
	import {protect_with_pin} from '$lib/logic/store.js'
	import {navigate} from 'svelte-navigator'

	import Section from '$lib/ui/Section.svelte'

	const open_project = (name, locked) => {
		if (locked && protect_with_pin()) return
		navigate(`projects/${name}`)
	}
</script>

<Section
	first
	class="flex flex-col items-center justify-center min-h-full gap-30"
>
	<span class="text-30 header text-center max-w-[24ch]">{@html intro}</span>
	<div class="flex gap">
		<button on:click={e => (location.href = 'mailto:hello@antonbrams.io')}>
			hello@antonbrams.io
		</button>
		<button class="primary" on:click={e => window.open(teaser, '_blank')}>
			Watch Demo
		</button>
	</div>
</Section>

<Section>
	<div class="text-20 header">About</div>
	<br />
	<br />
	<div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-20">
		{#each about as [title, items]}
			<div>
				<div class="header">{title}</div>
				<br />
				<ul>
					{#each items as item}
						<li>{@html item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Section>

<Section>
	<div class="text-20 header">Projects</div>
	<br />
	<br />
	<div class="grid grid-cols gap grid-flow-dense">
		{#each projects.filter(p => !p?.settings?.hidden) as { info, settings }}
			<div
				on:click={e => open_project(info.name, settings?.locked)}
				on:keydown
				role="button"
				tabindex="0"
				class={`
					relative h-[400px] rounded overflow-hidden group hover:shadow-[0_16px_64px_-16px_var(--active)] transition-all duration-00 
					${settings?.highlight ? 'col-span-2' : ''}
				`}
			>
				<img
					class="absolute object-cover w-full h-full contrast-[.85]"
					src="./projects/{info.name}/{info.thumbnail}"
					alt="project {info.name}"
				/>
				<div
					class="relative flex items-center justify-center w-full h-full transition-opacity opacity-0 duration-00 backdrop-blur-sm group-hover:opacity-100"
				>
					<div class="absolute w-full h-full opacity-80 bg-active" />
					<div
						class="transition-all scale-90 group-hover:scale-100 duration-00 text-[white] max-w-[350px] text-center p-10"
					>
						<div class="text-10 header">{info.name}</div>
						<br />
						<div>{info.description}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

<Section>
	<div class="text-20 header">Reviews</div>
	<br />
	<br />
	<div
		class="grid items-start grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap"
	>
		{#each reviews as { name, description, comment }}
			<div class="flex flex-col col-span-2 rounded gap bg-sa p">
				<div class="grid grid-cols-[auto_1fr] gap">
					<div
						class="w-[50px] h-[50px] bg-cover bg-center rounded-20"
						style={`background-image: url('./reviews/${name}.jpg')`}
					/>
					<div>
						<div class="header">{name}</div>
						<div class="text-01">{description}</div>
					</div>
				</div>
				<div>{comment}</div>
			</div>
		{/each}
	</div>
</Section>
