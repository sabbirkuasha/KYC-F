<script>
	import '../app.postcss';
	import NavBar from '$lib/NavBar.svelte';
</script>


<NavBar Menu1 = "Data Input"
		Menu1url = "/dataInput"
		Menu2 = "Match NID"
		Menu2url = "/checkNID"/>
<slot />
