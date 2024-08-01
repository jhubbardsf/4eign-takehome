<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import { clsx } from 'clsx';
	import { formFieldProxy, type SuperForm, type FormPathLeaves } from 'sveltekit-superforms';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	// eslint-disable-next-line no-undef
	type T = $$Generic<Record<string, unknown>>;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = {
		superform: SuperForm<T>;
		field: FormPathLeaves<T>;
		title: string;
		placeholder?: string;
		type: HTMLInputTypeAttribute;
		use?: (node: HTMLInputElement) => void;
	};

	export let title: string;
	export let superform: SuperForm<T>;
	export let field: FormPathLeaves<T>;
	export let use: (node: HTMLInputElement) => void = () => {};

	$: ({ value, errors, tainted } = formFieldProxy(superform, field));
</script>

<div class="w-full flex flex-col gap-2" use:autoAnimate>
	<label>
		<span class="font-semibold">{title}</span>
		<input
			name={field}
			{title}
			class={clsx('input', { 'input-error': $errors && !$tainted })}
			aria-invalid={$errors ? 'true' : undefined}
			bind:value={$value}
			use:use
			{...$$restProps}
		/>
	</label>

	{#if $errors && !$tainted}
		<p class="input-error w-full p-2 rounded-xl">{$errors}</p>
	{/if}
</div>
