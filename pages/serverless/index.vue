<template>
  <div id="page-serverless">
    <section class="service-section" v-for="(item, index) in serviceList" :key="index" :class="{ 'back-dark': index % 2 === 0 }">
      <div class="container">
        <ul class="list-unstyled row">
          <li class="col-sm-2">
            <div class="logo-box">
              <img :src="item.thumbnail" :alt="item.name">
            </div>
          </li>
          <li class="col-sm-10">
            <div class="desc-box">
              <h1 class="section-title">{{ item.name }}</h1>
              <p class="section-desc">
                {{ item.description }}
              </p>
              <br>
              <br>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div class="back-home">
      <nuxt-link :to="{ name: 'index' }">Back to HOME</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        serviceList: [
          {
            name: 'Lambda',
            description: `AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you. You can use AWS Lambda to extend other AWS services with custom logic, or create your own back-end services that operate at AWS scale, performance, and security. AWS Lambda can automatically run code in response to multiple events, such as HTTP requests via Amazon API Gateway, modifications to objects in Amazon S3 buckets, table updates in Amazon DynamoDB, and state transitions in AWS Step Functions.`,
            thumbnail: 'https://resource.walkinpcm.com/lambda-nuxt/images/serverless-lambda.svg'
          },
          {
            name: 'API Gateway',
            description: `Amazon API Gateway is a fully managed service that makes it easy for developers to publish, maintain, monitor, secure, and operate APIs at any scale. It's a pay-as-you-go service that takes care of all of the undifferentiated heavy lifting involved in securely and reliably running APIs at scale.`,
            thumbnail: 'https://resource.walkinpcm.com/lambda-nuxt/images/serverless-apigw.svg'
          },
          {
            name: 'CloudFront',
            description: `Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment. CloudFront is integrated with AWS – both physical locations that are directly connected to the AWS global infrastructure, as well as other AWS services. CloudFront works seamlessly with services including AWS Shield for DDoS mitigation, Amazon S3, Elastic Load Balancing or Amazon EC2 as origins for your applications, and Lambda@Edge to run custom code closer to customers’ users and to customize the user experience.`,
            thumbnail: 'https://resource.walkinpcm.com/lambda-nuxt/images/serverless-cf.svg'
          },
          {
            name: 'Route53',
            description: `Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other. Amazon Route 53 is fully compliant with IPv6 as well.`,
            thumbnail: 'https://resource.walkinpcm.com/lambda-nuxt/images/serverless-route53.svg'
          }
        ]
      }
    } 
  }
</script>

<style lang="scss" scoped>
#page-serverless {
  .service-section {
    padding: 100px 0;
    background-color: #fff;
    color: #000;

    h1 {
      color: #000;
    }

    &.back-dark {
      background-color: #232f3e;
      color: #fff;

      h1 {
        color: #fff;
      }
    }

    ul {
      > li {
        .desc-box {
          > p {
            margin-top: 30px;
          }
        }
      }
    }
  }

  .back-home {
    text-align: center;

    > a {
      font-size: 28px;
    }
  }

  @media (max-width: 575.98px) {
    .service-section {
      padding: 80px 20px;

      ul {
        > li {
          .desc-box {
            > h1 {
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
}
</style>

