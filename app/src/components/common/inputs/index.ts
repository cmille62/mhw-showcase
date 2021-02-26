export interface InputProps<T> extends BaseProps {
  value: T;
  onChange?: (value: T) => void;
}

export interface BaseProps {
  disabled?: boolean;
  title?: string;
  subtitle?: string;
}

export interface EnumInputProps<T> extends InputProps<T> {
  options: { value: string; title: string }[];
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
export { FileUploadButton } from "./fileButton";
