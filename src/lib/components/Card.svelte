<script lang="ts">
	export let title: string;
</script>

<div class="card p-4 border-2 w-1/2 flex flex-col gap-2 mx-auto mt-10">
	<h1 class="text-2xl font-semibold">{title}</h1>
	<slot />
</div>
