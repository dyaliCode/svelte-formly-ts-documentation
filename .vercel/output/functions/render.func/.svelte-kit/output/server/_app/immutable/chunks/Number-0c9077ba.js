import { c as create_ssr_component, v as validate_component } from "./index-f648a96f.js";
import { R as Result, F as Formly } from "./Result-e5427df9.js";
const Number = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "input",
      name: "number",
      value: "",
      attributes: {
        type: "number",
        id: "number",
        classes: ["form-control"],
        label: "Field number",
        placeholder: "Placeholder field number",
        disabled: false,
        readonly: false
      }
    }
  ];
  return `${validate_component(Result, "Result").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Formly, "Formly").$$render($$result, { fields, form_name: "field_number" }, {}, {})}`;
    }
  })}`;
});
export {
  Number as N
};
