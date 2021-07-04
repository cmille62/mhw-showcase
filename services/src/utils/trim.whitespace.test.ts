import { cloneDeep } from "lodash";
import { trimWhitespace } from "./trim.whitespace";

describe("Helper Function: Recursive Trim Whitespace.", () => {
  it("Should handle an empty object.", () => {
    const input = {};
    const expected = {};

    const result = trimWhitespace(input);
    expect(result).toEqual(expected);
  });

  it("Should handle a object that does not need trimmed.", () => {
    const input = { name: "Jane" };

    const result = trimWhitespace(cloneDeep(input));
    expect(result).toEqual(input);
  });

  it("Should handle a nested object that does not need trimmed.", () => {
    const input = { name: { first: "Jane" } };

    const result = trimWhitespace(cloneDeep(input));
    expect(result).toEqual(input);
  });

  it("Should handle trimming an object.", () => {
    const input = { name: " Jane " };
    const expected = { name: "Jane" };

    const result = trimWhitespace(input);
    expect(result).toEqual(expected);
  });

  it("Should handle trimming an nested object.", () => {
    const input = { name: { first: " Jane " } };
    const expected = { name: { first: "Jane" } };

    const result = trimWhitespace(input);
    expect(result).toEqual(expected);
  });

  it("Should handle types that cannot be trimmed: 'number' type.", () => {
    const input = { age: 12 };

    const result = trimWhitespace(cloneDeep(input));
    expect(result).toEqual(input);
  });

  it("Should handle types that cannot be trimmed: 'boolean' type.", () => {
    const input = { alive: true };

    const result = trimWhitespace(cloneDeep(input));
    expect(result).toEqual(input);
  });
});
