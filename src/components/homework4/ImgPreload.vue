<template>
  <div>
    <img alt="" v-img-preload="imgUrl" src="">
  </div>
</template>

<script>
import imgPreload from '@/assets/js/directives/imgPreload.js';

export default {
  name: "ImgPreload",
  data() {
    return {
      imgUrl: 'https://fakeimg.pl/300/?text=Hello',
      imgUrlError: 'https://akeimg.pl/'
    }
  },
  directives: {
    imgPreload: imgPreload
  }
}
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin: 15px;
      width: 200px;
      height: 200px;
    }
  }
</style>