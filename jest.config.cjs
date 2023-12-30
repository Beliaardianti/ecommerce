/* eslint-disable */
module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: [
      '**/*.spec.js',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,vue}',
      '!**/node_modules/**',
    ],
  };
  