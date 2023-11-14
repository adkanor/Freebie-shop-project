// stringifyParams.test.js
import { stringifyParams } from "./stringifyParams";

test("stringifyParams returns correct string for non-empty params", () => {
    const params = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    };

    const result = stringifyParams(params);

    expect(result).toBe("key1=value1&key2=value2&key3=value3");
});

test("stringifyParams returns empty string for empty params", () => {
    const params = {};

    const result = stringifyParams(params);

    expect(result).toBe("");
});

test("stringifyParams ignores params with empty values", () => {
    const params = {
        key1: "value1",
        key2: "",
        key3: "value3",
    };

    const result = stringifyParams(params);

    expect(result).toBe("key1=value1&key3=value3");
});
