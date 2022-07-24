<script context="module">
	export const prerender = true;

	export const load = createKitDocsLoader({
		sidebar: {
			'/': '',
			'/docs': '/docs'
		}
	});
</script>

<script>
	import '@svelteness/kit-docs/client/polyfills/index.js';
	import '@svelteness/kit-docs/client/styles/normalize.css';
	import '@svelteness/kit-docs/client/styles/fonts.css';
	import '@svelteness/kit-docs/client/styles/theme.css';
	import '@svelteness/kit-docs/client/styles/vars.css';

	import { page } from '$app/stores';

	import {
		Button,
		KitDocs,
		KitDocsLayout,
		createKitDocsLoader,
		createSidebarContext
	} from '@svelteness/kit-docs';

	/** @type {import('@svelteness/kit-docs').MarkdownMeta | null} */
	export let meta = null;

	/** @type {import('@svelteness/kit-docs').ResolvedSidebarConfig | null} */
	export let sidebar = null;

	/** @type {import('@svelteness/kit-docs').NavbarConfig} */
	const navbar = {
		links: [{ title: 'Documentation', slug: '/docs', match: /\/docs/ }]
	};

	const { activeCategory } = createSidebarContext(sidebar);

	$: category = $activeCategory ? `${$activeCategory}: ` : '';
	$: title = meta ? `${category}${meta.title} | Svelte Formly` : null;
	$: description = meta?.description;
</script>

<svelte:head>
	{#key $page.url.pathname}
		{#if title}
			<title>{title}</title>
		{/if}
		{#if description}
			<meta name="description" content={description} />
		{/if}
	{/key}
</svelte:head>

<KitDocs {meta}>
	<KitDocsLayout {navbar} {sidebar}>
		<div class="logo" slot="navbar-left">
			<Button href="/">Svelte Formly</Button>
		</div>

		<slot />
	</KitDocsLayout>
</KitDocs>

<style lang="scss">
	:global(:root) {
		--kd-color-brand-rgb: 233, 127, 6;
	}

	:global(:root.dark) {
		--kd-color-brand-rgb: 213, 149, 76;
	}

	.logo :global(a) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo :global(svg) {
		height: 36px;
		overflow: hidden;
	}

	:global(input, select) {
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 8px;
		margin: 10px 0;
		width: 100%;
	}
	:global(input[type='checkbox'], input[type='radio']) {
		width: 4%;
	}
	:global(.invalid-feedback.error) {
		font-size: 0.85rem;
		color: rgb(253, 76, 76);
		margin-bottom: 10px;
	}
	:global(.result form button) {
		padding: 4px 8px;
		background-color: rgb(103, 174, 255);
		color: white;
		border-radius: 5px;
		margin-top: 20px;
		display: block;
		width: 100%;

		&:hover {
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
			background-color: rgb(91, 156, 255);
		}
	}
	:global(.result) {
		:global(article) {
			padding: 20px;
			margin-top: 2rem;
			border: solid #dddddd 1px;
			border-radius: 10px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			background-color: white;

			:global(h2) {
				margin-top: 0 !important;
			}
		}
	}
	:global(.form-group) {
		margin-bottom: 1rem;
	}
	:global(.list-files ul) {
		list-style: none;
		padding: 0;
		margin: 0;

		:global(button) {
			background-color: rgb(255, 71, 71);
			width: auto;

			&:hover {
				box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
				background-color: rgb(255, 134, 134);
			}
		}
	}
</style>
