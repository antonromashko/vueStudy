<template>
  <button :type="type" :class="{ active: label === activeButton }" @click="handler(callback)">{{ label }}</button>
</template>

<script>
import Mixin from '@/assets/js/mixins/mixin.js'

export default {
  name: "ButtonForGroup",
  mixins: [Mixin],
  methods: {
    callback() {
      console.log(`Activated ${this.label} component`)
    }
  }
}
</script>
<style lang="scss" scoped>
  button {
    padding: 10px;
    height: 40px;
    background-color: #fff;
    color: #2d313b;
    text-align: center;
    cursor: pointer;
    outline-width: 0;
    border: 1px solid #ebebeb;
  }
  .active {
    background-color: #ebebeb;
    box-shadow: inset 0 1px 3px 0 #7e7e7e;
  }
</style>