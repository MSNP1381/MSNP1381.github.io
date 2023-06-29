export function convertToPersianNumber(number:number) {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    const englishDigits = '0123456789';
  
    // Check if the input is a number or a string containing a number
    if (typeof number !== 'number' && isNaN(parseInt(number, 10))) {
      throw new Error('Input is not a valid number');
    }
  
    // Convert the number to a string and replace each English digit with its Persian equivalent
    return number.toString().replace(/\d/g, digit => persianDigits[englishDigits.indexOf(digit)]);
  }