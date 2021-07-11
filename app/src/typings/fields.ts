export type FieldInputType =
  | "text"
  | "textarea"
  | "boolean"
  | "enum"
  | "number"
  | "lookup";

export const FIELD_INPUT: Record<string, FieldInputType> = {
  Text: "text",
  Textarea: "textarea",
  Boolean: "boolean",
  Enum: "enum",
  Number: "number",
  Lookup: "lookup",
};

export interface FieldType {
  title: string;
  key: string;
  path: string;

  required?: boolean;
  type?: FieldInputType;
  values?: string[];
}
