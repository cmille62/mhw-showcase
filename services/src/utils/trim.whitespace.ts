import { trim } from "lodash";

export function trimWhitespace(obj: Record<string, any>): Record<string, any> {
  Object.entries(obj).forEach(([key, value]) => {
    switch (typeof value) {
      case "string":
        obj[key] = trim(value);
        break;
      case "object":
        obj[key] = trimWhitespace(value);
        break;
      default:
        break;
    }
  });
  return obj;
}
