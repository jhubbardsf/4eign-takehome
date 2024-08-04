<script lang="ts">
	import Datatable from '$lib/components/Datatable.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log({ data });
</script>

<h1>Settings Page</h1>
<Datatable />
