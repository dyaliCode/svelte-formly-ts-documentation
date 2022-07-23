import{S as H,i as L,s as M,w as $,x as h,y as b,f as v,t as B,B as P,l as f,r as I,a as E,m as d,n as u,u as S,h as F,c as g,b as w,M as i,E as N,v as V,_ as O}from"../../../chunks/index-29635d82.js";import{R as j,F as R,g as k}from"../../../chunks/Result-fb5c37b2.js";import{F as z}from"../../../chunks/scroll-face605a.js";import{C as G}from"../../../chunks/CodeFence-3b1ba0cf.js";import"../../../chunks/singletons-eb14b229.js";function J(D){let n,l,a,p,e,r,m,y,c,C,A,s,o;return r=new R({props:{form_name:Q,fields:D[0]}}),s=new R({props:{form_name:W,fields:D[1]}}),{c(){n=f("section"),l=f("article"),a=f("h2"),p=I("Sign In"),e=E(),$(r.$$.fragment),m=E(),y=f("article"),c=f("h2"),C=I("Sign Up"),A=E(),$(s.$$.fragment)},l(t){n=d(t,"SECTION",{});var _=u(n);l=d(_,"ARTICLE",{});var T=u(l);a=d(T,"H2",{});var x=u(a);p=S(x,"Sign In"),x.forEach(F),e=g(T),h(r.$$.fragment,T),T.forEach(F),m=g(_),y=d(_,"ARTICLE",{});var q=u(y);c=d(q,"H2",{});var U=u(c);C=S(U,"Sign Up"),U.forEach(F),A=g(q),h(s.$$.fragment,q),q.forEach(F),_.forEach(F)},m(t,_){w(t,n,_),i(n,l),i(l,a),i(a,p),i(l,e),b(r,l,null),i(n,m),i(n,y),i(y,c),i(c,C),i(y,A),b(s,y,null),o=!0},p:N,i(t){o||(v(r.$$.fragment,t),v(s.$$.fragment,t),o=!0)},o(t){B(r.$$.fragment,t),B(s.$$.fragment,t),o=!1},d(t){t&&F(n),P(r),P(s)}}}function K(D){let n,l;return n=new j({props:{$$slots:{default:[J]},$$scope:{ctx:D}}}),{c(){$(n.$$.fragment)},l(a){h(n.$$.fragment,a)},m(a,p){b(n,a,p),l=!0},p(a,[p]){const e={};p&8&&(e.$$scope={dirty:p,ctx:a}),n.$set(e)},i(a){l||(v(n.$$.fragment,a),l=!0)},o(a){B(n.$$.fragment,a),l=!1},d(a){P(n,a)}}}const Q="formly_a",W="formly_b";function X(D){return[[{type:"input",name:"email",attributes:{type:"text",id:"email",placeholder:"Tap your email"},rules:["required","email"]},{type:"input",name:"password",attributes:{type:"password",id:"password",placeholder:"Tap your password"},rules:["required"]}],[{type:"input",name:"email",attributes:{type:"text",id:"email_register",placeholder:"Tap your email"},rules:["required","email"]},{type:"input",name:"password",attributes:{type:"password",id:"password_register",placeholder:"Tap your password"},rules:["required"]},{type:"input",name:"confirm_password",attributes:{type:"password",id:"confirm_password",placeholder:"Tap your confirm password"},rules:["required",{name:"confirmPassword",fnc:async()=>{const p=await k("formly_b");return p?!p.password||!p.confirm_password?!1:p.password==p.confirm_password:!0}}],messages:{confirmPassword:"Password and confirm password must be the same"}}]]}class Y extends H{constructor(n){super(),L(this,n,X,K,M,{})}}function Z(D){let n,l=D[0].title+"",a,p,e,r=D[0].description+"",m,y,c,C,A;return c=new G({props:{title:"example",lang:"svelte",ext:"svelte",linesCount:86,rawCode:`<script&#8203 lang="ts">
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
<span class="line"></span></code></pre>`}}),C=new Y({}),{c(){n=f("h1"),a=I(l),p=E(),e=f("p"),m=I(r),y=E(),$(c.$$.fragment),$(C.$$.fragment)},l(s){n=d(s,"H1",{});var o=u(n);a=S(o,l),o.forEach(F),p=g(s),e=d(s,"P",{});var t=u(e);m=S(t,r),t.forEach(F),y=g(s),h(c.$$.fragment,s),h(C.$$.fragment,s)},m(s,o){w(s,n,o),i(n,a),w(s,p,o),w(s,e,o),i(e,m),w(s,y,o),b(c,s,o),b(C,s,o),A=!0},p(s,[o]){(!A||o&1)&&l!==(l=s[0].title+"")&&V(a,l),(!A||o&1)&&r!==(r=s[0].description+"")&&V(m,r)},i(s){A||(v(c.$$.fragment,s),v(C.$$.fragment,s),A=!0)},o(s){B(c.$$.fragment,s),B(C.$$.fragment,s),A=!1},d(s){s&&F(n),s&&F(p),s&&F(e),s&&F(y),P(c,s),P(C,s)}}}function ss(D,n,l){let a;return O(D,z,p=>l(0,a=p)),[a]}class ts extends H{constructor(n){super(),L(this,n,ss,Z,M,{})}}export{ts as default};
