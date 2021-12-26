module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/background/main.js',
      rendererProcessFile: 'src/renderer/main.js',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/renderer/assets/styles/root.scss";'
      },
    }
  },
}