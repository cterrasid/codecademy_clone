module.exports = (api) => {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3.9
      }
    ],
    '@babel/preset-react'
  ]

  const plugins = [
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
          Components: './src/components',
          Pages: './src/pages'
        }
      }
    ]
  ]

  return { presets, plugins }
}
