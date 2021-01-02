import { DropdownProps } from "./inputs/dropdown";
import Box from "ui-box";

export interface InputOption<T> {
  label: string;
  value: T | null;
  [key: string]: any;
}

export interface InputProps<T> {
  onChange: (value: T) => void;
  [key: string]: any;
}

export type DivProps = React.ComponentPropsWithoutRef<typeof Box>;

export interface FinderSearchableSchema {
  /**
   * The Absolute path of the searchable term in the schema
   */
  path: string;

  /**
   * The Input that will be utilized
   */
  input: string;

  props: Partial<DropdownProps>;
}

export interface FinderSchema {
  /**
   * The Type of Data to be located within the finder
   */
  type: string;

  /**
   * The Searchable Elements within the schema
   */
  search: FinderSearchableSchema[];

  /**
   * The Link of the API to call to fetch the returned results
   */
  api: string;
}
