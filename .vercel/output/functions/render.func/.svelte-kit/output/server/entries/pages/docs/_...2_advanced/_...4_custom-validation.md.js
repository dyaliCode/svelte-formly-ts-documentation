import { c as create_ssr_component, v as validate_component, j as escape, i as subscribe } from "../../../../_app/immutable/chunks/index-f648a96f.js";
import { g as getValues } from "../../../../_app/immutable/chunks/form-c802acab.js";
import { R as Result, F as Formly } from "../../../../_app/immutable/chunks/Result-e5427df9.js";
import "clsx";
import { A as frontmatter } from "../../../../_app/immutable/chunks/scroll-51b8d1e2.js";
import { C as CodeFence } from "../../../../_app/immutable/chunks/CodeFence-0f5f7525.js";
const form_name = "custom_validation";
const CustomValidation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function correctName() {
    const values = await getValues(form_name);
    if (values) {
      if (values.myname != "hey i am sveltejs") {
        return false;
      }
      return true;
    }
    return false;
  }
  const fields = [
    {
      type: "input",
      name: "myname",
      attributes: {
        type: "text",
        id: "myname",
        label: "Name",
        placeholder: "Tap i am sveltejs"
      },
      rules: ["required", { name: "correctName", fnc: correctName }],
      messages: {
        correctName: "Should say: hey i am sveltejs"
      }
    }
  ];
  let data = {};
  return `${validate_component(Result, "Result").$$render($$result, {}, {}, {
    default: () => {
      return `<pre>${escape(JSON.stringify(data, null, 2))}</pre>
	${validate_component(Formly, "Formly").$$render($$result, { form_name, fields }, {}, {})}`;
    }
  })}`;
});
const U5B_4u5Dcustom_validation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $frontmatter, $$unsubscribe_frontmatter;
  $$unsubscribe_frontmatter = subscribe(frontmatter, (value) => $frontmatter = value);
  $$unsubscribe_frontmatter();
  return `<h1>${escape($frontmatter.title)}</h1>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    title: "Example",
    lang: "svelte",
    ext: "svelte",
    linesCount: 42,
    highlightLines: [[6, 15], [27, 30]],
    rawCode: `<script&#8203 lang="ts">
	import { Formly, type IField, getValues } from 'svelte-formly';

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
<\/script>

<pre>{JSON.stringify(data, null, 2)}</pre>
<Formly {form_name} {fields} on:submit={onSubmit} />
`,
    showCopyCode: true,
    code: '<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ts</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">getValues</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">custom_validation</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">function</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">correctName</span><span style="color: #89DDFF">():</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">Promise</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">boolean</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">any</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">getValues</span><span style="color: #F07178">(</span><span style="color: #A6ACCD">form_name</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span><span style="color: #F07178"> </span><span style="color: #676E95; font-style: italic">// here await is required</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">myname</span><span style="color: #F07178"> </span><span style="color: #89DDFF">!=</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">hey i am sveltejs</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">myname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">myname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Name</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap i am sveltejs</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">correctName</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">fnc</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> correctName </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">messages</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">correctName</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Should say: hey i am sveltejs</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">	]</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> data</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{};</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onSubmit </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">({</span><span style="color: #A6ACCD"> detail </span><span style="color: #89DDFF">}:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #F07178">		</span><span style="color: #A6ACCD">data</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">detail</span><span style="color: #89DDFF">;</span></span>\n<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>\n<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">pre</span><span style="color: #89DDFF">&gt;{</span><span style="color: #A6ACCD">JSON</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">stringify</span><span style="color: #A6ACCD">(data</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">null,</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #A6ACCD">)</span><span style="color: #89DDFF">}&lt;/</span><span style="color: #F07178">pre</span><span style="color: #89DDFF">&gt;</span></span>\n<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">form_name</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">fields</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">submit</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">onSubmit</span><span style="color: #89DDFF">} /&gt;</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}${validate_component(CustomValidation, "Form").$$render($$result, {}, {}, {})}`;
});
export {
  U5B_4u5Dcustom_validation as default
};
