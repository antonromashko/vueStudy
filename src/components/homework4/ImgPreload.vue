<template>
  <div>
    <img alt="" v-img-preload="imgUrl" src="">
    <img alt="" v-img-preload="imgUrlError" src="">
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
      width: 100px;
      height: 100px;
    }
  }
</style>