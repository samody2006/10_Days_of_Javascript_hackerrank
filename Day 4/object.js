function Rectangle(a, b) {
    const length = a;
    const width = b;
    const perimeter = (a * 2) + (b * 2);
    const area = length * width;

    return {
        length: length,
        width: width,
        perimeter: perimeter,
        area: area
    }
}