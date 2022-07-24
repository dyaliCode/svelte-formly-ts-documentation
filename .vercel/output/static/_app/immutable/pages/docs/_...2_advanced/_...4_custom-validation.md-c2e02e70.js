import{S as f,i as d,s as $,w as D,x as F,y as C,f as i,t as A,B as m,l as _,r as g,a as E,m as v,n as h,u as b,h as y,c as B,b as u,M as N,v as S,_ as j}from"../../../chunks/index-29635d82.js";import{R as x,F as q,g as V}from"../../../chunks/Result-defa069c.js";import{F as I}from"../../../chunks/scroll-face605a.js";import{C as J}from"../../../chunks/CodeFence-3b1ba0cf.js";import"../../../chunks/singletons-eb14b229.js";function O(r){let n,p=JSON.stringify(r[0],null,2)+"",l,o,t,e;return t=new q({props:{form_name:w,fields:r[1]}}),t.$on("submit",r[2]),{c(){n=_("pre"),l=g(p),o=E(),D(t.$$.fragment)},l(a){n=v(a,"PRE",{});var s=h(n);l=b(s,p),s.forEach(y),o=B(a),F(t.$$.fragment,a)},m(a,s){u(a,n,s),N(n,l),u(a,o,s),C(t,a,s),e=!0},p(a,s){(!e||s&1)&&p!==(p=JSON.stringify(a[0],null,2)+"")&&S(l,p)},i(a){e||(i(t.$$.fragment,a),e=!0)},o(a){A(t.$$.fragment,a),e=!1},d(a){a&&y(n),a&&y(o),m(t,a)}}}function P(r){let n,p;return n=new x({props:{$$slots:{default:[O]},$$scope:{ctx:r}}}),{c(){D(n.$$.fragment)},l(l){F(n.$$.fragment,l)},m(l,o){C(n,l,o),p=!0},p(l,[o]){const t={};o&17&&(t.$$scope={dirty:o,ctx:l}),n.$set(t)},i(l){p||(i(n.$$.fragment,l),p=!0)},o(l){A(n.$$.fragment,l),p=!1},d(l){m(n,l)}}}const w="custom_validation";function R(r,n,p){async function l(){const a=await V(w);return a?a.myname=="hey i am sveltejs":!1}const o=[{type:"input",name:"myname",attributes:{type:"text",id:"myname",label:"Name",placeholder:"Tap i am sveltejs"},rules:["required",{name:"correctName",fnc:l}],messages:{correctName:"Should say: hey i am sveltejs"}}];let t={};return[t,o,({detail:a})=>{p(0,t=a)}]}class T extends f{constructor(n){super(),d(this,n,R,P,$,{})}}function H(r){let n,p=r[0].title+"",l,o,t,e,a;return t=new J({props:{title:"Example",lang:"svelte",ext:"svelte",linesCount:42,highlightLines:[[6,15],[27,30]],rawCode:`<script&#8203 lang="ts">
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
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ts</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">getValues</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">custom_validation</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">function</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">correctName</span><span style="color: #89DDFF">():</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">Promise</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">boolean</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">any</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">getValues</span><span style="color: #F07178">(</span><span style="color: #A6ACCD">form_name</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span><span style="color: #F07178"> </span><span style="color: #676E95; font-style: italic">// here await is required</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">myname</span><span style="color: #F07178"> </span><span style="color: #89DDFF">!=</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">hey i am sveltejs</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">myname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">myname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Name</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap i am sveltejs</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">correctName</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">fnc</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> correctName </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">messages</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">correctName</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Should say: hey i am sveltejs</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> data</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{};</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onSubmit </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">({</span><span style="color: #A6ACCD"> detail </span><span style="color: #89DDFF">}:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #A6ACCD">data</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">detail</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">pre</span><span style="color: #89DDFF">&gt;{</span><span style="color: #A6ACCD">JSON</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">stringify</span><span style="color: #A6ACCD">(data</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">null,</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #A6ACCD">)</span><span style="color: #89DDFF">}&lt;/</span><span style="color: #F07178">pre</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">form_name</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">fields</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">submit</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">onSubmit</span><span style="color: #89DDFF">} /&gt;</span></span>
<span class="line"></span></code></pre>`}}),e=new T({}),{c(){n=_("h1"),l=g(p),o=E(),D(t.$$.fragment),D(e.$$.fragment)},l(s){n=v(s,"H1",{});var c=h(n);l=b(c,p),c.forEach(y),o=B(s),F(t.$$.fragment,s),F(e.$$.fragment,s)},m(s,c){u(s,n,c),N(n,l),u(s,o,c),C(t,s,c),C(e,s,c),a=!0},p(s,[c]){(!a||c&1)&&p!==(p=s[0].title+"")&&S(l,p)},i(s){a||(i(t.$$.fragment,s),i(e.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),A(e.$$.fragment,s),a=!1},d(s){s&&y(n),s&&y(o),m(t,s),m(e,s)}}}function L(r,n,p){let l;return j(r,I,o=>p(0,l=o)),[l]}class K extends f{constructor(n){super(),d(this,n,L,H,$,{})}}export{K as default};
