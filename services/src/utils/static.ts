export const Static = {
  SETTINGS_UPDATED_MESSAGE: "Settings updated successfully",
};

export const invalidParameters = (parameter: string): string => {
  return `Request is missing parameter: ${parameter}`;
};

export const REST = {
  OK: 200,
  NEW: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
};

export default Static;
