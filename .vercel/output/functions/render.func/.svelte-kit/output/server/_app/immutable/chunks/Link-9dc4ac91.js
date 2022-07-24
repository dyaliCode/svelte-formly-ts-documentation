import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object } from "./index-f648a96f.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `
<a${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</a>`;
});
export {
  Link as L
};
