import { makeDispUserName } from "../utils/makeDispUserName";

test('makeDispUserName("田中太郎") equal "田中太郎"', () => {
  expect(makeDispUserName("田中太郎")).toBe("田中太郎");
});

test('makeDispUserName("田中一太郎") equal "田中一太..."', () => {
  expect(makeDispUserName("田中一太郎")).toBe("田中一太...");
});
