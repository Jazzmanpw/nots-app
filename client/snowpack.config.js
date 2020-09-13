module.exports = {
  extends: "@snowpack/app-scripts-react",
  alias: {
    'Components': './src/components',
    'State': './src/state',
    'Utils': './stc/utils',
  },
  devOptions: {
    open: 'none',
    port: 3000,
  },
}