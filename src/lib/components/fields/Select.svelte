<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'select', // required
			name: 'name-field-select', // required
			attributes: {
				id: 'id-field-select', // required
				classes: ['form-control'], // optional
				label: 'Label field select 1', // optional
				disabled: false // optional
			},
			extra: {
				options: [
					{
						value: 1,
						title: 'option 1'
					},
					{
						value: 2,
						title: 'option 2'
					}
				]
			}
		},
		{
			type: 'select', // required
			name: 'name-field-select2', // required
			attributes: {
				id: 'id-field-select2', // required
				classes: ['form-control'], // optional
				label: 'Label field select 2', // optional
				disabled: true // optional
			},
			extra: {
				options: [
					{
						value: 1,
						title: 'option 3'
					},
					{
						value: 2,
						title: 'option 4'
					}
				]
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_select" />
</Result>
