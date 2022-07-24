import { c as create_ssr_component, v as validate_component, j as escape, i as subscribe } from "../../../../_app/immutable/chunks/index-f648a96f.js";
import { R as Result, F as Formly } from "../../../../_app/immutable/chunks/Result-e5427df9.js";
import "clsx";
import { A as frontmatter } from "../../../../_app/immutable/chunks/scroll-51b8d1e2.js";
import { C as CodeFence } from "../../../../_app/immutable/chunks/CodeFence-0f5f7525.js";
import { L as Link } from "../../../../_app/immutable/chunks/Link-9dc4ac91.js";
import { A as Admonition } from "../../../../_app/immutable/chunks/Admonition-85d34410.js";
const form_name = "formly_usage";
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "input",
      name: "firstname",
      attributes: {
        type: "text",
        id: "firstname",
        classes: ["form-control"],
        placeholder: "Tap your first name"
      },
      rules: ["required", "min:3", "max:10"],
      messages: {
        required: "The firstname is required",
        min: "Your firstname is too short min=3",
        max: "Your firstname is too long max=10"
      }
    },
    {
      type: "input",
      name: "password",
      attributes: {
        type: "password",
        id: "password",
        classes: ["form-control"],
        placeholder: "Tap your password",
        autocomplete: "off"
      },
      rules: ["required", "min:6", "max:10"],
      messages: {
        required: "The password is required",
        min: "Your password is too short min=6",
        max: "Your password is too long max=10"
      }
    }
  ];
  let data = {};
  return `${validate_component(Result, "Result").$$render($$result, {}, {}, {
    default: () => {
      return `<pre>${escape(JSON.stringify(data, null, 2))}</pre>
	${validate_component(Formly, "Formly").$$render($$result, { fields, form_name }, {}, {})}`;
    }
  })}`;
});
const U5B_1u5Dquick_start = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $frontmatter, $$unsubscribe_frontmatter;
  $$unsubscribe_frontmatter = subscribe(frontmatter, (value) => $frontmatter = value);
  $$unsubscribe_frontmatter();
  return `<h1>${escape($frontmatter.title)}</h1>
<h2 id="${"introduction"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#introduction",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Introduction</h2>
<p>${escape($frontmatter.description)}</p>
${validate_component(Admonition, "Admonition").$$render($$result, { type: "experimental" }, {}, {
    default: () => {
      return `<ul><li>\u26A1 Generate dynamic and reactive forms.</li>
<li>\u{1F642} Easy to extend with custom field type and validation.</li></ul>`;
    }
  })}
<h2 id="${"quick-installation"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#quick-installation",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Quick Installation</h2>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    lang: "bash",
    ext: "sh",
    linesCount: 2,
    code: '<pre><code><span class="line"><span style="color: #A6ACCD">npm install svelte-formly</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}<h2 id="${"usage"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#usage",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Usage</h2>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    title: "Example",
    lang: "svelte",
    ext: "svelte",
    linesCount: 48,
    highlightLines: [[7, 8], [11, 11], [23, 24], [27, 27]],
    rawCode: `<script&#8203 lang="ts">
	import { Formly, type IField } from 'svelte-formly';

	const form_name = 'formly_usage';
	const fields: IField[] = [
		{
			type: 'input', // required
			name: 'firstname', // required
			attributes: {
				type: 'text',
				id: 'firstname', // required
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
			type: 'input', // required
			name: 'password', // required
			attributes: {
				type: 'password',
				id: 'password', // required
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
		data = detail;
	};
<\/script>

<Formly {fields} {form_name} on:submit={onSubmit} />
`,
    showCopyCode: true,
    code: '<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ts</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">formly_usage</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">firstname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">firstname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap your first name</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">min:3</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">max:10</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">messages</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">required</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">The firstname is required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">min</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Your firstname is too short min=3</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">max</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Your firstname is too long max=10</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap your password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">autocomplete</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">off</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">min:6</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">max:10</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">messages</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">required</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">The password is required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">min</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Your password is too short min=6</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">max</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Your password is too long max=10</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">	]</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> data </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{};</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onSubmit </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">({</span><span style="color: #A6ACCD"> detail </span><span style="color: #89DDFF">}:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #A6ACCD">data</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">detail</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>\n<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">fields</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">form_name</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">submit</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">onSubmit</span><span style="color: #89DDFF">} /&gt;</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}${validate_component(Form, "Form").$$render($$result, {}, {}, {})}`;
});
export {
  U5B_1u5Dquick_start as default
};
