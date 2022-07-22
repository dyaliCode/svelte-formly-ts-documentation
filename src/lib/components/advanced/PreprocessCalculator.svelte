<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const form_name = 'formly_calculator';
	const fields: IField[] = [
		{
			type: 'input',
			name: 'number_a',
			attributes: {
				type: 'number',
				id: 'number_a',
				label: 'Number A'
			},
			rules: ['required']
		},
		{
			type: 'input',
			name: 'number_b',
			attributes: {
				type: 'number',
				id: 'number_b',
				label: 'Number B'
			},
			rules: ['required']
		},
		{
			type: 'input',
			name: 'total',
			attributes: {
				id: 'total',
				type: 'number',
				label: 'Total = Number A + Number B',
				readonly: true
			},
			preprocess: (field: IField, fields: IField[], values: any) => {
				if (values.touched === 'number_a' || values.touched === 'number_b') {
					field.value = parseInt(values.number_a) + parseInt(values.number_b);
				}
				return field;
			}
		}
	];
</script>

<Result>
	<Formly {form_name} {fields} />
</Result>
