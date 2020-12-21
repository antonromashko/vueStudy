<template>
<div @click="$emit('click')">
  <p>{{anime.title}}</p>
  <img :src="anime.image_url" alt="">
</div>
</template>

<script>
export default {
  name: "Anime",
  props: {
    anime: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>