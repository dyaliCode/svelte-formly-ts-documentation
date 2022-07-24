import{S as u,i as m,s as $,w as D,x as y,y as F,f as i,t as C,B as A,E,l as g,r as _,a as v,m as x,n as q,u as h,h as d,c as b,b as f,M as R,v as w,_ as B}from"../../../chunks/index-29635d82.js";import{R as k,F as I}from"../../../chunks/Result-defa069c.js";import{F as S}from"../../../chunks/scroll-face605a.js";import{C as H}from"../../../chunks/CodeFence-3b1ba0cf.js";import"../../../chunks/singletons-eb14b229.js";function L(p){let s,t;return s=new I({props:{fields:p[0],form_name:"field_radio"}}),{c(){D(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,l){F(s,n,l),t=!0},p:E,i(n){t||(i(s.$$.fragment,n),t=!0)},o(n){C(s.$$.fragment,n),t=!1},d(n){A(s,n)}}}function M(p){let s,t;return s=new k({props:{$$slots:{default:[L]},$$scope:{ctx:p}}}),{c(){D(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,l){F(s,n,l),t=!0},p(n,[l]){const o={};l&2&&(o.$$scope={dirty:l,ctx:n}),s.$set(o)},i(n){t||(i(s.$$.fragment,n),t=!0)},o(n){C(s.$$.fragment,n),t=!1},d(n){A(s,n)}}}function U(p){return[[{type:"radio",name:"name-field-radio",attributes:{id:"id-field-radio",classes:["form-check-input"],label:"Radio A:"},extra:{items:[{id:"radio1",value:1,title:"radio 1"},{id:"radio2",value:2,title:"radio 2"}],aligne:"inline"},prefix:{tag:"div",classes:["form-group"]}},{type:"radio",name:"name-field-radio2",attributes:{id:"id-field-radio2",classes:["form-check-input"],label:"Radio B:"},extra:{items:[{id:"radio3",value:3,title:"radio 3"},{id:"radio4",value:4,title:"radio 4"}],aligne:"default"},prefix:{tag:"div",classes:["form-group"]}}]]}class j extends u{constructor(s){super(),m(this,s,U,M,$,{})}}function z(p){let s,t=p[0].title+"",n,l,o,r,c;return o=new H({props:{title:"Example",lang:"typescript",ext:"ts",linesCount:61,highlightLines:[[3,3],[10,25],[32,32],[39,54]],rawCode:`const fields: IField[] = [
	{
		type: 'radio', // required
		name: 'name-field-radio', // required
		attributes: {
			id: 'id-field-radio', // required
			classes: ['form-check-input'], // optional
			label: 'Radio A:'
		},
		extra: {
			// required
			items: [
				{
					id: 'radio1',
					value: 1,
					title: 'radio 1'
				},
				{
					id: 'radio2',
					value: 2,
					title: 'radio 2'
				}
			],
			aligne: 'inline'
		},
		prefix: {
			tag: 'div',
			classes: ['form-group']
		}
	},
	{
		type: 'radio', // required
		name: 'name-field-radio2', // required
		attributes: {
			id: 'id-field-radio2', // required
			classes: ['form-check-input'], // optional
			label: 'Radio B: '
		},
		extra: {
			// required
			items: [
				{
					id: 'radio3',
					value: 3,
					title: 'radio 3'
				},
				{
					id: 'radio4',
					value: 4,
					title: 'radio 4'
				}
			],
			aligne: 'default'
		},
		prefix: {
			tag: 'div',
			classes: ['form-group']
		}
	}
];
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">name-field-radio</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">id-field-radio</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-check-input</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Radio A:</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">			</span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">items</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio1</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio 1</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio 2</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">			]</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">aligne</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">inline</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">prefix</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">tag</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">div</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-group</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">name-field-radio2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">id-field-radio2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-check-input</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Radio B: </span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">			</span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">items</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio3</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">3</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio 3</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio4</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">4</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">radio 4</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">			]</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">aligne</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">default</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">prefix</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">tag</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">div</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-group</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),r=new j({}),{c(){s=g("h1"),n=_(t),l=v(),D(o.$$.fragment),D(r.$$.fragment)},l(a){s=x(a,"H1",{});var e=q(s);n=h(e,t),e.forEach(d),l=b(a),y(o.$$.fragment,a),y(r.$$.fragment,a)},m(a,e){f(a,s,e),R(s,n),f(a,l,e),F(o,a,e),F(r,a,e),c=!0},p(a,[e]){(!c||e&1)&&t!==(t=a[0].title+"")&&w(n,t)},i(a){c||(i(o.$$.fragment,a),i(r.$$.fragment,a),c=!0)},o(a){C(o.$$.fragment,a),C(r.$$.fragment,a),c=!1},d(a){a&&d(s),a&&d(l),A(o,a),A(r,a)}}}function G(p,s,t){let n;return B(p,S,l=>t(0,n=l)),[n]}class Q extends u{constructor(s){super(),m(this,s,G,z,$,{})}}export{Q as default};
