<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'input', // required
			name: 'number', // required
			value: '', // optional
			attributes: {
				type: 'number', // default = text, or password, email, number, tel, optional
				id: 'number', // optional
				classes: ['form-control'], // optional
				label: 'Field number', // optional
				placeholder: 'Placeholder field number', // optional
				disabled: false, // optional
				readonly: false // optional
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_number" />
</Result>
