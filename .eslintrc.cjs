module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['react-refresh', 'unused-imports', 'jest', 'react-hooks-addons'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-void': 0,
    'react-hooks-addons/no-unused-deps': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
        checksConditionals: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/await-thenable': ['error'],
    'require-await': ['error'],
    'func-style': ['error', 'expression'],
    'no-duplicate-imports': 'off',
    'no-undef': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'import/export': 'off',
    'react/no-unstable-nested-components': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-catch-shadow': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-useless-path-segments': 1,
    'import/newline-after-import': 1,
    'unused-imports/no-unused-imports': 'error',
    'spaced-comment': ['error'],
    'no-console': 'warn',
    'import/no-cycle': [2, { ignoreExternal: true }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
}
