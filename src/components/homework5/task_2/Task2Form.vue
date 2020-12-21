<template>
  <FormTheme>
    <FormWrapper :form-data="formData" :enable-save-button="false">
      <template #title>
        <span class="counter">{{ counter }}</span><span>- fields changed</span>
        <button v-if="counter" type="button" class="clear" @click="clearForm">CLEAR</button>
        <button type="button" class="more-filters" @click="showMoreFilters">MORE</button>
      </template>
      <template v-for="(item, idx) in formData" #[item.name]="props">
        <FormInput
            v-if="item['isVisible']"
            v-model="item.value"
            :name="item.name"
            :label="item.label"
            :key="idx"
            :value="props"
        />
      </template>
    </FormWrapper>
  </FormTheme>
</template>
<script>
import FormWrapper from "@/components/homework3/FormWrapper.vue";
import FormInput from "@/components/homework3/FormInput.vue";
import { data } from '@/data/formData.js';
import FormTheme from "@/components/homework5/task_3/FormTheme";

export default {
  name: "Task2Form",
  components: {
    FormWrapper,
    FormInput,
    FormTheme
  },
  data() {
    return {
      formData: null,
      counter: 0,
      showMore: false
    }
  },
  methods: {
    countChangedElements(val) {
      let counter = 0;
      for(let i=0; i<val.length; i++) {
        if(val[i].value !== data[i].value) {
          counter++
        }
      }
      return counter
    },
    clearForm() {
      this.formData = JSON.parse(JSON.stringify(data));
      if (this.showMore) {
        this.formData.map(item => {
          this.$set(item, 'isVisible', true);
        } )
      } else {
        this.formData.map((item, idx) => {
          idx > 2 ? this.$set(item, 'isVisible', false) : this.$set(item, 'isVisible', true);
        })
      }
    },
    showMoreFilters() {
      this.formData.map((item, idx) => {
        idx > 2 ? this.$set(item, 'isVisible', !item['isVisible']) : this.$set(item, 'isVisible', true);
      })
      this.showMore = !this.showMore;
    }
  },
  watch: {
    'formData': {
      handler(val) {
        if(!val) return false
        this.counter = this.countChangedElements(val)
      },
      deep: true
    }
  },
  created() {
    this.clearForm()
  }
}
</script>

<style>
span,
button {
  margin: 5px;
}
.counter {
  padding: 10px;
  margin: 5px;
  color: green;
  background-color: #cdcdcd;
}
.clear {
  background-color: yellow !important;
  width: 70px !important;
}
.more-filters {
  background-color: darkgrey !important;
  width: 70px !important;
}
</style>