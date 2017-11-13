module.exports = {
	"globals": {},
	"extends": "airbnb",
	"installedESLint": true,
	"parser": "babel-eslint",
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	"env": {
		"browser": true
	},
	"settings": {
    "import/resolver": {
      "webpack": {
      	"config": "webpack.config.js",
			},
    }
	},
	"rules": {
		"strict": 0,
		"linebreak-style": 0,
		"no-underscore-dangle": 0,
		"no-nested-ternary": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"import/no-extraneous-dependencies": [
			"error", {
				"devDependencies": ["webpack.config.js", "src/client/entry.js"]
		}]
	}
};