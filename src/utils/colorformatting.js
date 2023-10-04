export function darkenHexColor(hex, percent) {
    const darken = (colorValue) =>
        Math.max(colorValue - Math.round(colorValue * (percent / 100)), 0);

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const newR = darken(r);
    const newG = darken(g);
    const newB = darken(b);

    return `#${newR.toString(16).padStart(2, "0")}${newG
        .toString(16)
        .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
}
