<template>
  <button :type="type" @click="handler(callback)">{{ label }}</button>
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
