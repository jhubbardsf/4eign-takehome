<script lang="ts">
	// SuperDebug
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	import { MapsAutocomplete } from '$lib/actions';
	import Card from '$lib/components/Card.svelte';
	import Input from '$lib/components/Input.svelte';
	import { dateFormatter } from '$lib/utils/dates';

	export let data: PageData;

	const superform = superForm(data.form!, {
		autoFocusOnError: true,
		resetForm: false
	});
	const { enhance, message } = superform;

	const now = new Date();
	const validMonth = now.getMonth() + 3;
	const threeMonthsFromNow = new Date(now.setMonth(validMonth));

	const minValidDate = dateFormatter(threeMonthsFromNow, 'yyyy-mm-dd');
</script>

<svelte:head>
	<title>Update Vacancy</title>
</svelte:head>

<Card title="Update Vacancy">
	<form method="POST" use:enhance class="flex flex-col gap-4 items-start align-baseline">
		<Input
			{superform}
			field="title"
			title="Job Title"
			placeholder="Electronics technician"
			type="text"
		/>
		<Input
			{superform}
			field="address"
			title="Place of Work"
			placeholder="548 Market St, San Francisco, CA 94104"
			type="text"
			use={MapsAutocomplete}
		/>
		<Input {superform} field="start_date" title="Start Date" type="date" min={minValidDate} />
		<Input {superform} field="urgency" title="Urgency of Vacancy" type="range" />

		{#if $message?.text}
			Returned message: {$message?.text}
		{/if}

		<button type="submit" class="btn variant-filled self-center">Submit</button>
	</form>
</Card>
