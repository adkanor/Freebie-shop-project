import getQueryParams from "./getQueryParams";

test("getQueryParams returns correct object based on query parameters", () => {
    const queryParams = new URLSearchParams({
        search: "Summer",
        sex: "Men",
        category: "Shirts",
        style: "Casual",
        size: "L",
        minprice: "20",
        maxprice: "50",
        page: "2",
        limit: "12",
        sort: "popular",
        hasdiscount: "true",
    });

    const result = getQueryParams(queryParams);

    expect(result).toEqual({
        search: "Summer",
        sex: "Men",
        category: "Shirts",
        style: "Casual",
        size: "L",
        minprice: 20,
        maxprice: 50,
        page: 2,
        limit: 12,
        sort: "popular",
        hasDiscount: "true",
    });
});
