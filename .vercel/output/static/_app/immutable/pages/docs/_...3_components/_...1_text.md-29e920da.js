import{S as q,i as B,s as L,l as E,r as b,a as _,w as C,m as h,n as g,u as w,h as y,c as x,x as A,b as F,M as v,y as f,v as P,f as m,t as d,B as u,_ as I,E as S}from"../../../chunks/index-29635d82.js";import{T}from"../../../chunks/Text-0e4aceea.js";import{F as H}from"../../../chunks/scroll-face605a.js";import{C as M}from"../../../chunks/CodeFence-3b1ba0cf.js";import{A as U}from"../../../chunks/Admonition-c3cb81bf.js";import"../../../chunks/Result-defa069c.js";import"../../../chunks/singletons-eb14b229.js";function j(c){let n,l;return{c(){n=E("p"),l=b("the property attributes.type by default is a text and you can change it to password | email | number | range | tel")},l(a){n=h(a,"P",{});var o=g(n);l=w(o,"the property attributes.type by default is a text and you can change it to password | email | number | range | tel"),o.forEach(y)},m(a,o){F(a,n,o),v(n,l)},p:S,d(a){a&&y(n)}}}function k(c){let n,l=c[0].title+"",a,o,p,D,e,r,i;return p=new U({props:{type:"note",$$slots:{default:[j]},$$scope:{ctx:c}}}),e=new M({props:{title:"Example",lang:"typescript",ext:"ts",linesCount:17,highlightLines:[[7,7]],rawCode:`const fields: IField[] = [
	{
		type: 'input', // required
		name: 'name-field-text', // required
		value: '', // optional
		attributes: {
			type: 'text', // default = text, or password, email, number, tel, optional
			id: 'id-field-text', // optional
			classes: ['form-control'], // optional
			label: 'Label field text', // optional
			placeholder: 'Placeholder field text', // optional
			disabled: false, // optional
			readonly: false // optional
		}
	}
];
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">name-field-text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// default = text, or password, email, number, tel, optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">id-field-text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Label field text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Placeholder field text</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">disabled</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">readonly</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),r=new T({}),{c(){n=E("h1"),a=b(l),o=_(),C(p.$$.fragment),D=_(),C(e.$$.fragment),C(r.$$.fragment)},l(s){n=h(s,"H1",{});var t=g(n);a=w(t,l),t.forEach(y),o=x(s),A(p.$$.fragment,s),D=x(s),A(e.$$.fragment,s),A(r.$$.fragment,s)},m(s,t){F(s,n,t),v(n,a),F(s,o,t),f(p,s,t),F(s,D,t),f(e,s,t),f(r,s,t),i=!0},p(s,[t]){(!i||t&1)&&l!==(l=s[0].title+"")&&P(a,l);const $={};t&2&&($.$$scope={dirty:t,ctx:s}),p.$set($)},i(s){i||(m(p.$$.fragment,s),m(e.$$.fragment,s),m(r.$$.fragment,s),i=!0)},o(s){d(p.$$.fragment,s),d(e.$$.fragment,s),d(r.$$.fragment,s),i=!1},d(s){s&&y(n),s&&y(o),u(p,s),s&&y(D),u(e,s),u(r,s)}}}function z(c,n,l){let a;return I(c,H,o=>l(0,a=o)),[a]}class V extends q{constructor(n){super(),B(this,n,z,k,L,{})}}export{V as default};
