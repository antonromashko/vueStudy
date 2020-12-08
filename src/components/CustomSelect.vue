<template>
  <div class="custom-select">
    <div class="option default-option" @click="openSelect">{{ defaultOption }} <span>&#9662;</span></div>
    <template v-if="opened">
      <div v-for="(option, idx) of optionsList" :key="idx" class="option" @click="selectOption(option)">
      {{ option.label }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    optionsList: {
      required: true,
      type: Array
    },
    defaultOption: {
      type: Text,
      default: 'choose'
    }
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    openSelect() {
      this.opened = !this.opened
    },
    selectOption(option) {
      this.defaultOption = option.label
      this.opened = false
      //
    }
  }
}
</script>

<style lang="scss" scoped>
  .custom-select {
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    .option {
      padding: 5px;
      position: relative;
      border-width: 0 1px 1px 1px;
      border-style: solid;
      border-color: rgba(3, 3, 3, 0.12);
    }
    .default-option {
      border-width: 1px;
      background: #f1f1f1;
    }
    .option:hover {
      background: #f1f1f1;
    }
    .default-option:hover {
      background: #e0e0e0;
    }
  }
</style>
