import { calculatePageCount } from "../utils/calculatePageCount";

test("calculatePageCount(0, 20) equal 0", () => {
  expect(calculatePageCount(0, 20)).toBe(0);
});

test("calculatePageCount(20, 20) equal 1", () => {
  expect(calculatePageCount(20, 20)).toBe(1);
});

test("calculatePageCount(21, 20) equal 2", () => {
  expect(calculatePageCount(21, 20)).toBe(2);
});

test("calculatePageCount(40, 20) equal 2", () => {
  expect(calculatePageCount(40, 20)).toBe(2);
});

test("calculatePageCount(41, 20) equal 2", () => {
  expect(calculatePageCount(41, 20)).toBe(3);
});
