module.exports = {
    "env": {
        "node":true
    },
    "extends": "eslint:recommended",
    "rules": {
    	'no-console': 'off',
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "parserOptions": {
		"ecmaVersion": 6
	}
};