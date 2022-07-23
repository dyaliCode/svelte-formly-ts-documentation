import{S as H,i as G,s as M,w as $,x as b,y as _,f as E,t as g,B as h,E as X,l as j,r as v,a as q,m as P,n as U,u as B,h as D,c as S,b as m,M as w,v as T,p as L,_ as Y}from"../../../chunks/index-29635d82.js";import{R as V,F as W}from"../../../chunks/Result-fb5c37b2.js";import{f as Z}from"../../../chunks/scroll-967765ef.js";import{C as K}from"../../../chunks/CodeFence-8f67fe7a.js";import{L as Q}from"../../../chunks/Link-1d5bbe41.js";import{A as ss}from"../../../chunks/Admonition-8554706e.js";import"../../../chunks/singletons-eb14b229.js";import"../../../chunks/contexts-cdaa50b4.js";function ns(e){let s,l;return s=new W({props:{form_name:ls,fields:e[0]}}),{c(){$(s.$$.fragment)},l(a){b(s.$$.fragment,a)},m(a,t){_(s,a,t),l=!0},p:X,i(a){l||(E(s.$$.fragment,a),l=!0)},o(a){g(s.$$.fragment,a),l=!1},d(a){h(s,a)}}}function as(e){let s,l;return s=new V({props:{$$slots:{default:[ns]},$$scope:{ctx:e}}}),{c(){$(s.$$.fragment)},l(a){b(s.$$.fragment,a)},m(a,t){_(s,a,t),l=!0},p(a,[t]){const o={};t&2&&(o.$$scope={dirty:t,ctx:a}),s.$set(o)},i(a){l||(E(s.$$.fragment,a),l=!0)},o(a){g(s.$$.fragment,a),l=!1},d(a){h(s,a)}}}const ls="formly_calculator";function ts(e){return[[{type:"input",name:"number_a",attributes:{type:"number",id:"number_a",label:"Number A"},rules:["required"]},{type:"input",name:"number_b",attributes:{type:"number",id:"number_b",label:"Number B"},rules:["required"]},{type:"input",name:"total",attributes:{id:"total",type:"number",label:"Total = Number A + Number B",readonly:!0},preprocess:(l,a,t)=>((t.touched==="number_a"||t.touched==="number_b")&&(l.value=parseInt(t.number_a)+parseInt(t.number_b)),l)}]]}class ps extends H{constructor(s){super(),G(this,s,ts,as,M,{})}}function os(e){let s,l,a,t=JSON.stringify(e[1],null,2)+"",o,F,C,A,i=e[0]?"loading...":"DONE!",f,y,u,d;return u=new W({props:{form_name:rs,fields:e[2]}}),u.$on("submit",e[3]),{c(){s=j("pre"),l=v("		"),a=j("code"),o=v(t),F=v(`
	`),C=q(),A=j("strong"),f=v(i),y=q(),$(u.$$.fragment)},l(p){s=P(p,"PRE",{});var c=U(s);l=B(c,"		"),a=P(c,"CODE",{});var O=U(a);o=B(O,t),O.forEach(D),F=B(c,`
	`),c.forEach(D),C=S(p),A=P(p,"STRONG",{});var I=U(A);f=B(I,i),I.forEach(D),y=S(p),b(u.$$.fragment,p)},m(p,c){m(p,s,c),w(s,l),w(s,a),w(a,o),w(s,F),m(p,C,c),m(p,A,c),w(A,f),m(p,y,c),_(u,p,c),d=!0},p(p,c){(!d||c&2)&&t!==(t=JSON.stringify(p[1],null,2)+"")&&T(o,t),(!d||c&1)&&i!==(i=p[0]?"loading...":"DONE!")&&T(f,i)},i(p){d||(E(u.$$.fragment,p),d=!0)},o(p){g(u.$$.fragment,p),d=!1},d(p){p&&D(s),p&&D(C),p&&D(A),p&&D(y),h(u,p)}}}function es(e){let s,l;return s=new V({props:{$$slots:{default:[os]},$$scope:{ctx:e}}}),{c(){$(s.$$.fragment)},l(a){b(s.$$.fragment,a)},m(a,t){_(s,a,t),l=!0},p(a,[t]){const o={};t&67&&(o.$$scope={dirty:t,ctx:a}),s.$set(o)},i(a){l||(E(s.$$.fragment,a),l=!0)},o(a){g(s.$$.fragment,a),l=!1},d(a){h(s,a)}}}const rs="formly_fetch_data";function cs(e,s,l){let a=!1;const t=async()=>(await(await fetch("https://jsonplaceholder.cypress.io/users?_limit=10")).json()).map(y=>({value:y.id,title:y.name})),o=async()=>(await(await fetch("https://jsonplaceholder.cypress.io/posts?_limit=10")).json()).map(y=>({value:y.id,title:y.title})),F=[{type:"select",name:"category",attributes:{id:"category",label:"Category"},rules:["required"],extra:{options:[{value:null,title:"None"},{value:1,title:"Users"},{value:2,title:"Posts"}]}},{type:"select",name:"items",attributes:{id:"items",label:"Items"},extra:{},preprocess:async(i,f,y)=>(y.touched==="category"&&(l(0,a=!0),i.extra.options=y.category==1?await t():await o(),l(0,a=!1)),i)}];let C={};return[a,C,F,({detail:i})=>{l(1,C=i)}]}class Ds extends H{constructor(s){super(),G(this,s,cs,es,M,{})}}function ys(e){let s,l=e[0].description+"",a,t;return{c(){s=j("p"),a=v(l),t=v(" \u{1F389}")},l(o){s=P(o,"P",{});var F=U(s);a=B(F,l),t=B(F," \u{1F389}"),F.forEach(D)},m(o,F){m(o,s,F),w(s,a),w(s,t)},p(o,F){F&1&&l!==(l=o[0].description+"")&&T(a,l)},d(o){o&&D(s)}}}function Fs(e){let s;return{c(){s=v("#")},l(l){s=B(l,"#")},m(l,a){m(l,s,a)},d(l){l&&D(s)}}}function Cs(e){let s;return{c(){s=v("#")},l(l){s=B(l,"#")},m(l,a){m(l,s,a)},d(l){l&&D(s)}}}function As(e){let s,l=e[0].title+"",a,t,o,F,C,A,i,f,y,u,d,p,c,O,I,N,x,J;return o=new ss({props:{type:"note",$$slots:{default:[ys]},$$scope:{ctx:e}}}),A=new Q({props:{class:"header-anchor",href:"#example-calculator","aria-hidden":"true",$$slots:{default:[Fs]},$$scope:{ctx:e}}}),y=new K({props:{title:"Calculator",lang:"svelte",ext:"svelte",linesCount:48,highlightLines:[[33,33],[35,40]],rawCode:`<script&#8203 lang="ts">
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
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ts</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">formly_calculator</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_a</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_a</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Number A</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_b</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_b</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Number B</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">total</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">total</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Total = Number A + Number B</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">readonly</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #82AAFF">preprocess</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> values</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">touched</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_a</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178"> </span><span style="color: #89DDFF">||</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">touched</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number_b</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">					</span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">value</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #82AAFF">parseInt</span><span style="color: #F07178">(</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">number_a</span><span style="color: #F07178">) </span><span style="color: #89DDFF">+</span><span style="color: #F07178"> </span><span style="color: #82AAFF">parseInt</span><span style="color: #F07178">(</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">number_b</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	]</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Result</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">form_name</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">fields</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> /&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #FFCB6B">Result</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre>`}}),u=new ps({}),c=new Q({props:{class:"header-anchor",href:"#example-fetch-data","aria-hidden":"true",$$slots:{default:[Cs]},$$scope:{ctx:e}}}),N=new K({props:{title:"Fetch Data",lang:"svelte",ext:"svelte",linesCount:75,highlightLines:[[4,18],[54,62]],rawCode:`<script&#8203 lang="ts">
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
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ts</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> loading</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">boolean</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #676E95; font-style: italic">// Fetch Users</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fetchUsers </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">res</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">fetch</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">https://jsonplaceholder.cypress.io/users?_limit=10</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">data</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">json</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">data</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">map</span><span style="color: #F07178">(</span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #F07178"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #F07178"> (</span><span style="color: #89DDFF">{</span><span style="color: #F07178"> value</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">id</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> title</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">name</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #F07178">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #676E95; font-style: italic">// Fetch posts</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fetchPosts </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">res</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">fetch</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">https://jsonplaceholder.cypress.io/posts?_limit=10</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">data</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">res</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">json</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">data</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">map</span><span style="color: #F07178">(</span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #F07178"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #F07178"> (</span><span style="color: #89DDFF">{</span><span style="color: #F07178"> value</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">id</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> title</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">item</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">title</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #F07178">))</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">formly_fetch_data</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">select</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">category</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">category</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Category</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">options</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">null,</span></span>
<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">None</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Users</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">						</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Posts</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">				]</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">select</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">items</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">items</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Items</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #82AAFF">preprocess</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> values</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">touched</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">category</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">					</span><span style="color: #A6ACCD">loading</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">					</span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">extra</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">options</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">category</span><span style="color: #F07178"> </span><span style="color: #89DDFF">==</span><span style="color: #F07178"> </span><span style="color: #F78C6C">1</span><span style="color: #F07178"> </span><span style="color: #89DDFF">?</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">fetchUsers</span><span style="color: #F07178">() </span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">fetchPosts</span><span style="color: #F07178">()</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">					</span><span style="color: #A6ACCD">loading</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">field</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> data</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{};</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onSubmit </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">({</span><span style="color: #A6ACCD"> detail </span><span style="color: #89DDFF">}:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #A6ACCD">data</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">detail</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">pre</span><span style="color: #89DDFF">&gt;&lt;</span><span style="color: #F07178">code</span><span style="color: #89DDFF">&gt;{</span><span style="color: #A6ACCD">JSON</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">stringify</span><span style="color: #A6ACCD">(data</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">null,</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #A6ACCD">)</span><span style="color: #89DDFF">}&lt;/</span><span style="color: #F07178">code</span><span style="color: #89DDFF">&gt;&lt;/</span><span style="color: #F07178">pre</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">strong</span><span style="color: #89DDFF">&gt;{</span><span style="color: #A6ACCD">loading </span><span style="color: #89DDFF">?</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">loading...</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">DONE!</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">}&lt;/</span><span style="color: #F07178">strong</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">form_name</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">fields</span><span style="color: #C792EA">}</span><span style="color: #89DDFF"> </span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">submit</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">onSubmit</span><span style="color: #89DDFF">} /&gt;</span></span>
<span class="line"></span></code></pre>`}}),x=new Ds({}),{c(){s=j("h1"),a=v(l),t=q(),$(o.$$.fragment),F=q(),C=j("h2"),$(A.$$.fragment),i=v(" Example Calculator"),f=q(),$(y.$$.fragment),$(u.$$.fragment),d=q(),p=j("h2"),$(c.$$.fragment),O=v(" Example Fetch data"),I=q(),$(N.$$.fragment),$(x.$$.fragment),this.h()},l(n){s=P(n,"H1",{});var r=U(s);a=B(r,l),r.forEach(D),t=S(n),b(o.$$.fragment,n),F=S(n),C=P(n,"H2",{id:!0,tabindex:!0});var R=U(C);b(A.$$.fragment,R),i=B(R," Example Calculator"),R.forEach(D),f=S(n),b(y.$$.fragment,n),b(u.$$.fragment,n),d=S(n),p=P(n,"H2",{id:!0,tabindex:!0});var k=U(p);b(c.$$.fragment,k),O=B(k," Example Fetch data"),k.forEach(D),I=S(n),b(N.$$.fragment,n),b(x.$$.fragment,n),this.h()},h(){L(C,"id","example-calculator"),L(C,"tabindex","-1"),L(p,"id","example-fetch-data"),L(p,"tabindex","-1")},m(n,r){m(n,s,r),w(s,a),m(n,t,r),_(o,n,r),m(n,F,r),m(n,C,r),_(A,C,null),w(C,i),m(n,f,r),_(y,n,r),_(u,n,r),m(n,d,r),m(n,p,r),_(c,p,null),w(p,O),m(n,I,r),_(N,n,r),_(x,n,r),J=!0},p(n,[r]){(!J||r&1)&&l!==(l=n[0].title+"")&&T(a,l);const R={};r&3&&(R.$$scope={dirty:r,ctx:n}),o.$set(R);const k={};r&2&&(k.$$scope={dirty:r,ctx:n}),A.$set(k);const z={};r&2&&(z.$$scope={dirty:r,ctx:n}),c.$set(z)},i(n){J||(E(o.$$.fragment,n),E(A.$$.fragment,n),E(y.$$.fragment,n),E(u.$$.fragment,n),E(c.$$.fragment,n),E(N.$$.fragment,n),E(x.$$.fragment,n),J=!0)},o(n){g(o.$$.fragment,n),g(A.$$.fragment,n),g(y.$$.fragment,n),g(u.$$.fragment,n),g(c.$$.fragment,n),g(N.$$.fragment,n),g(x.$$.fragment,n),J=!1},d(n){n&&D(s),n&&D(t),h(o,n),n&&D(F),n&&D(C),h(A),n&&D(f),h(y,n),h(u,n),n&&D(d),n&&D(p),h(c),n&&D(I),h(N,n),h(x,n)}}}function is(e,s,l){let a;return Y(e,Z,t=>l(0,a=t)),[a]}class gs extends H{constructor(s){super(),G(this,s,is,As,M,{})}}export{gs as default};
