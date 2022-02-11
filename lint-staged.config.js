module.exports = {
  '*.{js,ts}': ['vue-cli-service lint', 'prettier --write'],
  '*.vue': ['vue-cli-service lint', 'stylelint --fix', 'prettier --write'],
  '*.json': ['prettier --write'],
  '*.scss': ['stylelint --fix']
}
