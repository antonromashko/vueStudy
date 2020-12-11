<template>
  <div>
  <label for="input">{{ label }}</label>
  <input v-model="inputValue" id="input" type="text" @input="$emit('input', name, inputValue)">
  </div>
</template>

<script>
export default {
  name: "FormInput",
  data() {
    return {
      inputValue: ''
    }
  },
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  label {
    display: flex;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    input {
      max-width: 150px;
      min-width: 70px;
      width: 100px;
      padding: 5px;
    }
  }
</style>