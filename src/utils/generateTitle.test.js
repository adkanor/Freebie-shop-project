import { getStyleValue } from "./generateTitle";
test("getStyleValue returns correct value based on priority keys", () => {
    const result1 = getStyleValue({ style: "Casual" });
    expect(result1).toBe("Casual");

    const result2 = getStyleValue({ sex: "Men" });
    expect(result2).toBe("Men");

    const result3 = getStyleValue({ category: "Shirts" });
    expect(result3).toBe("Shirts");

    const result4 = getStyleValue({ search: "Summer" });
    expect(result4).toBe("Summer");

    const result5 = getStyleValue({ hasDiscount: true });
    expect(result5).toBe("Product List");

    const result6 = getStyleValue({});
    expect(result6).toBe("Product List");
});
