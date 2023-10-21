<script>
	import {Router, Route} from 'svelte-navigator'
	import Landing from './routes/Landing.svelte'
	import Project from './routes/Project.svelte'
</script>

<Router primary={false}>
	<Route path="/"><Landing /></Route>
	<Route path="/projects/:name"><Project /></Route>
</Router>

<div class="w-full p-20 text-center text-ml">Made with ❤ by Anton Brams</div>
