module.exports = {
  parser: '@typescript-eslint/parser', 
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript', 
    'plugin:@typescript-eslint/recommended', // Рекомендуемые правила для TypeScript
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json', 
  },
  rules: {
    
    'react/react-in-jsx-scope': 'off', // Отключение правила, поскольку React 17+ не требует импорта React
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
