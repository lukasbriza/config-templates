import type { Linter } from 'eslint'

export = {
  extends: ['airbnb-base', require.resolve('./base/config')],
} satisfies Linter.Config
