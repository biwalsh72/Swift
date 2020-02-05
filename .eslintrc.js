module.exports = {
  extends: ['erb', 'prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js')
      }
    }
  }
}
