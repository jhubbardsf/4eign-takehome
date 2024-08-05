<script lang="ts">
	import type { PageData } from './$types';
	import Datatable from '$lib/components/datatable/Datatable.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Settings</title>
</svelte:head>

<Datatable vacancies={data.vacancies} count={data.count} />
