import{S as H,i as L,s as M,w as h,x as b,y as v,f as B,t as P,B as T,l as u,r as g,a as q,m as d,n as _,u as E,h as r,c as S,b as $,M as F,E as N,v as R,_ as O}from"../../../chunks/index-29635d82.js";import{R as G,F as V,g as j}from"../../../chunks/Result-defa069c.js";import{F as k}from"../../../chunks/scroll-face605a.js";import{C as z}from"../../../chunks/CodeFence-3b1ba0cf.js";import{A as J}from"../../../chunks/Admonition-c3cb81bf.js";import"../../../chunks/singletons-eb14b229.js";function K(C){let n,l,a,p,e,t,c,D,i,w,A,y,m;return t=new V({props:{form_name:W,fields:C[0]}}),y=new V({props:{form_name:X,fields:C[1]}}),{c(){n=u("section"),l=u("article"),a=u("h2"),p=g("Sign In"),e=q(),h(t.$$.fragment),c=q(),D=u("article"),i=u("h2"),w=g("Sign Up"),A=q(),h(y.$$.fragment)},l(s){n=d(s,"SECTION",{});var o=_(n);l=d(o,"ARTICLE",{});var f=_(l);a=d(f,"H2",{});var x=_(a);p=E(x,"Sign In"),x.forEach(r),e=S(f),b(t.$$.fragment,f),f.forEach(r),c=S(o),D=d(o,"ARTICLE",{});var I=_(D);i=d(I,"H2",{});var U=_(i);w=E(U,"Sign Up"),U.forEach(r),A=S(I),b(y.$$.fragment,I),I.forEach(r),o.forEach(r)},m(s,o){$(s,n,o),F(n,l),F(l,a),F(a,p),F(l,e),v(t,l,null),F(n,c),F(n,D),F(D,i),F(i,w),F(D,A),v(y,D,null),m=!0},p:N,i(s){m||(B(t.$$.fragment,s),B(y.$$.fragment,s),m=!0)},o(s){P(t.$$.fragment,s),P(y.$$.fragment,s),m=!1},d(s){s&&r(n),T(t),T(y)}}}function Q(C){let n,l;return n=new G({props:{$$slots:{default:[K]},$$scope:{ctx:C}}}),{c(){h(n.$$.fragment)},l(a){b(n.$$.fragment,a)},m(a,p){v(n,a,p),l=!0},p(a,[p]){const e={};p&8&&(e.$$scope={dirty:p,ctx:a}),n.$set(e)},i(a){l||(B(n.$$.fragment,a),l=!0)},o(a){P(n.$$.fragment,a),l=!1},d(a){T(n,a)}}}const W="formly_a",X="formly_b";function Y(C){return[[{type:"input",name:"email",attributes:{type:"text",id:"email",placeholder:"Tap your email"},rules:["required","email"]},{type:"input",name:"password",attributes:{type:"password",id:"password",placeholder:"Tap your password"},rules:["required"]}],[{type:"input",name:"email",attributes:{type:"text",id:"email_register",placeholder:"Tap your email"},rules:["required","email"]},{type:"input",name:"password",attributes:{type:"password",id:"password_register",placeholder:"Tap your password"},rules:["required"]},{type:"input",name:"confirm_password",attributes:{type:"password",id:"confirm_password",placeholder:"Tap your confirm password"},rules:["required",{name:"confirmPassword",fnc:async()=>{const p=await j("formly_b");return p?!p.password||!p.confirm_password?!1:p.password==p.confirm_password:!0}}],messages:{confirmPassword:"Password and confirm password must be the same"}}]]}class Z extends H{constructor(n){super(),L(this,n,Y,Q,M,{})}}function ss(C){let n,l,a,p,e;return{c(){n=u("p"),l=g("Form name should be "),a=u("strong"),p=g("unique"),e=g(".")},l(t){n=d(t,"P",{});var c=_(n);l=E(c,"Form name should be "),a=d(c,"STRONG",{});var D=_(a);p=E(D,"unique"),D.forEach(r),e=E(c,"."),c.forEach(r)},m(t,c){$(t,n,c),F(n,l),F(n,a),F(a,p),F(n,e)},p:N,d(t){t&&r(n)}}}function ns(C){let n,l=C[0].title+"",a,p,e,t=C[0].description+"",c,D,i,w,A,y,m;return i=new J({props:{type:"danger",$$slots:{default:[ss]},$$scope:{ctx:C}}}),A=new z({props:{title:"Example",lang:"svelte",ext:"svelte",linesCount:86,highlightLines:[[5,5],[28,28],[79,79],[83,83]],rawCode:`<script&#8203 lang="ts">
	import { Formly, type IField, getValues } from 'svelte-formly';

	// Form Sign In
	const form_name_a = 'formly_a';
	const fieldsA: IField[] = [
		{
			type: 'input',
			name: 'email',
			attributes: {
				type: 'text',
				id: 'email',
				placeholder: 'Tap your email'
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

	// Form Sign Up
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
<\/script>

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
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">lang</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">ts</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">getValues</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #676E95; font-style: italic">// Form Sign In</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name_a </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">formly_a</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fieldsA</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap your email</span><span style="color: #89DDFF">&#39;</span></span>
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
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #676E95; font-style: italic">// Form Sign Up</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name_b </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">formly_b</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> confirmPassword </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">():</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">Promise</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">boolean</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">any</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">getValues</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">formly_b</span><span style="color: #89DDFF">&#39;</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span><span style="color: #F07178"> </span><span style="color: #676E95; font-style: italic">// await is required.</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #89DDFF">!</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">password</span><span style="color: #F07178"> </span><span style="color: #89DDFF">||</span><span style="color: #F07178"> </span><span style="color: #89DDFF">!</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">confirm_password</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">				</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">			</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">password</span><span style="color: #F07178"> </span><span style="color: #89DDFF">!=</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">confirm_password</span><span style="color: #F07178"> </span><span style="color: #89DDFF">?</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #F07178"> </span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">};</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fieldsB</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email_register</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap your email</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password_register</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap your password</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">confirm_password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">confirm_password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap your confirm password</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">confirmPassword</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">fnc</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> confirmPassword </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">messages</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #F07178">confirmPassword</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Password and confirm password must be the same</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	]</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">section</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">article</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h2</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD">Sign In</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h2</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">form_name</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">form_name_a</span><span style="color: #89DDFF">} </span><span style="color: #C792EA">fields</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">fieldsA</span><span style="color: #89DDFF">} /&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">article</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">article</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">h2</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD">Sign Up</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">h2</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Formly</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">form_name</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">form_name_b</span><span style="color: #89DDFF">} </span><span style="color: #C792EA">fields</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">fieldsB</span><span style="color: #89DDFF">} /&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">article</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">section</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre>`}}),y=new Z({}),{c(){n=u("h1"),a=g(l),p=q(),e=u("p"),c=g(t),D=q(),h(i.$$.fragment),w=q(),h(A.$$.fragment),h(y.$$.fragment)},l(s){n=d(s,"H1",{});var o=_(n);a=E(o,l),o.forEach(r),p=S(s),e=d(s,"P",{});var f=_(e);c=E(f,t),f.forEach(r),D=S(s),b(i.$$.fragment,s),w=S(s),b(A.$$.fragment,s),b(y.$$.fragment,s)},m(s,o){$(s,n,o),F(n,a),$(s,p,o),$(s,e,o),F(e,c),$(s,D,o),v(i,s,o),$(s,w,o),v(A,s,o),v(y,s,o),m=!0},p(s,[o]){(!m||o&1)&&l!==(l=s[0].title+"")&&R(a,l),(!m||o&1)&&t!==(t=s[0].description+"")&&R(c,t);const f={};o&2&&(f.$$scope={dirty:o,ctx:s}),i.$set(f)},i(s){m||(B(i.$$.fragment,s),B(A.$$.fragment,s),B(y.$$.fragment,s),m=!0)},o(s){P(i.$$.fragment,s),P(A.$$.fragment,s),P(y.$$.fragment,s),m=!1},d(s){s&&r(n),s&&r(p),s&&r(e),s&&r(D),T(i,s),s&&r(w),T(A,s),T(y,s)}}}function as(C,n,l){let a;return O(C,k,p=>l(0,a=p)),[a]}class cs extends H{constructor(n){super(),L(this,n,as,ns,M,{})}}export{cs as default};
