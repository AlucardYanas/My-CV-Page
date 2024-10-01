module.exports = {
  parser: '@typescript-eslint/parser', 
  extends: [
    'plugin:@typescript-eslint/recommended', 
  ],
  parserOptions: {
    project: './tsconfig.eslint.json', 
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off', 
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
