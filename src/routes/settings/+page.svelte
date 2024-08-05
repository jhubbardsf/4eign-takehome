<script lang="ts">
	import type { PageData } from './$types';
	import Datatable from '$lib/components/datatable/Datatable.svelte';

	export let data: PageData;

	console.log({ data });
</script>

<div class="flex flex-col min-h-screen w-full">
	<div class="card p-4 m-4">
		<h1>Settings Page</h1>
		<Datatable />
	</div>
</div>
