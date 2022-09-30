import {
  calculateTotalScore,
  createFrames,
  findFrameByNumber,
  updateFrameByNumber,
} from "@score/helpers/frame";
import { Frame } from "@score/types";

const mockedFrames: Frame[] = createFrames(10).map((item) => ({
  ...item,
  score: 8,
}));

test("create frames correctly", () => {
  expect(mockedFrames.length).toBe(10);
});

test("calculate total score correctly", () => {
  expect(calculateTotalScore(mockedFrames)).toBe(80);
});

test("find frame by number correctly", () => {
  expect(findFrameByNumber(mockedFrames, 5)).toEqual({ number: 5, score: 8 });
});

test("update frame correctly", () => {
  const frameUpdateShape = { number: 5, score: 6 };

  const updatedFrames = updateFrameByNumber(mockedFrames, 5, frameUpdateShape);

  const updatedFrame = findFrameByNumber(updatedFrames, 5);

  expect(updatedFrame).toEqual(frameUpdateShape);
});
