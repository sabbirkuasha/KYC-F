<script>
	import {page} from '$app/stores'
	import Transition from '../lib/Transition.svelte'
	import '../app.postcss';
	import NavBar from '$lib/NavBar.svelte';

	$: console.log("page info is: ")
	$: console.log($page.routeId)
	$: console.log($page)

</script>


<NavBar Menu1 = "Data Input"
		Menu1url = "/dataInput"
		Menu2 = "Match NID"
		Menu2url = "/checkNID"/>

<main>
	<Transition url = {$page.url}>
		<slot />
	</Transition>
</main>

