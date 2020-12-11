<template>
  <div class="custom-select" :class="name">
    <label>{{ label }}</label>
    <div>
      <div
        class="option default-option"
        :style="styleAdapter"
        @click="openSelect">
      {{ selected }}
      <span v-if="isSelected" @click.stop="reset" class="reset">&#10005;</span>
      <span v-else>&#9662;</span>
    </div>
    <div v-if="opened" style="position: fixed; background-color: white">
      <div v-for="(option, idx) of optionsList" :key="idx" class="option" @click="selectOption(option)">
        <span v-if="selectedOption.value === option.label">&#10003;</span>
        {{ option.label }}
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      required: true
    },
    optionsList: {
      required: true,
      type: Array
    },
    defaultOption: {
      type: String,
      default: 'choose'
    },
    selectedOption: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      opened: false
    }
  },
  computed: {
    isSelected() {
      return Object.keys(this.selectedOption).length > 0
    },
    selected() {
      return this.isSelected ? this.selectedOption.value : this.defaultOption
    },
    styleAdapter() {
      if (this.isSelected) {
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
    setOption(option) {
      return {
        name: this.name,
        value: option.label ? option.label : null
      }
    },
    selectOption(option) {
      this.opened = false
      this.$emit('update:selectedOption', this.setOption(option))
    },
    reset() {
      this.$emit('update:selectedOption', {})
    }
  }
}
</script>

<style lang="scss" scoped>
  .custom-select {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    label {
      padding: 10px;
      width: 40%;
    }
    .option {
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
      padding: 5px;
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
