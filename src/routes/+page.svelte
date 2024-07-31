<script lang="ts">
	import { MapsAutocomplete } from '$lib/actions';
</script>

<svelte:head>
	<title>Set Vacancy</title>
</svelte:head>

<div class="flex min-h-screen w-full">
	<div class="card p-4 w-1/2 border-2 m-auto">
		<h1>Set Vacancy</h1>
		<form>
			<label class="label">
				<span>Job Title</span>
				<input class="input" title="Job Title" type="text" placeholder="Electronics technician" />
			</label>
			<label class="label">
				<span>Place of Work</span>
				<input
					use:MapsAutocomplete
					class="input Autocomplete"
					title="Place of Work"
					type="text"
					placeholder="424 Bryant Ave, Danville, VA"
				/>
			</label>
			<label class="label">
				<span>Start Date</span>
				<input class="input" title="Start Date" type="text" placeholder="dd.mm.yyyy" />
			</label>
			<label class="label">
				<span>Urgency of vacancy</span>
				<input class="input" title="Urgency of vacancy" type="range" />
			</label>
			<div class="w-full flex">
				<button type="submit" class="m-auto bg-primary-500">Submit</button>
			</div>
		</form>
	</div>
</div>
