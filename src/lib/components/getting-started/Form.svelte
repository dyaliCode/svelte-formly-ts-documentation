<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const form_name = 'formly_usage';
	const fields: IField[] = [
		{
			type: 'input',
			name: 'firstname',
			attributes: {
				type: 'text',
				id: 'firstname',
				classes: ['form-control'],
				placeholder: 'Tap your first name'
			},
			rules: ['required', 'min:3', 'max:10'],
			messages: {
				required: 'The firstname is required',
				min: 'Your firstname is too short min=3',
				max: 'Your firstname is too long max=10'
			}
		},
		{
			type: 'input',
			name: 'password',
			attributes: {
				type: 'password',
				id: 'password',
				classes: ['form-control'],
				placeholder: 'Tap your password',
				autocomplete: 'off'
			},
			rules: ['required', 'min:6', 'max:10'],
			messages: {
				required: 'The password is required',
				min: 'Your password is too short min=6',
				max: 'Your password is too long max=10'
			}
		}
	];

	let data = {};
	const onSubmit = ({ detail }: any) => {
		console.log('detail onSubmit', detail);
		data = detail;
	};
</script>

<Result>
	<pre>{JSON.stringify(data, null, 2)}</pre>
	<Formly {fields} {form_name} on:submit={onSubmit} />
</Result>
