const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "@score/(.*)": "<rootDir>/src/features/score/$1",
    "@pages/(.*)": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
