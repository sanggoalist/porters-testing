/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  testPathIgnorePatterns: ["<rootDir>/src/apis/"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["<rootDir>/test/**/*.test.ts?(x)"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.ts?(x)",
    "<rootDir>/src/pages/**/*.ts?(x)",
    "<rootDir>/src/lib/**/*.ts?(x)",
  ],
};
