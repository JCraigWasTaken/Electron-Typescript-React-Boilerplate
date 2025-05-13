module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFiles: ["<rootDir>/jest.polyfills.js"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/src/__mocks__/fileMock.js",
    },
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transformIgnorePatterns: ["/node_modules/(?!(@mui|react-router|react-router-dom)/)"],
    collectCoverageFrom: [
        "src/renderer/views/**/*.[jt]s?(x)",
        "src/renderer/App.ts(x)",
        "src/renderer/AppRouter.ts(x)",
        "!src/renderer/views/**/*.test.[jt]s?(x)",
        "!src/renderer/views/**/*.spec.[jt]s?(x)",
        "!src/renderer/views/**/__tests__/**/*.[jt]s?(x)",
    ],
    coverageThreshold: {
        "src/renderer/views/**/*.[jt]s?(x)": {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
        "src/renderer/App.ts(x)": {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
        "src/renderer/AppRouter.ts(x)": {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
    coverageReporters: ["text", "text-summary"],
}
