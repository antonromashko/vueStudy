<template>
  <form>
    <label for="fieldOne"></label><input id="fieldOne" type="text" v-model="fieldOne">
    <label for="fieldTwo"></label><input id="fieldTwo" type="text" v-model="fieldTwo">
    <HocSubmit :field-one="fieldOne" :field-two="fieldTwo"/>
  </form>
</template>

<script>
import SubmitButton from "@/components/homework5/task_1/SubmitButton.vue";
import { withSubmitButton } from "@/components/homework5/hoc/withSubmitButton.js";

const HocSubmit = withSubmitButton(SubmitButton);

export default {
  name: "TaskForm",
  components: {
    HocSubmit
  },
  data() {
    return {
      fieldOne: null,
      fieldTwo: null
    }
  }
}
</script>

<style scoped>

</style>