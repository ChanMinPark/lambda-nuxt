<template>
  <section>
    <section id="main-sec-1">
      <div class="container">
        <h1>What is Lorem Ipsum?</h1>
        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
      </div>
    </section>
    <section id="main-sec-2">
      <div class="container">
        <h1>Where does it come from?</h1>
        <h2>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</h2>
      </div>
    </section>
    <section id="main-sec-3">
      <div class="container">
        <h1>Why do we use it?</h1>
        <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data () {
    return {
      text: 'Say, Hola!'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  color: #fff;
  font-weight: 700;
  text-shadow: 3px 3px 3px #333;
}

h1 {
  font-size: 70px;
}

h2 {
  margin-top: 30px;
}

#main-sec-1,
#main-sec-2,
#main-sec-3 {
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: 200px;
}

#main-sec-1 {
  background-image: url('https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/field-3535119_1920.jpg'); 
}
#main-sec-2 {
  background-image: url('https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/houses-1622066_1920.jpg'); 
}
#main-sec-3 {
  background-image: url('https://s3.ap-northeast-2.amazonaws.com/walkinpcm-web-public-resources/lambda-nuxt/images/fruit-3661159_1920.jpg'); 
}
</style>
