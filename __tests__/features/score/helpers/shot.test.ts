import { Shot } from "@score/types";
import { findShotsByFrameNumber } from "@score/helpers/shot";

const mockedFirstShots = [
  { frameNumber: 1, score: 5 },
  { frameNumber: 1, score: 4 },
];

const mockedShots: Shot[] = [
  ...mockedFirstShots,
  { frameNumber: 2, score: 5 },
  { frameNumber: 3, score: 7 },
];

test("find shot by frame number correctly", () => {
  expect(findShotsByFrameNumber(mockedShots, 1)).toEqual(mockedFirstShots);
});
