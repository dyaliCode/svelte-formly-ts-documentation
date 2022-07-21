<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const form_name = 'formly_alter';
	const fields: IField[] = [
		{
			type: 'input',
			name: 'firstname',
			attributes: {
				type: 'text',
				id: 'firstname',
				placeholder: 'Tap your first name'
			}
		},
		{
			type: 'input',
			name: 'password',
			attributes: {
				type: 'password',
				id: 'password',
				placeholder: 'Tap your password'
			}
		}
	];
	const onSubmit = (data: any) => {
		console.log(data);
	};
</script>

<Result>
	<Formly
		{form_name}
		{fields}
		on:submit={onSubmit}
		btnSubmit={{
			text: 'Submit alter',
			classes: ['btn', 'btn-primary']
		}}
		btnReset={{
			text: 'Reset alter',
			classes: ['btn', 'btn-secondary']
		}}
	/>
</Result>
