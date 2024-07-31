<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';
		import type { PageData } from './$types';
	import { dev } from '$app/environment';
	import { MapsAutocomplete } from '$lib/actions';

	export let data: PageData;

	const { form } = superForm(data.form);
</script>

<svelte:head>
	<title>Set Vacancy</title>
</svelte:head>

<div class="flex min-h-screen w-full">
	<div class="card p-4 w-1/2 border-2 m-auto">
		<h1>Set Vacancy</h1>
		<form method="POST">
			<label class="label">
				<span>Job Title</span>
				<input
					bind:value={$form.title}
					name="title"
					class="input"
					title="Job Title"
					type="text"
					placeholder="Electronics technician"
				/>
			</label>
			<label class="label">
				<span>Place of Work</span>
				<input
					use:MapsAutocomplete
					bind:value={$form.address}
					name="address"
					class="input Autocomplete"
					title="Place of Work"
					type="text"
					placeholder="424 Bryant Ave, Danville, VA"
				/>
			</label>
			<label class="label">
				<span>Start Date</span>
				<input
					bind:value={$form.start_date}
					name="start_date"
					class="input"
					title="Start Date"
					type="date"
					placeholder="dd.mm.yyyy"
				/>
			</label>
			<label class="label">
				<span>Urgency of vacancy</span>
				<input
					bind:value={$form.urgency}
					name="urgency"
					class="input"
					title="Urgency of vacancy"
					type="range"
				/>
			</label>
			<div class="w-full flex">
				<button type="submit" class="m-auto bg-primary-500">Submit</button>
			</div>
		</form>
	</div>
</div>

<SuperDebug data={$form} display={dev} />
