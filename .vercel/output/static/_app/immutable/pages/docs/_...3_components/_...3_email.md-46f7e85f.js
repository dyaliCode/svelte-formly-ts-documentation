import{S as g,i as b,s as h,w as D,x as F,y as C,f as m,t as f,B as A,E as w,l as x,r as v,a as _,m as q,n as B,u as P,h as i,c as E,b as d,M as I,v as R,_ as S}from"../../../chunks/index-29635d82.js";import{R as H,F as L}from"../../../chunks/Result-defa069c.js";import{F as M}from"../../../chunks/scroll-face605a.js";import{C as U}from"../../../chunks/CodeFence-3b1ba0cf.js";import{A as j}from"../../../chunks/Admonition-c3cb81bf.js";import"../../../chunks/singletons-eb14b229.js";function k(o){let s,l;return s=new L({props:{fields:o[0],form_name:"field_email"}}),{c(){D(s.$$.fragment)},l(a){F(s.$$.fragment,a)},m(a,t){C(s,a,t),l=!0},p:w,i(a){l||(m(s.$$.fragment,a),l=!0)},o(a){f(s.$$.fragment,a),l=!1},d(a){A(s,a)}}}function z(o){let s,l;return s=new H({props:{$$slots:{default:[k]},$$scope:{ctx:o}}}),{c(){D(s.$$.fragment)},l(a){F(s.$$.fragment,a)},m(a,t){C(s,a,t),l=!0},p(a,[t]){const p={};t&2&&(p.$$scope={dirty:t,ctx:a}),s.$set(p)},i(a){l||(m(s.$$.fragment,a),l=!0)},o(a){f(s.$$.fragment,a),l=!1},d(a){A(s,a)}}}function G(o){return[[{type:"input",name:"email",value:"",attributes:{type:"email",id:"email",classes:["form-control"],label:"Field email",placeholder:"Placeholder field email",disabled:!1,readonly:!1},rules:["email"]}]]}class J extends g{constructor(s){super(),b(this,s,G,z,h,{})}}function K(o){let s,l;return{c(){s=x("p"),l=v("the property attributes.type by default is a text and you can change it to password | email | number | range | tel")},l(a){s=q(a,"P",{});var t=B(s);l=P(t,"the property attributes.type by default is a text and you can change it to password | email | number | range | tel"),t.forEach(i)},m(a,t){d(a,s,t),I(s,l)},p:w,d(a){a&&i(s)}}}function N(o){let s,l=o[0].title+"",a,t,p,u,r,c,y;return p=new j({props:{type:"note",$$slots:{default:[K]},$$scope:{ctx:o}}}),r=new U({props:{title:"Example",lang:"typescript",ext:"ts",linesCount:18,highlightLines:[[7,7]],rawCode:`const fields: IField[] = [
	{
		type: 'input', // required
		name: 'email', // required
		value: '', // optional
		attributes: {
			type: 'email', // default = text, or password, email, number, tel, optional
			id: 'email', // optional
			classes: ['form-control'], // optional
			label: 'Field email', // optional
			placeholder: 'Placeholder field email', // optional
			disabled: false, // optional
			readonly: false // optional
		},
		rules: ['email'] // optional
	}
];
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// default = text, or password, email, number, tel, optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Field email</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Placeholder field email</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">disabled</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">readonly</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">] </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),c=new J({}),{c(){s=x("h1"),a=v(l),t=_(),D(p.$$.fragment),u=_(),D(r.$$.fragment),D(c.$$.fragment)},l(n){s=q(n,"H1",{});var e=B(s);a=P(e,l),e.forEach(i),t=E(n),F(p.$$.fragment,n),u=E(n),F(r.$$.fragment,n),F(c.$$.fragment,n)},m(n,e){d(n,s,e),I(s,a),d(n,t,e),C(p,n,e),d(n,u,e),C(r,n,e),C(c,n,e),y=!0},p(n,[e]){(!y||e&1)&&l!==(l=n[0].title+"")&&R(a,l);const $={};e&2&&($.$$scope={dirty:e,ctx:n}),p.$set($)},i(n){y||(m(p.$$.fragment,n),m(r.$$.fragment,n),m(c.$$.fragment,n),y=!0)},o(n){f(p.$$.fragment,n),f(r.$$.fragment,n),f(c.$$.fragment,n),y=!1},d(n){n&&i(s),n&&i(t),A(p,n),n&&i(u),A(r,n),A(c,n)}}}function O(o,s,l){let a;return S(o,M,t=>l(0,a=t)),[a]}class Z extends g{constructor(s){super(),b(this,s,O,N,h,{})}}export{Z as default};