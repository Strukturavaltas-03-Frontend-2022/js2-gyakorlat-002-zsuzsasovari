const numericConverter = (a) => {
    let hex = Number(a).toString(16);
    let bin = Number(a).toString(2);
    let oct = Number(a).toString(8);
    return { 'hexa': hex, 'binary': bin, 'octal': oct };
}

export default numericConverter;