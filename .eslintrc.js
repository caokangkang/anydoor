module.exports = {
    "extends": ["eslint:recommended"],
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }],
        "no-debugger": 2,
        "no-alert": 0
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    "globals": {},
    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    }
}