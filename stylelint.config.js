/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    // 'selector-class-pattern': null,
    // 'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$',
    'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$',
    'selector-id-pattern': '^[a-z][a-zA-Z0-9_-]+$',
  },
};
