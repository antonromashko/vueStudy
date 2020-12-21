<template>
  <div></div>
</template>

<script>
import { actions, getters } from '@/store';
export default {
  name: "Hw5Task4",
  computed: {
    ...getters
  },
  async beforeMount() {
    await this.getNews()
  },
  methods: {
    ...actions
  },async mounted() {
    console.log(this.animeTop)
  }
}
</script>

<style scoped>

</style>