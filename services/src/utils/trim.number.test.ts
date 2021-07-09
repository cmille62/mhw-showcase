import { trimNumber, trimAnyNumber } from "./trim.number";

describe("Helper Function: Trim non-numeric characters from number string", () => {
  it("Should handle generic non-numeric trim.", () => {
    const input = "$1,000.54";
    const expected = "1000.54";

    const result = trimNumber(input);
    expect(result).toEqual(expected);
  });

  it("Should handle removing negative sign.", () => {
    const input = "-1,000.54";
    const expected = "1000.54";

    const result = trimNumber(input);
    expect(result).toEqual(expected);
  });
});

describe("Helper Function: Trim non-numeric characters from positive or negative number string", () => {
  it("Should handle generic non-numeric trim.", () => {
    const input = "$1,000.54";
    const expected = "1000.54";

    const result = trimAnyNumber(input);
    expect(result).toEqual(expected);
  });

  it("Should handle negative number.", () => {
    const input = "-1,000.54";
    const expected = "-1000.54";

    const result = trimAnyNumber(input);
    expect(result).toEqual(expected);
  });
});
