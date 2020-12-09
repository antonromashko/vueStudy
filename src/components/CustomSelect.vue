<template>
  <div class="custom-select">
    <div
        class="option default-option"
        :style="styleAdapter"
        @click="openSelect">
      {{ selected }}
      <span v-if="selectedOption" @click.stop="reset" class="reset">&#10005;</span>
      <span v-else>&#9662;</span>
    </div>
    <template v-if="opened">
      <div v-for="(option, idx) of optionsList" :key="idx" class="option" @click="selectOption(option)">
        <span v-if="selectedOption === option.label">&#10003;</span>
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
      type: String,
      default: 'choose'
    },
    selectedOption: {
      type: null,
      required: true
    }
  },
  data() {
    return {
      opened: false
    }
  },
  computed: {
    selected() {
      return this.selectedOption ? this.selectedOption : this.defaultOption
    },
    styleAdapter() {
      if (this.selectedOption) {
        return {
          color: 'black'
        }
      } else {
        return {
          color: '#a9afbe'
        }
      }
    }
  },
  methods: {
    openSelect() {
      this.opened = !this.opened
    },
    selectOption(option) {
      this.opened = false
      this.$emit('update:selectedOption', option.label ? option.label : null)
    },
    reset() {
      this.$emit('update:selectedOption', null)
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
    cursor: pointer;
    .option {
      padding: 5px;
      position: relative;
      border-width: 0 1px 1px 1px;
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
      min-width: 70px;
      width: 100px;
    }
    .default-option {
      border-width: 1px;
      justify-content: space-between;
    }
    .option:hover {
      border-color: #888888;
      border-width: 1px 1px 1px 1px;
    }
    .reset {
      font-size: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 3px;
    }
    .reset:hover {
      background-color: #cdcdcd;
    }
  }
</style>
