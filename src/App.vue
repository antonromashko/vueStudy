<template>
  <div id="app">
      <CustomSelect  :options-list="optionsList" :selected-option.sync="selected"/>
  </div>
</template>

<script>
import CustomSelect from '@/components/CustomSelect.vue'

export default {
  name: 'App',
  components: {
    CustomSelect
  },
  data() {
    return {
      optionsList: [
        { label: 'select 1', id: '1' },
        { label: 'select 2', id: '2' },
        { label: 'select 3', id: '3' }
      ],
      selected: null
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
