import { Document } from "mongoose";

export interface RawDocsType {
  category: string[];
  title: string;
  description: string;
  query?: string;
  examples?: string[];
}

export type DocsType = Document & RawDocsType;
