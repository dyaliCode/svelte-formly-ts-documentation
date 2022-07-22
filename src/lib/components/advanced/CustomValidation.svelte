<script lang="ts">
	import { Formly, type IField, getValues } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const form_name = 'custom_validation';

	async function correctName(): Promise<boolean> {
		const values: any = await getValues(form_name); // here await is required
		if (values) {
			if (values.myname != 'hey i am sveltejs') {
				return false;
			}
			return true;
		}
		return false;
	}

	const fields: IField[] = [
		{
			type: 'input',
			name: 'myname',
			attributes: {
				type: 'text',
				id: 'myname',
				label: 'Name',
				placeholder: 'Tap i am sveltejs' // optional
			},
			rules: ['required', { name: 'correctName', fnc: correctName }],
			messages: {
				correctName: 'Should say: hey i am sveltejs'
			}
		}
	];

	let data: any = {};
	const onSubmit = ({ detail }: any) => {
		data = detail;
	};
</script>

<Result>
	<pre>{JSON.stringify(data, null, 2)}</pre>
	<Formly {form_name} {fields} on:submit={onSubmit} />
</Result>
