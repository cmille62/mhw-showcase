export interface FileResponseType {
  name: string;
  id: string;
}
  
export interface ExtendedFile {
  file: File;
  id: string;
  name: string;
  size?: number;
}