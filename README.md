# lambda-nuxt

> AWS Lambda에서 Nuxt.js 웹어플리케이션을 구동시키는 예제에 사용되는 Nuxt.js 프로젝트입니다.    

> 주의: 본 프로젝트는 아직 미완성입니다.  

## 추가 작업 요소
- service logic example 구현. (axios로 API 요청 수행)  
- store 연동  

## 웹어플리케이션 인프라 구성 (WebApp Infrastructure)
- 모든 정적 리소스는 AWS S3에 저장하고 AWS CloudFront에 배포하여 사용합니다.  
- 웹어플리케이션의 Client-Side 동작에 필요한 js 파일들은 AWS S3에 저장하고 AWS CloudFront에 배포하여 사용합니다.  
  - reference: https://nuxtjs.org/api/configuration-build#publicpath  
- 본 웹어플리케이션은 AWS Lambda에서 구동됩니다.  
- 웹사이트의 도메인 연결은 AWS API Gateway를 이용합니다.  


## 블로그 게시물 (Blog post)  
~~본 프로젝트를 사용하여 AWS Lambda에서 Nuxt.js 프로젝트를 구동하는 방법을 아래 링크의 게시물에 정리하였습니다.~~  
아직 프로젝트가 미완성이라서 프로젝트 완성 후에 블로그에 게시할 예정입니다.  

링크: (!! 게시 예정 !!)  


## 프로젝트 빌드 방법 (Build Setup)

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production
$ npm build

# launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).  

