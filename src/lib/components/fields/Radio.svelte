<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'radio', // required
			name: 'name-field-radio', // required
			attributes: {
				id: 'id-field-radio', // required
				classes: ['form-check-input'], // optional
				label: 'Radio A:'
			},
			extra: {
				items: [
					{
						id: 'radio1',
						value: 1,
						title: 'radio 1'
					},
					{
						id: 'radio2',
						value: 2,
						title: 'radio 2'
					}
				],
				aligne: 'inline'
			},
			prefix: {
				tag: 'div',
				classes: ['form-group']
			}
		},
		{
			type: 'radio', // required
			name: 'name-field-radio2', // required
			attributes: {
				id: 'id-field-radio2', // required
				classes: ['form-check-input'], // optional
				label: 'Radio B:'
			},
			extra: {
				items: [
					{
						id: 'radio3',
						value: 3,
						title: 'radio 3'
					},
					{
						id: 'radio4',
						value: 4,
						title: 'radio 4'
					}
				],
				aligne: 'default'
			},
			prefix: {
				tag: 'div',
				classes: ['form-group']
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_radio" />
</Result>
