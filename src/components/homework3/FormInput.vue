<template>
  <div>
  <label for="input">{{ label }}</label>
  <input id="input" type="text" :value="value" @input="$emit('input', $event.target.value, name)">
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      value: {
        required: true
      }
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