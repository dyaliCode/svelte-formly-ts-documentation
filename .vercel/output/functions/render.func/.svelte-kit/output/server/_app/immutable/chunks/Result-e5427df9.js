import { c as create_ssr_component, f as add_attribute, u as is_void, j as escape, k as each, v as validate_component, g as createEventDispatcher, w as null_to_empty, m as missing_component } from "./index-f648a96f.js";
import { z as writable } from "./scroll-51b8d1e2.js";
function createForms() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    save: (newForm) => update((forms) => {
      const form = forms.find((form2) => form2.form_name === newForm.form_name);
      if (!form) {
        forms = [...forms, newForm];
      } else {
        forms = forms.map((form2) => form2.form_name === newForm.form_name ? newForm : form2);
      }
      return forms;
    }),
    reset: () => set([]),
    resetValues: (form_name) => update((forms) => {
      forms.map((form) => {
        if (form.form_name === form_name) {
          form.fields.map((field) => {
            field.value = null;
            form.values[field.name] = null;
          });
        }
        return form;
      });
      return forms;
    }),
    updateFieldValue: (form_name, field_name, field_value) => update((forms) => {
      const _forms = forms.map((form) => {
        if (form.form_name === form_name) {
          form.fields.map((field) => {
            if (field.name === field_name) {
              field.value = field_value;
              form.values[field_name] = field_value;
              form.values["touched"] = field_name;
            }
            return field;
          });
        }
        return form;
      });
      return _forms;
    })
  };
}
const storeForms = createForms();
function isRequired(field) {
  if (field.rules) {
    if (field.rules.length > 0) {
      return true;
    }
  }
  return false;
}
function isFieldDuplicated(fields) {
  let seen = {};
  return fields.some(function(currentObject) {
    if (seen.hasOwnProperty(currentObject.name) || seen.hasOwnProperty(currentObject.attributes.id)) {
      return true;
    }
    return seen[currentObject.name] = false, seen[currentObject.attributes.id] = false;
  });
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { prefix } = $$props;
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  return `${((tag) => {
    var _a;
    return tag ? `<${prefix.tag ?? "div"}${add_attribute("class", (_a = prefix.classes) == null ? void 0 : _a.join(" "), 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(prefix.tag ?? "div")}`;
});
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  let { messages = {} } = $$props;
  const rules = [
    {
      rule: "required",
      message: "This field is required"
    },
    {
      rule: "min",
      message: "This field must be more characters long"
    },
    {
      rule: "max",
      message: "This field must be less characters long"
    },
    {
      rule: "between",
      message: "This field must be between values defined"
    },
    {
      rule: "equal",
      message: "This field must be equal to value defined"
    },
    {
      rule: "email",
      message: "This email format is not valid"
    },
    {
      rule: "extensions",
      message: "Must to allowed file types"
    },
    {
      rule: "maxSize",
      message: "This file has size more than max size"
    },
    { rule: "custom_rule", message: "Error" }
  ];
  const displayError = (rule) => {
    let message = "";
    if (messages[rule]) {
      message += messages[rule] ?? getMessageByRule(rule);
    } else {
      message += getMessageByRule(rule);
    }
    return message;
  };
  const getMessageByRule = (rule) => {
    const data = rules.find((r) => r.rule === rule);
    return data ? data.message : rules.find((r) => r.rule === "custom_rule").message;
  };
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  return `${error ? `<div class="${"invalid-feedback error"}">${escape(displayError(error))}</div>` : ``}`;
});
const Dirty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${field.validation && field.validation.errors.length ? `${each(field.validation.errors, (error) => {
    return `${validate_component(Message, "Message").$$render($$result, {
      error,
      messages: field.messages ? field.messages : []
    }, {}, {})}`;
  })}` : ``}`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { field } = $$props;
  createEventDispatcher();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<input${add_attribute("value", field.value ?? null, 0)}${add_attribute("type", field.attributes.type, 0)}${add_attribute("id", field.attributes.id, 0)}${add_attribute("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)}${add_attribute("placeholder", field.attributes.placeholder, 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${field.attributes.readonly ? "readonly" : ""}${add_attribute("min", field.attributes.min, 0)}${add_attribute("max", field.attributes.max, 0)}${add_attribute("step", field.attributes.step, 0)}${add_attribute("autocomplete", field.attributes.autocomplete, 0)}>`;
});
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { field } = $$props;
  createEventDispatcher();
  const is_multiple = field.extra.multiple ?? false;
  const checkSelected = (option_value, field_value) => {
    if (is_multiple) {
      if (field_value && field_value.length) {
        const res = field_value.indexOf(option_value) != -1;
        return res;
      } else if (field.value && field.value.length) {
        const res = field.value.indexOf(option_value) != -1;
        return res;
      }
      return false;
    }
    return option_value === field_value;
  };
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<select${add_attribute("name", field.name, 0)}${add_attribute("id", field.attributes.id, 0)}${add_attribute("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${(field.extra && field.extra.multiple ? field.extra.multiple : false) ? "multiple" : ""}>${field.extra ? `${field.extra.options ? `${each(field.extra.options, (option) => {
    return `<option${add_attribute("value", option.value, 0)} ${checkSelected(option.value, field.value) ? "selected" : ""}>${escape(option.title)}
				</option>`;
  })}` : ``}` : ``}</select>`;
});
const File = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { field } = $$props;
  let inputFile;
  createEventDispatcher();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<input${add_attribute("type", field.type, 0)}${add_attribute("name", field.name, 0)}${add_attribute("id", field.attributes.id, 0)}${add_attribute("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)} ${""}${add_attribute("this", inputFile, 0)}>

${field.file ? `<div class="${"file-rules"}"><ul>${each(Object.entries(field.file), ([rule, ruleValue]) => {
    return `<li><strong>${escape(rule)}</strong>: ${escape(ruleValue)}</li>`;
  })}</ul></div>` : ``}

${``}`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { field } = $$props;
  createEventDispatcher();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<textarea${add_attribute("id", field.attributes.id, 0)}${add_attribute("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)}${add_attribute("placeholder", field.attributes.placeholder, 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${field.attributes.readonly ? "readonly" : ""}${add_attribute("rows", field.attributes.rows, 0)}${add_attribute("cols", field.attributes.cols, 0)}>${escape(field.value ?? null, true)}</textarea>`;
});
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  const dispatch = createEventDispatcher();
  let values = [];
  if (field.extra.items.length > 0) {
    field.extra.items.map((item) => {
      if (item.checked) {
        values = [...values, item.value];
        field.value = field.value ? [...field.value, item.value] : values;
      }
    });
    dispatch("changeValue", { name: field.name, value: values });
  }
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${each(field.extra.items, (item) => {
    var _a;
    return `<input${add_attribute("type", field.type, 0)}${add_attribute("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)}${add_attribute("value", item.value, 0)}${add_attribute("name", item.name, 0)} ${item.checked ?? false ? "checked" : ""} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""}>
	<span>${escape(item.title)}</span>`;
  })}`;
});
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  createEventDispatcher();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${each(field.extra.items, (item, i) => {
    var _a;
    return `<input${add_attribute("type", field.type, 0)}${add_attribute("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)}${add_attribute("id", item.id, 0)}${add_attribute("name", field.name, 0)}${add_attribute("value", item.value, 0)} ${item.value === field.value ? "checked" : ""}>
	<span>${escape(item.title)}</span>`;
  })}`;
});
const AutoComplete_svelte_svelte_type_style_lang = "";
const css = {
  code: ".autocomplete-wrapper.svelte-1m9l8b1.svelte-1m9l8b1{position:relative;width:100%}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items.svelte-1m9l8b1{margin-bottom:10px;width:100%;display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;gap:10px}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .item.svelte-1m9l8b1{font-size:0.75rem;padding:0.5rem;background-color:#ff3e00;color:white;border-radius:5px}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .item .deselect.svelte-1m9l8b1{border-radius:50%;width:15px;height:15px;padding:2px 7px 3px 7px;font-size:0.6rem;background-color:#333333;border:solid 1px rgba(255, 255, 255, 0.2);color:white}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .item .deselect.svelte-1m9l8b1:hover{box-shadow:0px 0px 4px 1px rgba(255, 255, 255, 0.8)}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .deselect.svelte-1m9l8b1{cursor:pointer}.autocomplete-wrapper.svelte-1m9l8b1 .list-items.svelte-1m9l8b1{box-shadow:0 2px 3px 0 rgba(249, 251, 253, 0.24);margin-bottom:20px}.autocomplete-wrapper.svelte-1m9l8b1 .list-items ul.svelte-1m9l8b1,.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.svelte-1m9l8b1{list-style:none;padding:0;margin:0;color:black;background-color:rgb(201, 201, 201)}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.svelte-1m9l8b1{border-bottom:1px dashed #999999;padding:0.75rem;cursor:pointer}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.done.svelte-1m9l8b1{background-color:#1f2d38 !important;border-bottom-color:transparent;color:white;text-align:center}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.done.svelte-1m9l8b1:hover{border-bottom-color:transparent}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.svelte-1m9l8b1:hover{background-color:rgba(255, 64, 0, 0.6117647059);border-bottom:1px dashed #ff3e00;color:white}",
  map: null
};
const AutoComplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { field } = $$props;
  createEventDispatcher();
  let value = null;
  let itemsFiltered = [];
  let selectedItems = [];
  let showList = false;
  if (field.extra) {
    if (field.extra.loadItemes) {
      field.extra.loadItemes;
    }
    if (field.extra.filter_length) {
      field.extra.filter_length;
    }
  }
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  $$result.css.add(css);
  return `<div class="${"autocomplete-wrapper svelte-1m9l8b1"}"><div class="${"selected-items svelte-1m9l8b1"}">${each(selectedItems, (item) => {
    return `<div class="${"item svelte-1m9l8b1"}"><span>${escape(item.title)}</span>
				<span class="${"deselect svelte-1m9l8b1"}">x</span>
			</div>`;
  })}</div>

	<input type="${"text"}"${add_attribute("id", field.attributes.id, 0)} class="${escape(null_to_empty((_a = field.attributes.classes) == null ? void 0 : _a.join(" ")), true) + " svelte-1m9l8b1"}"${add_attribute("autocorrect", field.attributes.autocorrect, 0)}${add_attribute("autocomplete", field.attributes.autocomplete, 0)}${add_attribute("placeholder", field.attributes.placeholder, 0)}${add_attribute("value", value, 0)}>

	${itemsFiltered.length && showList ? `<div class="${"list-items svelte-1m9l8b1"}"><ul class="${"svelte-1m9l8b1"}">${each(itemsFiltered, (item) => {
    return `<li class="${"svelte-1m9l8b1"}">${escape(item.title)}</li>`;
  })}
				<li class="${"done svelte-1m9l8b1"}">Close
				</li></ul></div>` : ``}
</div>`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${field.attributes ? `${field.attributes.label ? `<label${add_attribute("for", field.attributes.id, 0)} class="${"label"}">${escape(field.attributes.label)}</label>` : ``}` : ``}`;
});
const Formly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d;
  const ListFieldType = [
    { type: "input", component: Input },
    { type: "select", component: Select },
    { type: "file", component: File },
    { type: "textarea", component: Textarea },
    { type: "checkbox", component: Checkbox },
    { type: "radio", component: Radio },
    {
      type: "autocomplete",
      component: AutoComplete
    }
  ];
  const getFieldByType = ({ type }) => {
    var _a2;
    return (_a2 = ListFieldType.find((field) => field.type === type)) == null ? void 0 : _a2.component;
  };
  let { fields = [] } = $$props;
  let { btnSubmit = { text: "Submit" } } = $$props;
  let { btnReset = { text: "Reset" } } = $$props;
  let { form_name = "" } = $$props;
  let { realtime = false } = $$props;
  let _formEl;
  createEventDispatcher();
  let values = {};
  let current_form = { form_name, fields, values, valid: true };
  const is_duplicated = isFieldDuplicated(fields);
  storeForms.save(current_form);
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0)
    $$bindings.fields(fields);
  if ($$props.btnSubmit === void 0 && $$bindings.btnSubmit && btnSubmit !== void 0)
    $$bindings.btnSubmit(btnSubmit);
  if ($$props.btnReset === void 0 && $$bindings.btnReset && btnReset !== void 0)
    $$bindings.btnReset(btnReset);
  if ($$props.form_name === void 0 && $$bindings.form_name && form_name !== void 0)
    $$bindings.form_name(form_name);
  if ($$props.realtime === void 0 && $$bindings.realtime && realtime !== void 0)
    $$bindings.realtime(realtime);
  return `${current_form ? `${is_duplicated ? `${validate_component(Error, "Error").$$render($$result, {}, {}, {
    default: () => {
      return `<p><code><b>Error! Detect duplicate fields(name or id attributes), make sure you put unique name
						and id for each field.</b></code></p>`;
    }
  })}` : `<form${add_attribute("this", _formEl, 0)}>${each(current_form.fields, (field) => {
    var _a2;
    return `${((_a2 = field.prefix) == null ? void 0 : _a2.tag) ? `${validate_component(Tag, "Tag").$$render($$result, { prefix: field.prefix }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { field }, {}, {})}
						${validate_component(getFieldByType(field) || missing_component, "svelte:component").$$render($$result, { field }, {}, {})}
						${validate_component(Dirty, "Dirty").$$render($$result, { field }, {}, {})}
					`;
      }
    })}` : `${validate_component(Label, "Label").$$render($$result, { field }, {}, {})}
					${validate_component(getFieldByType(field) || missing_component, "svelte:component").$$render($$result, { field }, {}, {})}
					${validate_component(Dirty, "Dirty").$$render($$result, { field }, {}, {})}`}`;
  })}
			<button type="${"submit"}"${add_attribute("class", btnSubmit.classes && ((_a = btnSubmit.classes) == null ? void 0 : _a.length) ? (_b = btnSubmit.classes) == null ? void 0 : _b.join(" ") : null, 0)}>${escape(btnSubmit.text)}</button>
			<button type="${"reset"}"${add_attribute("class", btnReset.classes && ((_c = btnReset.classes) == null ? void 0 : _c.length) ? (_d = btnReset.classes) == null ? void 0 : _d.join(" ") : null, 0)}>${escape(btnReset.text)}</button></form>`}` : ``}`;
});
const Result = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"result admonition my-8 border-2 border-l-8 p-4 rounded-md mx-auto shadow-xl border-blue-400 bg-blue-300/10"}"><div class="${"flex h-full items-center font-bold text-blue-400"}"><span class="${"flex items-center"}">Result</span></div>
	${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Formly as F,
  Result as R,
  storeForms as s
};
