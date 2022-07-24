<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'input', // required
			name: 'email', // required
			value: '', // optional
			attributes: {
				type: 'email', // default = text, or password, email, number, tel, optional
				id: 'email', // optional
				classes: ['form-control'], // optional
				label: 'Field email', // optional
				placeholder: 'Placeholder field email', // optional
				disabled: false, // optional
				readonly: false // optional
			},
			rules: ['email'] // optional
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_email" />
</Result>
