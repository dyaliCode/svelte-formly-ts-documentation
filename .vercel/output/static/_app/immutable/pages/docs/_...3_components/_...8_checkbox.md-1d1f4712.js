import{S as f,i as $,s as d,w as D,x as y,y as F,f as C,t as A,B as i,E as h,l as E,r as x,a as v,m as k,n as g,u as b,h as u,c as _,b as m,M as V,v as q,_ as w}from"../../../chunks/index-29635d82.js";import{R as B,F as I}from"../../../chunks/Result-defa069c.js";import{F as R}from"../../../chunks/scroll-face605a.js";import{C as S}from"../../../chunks/CodeFence-3b1ba0cf.js";import"../../../chunks/singletons-eb14b229.js";function H(p){let s,t;return s=new I({props:{fields:p[0],form_name:"field_checkbox"}}),{c(){D(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,l){F(s,n,l),t=!0},p:h,i(n){t||(C(s.$$.fragment,n),t=!0)},o(n){A(s.$$.fragment,n),t=!1},d(n){i(s,n)}}}function L(p){let s,t;return s=new B({props:{$$slots:{default:[H]},$$scope:{ctx:p}}}),{c(){D(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,l){F(s,n,l),t=!0},p(n,[l]){const o={};l&2&&(o.$$scope={dirty:l,ctx:n}),s.$set(o)},i(n){t||(C(s.$$.fragment,n),t=!0)},o(n){A(s.$$.fragment,n),t=!1},d(n){i(s,n)}}}function M(p){return[[{type:"checkbox",name:"check1",attributes:{id:"check1",label:"Checkbox A:",classes:["checker"]},extra:{items:[{name:"item1",value:"value1",title:"Value 1"},{name:"item2",value:"value2",title:"Value 2"}]},prefix:{tag:"div",classes:["form-group"]}},{type:"checkbox",name:"check2",attributes:{id:"check2",label:"Checkbox B:",classes:["checker"]},extra:{aligne:"inline",items:[{name:"item3",value:"value3",title:"Value 3"},{name:"item4",value:"value4",title:"Value 4"}]},prefix:{tag:"div",classes:["form-group"]}}]]}class U extends f{constructor(s){super(),$(this,s,M,L,d,{})}}function j(p){let s,t=p[0].title+"",n,l,o,c,r;return o=new S({props:{title:"Example",lang:"typescript",ext:"ts",linesCount:59,highlightLines:[[3,3],[10,24],[31,31],[38,52]],rawCode:`const fields: IField[] = [
	{
		type: 'checkbox', // required
		name: 'check1', // required
		attributes: {
			id: 'check1', // required
			label: 'Checkbox B', // optional
			classes: ['checker'] // optional
		},
		extra: {
			items: [
				// required
				{
					name: 'item1',
					value: 'value1',
					title: 'Value 1'
				},
				{
					name: 'item2',
					value: 'value2',
					title: 'Value 2'
				}
			]
		},
		prefix: {
			tag: 'div',
			classes: ['form-group']
		}
	},
	{
		type: 'checkbox',
		name: 'check2',
		attributes: {
			id: 'check2',
			label: 'Checkbox A:',
			classes: ['checker']
		},
		extra: {
			aligne: 'inline',
			items: [
				{
					name: 'item3',
					value: 'value 3',
					title: 'Value 3'
				},
				{
					name: 'item4',
					value: 'value4',
					title: 'Value 4'
				}
			]
		},
		prefix: {
			tag: 'div',
			classes: ['form-group']
		}
	}
];
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">checkbox</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">check1</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">check1</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Checkbox B</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">checker</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">] </span><span style="color: #676E95; font-style: italic">// optional</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">items</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #89DDFF">				</span><span style="color: #676E95; font-style: italic">// required</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">item1</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">value1</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Value 1</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">item2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">value2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Value 2</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">			]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">prefix</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">tag</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">div</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-group</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">checkbox</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">check2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">check2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Checkbox A:</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">checker</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">aligne</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">inline</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">items</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">item3</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">value 3</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Value 3</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">item4</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">value4</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">					</span><span style="color: #F07178">title</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Value 4</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">				</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">			]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">prefix</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">tag</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">div</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-group</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),c=new U({}),{c(){s=E("h1"),n=x(t),l=v(),D(o.$$.fragment),D(c.$$.fragment)},l(a){s=k(a,"H1",{});var e=g(s);n=b(e,t),e.forEach(u),l=_(a),y(o.$$.fragment,a),y(c.$$.fragment,a)},m(a,e){m(a,s,e),V(s,n),m(a,l,e),F(o,a,e),F(c,a,e),r=!0},p(a,[e]){(!r||e&1)&&t!==(t=a[0].title+"")&&q(n,t)},i(a){r||(C(o.$$.fragment,a),C(c.$$.fragment,a),r=!0)},o(a){A(o.$$.fragment,a),A(c.$$.fragment,a),r=!1},d(a){a&&u(s),a&&u(l),i(o,a),i(c,a)}}}function z(p,s,t){let n;return w(p,R,l=>t(0,n=l)),[n]}class P extends f{constructor(s){super(),$(this,s,z,j,d,{})}}export{P as default};
