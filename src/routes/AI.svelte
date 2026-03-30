<script>
	import {header, thesis, facts, projects} from '$lib/logic/model_ai.js'
	import Footer from '$lib/ui/Footer.svelte'
	import {push} from 'svelte-spa-router'

	const open_route = route => {
		if (route.startsWith('http')) window.open(route, '_blank')
		else push(route)
	}
</script>

<main class="theme-light bg-[white] min-h-[100dvh] pt-10 tablet:pt-20">
	<section class="px max-w-[680px] mx-auto">
		<h1 class="text-30 header">{header.name}</h1>
		<p class="font-medium text-ml">{header.title}</p>
	</section>
	<br/><br/>
	<section class="px-01 tablet:px max-w-[1024px] mx-auto">
		<img src="/ai/antonbrams.jpg" alt="Anton Brams" class="w-full rounded" />
	</section>
	<br/><br/><br/>
	<section class="px max-w-[680px] mx-auto">
		<div class="border border-sl rounded p-10 grid tablet:grid-cols-2 gap-10">
			{#each facts as fact}
				<div class="text-01">
					<span class="text-fg header">{fact.label}:</span>
					<span class="text-ml">{fact.value}</span>
				</div>
			{/each}
		</div>
	</section>
	<br/><br/>
	<section class="px max-w-[680px] mx-auto text-00">
		{thesis}
	</section>

	{#each projects as project}
		<br/><br/><br/><br/>
		<section class="px max-w-[680px] mx-auto">
			<div class="flex items-center justify-start gap">
				<h2 class="text-20 header">{project.name}</h2>
				{#if project.route}
					<button class="primary small whitespace-nowrap top-02 relative" on:click={() => open_route(project.route)}>read more</button>
				{/if}
			</div>
			<p class="text-01 text-ml">{project.subtitle}</p><br/>
			<p class="text-00">{@html project.description}</p><br/>
			<p class="text-00 font-bold">{project.impact}</p><br/><br/>
		</section>
		<section class="px-01 tablet:px max-w-[1024px] mx-auto grid tablet:grid-cols-2 gap-02 tablet:gap-01">
			{#each project.images as img}
				<img src={img} alt={project.name} class="w-full aspect-square rounded object-cover bg-sa" />
			{/each}
		</section>
	{/each}

	<Footer />
</main>
