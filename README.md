# lambda-nuxt

> AWS Lambda에서 Nuxt.js 웹어플리케이션을 구동시키는 예제에 사용되는 Nuxt.js 프로젝트입니다.    

> 주의: 본 프로젝트는 아직 미완성입니다.  

## 추가 작업 요소
- nuxt를 포함한 dependency 버전 업그레이드(nuxt 최신 버전에 맞추기)  
- service logic example 구현. (axios로 API 요청 수행)  
- store 연동  
- CI/CD 구성  

## 웹어플리케이션 인프라 구성 (WebApp Infrastructure)
![구성하려는 인프라 구성](https://github.com/ChanMinPark/lambda-nuxt/blob/master/lambda-nuxt__phase-4.JPG?raw=true)

- 모든 정적 리소스는 AWS S3에 저장하고 AWS CloudFront에 배포하여 사용합니다.  
- 웹어플리케이션의 Client-Side 동작에 필요한 js 파일들은 AWS S3에 저장하고 AWS CloudFront에 배포하여 사용합니다.  
  - reference: https://nuxtjs.org/api/configuration-build#publicpath  
- 본 웹어플리케이션은 AWS Lambda와 S3에서 호스팅됩니다.  
- bot접근 시에는 Lambda를 origin으로, 그 외에는 S3를 origin으로 호스팅합니다.  
- 웹사이트의 도메인 연결은 AWS API Gateway를 이용합니다.  


## 블로그 게시물 (Blog post)  
아직 프로젝트가 미완성이라서 프로젝트 완성 후에 블로그에 게시할 예정입니다.  


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

