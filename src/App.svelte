<script>
	import Router from 'svelte-spa-router'

	import Landing from './routes/Landing.svelte'
	import Project from './routes/Project.svelte'
	import AI from './routes/AI.svelte'

	const routes = {
		'/': Landing,
		'/ai': AI,
		'/projects/:name': Project,
	}
</script>

<Router {routes} restoreScrollState={true} />
