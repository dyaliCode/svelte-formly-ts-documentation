import{S as f,i as d,s as $,w as D,x as y,y as i,f as F,t as C,B as A,E as _,l as E,r as g,a as h,m as v,n as x,u as b,h as m,c as q,b as u,M as w,v as I,_ as B}from"../../../chunks/index-29635d82.js";import{R as T,F as R}from"../../../chunks/Result-defa069c.js";import{F as S}from"../../../chunks/scroll-face605a.js";import{C as H}from"../../../chunks/CodeFence-3b1ba0cf.js";import"../../../chunks/singletons-eb14b229.js";function L(e){let s,a;return s=new R({props:{fields:e[0],form_name:"field_autocomplete"}}),{c(){D(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,l){i(s,t,l),a=!0},p:_,i(t){a||(F(s.$$.fragment,t),a=!0)},o(t){C(s.$$.fragment,t),a=!1},d(t){A(s,t)}}}function M(e){let s,a;return s=new T({props:{$$slots:{default:[L]},$$scope:{ctx:e}}}),{c(){D(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,l){i(s,t,l),a=!0},p(t,[l]){const p={};l&2&&(p.$$scope={dirty:l,ctx:t}),s.$set(p)},i(t){a||(F(s.$$.fragment,t),a=!0)},o(t){C(s.$$.fragment,t),a=!1},d(t){A(s,t)}}}function U(e){return[[{type:"autocomplete",name:"name-field-autocomplete",attributes:{id:"id-field-autocomplete",placeholder:"Tap item to select",autocomplete:"off"},extra:{filter_lenght:3,loadItemes:[{value:1,title:"item 1"},{value:2,title:"item 2"},{value:3,title:"item 3"},{value:4,title:"item 4"}]}}]]}class j extends f{constructor(s){super(),d(this,s,U,M,$,{})}}function k(e){let s,a=e[0].title+"",t,l,p,r,c;return p=new H({props:{title:"Example",lang:"typescript",ext:"ts",linesCount:35,highlightLines:[[3,3],[10,32]],rawCode:`const fields: IField[] = [
	{
		type: 'autocomplete', // required
		name: 'name-field-autocomplete', // required
		attributes: {
			id: 'id-field-autocomplete', // required
			placeholder: 'Tap item to select', // optional
			autocomplete: 'off' // optional
		},
		extra: {
			filter_lenght: 3, // optional and by default = 0
			loadItemes: [
				// required
				// list items with id and title attributes.
				{
					value: 1,
					title: 'item 1'
				},
				{
					value: 2,
					title: 'item 2'
				},
				{
					value: 3,
					title: 'item 3'
				},
				{
					value: 4,
					title: 'item 4'
				}
			]
		}
	}
];
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">autocomplete</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">name-field-autocomplete</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">id-field-autocomplete</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Tap item to select</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">autocomplete</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">off</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">filter_lenght</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional and by default = 0</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">loadItemes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #89DDFF">				</span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #89DDFF">				</span><span style="color: #676E95; font-style: italic">// list items with id and title attributes.</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">item 1</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">item 2</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">item 3</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">item 4</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">			]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),r=new j({}),{c(){s=E("h1"),t=g(a),l=h(),D(p.$$.fragment),D(r.$$.fragment)},l(n){s=v(n,"H1",{});var o=x(s);t=b(o,a),o.forEach(m),l=q(n),y(p.$$.fragment,n),y(r.$$.fragment,n)},m(n,o){u(n,s,o),w(s,t),u(n,l,o),i(p,n,o),i(r,n,o),c=!0},p(n,[o]){(!c||o&1)&&a!==(a=n[0].title+"")&&I(t,a)},i(n){c||(F(p.$$.fragment,n),F(r.$$.fragment,n),c=!0)},o(n){C(p.$$.fragment,n),C(r.$$.fragment,n),c=!1},d(n){n&&m(s),n&&m(l),A(p,n),A(r,n)}}}function z(e,s,a){let t;return B(e,S,l=>a(0,t=l)),[t]}class P extends f{constructor(s){super(),d(this,s,z,k,$,{})}}export{P as default};
