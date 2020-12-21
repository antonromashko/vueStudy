<template>
<div class="modal" :class="{'modal__visible': showModal}" @click.self="showModal = !showModal">
        <div v-if="showModal" class="modal-content">
            <div class="header">
                <span class="close" @click="showModal = !showModal">&times;</span>
            </div>
            <img :src="anime.image_url" alt="">
            <ul>
              <li>{{ anime.title }}</li>
              <li>{{ anime.type }}</li>
              <li>{{ anime.episodes }}</li>
              <li>{{ anime.start_date }}</li>
              <li>{{ anime.end_date }}</li>
              <li>{{ anime.members }}</li>
              <li>{{ anime.score }}</li>
            </ul>
        </div>
</div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      mainButton: 'click me',
      showModalButtonClass: {
        'margin-left': '20px',
        width: '75px',
        height: '30px'
      },
      currentColor: 'white'
    }
  },
  props: {
    showModal: {
      type: Boolean
    },
    anime: {
      required: true
    }
  }
}
</script>

<style scoped>
.modal {
    display: none;
    position: fixed;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal__visible {
    display: block;
}

.modal-content {
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
    margin: auto;
    padding: 0 10px 10px 10px;
    border: 1px solid #888;
    width: 15%;
    height: fit-content;
}

.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    text-decoration: none;
    cursor: pointer;
}
</style>