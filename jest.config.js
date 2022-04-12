// https://stackoverflow.com/questions/63114333/how-to-import-mjs-modules-in-jests-xyz-test-js

module.exports = {
    testRegex: "spec.mjs",
    transform: {
        "^.+\\.mjs$": "babel-jest",
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleFileExtensions: ["js", "mjs"]
}
