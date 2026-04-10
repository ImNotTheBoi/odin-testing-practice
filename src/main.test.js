import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("calculator", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.multiply(4, 2)).toBe(8);
  expect(calculator.divide(4, 2)).toBe(2);
});

test("caesarCipher", () => {
  expect(caesarCipher("hello", 5)).toBe("mjqqt");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
