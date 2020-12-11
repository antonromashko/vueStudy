<template>
  <div id="app">
      <form-wrapper :formData="formData" @send-form="sendForm">
        <template #title>
          <div>Title</div>
        </template>
        <template #firstName="{ firstName }">
          <FormInput :name="firstName.name" :label="firstName.label" @input="setData" />
        </template>
        <template #lastName="{ lastName }">
          <FormInput :name="lastName.name" :label="lastName.label" @input="setData" />
        </template>
        <template #email="{ email }">
          <FormInput :name="email.name" :label="email.label" @input="setData" />
        </template>
        <template #language="{ language }">
          <CustomSelect
              :name="language.name"
              :label="language.label"
              :options-list="optionsList"
              :selected-option.sync="selected"
          />
        </template>
        <template #gender="{ gender }">
          <FormRadio :name="gender.name" :label="gender.label" @change="setData" />
        </template>
        <template #accept="{ accept }">
          <FormCheckBox :name="accept.name" :label="accept.label" @change="setData" />
        </template>
      </form-wrapper>
  </div>
</template>

<script>
import CustomSelect from '@/components/CustomSelect.vue'
import FormWrapper from '@/components/FormWrapper.vue'
import FormInput from '@/components/FormInput.vue'
import FormCheckBox from '@/components/FormCheckBox.vue'
import FormRadio from '@/components/FormRadio.vue'

export default {
  name: 'App',
  components: {
    CustomSelect,
    'form-wrapper': FormWrapper,
    FormInput,
    FormCheckBox,
    FormRadio
  },
  data() {
    return {
      formData: [
          { name: 'firstName', label: 'First name', value: '' },
          { name: 'lastName', label: 'Last name', value: '' },
          { name: 'email', label: 'Email', value: '' },
          { name: 'language', label: 'Language', value: '' },
          { name: 'gender', label: ['male', 'female'], value: '' },
          { name: 'accept', label: 'Do you agree with terms?', value: '' }
        ],
      optionsList: [
        { label: 'ru', id: '1' },
        { label: 'en', id: '2' },
        { label: 'ua', id: '3' }
      ],
      selected: {}
    }
  },
  watch: {
    selected: {
      deep: true,
      handler() {
        this.setData(this.selected.name, this.selected.value)
      }
    }
  },
  methods: {
    async sendForm() {
      console.group('Your form data:')
      for (const item of this.formData) {
        console.log(item.name + ': ' + item.value)
      }
      console.groupEnd()
    },
    setData(name, value) {
      console.log(name, value);
      this.formData.filter(item => item.name === name)[0].value = value
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
