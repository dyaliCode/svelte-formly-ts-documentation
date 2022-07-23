import{S as K,i as N,s as O,l as q,r as f,a as B,w as g,m as w,n as x,u as d,h as p,c as R,x as L,p as k,b as t,M as P,y as j,v as z,f as I,t as V,B as H,_ as Q}from"../../../chunks/index-29635d82.js";import{f as T}from"../../../chunks/scroll-967765ef.js";import{C as G}from"../../../chunks/CodeFence-8f67fe7a.js";import{L as J}from"../../../chunks/Link-1d5bbe41.js";import"../../../chunks/singletons-eb14b229.js";import"../../../chunks/contexts-cdaa50b4.js";function W(e){let a;return{c(){a=f("#")},l(l){a=d(l,"#")},m(l,o){t(l,a,o)},d(l){l&&p(a)}}}function X(e){let a;return{c(){a=f("#")},l(l){a=d(l,"#")},m(l,o){t(l,a,o)},d(l){l&&p(a)}}}function Y(e){let a,l=e[0].title+"",o,i,A,$=e[0].description+"",_,b,r,D,S,h,y,c,F,M,v,C,u;return D=new J({props:{class:"header-anchor",href:"#core-rules","aria-hidden":"true",$$slots:{default:[W]},$$scope:{ctx:e}}}),y=new G({props:{title:"List",lang:"javascript",ext:"js",linesCount:14,rawCode:`const fields = [{
  ...,
  rules: [
    'required',
    'min:number',
    'max:number',
    'between:number:number',
    'equal:number',
    'email',
    'url'
    'file'
  ]
}];
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #89DDFF">...,</span></span>
<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">min:number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">max:number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">between:number:number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">equal:number</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">email</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">url</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">  ]</span></span>
<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),F=new J({props:{class:"header-anchor",href:"#custom-rules","aria-hidden":"true",$$slots:{default:[X]},$$scope:{ctx:e}}}),C=new G({props:{title:"example",lang:"javascript",ext:"js",linesCount:43,highlightLines:[[1,1],[20,21],[24,25],[30,37],[39,42]],rawCode:`import { Formly, type IField, getValues } from 'svelte-formly';

const form_name = 'custom_validation';
const fields: IField[] = [
	{
		type: 'input',
		name: 'firstname',
		attributes: {
			id: 'firstname'
		}
	},
	{
		type: 'input',
		name: 'lastname',
		attributes: {
			id: 'lastname'
		},
		rules: [
			'required',
			{ name: 'notEqual', fnc: notEqual },
			{ name: 'customRule2', fnc: customRule2 }
		],
		messages: {
			notEqual: 'Last name not equal to First name',
			customRule2: 'foo bar'
		}
	}
];

// Custom rule to force field
async function notEqual(): Promise<boolean> {
	const values: any = await getValues(form_name);
	if (values.firstname === values.lastname) {
		return false;
	}
	return true;
}

async function customRule2(): Promise<boolean> {
	// ...others conditions.
	return true;
}
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Formly</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">type</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">IField</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">getValues</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">svelte-formly</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> form_name </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">custom_validation</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">firstname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">firstname</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">lastname</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">lastname</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">required</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">{</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">notEqual</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">fnc</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> notEqual </span><span style="color: #89DDFF">},</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #89DDFF">{</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">customRule2</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">fnc</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> customRule2 </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		]</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">messages</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">notEqual</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Last name not equal to First name</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">customRule2</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">foo bar</span><span style="color: #89DDFF">&#39;</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #676E95; font-style: italic">// Custom rule to force field</span></span>
<span class="line"><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">function</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">notEqual</span><span style="color: #89DDFF">():</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">Promise</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">boolean</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">any</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">getValues</span><span style="color: #F07178">(</span><span style="color: #A6ACCD">form_name</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">firstname</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">values</span><span style="color: #89DDFF">.</span><span style="color: #A6ACCD">lastname</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">function</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">customRule2</span><span style="color: #89DDFF">():</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">Promise</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">boolean</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #89DDFF">	</span><span style="color: #676E95; font-style: italic">// ...others conditions.</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF; font-style: italic">return</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre>`}}),{c(){a=q("h1"),o=f(l),i=B(),A=q("p"),_=f($),b=B(),r=q("h2"),g(D.$$.fragment),S=f(" Core rules"),h=B(),g(y.$$.fragment),c=q("h2"),g(F.$$.fragment),M=f(" Custom rules"),v=B(),g(C.$$.fragment),this.h()},l(s){a=w(s,"H1",{});var n=x(a);o=d(n,l),n.forEach(p),i=R(s),A=w(s,"P",{});var E=x(A);_=d(E,$),E.forEach(p),b=R(s),r=w(s,"H2",{id:!0,tabindex:!0});var m=x(r);L(D.$$.fragment,m),S=d(m," Core rules"),m.forEach(p),h=R(s),L(y.$$.fragment,s),c=w(s,"H2",{id:!0,tabindex:!0});var U=x(c);L(F.$$.fragment,U),M=d(U," Custom rules"),U.forEach(p),v=R(s),L(C.$$.fragment,s),this.h()},h(){k(r,"id","core-rules"),k(r,"tabindex","-1"),k(c,"id","custom-rules"),k(c,"tabindex","-1")},m(s,n){t(s,a,n),P(a,o),t(s,i,n),t(s,A,n),P(A,_),t(s,b,n),t(s,r,n),j(D,r,null),P(r,S),t(s,h,n),j(y,s,n),t(s,c,n),j(F,c,null),P(c,M),t(s,v,n),j(C,s,n),u=!0},p(s,[n]){(!u||n&1)&&l!==(l=s[0].title+"")&&z(o,l),(!u||n&1)&&$!==($=s[0].description+"")&&z(_,$);const E={};n&2&&(E.$$scope={dirty:n,ctx:s}),D.$set(E);const m={};n&2&&(m.$$scope={dirty:n,ctx:s}),F.$set(m)},i(s){u||(I(D.$$.fragment,s),I(y.$$.fragment,s),I(F.$$.fragment,s),I(C.$$.fragment,s),u=!0)},o(s){V(D.$$.fragment,s),V(y.$$.fragment,s),V(F.$$.fragment,s),V(C.$$.fragment,s),u=!1},d(s){s&&p(a),s&&p(i),s&&p(A),s&&p(b),s&&p(r),H(D),s&&p(h),H(y,s),s&&p(c),H(F),s&&p(v),H(C,s)}}}function Z(e,a,l){let o;return Q(e,T,i=>l(0,o=i)),[o]}class ts extends K{constructor(a){super(),N(this,a,Z,Y,O,{})}}export{ts as default};
