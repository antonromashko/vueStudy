<template>
  <div :class="name">
    <label v-for="(val, idx) of label" :key="idx">
      <input
          v-model="radioValue"
          type="radio"
          :value="val"
          @change="$emit('change', name, radioValue)"
      >
      <span>{{ val }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "FormRadio",
  data() {
    return {
      radioValue: ''
    }
  },
  props: {
    label: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>