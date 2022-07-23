import { c as create_ssr_component, v as validate_component, e as escape, j as subscribe } from "../../../../_app/immutable/chunks/index-372256f6.js";
import { R as Result, F as Formly } from "../../../../_app/immutable/chunks/Result-1272ba48.js";
import "clsx";
import { A as frontmatter } from "../../../../_app/immutable/chunks/scroll-2311f007.js";
import { C as CodeFence } from "../../../../_app/immutable/chunks/CodeFence-77ae8440.js";
import { L as Link } from "../../../../_app/immutable/chunks/Link-10104f07.js";
import { A as Admonition } from "../../../../_app/immutable/chunks/Admonition-632c6a4d.js";
const form_name$1 = "formly_calculator";
const PreprocessCalculator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "input",
      name: "number_a",
      attributes: {
        type: "number",
        id: "number_a",
        label: "Number A"
      },
      rules: ["required"]
    },
    {
      type: "input",
      name: "number_b",
      attributes: {
        type: "number",
        id: "number_b",
        label: "Number B"
      },
      rules: ["required"]
    },
    {
      type: "input",
      name: "total",
      attributes: {
        id: "total",
        type: "number",
        label: "Total = Number A + Number B",
        readonly: true
      },
      preprocess: (field, fields2, values) => {
        if (values.touched === "number_a" || values.touched === "number_b") {
          field.value = parseInt(values.number_a) + parseInt(values.number_b);
        }
        return field;
      }
    }
  ];
  return `${validate_component(Result, "Result").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Formly, "Formly").$$render($$result, { form_name: form_name$1, fields }, {}, {})}`;
    }
  })}`;
});
const form_name = "formly_fetch_data";
const PreprocessFetchData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading = false;
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.cypress.io/users?_limit=10");
    const data2 = await res.json();
    return data2.map((item) => ({ value: item.id, title: item.name }));
  };
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.cypress.io/posts?_limit=10");
    const data2 = await res.json();
    return data2.map((item) => ({ value: item.id, title: item.title }));
  };
  const fields = [
    {
      type: "select",
      name: "category",
      attributes: { id: "category", label: "Category" },
      rules: ["required"],
      extra: {
        options: [
          { value: null, title: "None" },
          { value: 1, title: "Users" },
          { value: 2, title: "Posts" }
        ]
      }
    },
    {
      type: "select",
      name: "items",
      attributes: { id: "items", label: "Items" },
      extra: {},
      preprocess: async (field, fields2, values) => {
        if (values.touched === "category") {
          loading = true;
          field.extra.options = values.category == 1 ? await fetchUsers() : await fetchPosts();
          loading = false;
        }
        return field;
      }
    }
  ];
  let data = {};
  return `${validate_component(Result, "Result").$$render($$result, {}, {}, {
    default: () => {
      return `<pre>		<code>${escape(JSON.stringify(data, null, 2))}</code>
	</pre>
	<strong>${escape(loading ? "loading..." : "DONE!")}</strong>
	${validate_component(Formly, "Formly").$$render($$result, { form_name, fields }, {}, {})}`;
    }
  })}`;
});
const U5B_5u5Dpreprocess = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $frontmatter, $$unsubscribe_frontmatter;
  $$unsubscribe_frontmatter = subscribe(frontmatter, (value) => $frontmatter = value);
  $$unsubscribe_frontmatter();
  return `<h1>${escape($frontmatter.title)}</h1>
${validate_component(Admonition, "Admonition").$$render($$result, { type: "note" }, {}, {
    default: () => {
      return `<p>${escape($frontmatter.description)} \u{1F389}</p>`;
    }
  })}
