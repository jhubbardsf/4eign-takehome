<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	import { dev } from '$app/environment';
	import { MapsAutocomplete } from '$lib/actions';
	import Input from '$lib/forms/components/Input.svelte';

	export let data: PageData;

	$: superform = superForm(data.form, {
		autoFocusOnError: true
	});
	$: ({ enhance, form, errors, message } = superform);
</script>

<svelte:head>
	<title>Set Vacancy</title>
</svelte:head>

<div class="flex min-h-screen w-full">
	<SuperDebug data={{ $form, $errors }} display={dev} />
	<div class="card p-4 w-1/2 border-2 top-1/4 absolute flex flex-col gap-2">
		<h1 class="text-2xl font-semibold">Set Vacancy</h1>

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
			<Input {superform} field="start_date" title="Start Date" type="date" />
			<Input {superform} field="urgency" title="Urgency of Vacancy" type="range" />

			{#if message}
				Returned message: {$message}
			{/if}

			<button type="submit" class="btn variant-filled self-center">Submit</button>
		</form>
	</div>
</div>
