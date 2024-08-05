<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables/remote';

	export let handler: DataHandler;
	export let orderBy: string;

	const sort = handler.getSort();
	const update = () => {
		handler.sort(orderBy);
		handler.invalidate();
	};
	console.log({ $sort });

	if (orderBy === $sort?.orderBy) {
		console.log('Found sort: ', $sort);
	} else {
		console.log('No sort: ', orderBy);
	}
</script>

<th on:click={update} class:active={$sort?.orderBy === orderBy}>
	<div class="flex">
		<strong>
			<slot />
		</strong>
		<span class:asc={$sort?.direction === 'asc'} class:desc={$sort?.direction === 'desc'} />
	</div>
</th>

<!-- <th on:click={update} class="cursor-pointer select-none p-2 px-5">
	<div class="flex h-full items-center justify-start gap-x-2">
		<slot />
		[sort]
	</div>
</th> -->

<style>
	th {
		background: inherit;
		margin: 0;
		padding: 8px 20px;
		border-bottom: 1px solid #e0e0e0;
		user-select: none;
	}
	th {
		cursor: pointer;
	}
	th div.flex {
		padding: 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 100%;
	}
	th span {
		padding-left: 8px;
	}
	th span:before,
	th span:after {
		border: 4px solid transparent;
		content: '';
		display: block;
		height: 0;
		width: 0;
	}
	th span:before {
		border-bottom-color: #e0e0e0;
		margin-top: 2px;
	}
	th span:after {
		border-top-color: #e0e0e0;
		margin-top: 2px;
	}
	th.active span.asc:before {
		border-bottom-color: #9e9e9e;
	}
	th.active span.desc:after {
		border-top-color: #9e9e9e;
	}
</style>
