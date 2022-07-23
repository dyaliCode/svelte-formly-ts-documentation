import { c as create_ssr_component, a as compute_rest_props, b as spread, f as escape_object } from "./index-372256f6.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `
<a${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</a>`;
});
export {
  Link as L
};
