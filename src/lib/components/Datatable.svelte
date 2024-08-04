<script lang="ts">
	//Import local datatable components
	import ThSort from '$lib/components/ThSort.svelte';
	import ThFilter from '$lib/components/ThFilter.svelte';
	import Search from '$lib/components/Search.svelte';
	import RowsPerPage from '$lib/components/RowsPerPage.svelte';
	import RowCount from '$lib/components/RowCount.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	//Load remote data
	import { reload } from '$lib/api';

	//Import handler & Types from SSD remote
	import { DataHandler } from '@vincjo/datatables/remote';
	import type { State, Row } from '@vincjo/datatables/remote';

	//Init data handler - SERVER
	const handler = new DataHandler<Row>([], { rowsPerPage: 5, totalRows: 200 });
	const rows = handler.getRows();

	handler.onChange((state: State) => reload(state));
	handler.invalidate();
</script>

<div class="overflow-y-auto space-y-4">
	<header class="flex justify-between">
		<Search {handler} />
		<RowsPerPage {handler} />
	</header>
	<div class="table-container">
		<table class="table table-hover table-compact w-full table-auto">
			<thead>
				<tr>
					<ThSort {handler} orderBy="id">ID</ThSort>
					<ThSort {handler} orderBy="title">Title</ThSort>
					<ThSort {handler} orderBy="completed">Completed</ThSort>
				</tr>
				<tr>
					<ThFilter {handler} filterBy="id" />
					<ThFilter {handler} filterBy="title" />
					<ThFilter {handler} filterBy="completed" />
				</tr>
			</thead>
			<tbody>
				{#each $rows as row}
					<tr>
						<td>{row.id}</td>
						<td>{row.title}</td>
						<td>{@html row.completed ? '&check;' : '&#x2715;'}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<footer class="flex justify-between">
		<RowCount {handler} />
		<Pagination {handler} />
	</footer>
</div>
