import{S as u,i as m,s as $,w as D,x as y,y as i,f as F,t as C,B as A,E,l as b,r as _,a as q,m as g,n as v,u as x,h as f,c as h,b as d,M as w,v as L,_ as B}from"../../../chunks/index-29635d82.js";import{R as S,F as I}from"../../../chunks/Result-defa069c.js";import{F as R}from"../../../chunks/scroll-face605a.js";import{C as H}from"../../../chunks/CodeFence-3b1ba0cf.js";import"../../../chunks/singletons-eb14b229.js";function M(p){let s,a;return s=new I({props:{fields:p[0],form_name:"field_select"}}),{c(){D(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,l){i(s,n,l),a=!0},p:E,i(n){a||(F(s.$$.fragment,n),a=!0)},o(n){C(s.$$.fragment,n),a=!1},d(n){A(s,n)}}}function U(p){let s,a;return s=new S({props:{$$slots:{default:[M]},$$scope:{ctx:p}}}),{c(){D(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,l){i(s,n,l),a=!0},p(n,[l]){const o={};l&2&&(o.$$scope={dirty:l,ctx:n}),s.$set(o)},i(n){a||(F(s.$$.fragment,n),a=!0)},o(n){C(s.$$.fragment,n),a=!1},d(n){A(s,n)}}}function j(p){return[[{type:"select",name:"name-field-select",attributes:{id:"id-field-select",classes:["form-control"],label:"Label field select 1",disabled:!1},extra:{options:[{value:1,title:"option 1"},{value:2,title:"option 2"}]}},{type:"select",name:"name-field-select2",attributes:{id:"id-field-select2",classes:["form-control"],label:"Label field select 2",disabled:!0},extra:{options:[{value:1,title:"option 3"},{value:2,title:"option 4"}]}}]]}class k extends u{constructor(s){super(),m(this,s,j,U,$,{})}}function z(p){let s,a=p[0].title+"",n,l,o,c,r;return o=new H({props:{title:"Example",lang:"typescript",ext:"ts",linesCount:49,highlightLines:[[3,3],[11,23],[26,26],[34,46]],rawCode:`const fields: IField[] = [
	{
		type: 'select', // required
		name: 'name-field-select', // required
		attributes: {
			id: 'id-field-select', // required
			classes: ['form-control'], // optional
			label: 'Label field select 1', // optional
			disabled: false // optional
		},
		extra: {
			options: [
				// required
				{
					value: 1,
					title: 'option 1'
				},
				{
					value: 2,
					title: 'option 2'
				}
			]
		}
	},
	{
		type: 'select', // required
		name: 'name-field-select2', // required
		attributes: {
			id: 'id-field-select2', // required
			classes: ['form-control'], // optional
			label: 'Label field select 2', // optional
			disabled: true // optional
		},
		extra: {
			options: [
				// required
				{
					value: 1,
					title: 'option 3'
				},
				{
					value: 2,
					title: 'option 4'
				}
			]
		}
	}
];
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">select</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">name-field-select</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">id-field-select</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Label field select 1</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">disabled</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">options</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #89DDFF">				</span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">option 1</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">option 2</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">			]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">select</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">name-field-select2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">id-field-select2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Label field select 2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">disabled</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">options</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #89DDFF">				</span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">option 3</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">option 4</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">			]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),c=new k({}),{c(){s=b("h1"),n=_(a),l=q(),D(o.$$.fragment),D(c.$$.fragment)},l(t){s=g(t,"H1",{});var e=v(s);n=x(e,a),e.forEach(f),l=h(t),y(o.$$.fragment,t),y(c.$$.fragment,t)},m(t,e){d(t,s,e),w(s,n),d(t,l,e),i(o,t,e),i(c,t,e),r=!0},p(t,[e]){(!r||e&1)&&a!==(a=t[0].title+"")&&L(n,a)},i(t){r||(F(o.$$.fragment,t),F(c.$$.fragment,t),r=!0)},o(t){C(o.$$.fragment,t),C(c.$$.fragment,t),r=!1},d(t){t&&f(s),t&&f(l),A(o,t),A(c,t)}}}function G(p,s,a){let n;return B(p,R,l=>a(0,n=l)),[n]}class Q extends u{constructor(s){super(),m(this,s,G,z,$,{})}}export{Q as default};
