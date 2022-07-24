import { c as create_ssr_component, v as validate_component, i as subscribe, j as escape } from "../../../../_app/immutable/chunks/index-f648a96f.js";
import { R as Result, F as Formly } from "../../../../_app/immutable/chunks/Result-e5427df9.js";
import "clsx";
import { A as frontmatter } from "../../../../_app/immutable/chunks/scroll-51b8d1e2.js";
import { C as CodeFence } from "../../../../_app/immutable/chunks/CodeFence-0f5f7525.js";
const File = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "file",
      name: "name-file",
      attributes: {
        id: "id-field",
        classes: ["form-control"],
        label: "Image"
      },
      extra: {
        multiple: true,
        showPreview: true
      },
      rules: ["file"],
      file: {
        extensions: ["jpg", "gif", "png"],
        maxSize: 5
      }
    }
  ];
  return `${validate_component(Result, "Result").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Formly, "Formly").$$render($$result, { fields, form_name: "field_file" }, {}, {})}`;
    }
  })}`;
});
const U5B_10u5Dfile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $frontmatter, $$unsubscribe_frontmatter;
  $$unsubscribe_frontmatter = subscribe(frontmatter, (value) => $frontmatter = value);
  $$unsubscribe_frontmatter();
  return `<h1>${escape($frontmatter.title)}</h1>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    title: "Example",
    lang: "typescript",
    ext: "ts",
    linesCount: 23,
    highlightLines: [[7, 7]],
    rawCode: "const fields: IField[] = [\n	{\n		type: 'file', // required\n		name: 'name-file', // require\n		attributes: {\n			id: 'id-field', // optional\n			classes: ['form-control'], // optional\n			label: 'Image' // optional\n		},\n		extra: {\n			multiple: true, // optional\n			showPreview: true // optional\n		},\n		rules: ['file'], // optional\n		file: {\n			// optional\n			// need to add this attribute object if you need a file rule\n			extensions: ['jpg', 'gif', 'png'],\n			maxSize: 5\n		}\n	}\n];\n",
    showCopyCode: true,
    code: '<pre><code><span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> fields</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">IField</span><span style="color: #A6ACCD">[] </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> [</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">type</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// required</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">name</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">name-file</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// require</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">attributes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">id-field</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">classes</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">form-control</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">label</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">Image</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">extra</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">multiple</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">showPreview</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">},</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">rules</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">file</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #F07178">file</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #89DDFF">			</span><span style="color: #676E95; font-style: italic">// optional</span></span>\n<span class="line"><span style="color: #89DDFF">			</span><span style="color: #676E95; font-style: italic">// need to add this attribute object if you need a file rule</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">extensions</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">jpg</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">gif</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">png</span><span style="color: #89DDFF">&#39;</span><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">,</span></span>\n<span class="line"><span style="color: #A6ACCD">			</span><span style="color: #F07178">maxSize</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">5</span></span>\n<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">}</span></span>\n<span class="line"><span style="color: #A6ACCD">]</span><span style="color: #89DDFF">;</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}${validate_component(File, "Field").$$render($$result, {}, {}, {})}`;
});
export {
  U5B_10u5Dfile as default
};
