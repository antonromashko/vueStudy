<template>
  <div>
    <form class="form" v-if="!sentFormData">
      <header>
        <slot name="title"></slot>
      </header>
      <template>
        <slot v-for="item in formData" :name="item.name" :[item.name]="item"></slot>
      </template>
      <button v-if="enableSaveButton" type="button" :disabled="isPending" @click="sendForm">{{ currentButtonName }}</button>
    </form>
    <template v-else>
      {{ sentFormMessage }}
    </template>
  </div>
</template>

<script>
export default {
  name: "FormWrapper",
  data() {
    return {
      pendingButton: 'Sending...',
      isPending: false,
      sentFormData: false
    }
  },
  props: {
    buttonName: {
      default: 'SAVE'
    },
    formData: {
      type: Array,
      required: true
    },
    enableSaveButton: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentButtonName() {
      return this.isPending ? this.pendingButton : this.buttonName
    },
    validateForm() {
      for (const item of this.formData) {
        if((item.name === 'email' && !item.value) || (item.name === 'accept' && !item.value)) {
          return false
        }
      }
      return true
    },
    sentFormMessage() {
      if (this.validateForm) {
        return 'Successful'
      }
      return 'Error'
    }
  },
  methods: {
    async sleep(seconds) {
      await new Promise(r => setTimeout(r, seconds * 1000));
    },
    async sendForm() {
      this.isPending = true;
      await this.sleep(3);
      this.isPending = false;
      this.sentFormData = true;
      //
      this.$emit('send-form')
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  button {
    width: 200px;
    height: 40px;
    background: cadetblue;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div,
  header {
    width: 500px;
    align-items: center;
    display: flex;
    justify-content: left;
    ::v-deep{
      label {
        width: 40%;
        padding: 10px;
      }
      input {
        border-style: solid;
        border-color: rgba(3, 3, 3, 0.12);
        border-radius: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        max-width: 150px;
        width: 150px;
        padding: 5px;
      }
    }
    div {
      padding: 10px;
    }
  }
}
</style>