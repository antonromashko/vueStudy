<template>
  <div>
    <transition-group :name="animationAdapter" appear>
      <div v-for="(img, idx) in images" :key="img" v-show="idx === currentImage">
        <img alt="" :src="img">
      </div>
    </transition-group>
    <button :disabled="this.currentImage === 0" @click="previousImg">&#8249;</button>
    <button :disabled="this.currentImage === this.nSlider - 1" @click="nextImg">&#8250;</button>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [],
      nSlider: 5,
      fakeImgUrl: 'https://fakeimg.pl/300/',
      currentImage: 0,
      moveBack: false
    }
  },
  computed: {
    animationAdapter() {
      return this.moveBack ? 'previous' : 'next'
    }
  },
  methods: {
    async previousImg() {
      this.moveBack = false
      this.currentImage = this.images.indexOf(this.images[this.currentImage]) - 1;
    },
    async nextImg() {
      this.moveBack = true
      this.currentImage = this.images.indexOf(this.images[this.currentImage]) + 1;
    }
  },
  created() {
    for (let i=1; i<=this.nSlider; i++) {
      this.images.push(`${this.fakeImgUrl}?text=SLIDE ${i}`);
    }
  }
}
</script>

<style lang="scss" scoped>

button {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 50%;
  outline-width: 0;
  border: none;
  margin-top: 310px;
  left: 690px;
}

button:hover:enabled {
  background-color: #ddd;
  color: black;
}
img {
  position: absolute;
  left: 690px;
}
.next {
  width: 100%;
  &-leave-active,
  &-enter-active {
    transition: 1s;
  }
  &-enter {
    transform: translate(100%, 0);
  }
  &-leave-to {
    transform: translate(-100%, 0);
  }
}
.previous {
  &-leave-active,
  &-enter-active {
    transition: 1s;
  }
  &-enter {
    transform: translate(-100%, 0);
  }
  &-leave-to {
    transform: translate(100%, 0);
  }
}
</style>