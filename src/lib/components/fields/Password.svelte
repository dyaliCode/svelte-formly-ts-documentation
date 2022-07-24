<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'input', // required
			name: 'password', // required
			value: '', // optional
			attributes: {
				type: 'password', // default = text, or password, email, number, tel, optional
				id: 'password', // optional
				classes: ['form-control'], // optional
				label: 'Field password', // optional
				placeholder: 'Placeholder field password', // optional
				disabled: false, // optional
				readonly: false // optional
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_password" />
</Result>
