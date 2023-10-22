<script>
	import Router from 'svelte-spa-router'

	import Landing from './routes/Landing.svelte'
	import Project from './routes/Project.svelte'

	const routes = {
		'/': Landing,
		'/projects/:name': Project,
	}
</script>

<Router {routes} restoreScrollState={true} />

<div class="w-full p-20 text-center text-ml">Made with ❤ by Anton Brams</div>
