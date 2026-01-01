import type { Linter } from 'eslint'

import { config } from './react/config'

export = {
  ...config,
  extends: ['airbnb', require.resolve('./base/config'), ...config.extends],
} satisfies Linter.Config
