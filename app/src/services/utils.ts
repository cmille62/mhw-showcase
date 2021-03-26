import { isEmpty } from "lodash";

/**
 * Encodes Query Parameters for requests that expect their parameters to be passed as such.
 * @param inputs Inputs to encode
 */
export function encodeQueryParameters(inputs?: { [key: string]: any }) {
    if (!inputs || isEmpty(inputs)) {
      return "";
    }
  
    let result = "?";
  
    Object.keys(inputs).forEach((key, index) => {
      result += `${index !== 0 ? "&" : ""}${key}=${encodeURIComponent(
        inputs[key]
      )}`;
    });
  
    return result;
  }