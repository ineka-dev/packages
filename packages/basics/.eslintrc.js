module.exports = {
  root: true,
  extends: ['@ineka'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
