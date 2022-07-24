<script lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const fields: IField[] = [
		{
			type: 'file', // required
			name: 'name-file', // require
			attributes: {
				id: 'id-field', // optional
				classes: ['form-control'], // optional
				label: 'Image' // optional
			},
			extra: {
				multiple: true, // optional
				showPreview: true // optional
			},
			rules: ['file'],
			file: {
				// need to add this attribute object if you need a file rule
				extensions: ['jpg', 'gif', 'png'],
				maxSize: 5
			}
		}
	];
</script>

<Result>
	<Formly {fields} form_name="field_file" />
</Result>
