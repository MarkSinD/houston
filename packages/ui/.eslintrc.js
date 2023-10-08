const atomsPath = '**/src/atoms/**/*'
const moleculesPath = ''
const organismsPath = ''

module.exports = {
	root: true,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	extends: ['@monorepo-example'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: {
				project: 'packages/ui/tsconfig.json',
			},
		},
	},
}
