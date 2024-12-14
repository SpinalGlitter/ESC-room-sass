const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto', // Detta fixar "Delete `cr`" felet
        },
      ],
      semi: ['warn', 'always'],
    },
  },
];
