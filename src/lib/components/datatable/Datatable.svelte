<script lang="ts">
	import { DataHandler } from '@vincjo/datatables/remote';
	import type { State, Row } from '@vincjo/datatables/remote';
	import { goto } from '$app/navigation';
	import { reload } from '$lib/api';
	import Pagination from '$lib/components/datatable/Pagination.svelte';
	import RowCount from '$lib/components/datatable/RowCount.svelte';
	import RowsPerPage from '$lib/components/datatable/RowsPerPage.svelte';
	import ThFilter from '$lib/components/datatable/ThFilter.svelte';
	import ThSort from '$lib/components/datatable/ThSort.svelte';
	import type { Vacancy } from '@prisma/client';

	export let vacancies: Vacancy[];
	export let count: number;

	//Init data handler - SERVER
	const handler = new DataHandler<Row>(vacancies, { rowsPerPage: 5, totalRows: count });
	const rows = handler.getRows();

	handler.onChange((state: State) => reload(state));
	handler.invalidate();
</script>

<div class="overflow-y-auto space-y-4 p-2">
	<header class="flex justify-end">
		<RowsPerPage {handler} />
	</header>
	<div class="table-container">
		<table class="table table-hover table-compact w-full table-auto">
			<thead>
				<tr>
					<ThSort {handler} orderBy="id">ID</ThSort>
					<ThSort {handler} orderBy="title">Title</ThSort>
					<ThSort {handler} orderBy="address">Address</ThSort>
					<ThSort {handler} orderBy="start_date">Start Date</ThSort>
					<ThSort {handler} orderBy="urgency">Urgency</ThSort>
				</tr>
				<tr>
					<ThFilter {handler} filterBy="id" />
					<ThFilter {handler} filterBy="title" />
					<ThFilter {handler} filterBy="address" />
					<ThFilter {handler} filterBy="start_date" />
					<ThFilter {handler} filterBy="urgency" />
				</tr>
			</thead>
			<tbody class="h-[500px] overflow-hidden">
				{#each $rows as row}
					<tr on:click={() => goto(`/settings/${row.id}`)} class="cursor-pointer">
						<td>{row.id}</td>
						<td>{row.title}</td>
						<td>{row.address}</td>
						<td>{row.start_date}</td>
						<td>{row.urgency}</td>
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
