import {
  printFishBash,
  sortAscending,
  sortDescending,
  isPalindrome,
} from "./functions";

test("test printFishBash", () => {
  const consoleSpy = jest.spyOn(console, "log");

  printFishBash(16);

  expect(consoleSpy).toHaveBeenNthCalledWith(3, "fish");
  expect(consoleSpy).toHaveBeenNthCalledWith(5, "bash");
  expect(consoleSpy).toHaveBeenNthCalledWith(15, "fish bash");

  consoleSpy.mockRestore();
});

test("test sortAscending", () => {
  const arr = [5, 3, 8, 1, 2];
  const sortedArr = sortAscending(arr);
  expect(sortedArr).toEqual([1, 2, 3, 5, 8]);
});

test("test sortDescending", () => {
  const arr = [5, 3, 8, 1, 2];
  const sortedArr = sortDescending(arr);
  expect(sortedArr).toEqual([8, 5, 3, 2, 1]);
});

test("test isPalindrome", () => {
  expect(isPalindrome("madam")).toBe(true);
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("level")).toBe(true);
});

test("test non-palindromes", () => {
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("world")).toBe(false);
  expect(isPalindrome("javascript")).toBe(false);
});
