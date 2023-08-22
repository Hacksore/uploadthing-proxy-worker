/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	parserOptions: {
		project: `${__dirname}/tsconfig.json`,
	},
};
