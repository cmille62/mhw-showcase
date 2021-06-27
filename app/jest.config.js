// eslint-disable-next-line no-undef
module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
    },
  },
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest",
    // "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
  moduleNameMapper: {
    "lodash-es": "lodash",
    "\\.(css|scss|png)$": "<rootDir>/mock/styleMock.js",
  },

  transformIgnorePatterns: [
    "node_modules/(?!(@synergybis/celer-react)|(@synergybis/hrs-health-header)|(@synergybis/celer-rules-plugin)|(@synergybis/celer)|(imask)|(react-imask)/)",
  ],
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  coverageReporters: ["lcov", "text"],
};
