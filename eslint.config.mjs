import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  js.configs.recommended,
  nextPlugin.configs['core-web-vitals'],
  {
    ignores: ['.next', 'node_modules']
  }
];
