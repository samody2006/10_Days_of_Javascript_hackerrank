/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const inputAsArray = s.replace(/\s/g, '').split('');
    const vo = ['a', 'e', 'i', 'o', 'u'];

    for (let value of inputAsArray) {
        if (vo.indexOf(value) > -1) {
            console.log(value);
        }
    }
    for (let value of inputAsArray) {
        if (vo.indexOf(value) < 0) {
            console.log(value);
        }
    }
}