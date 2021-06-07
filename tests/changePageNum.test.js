import { changePageNum } from "../utils/changePageNum";

describe('changePageNum(1, "/search", router) ', () => {
  // const router = jest.mock("next/router", jest.fn());

  expect(
    changePageNum(
      1,
      "/search",
      jest.mock("next/router", () => {
        const originalModule = jest.requireActual("next/router");
        originalModule.query.page = "";
        originalModule.push();
        return {
          default: jest.fn().mockImplementation(originalModule.default),
        };
      })
    )
  );
});
