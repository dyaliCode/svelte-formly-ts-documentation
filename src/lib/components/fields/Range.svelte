<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'input', // required
			name: 'name-field-range', // required
			value: 0,
			attributes: {
				type: 'range', // required
				id: 'id-field-range', // required
				classes: ['form-control'], // optional
				label: 'Label field range', // optional
				min: 0, // required
				max: 100, // required
				step: 10 // required
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_range" />
</Result>
