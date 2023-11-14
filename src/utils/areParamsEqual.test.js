// areParamsEqual.test.js
import { areParamsEqual } from "./areParamsEqual";

test("areParamsEqual returns true for equal params", () => {
    const params1 = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    };

    const params2 = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    };

    const result = areParamsEqual(params1, params2);

    expect(result).toBe(true);
});

test("areParamsEqual returns false for different params", () => {
    const params1 = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    };

    const params2 = {
        key1: "value1",
        key2: "value2",
        key3: "differentValue",
    };

    const result = areParamsEqual(params1, params2);

    expect(result).toBe(false);
});

test("areParamsEqual returns false for different number of params", () => {
    const params1 = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    };

    const params2 = {
        key1: "value1",
        key2: "value2",
    };

    const result = areParamsEqual(params1, params2);

    expect(result).toBe(false);
});

test("areParamsEqual returns true for empty params", () => {
    const params1 = {};
    const params2 = {};

    const result = areParamsEqual(params1, params2);

    expect(result).toBe(true);
});
