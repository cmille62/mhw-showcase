export type FieldInputType =
  | "text"
  | "textarea"
  | "boolean"
  | "enum"
  | "number";

export const FIELD_INPUT: Record<string, FieldInputType> = {
  Text: "text",
  Textarea: "textarea",
  Boolean: "boolean",
  Enum: "enum",
  Number: "number",
};

export interface FieldType {
  title: string;
  key: string;
  path: string;

  type?: FieldInputType;
  values?: string[];
}
