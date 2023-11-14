import { paramsBrouserStr } from "./paramsObjectWidthBrowserStr";

test("paramsBrouserStr converts searchParams to an object", () => {
    const searchParams = new URLSearchParams({
        search: "Summer",
        category: "Shirts",
        minprice: "20",
        maxprice: "50",
        sort: "popular",
    });

    const result = paramsBrouserStr(searchParams);

    expect(result).toEqual({
        search: "Summer",
        category: "Shirts",
        minprice: "20",
        maxprice: "50",
        sort: "popular",
    });
});
