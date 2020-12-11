<template>
  <div>
  <label for="accept" :class="name">{{ label }}
  </label>
  <input
        v-model="accepted"
        type="checkbox"
        id="accept"
        :class="name"
        @change="$emit('change', name, accepted)"
    >
    </div>
</template>

<script>
export default {
  name: "FormCheckBox",
  data() {
    return {
      accepted: false
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

<style scoped>

</style>