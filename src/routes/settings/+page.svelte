<script lang="ts">
	import type { PageData } from './$types';
	import Datatable from '$lib/components/datatable/Datatable.svelte';

	export let data: PageData;

	console.log({ data });
</script>

<!-- <div class=""> -->
<Datatable vacancies={data.vacancies} count={data.count} />
<!-- </div> -->
