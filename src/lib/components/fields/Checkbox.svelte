<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'checkbox',
			name: 'check1',
			attributes: {
				id: 'check1',
				label: 'Checkbox A:',
				classes: ['checker']
			},
			extra: {
				items: [
					{
						name: 'item1',
						value: 'value1',
						title: 'Value 1'
					},
					{
						name: 'item2',
						value: 'value2',
						title: 'Value 2'
					}
				]
			},
			prefix: {
				tag: 'div',
				classes: ['form-group']
			}
		},
		{
			type: 'checkbox',
			name: 'check2',
			attributes: {
				id: 'check2',
				label: 'Checkbox B:',
				classes: ['checker']
			},
			extra: {
				aligne: 'inline',
				items: [
					{
						name: 'item3',
						value: 'value3',
						title: 'Value 3'
					},
					{
						name: 'item4',
						value: 'value4',
						title: 'Value 4'
					}
				]
			},
			prefix: {
				tag: 'div',
				classes: ['form-group']
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_checkbox" />
</Result>
