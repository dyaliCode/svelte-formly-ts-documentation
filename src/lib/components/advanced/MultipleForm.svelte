<script lang="ts">
	import { Formly, type IField, getValues } from 'svelte-formly-light';
	import Result from '../layout/Result.svelte';

	const form_name_a = 'formly_a';
	const fieldsA: IField[] = [
		{
			type: 'input',
			name: 'email',
			attributes: {
				type: 'text',
				id: 'email',
				placeholder: 'Tap your email'
			},
			rules: ['required', 'email']
		},
		{
			type: 'input',
			name: 'password',
			attributes: {
				type: 'password',
				id: 'password',
				placeholder: 'Tap your password'
			},
			rules: ['required']
		}
	];

	// form sign up
	const form_name_b = 'formly_b';

	const confirmPassword = async (): Promise<boolean> => {
		const values: any = await getValues('formly_b'); // await is required.
		if (values) {
			if (!values.password || !values.confirm_password) {
				return false;
			}
			return values.password != values.confirm_password ? false : true;
		}
		return true;
	};

	const fieldsB: IField[] = [
		{
			type: 'input',
			name: 'email',
			attributes: {
				type: 'text',
				id: 'email_register',
				placeholder: 'Tap your email'
			},
			rules: ['required', 'email']
		},
		{
			type: 'input',
			name: 'password',
			attributes: {
				type: 'password',
				id: 'password_register',
				placeholder: 'Tap your password'
			},
			rules: ['required']
		},
		{
			type: 'input',
			name: 'confirm_password',
			attributes: {
				type: 'password',
				id: 'confirm_password',
				placeholder: 'Tap your confirm password'
			},
			rules: ['required', { name: 'confirmPassword', fnc: confirmPassword }],
			messages: {
				confirmPassword: 'Password and confirm password must be the same'
			}
		}
	];
</script>

<Result>
	<section>
		<article>
			<h2>Sign In</h2>
			<Formly form_name={form_name_a} fields={fieldsA} />
		</article>
		<article>
			<h2>Sign Up</h2>
			<Formly form_name={form_name_b} fields={fieldsB} />
		</article>
	</section>
</Result>
