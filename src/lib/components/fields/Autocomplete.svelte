<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'autocomplete', // required
			name: 'name-field-autocomplete', // required
			attributes: {
				id: 'id-field-autocomplete', // required
				placeholder: 'Tap item to select', // optional
				autocomplete: 'off' // optional
			},
			extra: {
				filter_lenght: 3, // optional and by default = 0
				loadItemes: [
					// required
					// list items with id and title attributes.
					{
						value: 1,
						title: 'item 1'
					},
					{
						value: 2,
						title: 'item 2'
					},
					{
						value: 3,
						title: 'item 3'
					},
					{
						value: 4,
						title: 'item 4'
					}
				]
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_autocomplete" />
</Result>
