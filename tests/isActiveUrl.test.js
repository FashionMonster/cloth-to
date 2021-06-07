import { isActiveUrl } from "../utils/isActiveUrl";

test('isActiveUrl("/search", "/search") true', () => {
  expect(isActiveUrl("/search", "/search")).toBeTruthy();
});

test('isActiveUrl("/search", "/contribution") false', () => {
  expect(isActiveUrl("/search", "/contribute")).toBeFalsy();
});

test('isActiveUrl("/contribute", "/search") false', () => {
  expect(isActiveUrl("/contribute", "/search")).toBeFalsy();
});
