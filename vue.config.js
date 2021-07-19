// const path = require('path');

module.exports = {
  // publicPath: '/p/',
  lintOnSave:false,  // 关闭eslint
  devServer: {
    proxy: {
      '/api': {//测试环境
        target: 'http://p-hyyz.zenki.cn',
        // target: 'http://dataplus-pdfuture-service/',
        changeOrigin: true,
      },
      // '/api': {//预发环境
      //   target: 'https://show.zenki.cn',
      //   // target: 'http://dataplus-pdfuture-service/',
      //   changeOrigin: true,
      // },
      // '/api': {/正式环境
      //   target: 'http://hyyz.zenki.cn',
      //   // target: 'http://dataplus-pdfuture-service/',
      //   changeOrigin: true,
      // },
    },
  },

}
