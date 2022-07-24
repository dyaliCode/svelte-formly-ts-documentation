<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'input', // required
			name: 'name-field-text', // required
			value: '', // optional
			attributes: {
				type: 'text', // default = text, or password, email, number, tel, optional
				id: 'id-field-text', // optional
				classes: ['form-control'], // optional
				label: 'Field text', // optional
				placeholder: 'Placeholder field text', // optional
				disabled: false, // optional
				readonly: false // optional
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_text" />
</Result>
