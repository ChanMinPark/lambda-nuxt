'use strict'

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./nuxt-server')

// 이진 타입 지원을 위한 설정값 준비
const binaryMimeTypes = [
  'text/html'
]

// 서버 동작
const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)
module.exports.nuxt = (event, context) => awsServerlessExpress.proxy(server, event, context)
