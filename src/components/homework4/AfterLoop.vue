<template>
<div>
  <ul >
    <li v-after-loop="someMethod" v-for="(item, idx) in data" :key="idx">{{ item }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "AfterLoop",
  data() {
    return {
      data: [1, 2, 3, 4, 5]
    }
  },
  directives: {
    afterLoop: {
      inserted: function(el,binding) {
        binding.value(el)
      }
    }
  },
  methods: {
    someMethod(el) {
      console.log(el)
    }
  }
}
</script>

<style scoped>

</style>