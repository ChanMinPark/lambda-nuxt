const express = require('express')
const { Nuxt } = require('nuxt')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// Express App 생성
const app = express()

// aws-serverless-express 미들웨어 등록
app.use(awsServerlessExpressMiddleware.eventContext())

// Nuxt 구동에 사용될 설정 파일 준비
let config = require('./nuxt.config.js')
config.dev = false

// Nuxt 웹어플리케이션 생성
const nuxt = new Nuxt(config)
app.use(nuxt.render)

module.exports = app
