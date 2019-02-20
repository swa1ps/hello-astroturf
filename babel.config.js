module.exports = {
  presets: [
    '@babel/typescript',
    '@babel/react',
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            '>0.25%',
            'not op_mini all'
          ]
        },
        modules: false
      } 
    ]
  ],
  env: {
    test: {
      presets: [
        '@babel/typescript',
        '@babel/preset-react',
        ['@babel/preset-env', { modules: 'commonjs' }],
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        [
          'astroturf/plugin',
          {
            writeFiles: true,
          }
        ]
      ],
    }
  }
}