export type Shot = {
  score: number;
  frameNumber: number;
};

export type Frame = {
  number: number;
  score?: number;
  tempScore?: number;
};
