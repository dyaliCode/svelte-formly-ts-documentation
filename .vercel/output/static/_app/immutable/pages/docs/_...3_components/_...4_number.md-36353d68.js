import{S as q,i as B,s as P,l as E,r as h,a as b,w as C,m as g,n as w,u as x,h as y,c as _,x as A,b as F,M as v,y as m,v as I,f,t as u,B as d,_ as N,E as S}from"../../../chunks/index-29635d82.js";import{N as H}from"../../../chunks/Number-5eb9ce72.js";import{F as L}from"../../../chunks/scroll-face605a.js";import{C as M}from"../../../chunks/CodeFence-3b1ba0cf.js";import{A as U}from"../../../chunks/Admonition-c3cb81bf.js";import"../../../chunks/Result-defa069c.js";import"../../../chunks/singletons-eb14b229.js";function j(c){let n,t;return{c(){n=E("p"),t=h("the property attributes.type by default is a text and you can change it to password | email | number | range | tel")},l(a){n=g(a,"P",{});var o=w(n);t=x(o,"the property attributes.type by default is a text and you can change it to password | email | number | range | tel"),o.forEach(y)},m(a,o){F(a,n,o),v(n,t)},p:S,d(a){a&&y(n)}}}function k(c){let n,t=c[0].title+"",a,o,p,i,e,r,D;return p=new U({props:{type:"note",$$slots:{default:[j]},$$scope:{ctx:c}}}),e=new M({props:{title:"Example",lang:"typescript",ext:"ts",linesCount:17,highlightLines:[[7,7]],rawCode:`const fields: IField[] = [
	{
		type: 'input', // required
		name: 'number', // required
		value: '', // optional
		attributes: {
			type: 'number', // default = text, or password, email, number, tel, optional
			id: 'number', // optional
			classes: ['form-control'], // optional
			label: 'Field number', // optional
			placeholder: 'Placeholder field number', // optional
			disabled: false, // optional
			readonly: false // optional
		}
	}
];
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// default = text, or password, email, number, tel, optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Field number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Placeholder field number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">disabled</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">readonly</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),r=new H({}),{c(){n=E("h1"),a=h(t),o=b(),C(p.$$.fragment),i=b(),C(e.$$.fragment),C(r.$$.fragment)},l(s){n=g(s,"H1",{});var l=w(n);a=x(l,t),l.forEach(y),o=_(s),A(p.$$.fragment,s),i=_(s),A(e.$$.fragment,s),A(r.$$.fragment,s)},m(s,l){F(s,n,l),v(n,a),F(s,o,l),m(p,s,l),F(s,i,l),m(e,s,l),m(r,s,l),D=!0},p(s,[l]){(!D||l&1)&&t!==(t=s[0].title+"")&&I(a,t);const $={};l&2&&($.$$scope={dirty:l,ctx:s}),p.$set($)},i(s){D||(f(p.$$.fragment,s),f(e.$$.fragment,s),f(r.$$.fragment,s),D=!0)},o(s){u(p.$$.fragment,s),u(e.$$.fragment,s),u(r.$$.fragment,s),D=!1},d(s){s&&y(n),s&&y(o),d(p,s),s&&y(i),d(e,s),d(r,s)}}}function z(c,n,t){let a;return N(c,L,o=>t(0,a=o)),[a]}class V extends q{constructor(n){super(),B(this,n,z,k,P,{})}}export{V as default};
