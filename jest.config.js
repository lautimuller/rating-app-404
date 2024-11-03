module.exports = {
    preset: "jest-expo",
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    transformIgnorePatterns: [
      "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo(nent)?|@unimodules|unimodules|sentry-expo|native-base)"
    ],
  };
  