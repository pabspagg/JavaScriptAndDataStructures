/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

convertToRoman(2) should return the string II.

convertToRoman(3) should return the string III.

convertToRoman(4) should return the string IV.

convertToRoman(5) should return the string V.

convertToRoman(9) should return the string IX.

convertToRoman(12) should return the string XII.

convertToRoman(16) should return the string XVI.

convertToRoman(29) should return the string XXIX.

convertToRoman(44) should return the string XLIV.

convertToRoman(45) should return the string XLV.

convertToRoman(68) should return the string LXVIII

convertToRoman(83) should return the string LXXXIII

convertToRoman(97) should return the string XCVII

convertToRoman(99) should return the string XCIX

convertToRoman(400) should return the string CD

convertToRoman(500) should return the string D

convertToRoman(501) should return the string DI

convertToRoman(649) should return the string DCXLIX

convertToRoman(798) should return the string DCCXCVIII

convertToRoman(891) should return the string DCCCXCI

convertToRoman(1000) should return the string M

convertToRoman(1004) should return the string MIV

convertToRoman(1006) should return the string MVI

convertToRoman(1023) should return the string MXXIII

convertToRoman(2014) should return the string MMXIV

convertToRoman(3999) should return the string MMMCMXCIX */

/* 1	I
4	IV
5	V
9	IX
10	X
40	XL
50	L
90	XC
100	C
400	CD
500	D
900	CM
1000 M */

function convertToRoman(num) {
    let romano = ""
    while (num != 0) {
    
        if (num >= 1000) {
            romano += 'M'
            num -= 1000;
        } else if (num >= 900) {
            romano += 'CM'
            num -= 900;
        } else if (num >= 500) {
            romano += 'D'
            num -= 500;
        } else if (num >= 400) {
            romano += 'CD'
            num -= 400;
        } else if (num >= 100) {
            romano += 'C'
            num -= 100;
        } else if (num >= 90) {
            romano += 'XC'
            num -= 90;
        } else if (num >= 50) {
            romano += 'L'
            num -= 50;
        } else if (num >= 40) {
            romano += 'XL'
            num -= 40;
        } else if (num >= 10) {
            romano += 'X'
            num-=10;
        } else if (num >= 9) {
            romano += 'IX'
            num -= 9;
        } else if (num >= 5) {
            romano += 'V'
            num -= 5;
        } else if (num >= 4) {
            romano += 'IV'
            num -= 4;
        } else if (num >= 1) {
            romano += 'I'
            num -= 1;
        }
    }
    return romano;
}

console.log(convertToRoman(36));
//console.log(convertToRoman(3999));
//console.log(convertToRoman(1023));
//console.log(convertToRoman(2014));
//console.log(convertToRoman(1004));