<h2 id="${"example-calculator"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#example-calculator",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Example Calculator</h2>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    title: "Calculator",
    lang: "svelte",
    ext: "svelte",
    linesCount: 48,
    highlightLines: [[33, 33], [35, 40]],
    rawCode: `<script&#8203 lang="ts">
	import { Formly, type IField } from 'svelte-formly';

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
<\/script>

<Result>
	<Formly {form_name} {fields} />
</Result>
`,
    showCopyCode: true,
    code: '<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ts</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">formly_calculator</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_a</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_a</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Number A</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_b</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_b</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Number B</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">total</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">total</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Total = Number A + Number B</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">readonly</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #82AAFF">preprocess</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> values</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">touched</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_a</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">||</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">touched</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_b</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">					</span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">value</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #82AAFF">parseInt</span><span style="color: #F07178">(</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">number_a</span><span style="color: #F07178">) </span><span style="color: #89DDFF">+</span><span style="color: #F07178"> </span><span style="color: #82AAFF">parseInt</span><span style="color: #F07178">(</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">number_b</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">	]</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Result</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">form_name</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">fields</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> /&gt;</span></span>\n<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #FFCB6B">Result</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}${validate_component(PreprocessCalculator, "FormCalculator").$$render($$result, {}, {}, {})}
<h2 id="${"example-fetch-data"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#example-fetch-data",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Example Fetch data</h2>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    title: "Fetch Data",
    lang: "svelte",
    ext: "svelte",
    linesCount: 75,
    highlightLines: [[4, 18], [54, 62]],
    rawCode: `<script&#8203 lang="ts">
	import { Formly, type IField } from 'svelte-formly';

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
<\/script>

<pre><code>{JSON.stringify(data, null, 2)}</code></pre>
<strong>{loading ? 'loading...' : 'DONE!'}</strong>
<Formly {form_name} {fields} on:submit={onSubmit} />
`,
    showCopyCode: true,
    code: '<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ts</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> loading</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">boolean</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #89DDFF">	</span><span style="color: #676E95; font-style: italic">// Fetch Users</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fetchUsers </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">res</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">fetch</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">https://jsonplaceholder.cypress.io/users?_limit=10</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">data</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">json</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">data</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">map</span><span style="color: #F07178">(</span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #F07178"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #F07178"> (</span><span style="color: #89DDFF">{</span><span style="color: #F07178"> value</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">id</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> title</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">name</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #F07178">))</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #89DDFF">	</span><span style="color: #676E95; font-style: italic">// Fetch posts</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fetchPosts </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">res</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">fetch</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">https://jsonplaceholder.cypress.io/posts?_limit=10</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">data</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">json</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">data</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">map</span><span style="color: #F07178">(</span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #F07178"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #F07178"> (</span><span style="color: #89DDFF">{</span><span style="color: #F07178"> value</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">id</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> title</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">title</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #F07178">))</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">formly_fetch_data</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">select</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">category</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">category</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Category</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">options</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>\n<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">null,</span></span>\n<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">None</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Users</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Posts</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">				]</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">select</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">items</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">items</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Items</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{},</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #82AAFF">preprocess</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> values</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">touched</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">category</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">					</span><span style="color: #A6ACCD">loading</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">					</span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">extra</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">options</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">category</span><span style="color: #F07178"> </span><span style="color: #89DDFF">==</span><span style="color: #F07178"> </span><span style="color: #F78C6C">1</span><span style="color: #F07178"> </span><span style="color: #89DDFF">?</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">fetchUsers</span><span style="color: #F07178">() </span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">fetchPosts</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">					</span><span style="color: #A6ACCD">loading</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">	]</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> data</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{};</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onSubmit </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">({</span><span style="color: #A6ACCD"> detail </span><span style="color: #89DDFF">}:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #A6ACCD">data</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">detail</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>\n<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">pre</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">code</span><span style="color: #89DDFF">&gt;{</span><span style="color: #A6ACCD">JSON</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">stringify</span><span style="color: #A6ACCD">(data</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">null,</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #A6ACCD">)</span><span style="color: #89DDFF">}&lt;/</span><span style="color: #F07178">code</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">pre</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">strong</span><span style="color: #89DDFF">&gt;{</span><span style="color: #A6ACCD">loading </span><span style="color: #89DDFF">?</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">loading...</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">DONE!</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">}&lt;/</span><span style="color: #F07178">strong</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">form_name</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">fields</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">submit</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">onSubmit</span><span style="color: #89DDFF">} /&gt;</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}${validate_component(PreprocessFetchData, "FormFetchData").$$render($$result, {}, {}, {})}`;
});
export {
  U5B_5u5Dpreprocess as default
};
