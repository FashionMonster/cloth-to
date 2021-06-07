import { calculateRowCount } from "../utils/calculateRowCount";

test("calculateRowCount(0, 5) equal 0", () => {
  expect(calculateRowCount(0, 5)).toBe(0);
});

test("calculateRowCount(1, 5) equal 1", () => {
  expect(calculateRowCount(1, 5)).toBe(1);
});

test("calculateRowCount(6, 5) equal 2", () => {
  expect(calculateRowCount(6, 5)).toBe(2);
});
