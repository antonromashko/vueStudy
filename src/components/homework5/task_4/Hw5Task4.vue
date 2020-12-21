<template>
  <div>
    <Modal :show-modal="showModal" :anime="currentAnime" @close="close"/>
    <div v-if="isLoaded">
      <Anime v-for="(item, idx) in animeTop" :anime="item" :key="idx" @click="onShowModal(item)"></Anime>
    </div>
    <div v-else>Loading...</div>
  </div>

</template>

<script>
import Anime from "@/components/homework5/task_4/Anime.vue";
import Modal from "@/components/homework5/task_4/Modal.vue";
import { actions, getters } from '@/store';

export default {
  name: "Hw5Task4",
  components: {
    Anime,
    Modal
  },
  data() {
    return {
      showModal: false,
      currentAnime: null
    }
  },
  computed: {
    ...getters
  },
  async beforeMount() {
    await this.getNews()
  },
  methods: {
    ...actions,
    onShowModal(val) {
      this.showModal = true;
      this.currentAnime = val;
    },
    close() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>

</style>