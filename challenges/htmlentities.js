
/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
    return str.split("").map(item => item = corresponding(item)).join("");
}

function corresponding(str) {
    switch (str) {
        case '&':
            return '&amp;'
        case '<':
            return '&lt;'
        case '>':
            return '&gt;'
        case '"':
            return '&quot;'
        case "'":
            return '&apos;'
        default:
            return str
            break;
    }
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"))
console.log(convertHTML("Sixty > twelve"))
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("Schindler's List"))
console.log(convertHTML("<>"))
console.log(convertHTML("abc"))



