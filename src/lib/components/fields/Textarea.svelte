<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'textarea', // required
			name: 'name-field-textarea', // required
			value: '', // optional
			attributes: {
				id: 'id-field-textarea', // optional
				classes: ['form-control'], // optional
				label: 'Label field textarea', // optional
				placeholder: 'Placeholder field tel', // optional
				disabled: false, // optional
				readonly: false, // optional
				rows: 14, // optional
				cols: 8 // optional
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_textarea" />
</Result>
