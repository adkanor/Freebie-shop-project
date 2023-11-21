import { removeEmptyStringKeys } from "./removeEmptyStringKeys";

test("removeEmptyStringKeys removes empty string keys from the object", () => {
    const inputObject = {
        key1: "value1",
        key2: "",
        key3: "value3",
        key4: "",
        key5: "value5",
    };

    const result = removeEmptyStringKeys(inputObject);

    expect(result).toEqual({
        key1: "value1",
        key3: "value3",
        key5: "value5",
    });
});
