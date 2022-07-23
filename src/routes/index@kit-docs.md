<div style="max-width: 992px; margin: 0 auto;">

# Svelte Formly

A good solution to generate and control a dynamic forms using core and custom rules with
customize styles.

## Redirecting

You might want the home page to be the first page of your documentation. If this is the case,
rename this file to `index.svelte` and replace the content of this file with the following:

```svelte copy
<script context="module">
	export const prerender = true;

	/** @type {import("@sveltejs/kit").Load} */
	export function load() {
		return {
			status: 307,
			redirect: '/docs'
		};
	}
</script>
```

</div>
