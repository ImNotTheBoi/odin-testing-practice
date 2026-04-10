import "./styles.css";
export { capitalize, reverse, calculator, caesarCipher, analyzeArray };

function capitalize(str) {
  const capitalizedWord = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalizedWord;
}

function reverse(str) {
  const reservedWord = str.split("").reverse().join("");
  return reservedWord;
}

const calculator = {
  add: (num1, num2) => {
    const sum = num1 + num2;
    return sum;
  },
  subtract: (num1, num2) => {
    const difference = num1 - num2;
    return difference;
  },
  multiply: (num1, num2) => {
    const product = num1 * num2;
    return product;
  },
  divide: (num1, num2) => {
    const quotient = num1 / num2;
    return quotient;
  },
};

function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const strArray = str.split("");
  const cipheredWord = strArray
    .map((char) => {
      if (char.toUpperCase() != char.toLowerCase()) {
        const charIndex = alphabet.indexOf(char.toLowerCase());
        const combinedIndex = charIndex + shift;
        const shiftedIndex =
          combinedIndex < 26
            ? combinedIndex
            : combinedIndex - 26 * Math.floor(combinedIndex / 25);
        const cipheredChar =
          char !== char.toUpperCase()
            ? alphabet[shiftedIndex]
            : alphabet[shiftedIndex].toUpperCase();
        return cipheredChar;
      } else {
        return char;
      }
    })
    .join("");
  return cipheredWord;
}

function analyzeArray(array) {
  return {
    average:
      array.reduce((total, num) => {
        return total + num;
      }) / array.length,
    min: array.reduce((lastnum, num) => {
      return lastnum < num ? lastnum : num;
    }),
    max: array.reduce((lastnum, num) => {
      return lastnum > num ? lastnum : num;
    }),
    length: array.length,
  };
}
