<template>
  <div class="gender">
    <label for="radio">{{ label }}</label>
    <div v-for="(val, idx) of data" :key="idx" class="radio">
      <input
          v-model="radioValue"
          id="radio"
          type="radio"
          :value="val"
          @change="$emit('change', name, radioValue)"
      >
      <span>{{ val }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "FormRadio",
  data() {
    return {
      radioValue: '',
      data: ['male', 'female']
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

<style lang="scss">
  .gender {
    display: flex;
    align-items: center;
    label {
      font-size: 20px;
      font-weight: 500;
      display: flex;
    }
    .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: fit-content;
      }
    }
  }
</style>