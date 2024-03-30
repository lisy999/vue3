/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off', //关闭组件命名规则
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-unused-vars': 'error', // 禁止未使用的变量
    'space-before-function-paren': ['error', 'always'], // 函数括号前是否需要空格
    'no-extra-semi': 'error', // 禁止多余的分号
    'no-console': 'error', // 禁止使用 console
    'no-eval': 'error', // 禁止使用 eval
    'no-unused-labels': 'error', // 禁止出现未使用过的 label
    eqeqeq: 'error', // 强制使用=== 和 !==
    'no-empty-function': 'error', // 禁止空函数
    'no-extra-parens': 'error', // 禁止不必要的括号
    'no-loop-func': 'error', // 禁止在循环中创建函数
    'object-curly-newline': ['error', { multiline: true, consistent: true }] // 强制在花括号内使用一致的换行符
  }
}
