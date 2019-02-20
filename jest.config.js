module.exports = {
  setupFilesAfterEnv: ['<rootDir>/internals/testing/test-bundler.js'],
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/internals/testing/enzyme-setup.js'
  ],
  moduleDirectories: ['node_modules', 'src'],
}
