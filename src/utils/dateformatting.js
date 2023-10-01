export function isValidDate(dateString) {
    const dateFormat = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})$/;
    return dateFormat.test(dateString);
}

export function formatDate(inputDate) {
    const date = new Date(inputDate);

    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
}
