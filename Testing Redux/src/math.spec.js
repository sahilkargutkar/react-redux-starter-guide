import { isEven } from "./math";

describe("isEven", () => {
  it("isEven", () => {
    const result = isEven(2);
    expect(result).toEqual(true);
  });
  it("first test", () => {
    const result = isEven(1);
    expect(result).toEqual(false);
  });
});
