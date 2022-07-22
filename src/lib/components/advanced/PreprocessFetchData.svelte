<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	let loading: boolean = false;

	// Fetch Users
	const fetchUsers = async () => {
		const res = await fetch('https://jsonplaceholder.cypress.io/users?_limit=10');
		const data = await res.json();
		return data.map((item: any) => ({ value: item.id, title: item.name }));
	};

	// Fetch posts
	const fetchPosts = async () => {
		const res = await fetch('https://jsonplaceholder.cypress.io/posts?_limit=10');
		const data = await res.json();
		return data.map((item: any) => ({ value: item.id, title: item.title }));
	};

	const form_name = 'formly_fetch_data';
	const fields: IField[] = [
		{
			type: 'select',
			name: 'category',
			attributes: {
				id: 'category',
				label: 'Category'
			},
			rules: ['required'],
			extra: {
				options: [
					{
						value: null,
						title: 'None'
					},
					{
						value: 1,
						title: 'Users'
					},
					{
						value: 2,
						title: 'Posts'
					}
				]
			}
		},
		{
			type: 'select',
			name: 'items',
			attributes: {
				id: 'items',
				label: 'Items'
			},
			extra: {},
			preprocess: async (field: IField, fields: IField[], values: any) => {
				if (values.touched === 'category') {
					loading = true;
					field.extra.options = values.category == 1 ? await fetchUsers() : await fetchPosts();
					loading = false;
				}
				return field;
			}
		}
	];

	let data: any = {};
	const onSubmit = ({ detail }: any) => {
		data = detail;
	};
</script>

<Result>
	<pre>
		<code>{JSON.stringify(data, null, 2)}</code>
	</pre>
	<strong>{loading ? 'loading...' : 'DONE!'}</strong>
	<Formly {form_name} {fields} on:submit={onSubmit} />
</Result>
