module.exports = {
  extends: "@snowpack/app-scripts-react",
  alias: {
    'Components': './src/components',
    'Features': './src/features',
    'State': './src/state',
    'Utils': './src/utils',
  },
  devOptions: {
    open: 'none',
    port: 3000,
  },
}