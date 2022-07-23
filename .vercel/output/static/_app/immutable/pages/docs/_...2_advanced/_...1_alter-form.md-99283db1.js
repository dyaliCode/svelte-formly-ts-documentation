import{S as N,i as O,s as U,w as g,x as w,y as h,f as x,t as S,B as v,E as j,l as f,r as R,a as T,m as u,n as d,u as I,h as e,c as q,b as C,M as $,v as L,_ as k}from"../../../chunks/index-29635d82.js";import{R as z,F as J}from"../../../chunks/Result-fb5c37b2.js";import{f as K}from"../../../chunks/scroll-967765ef.js";import{C as Q}from"../../../chunks/CodeFence-8f67fe7a.js";import"../../../chunks/singletons-eb14b229.js";import"../../../chunks/contexts-cdaa50b4.js";function V(o){let a,l;return a=new J({props:{form_name:X,fields:o[0],btnSubmit:{text:"Submit alter",classes:["btn","btn-primary"]},btnReset:{text:"Reset alter",classes:["btn","btn-secondary"]}}}),a.$on("submit",o[1]),{c(){g(a.$$.fragment)},l(n){w(a.$$.fragment,n)},m(n,p){h(a,n,p),l=!0},p:j,i(n){l||(x(a.$$.fragment,n),l=!0)},o(n){S(a.$$.fragment,n),l=!1},d(n){v(a,n)}}}function W(o){let a,l;return a=new z({props:{$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){g(a.$$.fragment)},l(n){w(a.$$.fragment,n)},m(n,p){h(a,n,p),l=!0},p(n,[p]){const r={};p&4&&(r.$$scope={dirty:p,ctx:n}),a.$set(r)},i(n){l||(x(a.$$.fragment,n),l=!0)},o(n){S(a.$$.fragment,n),l=!1},d(n){v(a,n)}}}const X="formly_alter";function Y(o){return[[{type:"input",name:"firstname",attributes:{type:"text",id:"firstname",placeholder:"Tap your first name"}},{type:"input",name:"password",attributes:{type:"password",id:"password",placeholder:"Tap your password"}}],n=>{console.log(n)}]}class Z extends N{constructor(a){super(),O(this,a,Y,W,U,{})}}function ss(o){let a,l=o[0].title+"",n,p,r,i=o[0].description+"",b,_,y,A,m,B,E,c,D,F;return c=new Q({props:{title:"example",lang:"svelte",ext:"svelte",linesCount:43,highlightLines:[[34,41]],rawCode:`<script&#8203 lang="ts">
	import { Formly, type IField } from 'svelte-formly-light';

	const form_name = 'formly_alter';
	const fields: IField[] = [
		{
			type: 'input',
			name: 'firstname',
			attributes: {
				type: 'text',
				id: 'firstname',
				placeholder: 'Tap your first name'
			}
		},
		{
			type: 'input',
			name: 'password',
			attributes: {
				type: 'password',
				id: 'password',
				placeholder: 'Tap your password'
			}
		}
	];
	const onSubmit = (data: any) => {
		console.log(data);
	};
<\/script>

<Formly
	{form_name}
	{fields}
	on:submit={onSubmit}
	btnSubmit={{
		text: 'Submit alter',
		classes: ['btn', 'btn-primary']
	}}
	btnReset={{
		text: 'Reset alter',
		classes: ['btn', 'btn-secondary']
	}}
/>
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ts</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly-light</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">formly_alter</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">firstname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">firstname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap your first name</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap your password</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	]</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onSubmit </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">data</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #A6ACCD">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #F07178">(</span><span style="color: #A6ACCD">data</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">form_name</span><span style="color: #C792EA">}</span></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #C792EA">{</span><span style="color: #A6ACCD">fields</span><span style="color: #C792EA">}</span></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">submit</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">onSubmit</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #C792EA">btnSubmit</span><span style="color: #89DDFF">={{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">text</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Submit alter</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">btn</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">btn-primary</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}}</span></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #C792EA">btnReset</span><span style="color: #89DDFF">={{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">text</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Reset alter</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">btn</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">btn-secondary</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}}</span></span>
<span class="line"><span style="color: #89DDFF">/&gt;</span></span>
<span class="line"></span></code></pre>`}}),D=new Z({}),{c(){a=f("h1"),n=R(l),p=T(),r=f("p"),b=R(i),_=T(),y=f("p"),A=f("strong"),m=f("em"),B=R("Change textes & classes for buttons submit and reset"),E=T(),g(c.$$.fragment),g(D.$$.fragment)},l(s){a=u(s,"H1",{});var t=d(a);n=I(t,l),t.forEach(e),p=q(s),r=u(s,"P",{});var M=d(r);b=I(M,i),M.forEach(e),_=q(s),y=u(s,"P",{});var P=d(y);A=u(P,"STRONG",{});var G=d(A);m=u(G,"EM",{});var H=d(m);B=I(H,"Change textes & classes for buttons submit and reset"),H.forEach(e),G.forEach(e),P.forEach(e),E=q(s),w(c.$$.fragment,s),w(D.$$.fragment,s)},m(s,t){C(s,a,t),$(a,n),C(s,p,t),C(s,r,t),$(r,b),C(s,_,t),C(s,y,t),$(y,A),$(A,m),$(m,B),C(s,E,t),h(c,s,t),h(D,s,t),F=!0},p(s,[t]){(!F||t&1)&&l!==(l=s[0].title+"")&&L(n,l),(!F||t&1)&&i!==(i=s[0].description+"")&&L(b,i)},i(s){F||(x(c.$$.fragment,s),x(D.$$.fragment,s),F=!0)},o(s){S(c.$$.fragment,s),S(D.$$.fragment,s),F=!1},d(s){s&&e(a),s&&e(p),s&&e(r),s&&e(_),s&&e(y),s&&e(E),v(c,s),v(D,s)}}}function ns(o,a,l){let n;return k(o,K,p=>l(0,n=p)),[n]}class rs extends N{constructor(a){super(),O(this,a,ns,ss,U,{})}}export{rs as default};
