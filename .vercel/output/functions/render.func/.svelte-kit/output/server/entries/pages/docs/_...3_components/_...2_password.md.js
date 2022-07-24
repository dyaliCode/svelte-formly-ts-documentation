import { c as create_ssr_component, v as validate_component, i as subscribe, j as escape } from "../../../../_app/immutable/chunks/index-f648a96f.js";
import { R as Result, F as Formly } from "../../../../_app/immutable/chunks/Result-e5427df9.js";
import "clsx";
import { A as frontmatter } from "../../../../_app/immutable/chunks/scroll-51b8d1e2.js";
import { C as CodeFence } from "../../../../_app/immutable/chunks/CodeFence-0f5f7525.js";
import { A as Admonition } from "../../../../_app/immutable/chunks/Admonition-85d34410.js";
const Password = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "input",
      name: "password",
      value: "",
      attributes: {
        type: "password",
        id: "password",
        classes: ["form-control"],
        label: "Field password",
        placeholder: "Placeholder field password",
        disabled: false,
        readonly: false
      }
    }
  ];
  return `${validate_component(Result, "Result").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Formly, "Formly").$$render($$result, { fields, form_name: "field_password" }, {}, {})}`;
    }
  })}`;
});
const U5B_2u5Dpassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $frontmatter, $$unsubscribe_frontmatter;
  $$unsubscribe_frontmatter = subscribe(frontmatter, (value) => $frontmatter = value);
  $$unsubscribe_frontmatter();
  return `<h1>${escape($frontmatter.title)}</h1>
${validate_component(Admonition, "Admonition").$$render($$result, { type: "note" }, {}, {
    default: () => {
      return `<p>the property attributes.type by default is a text and you can change it to password | email | number | range | tel</p>`;
    }
  })}
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    title: "Example",
    lang: "typescript",
    ext: "ts",
    linesCount: 17,
    highlightLines: [[7, 7]],
    rawCode: "const fields: IField[] = [\n	{\n		type: 'input', // required\n		name: 'password', // required\n		value: '', // optional\n		attributes: {\n			type: 'password', // default = text, or password, email, number, tel, optional\n			id: 'password', // optional\n			classes: ['form-control'], // optional\n			label: 'Field password', // optional\n			placeholder: 'Placeholder field password', // optional\n			disabled: false, // optional\n			readonly: false // optional\n		}\n	}\n];\n",
    showCopyCode: true,
    code: '<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">input</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">value</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// default = text, or password, email, number, tel, optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Field password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">placeholder</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Placeholder field password</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">disabled</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">readonly</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}${validate_component(Password, "Field").$$render($$result, {}, {}, {})}`;
});
export {
  U5B_2u5Dpassword as default
};
