import { x as get_store_value } from "./index-372256f6.js";
import { s as storeForms } from "./Result-1272ba48.js";
async function getValues(form_name) {
  const forms = await get_store_value(storeForms);
  const form = forms.find((form2) => form2.form_name === form_name);
  return form ? form == null ? void 0 : form.values : {};
}
export {
  getValues as g
};
