import { c as create_ssr_component, v as validate_component } from "./index-f648a96f.js";
import { R as Result, F as Formly } from "./Result-e5427df9.js";
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "input",
      name: "name-field-text",
      value: "",
      attributes: {
        type: "text",
        id: "id-field-text",
        classes: ["form-control"],
        label: "Field text",
        placeholder: "Placeholder field text",
        disabled: false,
        readonly: false
      }
    }
  ];
  return `${validate_component(Result, "Result").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Formly, "Formly").$$render($$result, { fields, form_name: "field_text" }, {}, {})}`;
    }
  })}`;
});
export {
  Text as T
};
