<script>
	import {intro, sub, teaser, about, reviews, projects} from '$lib/logic/model.js'
	import {protect_with_pin, show_all_projects, show_all_skills} from '$lib/logic/store.js'
	import {push} from 'svelte-spa-router'

	import Section from '$lib/ui/Section.svelte'

	const open_project = (name, locked) => {
		if (locked && protect_with_pin()) return
		push(`/projects/${name}`)
	}

	$: projects_filtered = projects.filter(p => $show_all_projects || !p.settings?.hidden)
</script>

<Section first class="flex flex-col items-center justify-center min-h-full gap-30">
	<span class="text-30 header text-center max-w-[24ch]">{@html intro}</span>
	<span class="max-w-[60ch] border-l-2 border-sa pl-10">{@html sub}</span>
	<div class="flex flex-wrap gap">
		<button class="mobile:w-full" on:click={e => (location.href = 'mailto:hello@antonbrams.io')}>
			Get in Touch
		</button>
		<button class="mobile:w-full primary" on:click={e => window.open(teaser, '_blank')}>
			Watch Demo
		</button>
	</div>
</Section>

<Section>
	<div class="flex items-center gap">
		<div class="text-20 header">Projects</div>
		<button
			class="small mt-01"
			class:primary={!$show_all_projects}
			on:click={e => ($show_all_projects = !$show_all_projects)}
		>
			{$show_all_projects ? 'show hightlights' : 'show all'}
		</button>
	</div>
	<br />
	<br />
	<div class="grid grid-cols gap grid-flow-dense">
		{#each projects_filtered as { info, settings }}
			<div
				on:click={e => open_project(info.name, settings?.locked)}
				on:keydown
				role="button"
				tabindex="0"
				class={`
					relative aspect-[1/1] rounded overflow-hidden group  transition-all duration-00 
					${settings?.highlight ? 'col-span-2 tablet:row-span-2' : ''}
				`}
			>
				<img
					class="absolute object-cover w-full h-full contrast-[.85]"
					src="./projects/{info.name}/{info.thumbnail}"
					alt="project {info.name}"
				/>
				<div
					class="relative flex items-center justify-center w-full h-full transition-opacity opacity-0 duration-00 backdrop-blur group-hover:opacity-100"
				>
					<div class="absolute w-full h-full opacity-80 bg-active" />
					<div
						class="transition-all scale-90 group-hover:scale-100 duration-00 text-[white] max-w-[350px] text-center p-10"
					>
						<div class="text-10 header mb-01">{info.name}</div>
						<div class="text-01">{info.description}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

<Section class="flex flex-col justify-center">
	<div class="text-20 header">About</div>
	<br />
	<br />
	<div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-20">
		{#each about as { title, hidden, items }}
			{#if $show_all_skills || !hidden}
				<div>
					<div class="header">{title}</div>
					<br />
					<ul>
						{#each items as item}
							<li>{@html item}</li>
						{/each}
					</ul>
				</div>
			{/if}
		{/each}
	</div>
	<br />
	<br />
	<button
		class="self-center"
		class:primary={!$show_all_skills}
		on:click={e => ($show_all_skills = !$show_all_skills)}
	>
		{$show_all_skills ? 'Hide Skills' : 'More Skills'}
	</button>
</Section>

<Section>
	<div class="text-20 header">Reviews</div>
	<br />
	<br />
	<div class="grid items-start grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap">
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
