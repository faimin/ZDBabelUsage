module.exports = function (api) {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.27.2',
        targets: {
          ios: '10',
          android: '5'
        }
      }
    ],
    '@babel/preset-react'
  ]

  const plugins = [
    ['@babel/plugin-transform-runtime', { corejs: '3' }],
    '@babel/plugin-transform-react-jsx-source'
  ]

  return { presets, plugins }
}
