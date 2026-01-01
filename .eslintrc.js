module.exports = {
  extends: ['./eslint-config/dist/base.js'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
}
