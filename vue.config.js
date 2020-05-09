module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  configureWebpack: {
    devServer: {
      host: "46.162.78.152"
    }
  }
};
