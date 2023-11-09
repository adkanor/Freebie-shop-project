const getQueryParams = (queryParams) => {
    const search = queryParams.get("search") || "";
    const sex = queryParams.get("sex") || "";
    const category = queryParams.get("category") || "";
    const style = queryParams.get("style") || "";
    const size = queryParams.get("size") || "";
    const minprice = Number(queryParams.get("minprice")) || 0;
    const maxprice = Number(queryParams.get("maxprice")) || 1000;
    const page = Number(queryParams.get("page")) || 1;
    const limit = Number(queryParams.get("limit")) || 9;
    const sort = queryParams.get("sort") || "";
    const hasDiscount = queryParams.get("hasdiscount") || "";

    const initialStateFilter = {
        search,
        sex,
        category,
        style,
        size,
        minprice,
        maxprice,
        page,
        limit,
        sort,
        hasDiscount,
    };
    return initialStateFilter;
};
export default getQueryParams;
