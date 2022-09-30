import { Shot } from "@score/types";

export const findShotsByFrameNumber = (shots: Shot[], shotNumber: number) =>
  shots.filter((shot) => shot.frameNumber === shotNumber);
