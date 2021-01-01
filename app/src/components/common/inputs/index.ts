export interface InputProps<T> {
    value: T;
    onChange?:(value: T) => void;
    disabled?: boolean;
    title?: string;
    subtitle?: string;
}

export interface EnumInputProps<T> extends InputProps<T>{
    options: { value: string, title: string }[];
}

export { CheckboxInput as Checkbox } from "./checkbox.input";
export { DropdownInput as Dropdown } from "./dropdown.input";
