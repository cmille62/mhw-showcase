import axios from "axios";
import { toaster } from "evergreen-ui";
import { FileResponseType } from "../typings/file";
import { REACT_APP_API_ROOT_URL } from "../utils";

  export const uploadCSV = async (
    files: File[],
    onUploadProgress: (event: any) => void,
    max?: number
  ) => {
    const url = `${REACT_APP_API_ROOT_URL}/import/csv`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    };
    const formData = new FormData();
    files.forEach((fileInfo: File) => {
      console.log(fileInfo);
      if (!max || fileInfo.size <= max) {
        formData.append(fileInfo.name, fileInfo, fileInfo.name);
      } else {
        toaster.danger("File size too large");
      }
    });
    try {
        const response = await axios.post(url, formData, config);
        return response.data as FileResponseType[];
     
    } catch (error) {
      return error;
    }
  };