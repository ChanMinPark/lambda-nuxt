module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SERVERLESS NUXT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project with AWS Lambda' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css', integrity: 'sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS', crossorigin: 'anonymous' }
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~/assets/css/main.css'],

  build: {
    /*
    ** Use CDN
    */
    publicPath: 'https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/nuxt_core',

    /*
    ** Run ESLINT on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
