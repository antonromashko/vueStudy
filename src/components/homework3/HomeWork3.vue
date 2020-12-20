<template>
<form-wrapper :formData="formData" @send-form="sendForm">
  <template #title>
    <div>title</div>
  </template>
  <template #firstName="{ firstName }">
    <FormInput
        v-model="firstName.value"
        :name="firstName.name"
        :label="firstName.label"/>
  </template>
  <template #lastName="{ lastName }">
    <FormInput
        v-model="lastName.value"
        :name="lastName.name"
        :label="lastName.label"/>
  </template>
  <template #email="{ email }">
    <FormInput
        v-model="email.value"
        :name="email.name"
        :label="email.label"/>
  </template>
  <template #language="{ language }">
    <CustomSelect
        :name="language.name"
        :label="language.label"
        :options-list="optionsList"
        :selected-option.sync="selectedOption"
    />
  </template>
  <template #gender="{ gender }">
    <FormRadio :name="gender.name" :label="gender.label" @change="setData" />
  </template>
  <template #accept="{ accept }">
    <FormCheckBox :name="accept.name" :label="accept.label" @change="setData" />
  </template>
</form-wrapper>
</template>

<script>
import CustomSelect from "@/components/homework3/CustomSelect.vue";
import FormWrapper from "@/components/homework3/FormWrapper.vue";
import FormInput from "@/components/homework3/FormInput.vue";
import FormCheckBox from "@/components/homework3/FormCheckBox.vue";
import FormRadio from "@/components/homework3/FormRadio.vue";

export default {
  name: "HomeWork3",
  components: {
    CustomSelect,
    'form-wrapper': FormWrapper,
    FormInput,
    FormCheckBox,
    FormRadio,
  },
  data() {
    return {
      formData: [
          { name: 'firstName', label: 'First name', value: '' },
          { name: 'lastName', label: 'Last name', value: '' },
          { name: 'email', label: 'Email', value: '' },
          { name: 'language', label: 'Language', value: '' },
          { name: 'gender', label: 'Gender', value: '' },
          { name: 'accept', label: 'Do you agree with terms?', value: '' }
        ],
      optionsList: [
        { label: 'ru', id: '1' },
        { label: 'en', id: '2' },
        { label: 'ua', id: '3' }
      ],
      selectedOption: {}
    }
  },
  watch: {
    selectedOption: {
      deep: true,
      handler() {
        if (Object.keys(this.selectedOption).length > 0) {
          this.setData(this.selectedOption.value, this.selectedOption.name)
        }
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
    setData(value, name) {
      console.log(name, value);
      this.formData.filter(item => item.name === name)[0].value = value
    }
  }
}
</script>

<style scoped>

</style>