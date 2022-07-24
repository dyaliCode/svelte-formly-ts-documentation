import{S as u,i as $,s as d,w as i,x as D,y,f as F,t as C,B as A,E as g,l as _,r as E,a as x,m as h,n as b,u as w,h as f,c as v,b as m,M as j,v as q,_ as I}from"../../../chunks/index-29635d82.js";import{R as S,F as B}from"../../../chunks/Result-defa069c.js";import{F as z}from"../../../chunks/scroll-face605a.js";import{C as P}from"../../../chunks/CodeFence-3b1ba0cf.js";import"../../../chunks/singletons-eb14b229.js";function R(o){let s,l;return s=new B({props:{fields:o[0],form_name:"field_file"}}),{c(){i(s.$$.fragment)},l(n){D(s.$$.fragment,n)},m(n,t){y(s,n,t),l=!0},p:g,i(n){l||(F(s.$$.fragment,n),l=!0)},o(n){C(s.$$.fragment,n),l=!1},d(n){A(s,n)}}}function H(o){let s,l;return s=new S({props:{$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){i(s.$$.fragment)},l(n){D(s.$$.fragment,n)},m(n,t){y(s,n,t),l=!0},p(n,[t]){const e={};t&2&&(e.$$scope={dirty:t,ctx:n}),s.$set(e)},i(n){l||(F(s.$$.fragment,n),l=!0)},o(n){C(s.$$.fragment,n),l=!1},d(n){A(s,n)}}}function L(o){return[[{type:"file",name:"name-file",attributes:{id:"id-field",classes:["form-control"],label:"Image"},extra:{multiple:!0,showPreview:!0},rules:["file"],file:{extensions:["jpg","gif","png"],maxSize:5}}]]}class M extends u{constructor(s){super(),$(this,s,L,H,d,{})}}function U(o){let s,l=o[0].title+"",n,t,e,r,c;return e=new P({props:{title:"Example",lang:"typescript",ext:"ts",linesCount:23,highlightLines:[[7,7]],rawCode:`const fields: IField[] = [
	{
		type: 'file', // required
		name: 'name-file', // require
		attributes: {
			id: 'id-field', // optional
			classes: ['form-control'], // optional
			label: 'Image' // optional
		},
		extra: {
			multiple: true, // optional
			showPreview: true // optional
		},
		rules: ['file'], // optional
		file: {
			// optional
			// need to add this attribute object if you need a file rule
			extensions: ['jpg', 'gif', 'png'],
			maxSize: 5
		}
	}
];
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">name-file</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// require</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">id-field</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Image</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">multiple</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">showPreview</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">file</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">			</span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #89DDFF">			</span><span style="color: #676E95; font-style: italic">// need to add this attribute object if you need a file rule</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">extensions</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">jpg</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">gif</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">png</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">maxSize</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">5</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),r=new M({}),{c(){s=_("h1"),n=E(l),t=x(),i(e.$$.fragment),i(r.$$.fragment)},l(a){s=h(a,"H1",{});var p=b(s);n=w(p,l),p.forEach(f),t=v(a),D(e.$$.fragment,a),D(r.$$.fragment,a)},m(a,p){m(a,s,p),j(s,n),m(a,t,p),y(e,a,p),y(r,a,p),c=!0},p(a,[p]){(!c||p&1)&&l!==(l=a[0].title+"")&&q(n,l)},i(a){c||(F(e.$$.fragment,a),F(r.$$.fragment,a),c=!0)},o(a){C(e.$$.fragment,a),C(r.$$.fragment,a),c=!1},d(a){a&&f(s),a&&f(t),A(e,a),A(r,a)}}}function k(o,s,l){let n;return I(o,z,t=>l(0,n=t)),[n]}class Q extends u{constructor(s){super(),$(this,s,k,U,d,{})}}export{Q as default};
