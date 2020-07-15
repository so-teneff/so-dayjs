const today = require("./today");
const dayjs = require("dayjs");

describe("today", () => {
  let result;
  beforeAll(() => {
    result = today();
  });

  it("should be called with a date", () => {
    expect(dayjs.utc).toHaveBeenCalledWith(expect.any(Date));
  });

  it("should return consistent date", () => {
    expect(result).toMatchInlineSnapshot(`"1995-12-17T00:00:00.000Z"`);
  });
});
