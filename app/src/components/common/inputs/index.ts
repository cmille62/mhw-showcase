import { DivProps } from "../../../typings";

export interface InputProps<T> extends BaseProps {
  value?: T;
  onChange?: (value: T) => void;
}

export interface BaseProps {
  id?: string;
  key?: string;
  disabled?: boolean;
  required?: boolean;
  title?: string;
  subtitle?: string;

  props?: DivProps;
}

export interface BaseInputProps {
  placeholder?: string;
}

export interface EnumInputProps<T> extends InputProps<T> {
  options: { value: string; title: string }[];
}

export interface StringInputProps<T> extends InputProps<T>, BaseInputProps {
  type?: string;
}

export const formatOptions = (options: string[] | number[]) => {
  const result: { value: string; title: string }[] = [];

  options.forEach((option: string | number) =>
    result.push({ value: option.toString(), title: option.toString() })
  );

  return result;
};

export { CheckboxInput as Checkbox } from "./inline/checkbox.input";
export { DropdownInput as Dropdown } from "./inline/dropdown.input";
export { SelectField } from "./select.field";
export { AsyncSelectField } from "./async.select.field";
export { AsyncMultiSelectField } from "./async.multiselect.field";
export { FileUploadButton } from "./fileButton";
export { Input } from "./input.field";
export { TextareaField } from "./textarea.field";
export { ListField } from "./list.field";
