<template>
  <section id="page-main">
    <!-- Main Section -->
    <section id="sec-1">
      <div class="container" style="position: relative; height: 100%;">
        <div class="content-box">
          <img src="https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/lambda-nuxt-thumbnail.jpg" alt="Nuxt.js with AWS Serverless">
        </div>
      </div>
    </section>

    <section id="sec-1-1">
      <div class="text-center p-5">
        <!-- <h1>Server: Lambda</h1> -->
        <h1>Server: S3</h1>
      </div>
    </section>

    <!-- Nuxt.js Introduction -->
    <section id="sec-2">
      <div class="container">
        <div class="content-box">
          <ul class="list-unstyled row">
            <li class="col-sm-5">
              <div class="logo-box">
                <img src="https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/nuxt-logo.png" alt="Nuxt.js">
              </div>
            </li>
            <li class="col-sm-7">
              <div class="desc-box">
                <h1 class="section-title">What is Nuxt.js</h1>
                <p class="section-desc">
                  It's main scope is UI rendering while abstracting away the client/server distribution.<br>
                  <br>
                  Our goal is to create a framework flexible enough that you can use it as a main project base or in addition to your current project based on Node.js.<br>
                  <br>
                  Nuxt.js presets all the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.
                </p>
                <br>
                <br>
                <a href="https://nuxtjs.org/" target="_blank">Nuxt.js website >></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- AWS Serverless Introduction -->
    <section id="sec-3">
      <div class="container">
        <div class="content-box">
          <ul class="list-unstyled row">
            <li class="col-sm-5">
              <div class="logo-box">
                <img src="https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/aws-severless-logo.png" alt="AWS Serverless">
              </div>
            </li>
            <li class="col-sm-7">
              <div class="desc-box">
                <h1 class="section-title">What is AWS Serverless</h1>
                <p class="section-desc">
                  Serverless is the native architecture of the cloud that enables you to shift more of your operational responsibilities to AWS, increasing your agility and innovation. Serverless allows you to build and run applications and services without thinking about servers. It eliminates infrastructure management tasks such as server or cluster provisioning, patching, operating system maintenance, and capacity provisioning. You can build them for nearly any type of application or backend service, and everything required to run and scale your application with high availability is handled for you.
                </p>
                <br>
                <br>
              </div>
            </li>
          </ul>

          <div class="service-list">
            <h2 class="list-title">Serverless Services</h2>
            <ul class="list-unstyled row">
              <li class="col-12 col-sm-6 col-md-3">
                <div class="service-card">
                  <div class="service-card__logo">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/serverless-lambda.svg" alt="Lambda">
                  </div>
                  <div class="service-card__name">
                    Lambda
                  </div>
                </div>
              </li>
              <li class="col-12 col-sm-6 col-md-3">
                <div class="service-card">
                  <div class="service-card__logo">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/serverless-apigw.svg" alt="API Gateway">
                  </div>
                  <div class="service-card__name">
                    API Gateway
                  </div>
                </div>
              </li>
              <li class="col-12 col-sm-6 col-md-3">
                <div class="service-card">
                  <div class="service-card__logo">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/serverless-cf.svg" alt="CloudFront">
                  </div>
                  <div class="service-card__name">
                    CloudFront
                  </div>
                </div>
              </li>
              <li class="col-12 col-sm-6 col-md-3">
                <div class="service-card">
                  <div class="service-card__logo">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/serverless-route53.svg" alt="Route53">
                  </div>
                  <div class="service-card__name">
                    Route53
                  </div>
                </div>
              </li>
            </ul>

            <div class="service-detail-link">
              <nuxt-link :to="{ name: 'serverless' }">+ View Detail +</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HTTP REQUEST TEST -->
    <section id="sec-4">
      <div class="container">
        <h1>HTTP Request TEST</h1>
        <h2>{{ httpResponse }}</h2>
      </div>
    </section>

  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    let {data} = await axios.get('https://e4nb9nqxpi.execute-api.ap-northeast-2.amazonaws.com/prod')
    return {
      httpResponse: data
    }
  },
  data () {
    return {
      text: 'Say, Hola!'
    }
  }
}
</script>

<style lang="scss" scoped>
#page-main {
  #sec-1 {
    position: relative;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-image: url('https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/houses-1622066_1920.jpg');

    .content-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      background-color: #fff;
      border-radius: 50px;
      overflow: hidden;

      @media (max-width: 575.98px) {
        width: 90%;
      }

      > img {
        width: 100%;
        height: auto;

      }
    }
  }

  #sec-1-1 {
    background-color: #232f3e;
    color: #fff;
  }

  #sec-2 {
    padding: 150px 0;

    .content-box {
      > ul {
        margin-left: -30px;
        margin-right: -30px;

        > li {
          padding-left: 30px;
          padding-right: 30px;

          .logo-box {
            position: relative;
            padding: 30px;
            box-shadow: 3px 3px 10px #999;
            border-radius: 50px;
            background-color: #fff;

            > img {
              width: 100%;
            }
          }

          .desc-box {
            p {
              margin-top: 30px;
            }
          }
        }
      }
    }

    @media (max-width: 575.98px) {
      padding: 50px 20px;

      .content-box {
        > ul {
          > li {
            .logo-box {
              width: 250px;
              border-radius: 30px;
            }

            .desc-box {
              margin-top: 30px;
            }
          }
        }
      }
    }
  }

  #sec-3 {
    padding: 150px 0;
    background-color: #232f3e;
    color: #fff;

    .content-box {
      > ul {
        margin-left: -30px;
        margin-right: -30px;

        > li {
          padding-left: 30px;
          padding-right: 30px;

          .logo-box {
            position: relative;
            padding: 30px;
            box-shadow: 3px 3px 10px #999;
            border-radius: 50px;
            background-color: #fff;
            overflow: hidden;

            > img {
              width: 100%;
            }
          }

          .desc-box {
            h1, p {
              color: #fff;
            }

            p {
              margin-top: 30px;
            }
          }
        }
      }

      .service-list {
        margin-top: 80px;

        .list-title {
          text-align: center;
        }

        > ul {
          margin-top: 50px;

          > li {
            margin-top: 30px;

            .service-card {
              .service-card {
                &__logo {
                  position: relative;
                  border-radius: 15px;
                  overflow: hidden;

                  > img {
                    width: 100%;
                    transform: scale(1.0);
                    transition: transform .3s ease;
                  }

                  &:hover {
                    > img {
                      transform: scale(1.1);
                    }
                  }
                }

                &__name {
                  margin-top: 10px;
                  text-align: center;
                  font-size: 26px;
                }
              }
            }
          }
        }

        .service-detail-link {
          text-align: center;
          margin-top: 40px;

          > a {
            font-size: 24px;
          }
        }
      }
    }

    @media (max-width: 575.98px) {
      padding: 50px 20px;

      .content-box {
        > ul {
          > li {
            .logo-box {
              width: 250px;
              border-radius: 30px;
            }

            .desc-box {
              margin-top: 30px;
            }
          }
        }

        .service-list {
          > ul {
            > li {
              .service-card {
                .service-card {
                  &__logo {
                    width: 200px;
                    margin: 0 auto;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  #sec-4 {
    padding: 150px 0;

    h1, h2 {
      text-align: center;
    }

    h2 {
      margin-top: 50px;
    }
  }
}
</style>
