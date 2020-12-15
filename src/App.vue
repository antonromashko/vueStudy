<template>
  <div id="app">
    <ButtonForGroup
        v-for="(value, key, idx) in tabs"
        :key="idx"
        type="button"
        :label="value"
        :active-button="tabs[currentTab]"
        @handler="changeTab(key)"
    />
    <transition name="content" mode="out-in" appear>
      <keep-alive>
        <component :is="currentTab"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import HomeWork3 from '@/components/homework3/HomeWork3.vue';
import AfterLoop from "@/components/homework4/AfterLoop.vue";
import ImgPreload from "@/components/homework4/ImgPreload.vue";
import ButtonForGroup from "@/components/ButtonForGroup.vue";
import Slider from "@/components/homework4/Slider.vue";

export default {
  name: 'App',
  components: {
    AfterLoop,
    ImgPreload,
    HomeWork3,
    ButtonForGroup,
    Slider
  },
  data() {
    return {
      currentTab: 'HomeWork3',
      tabs: {
        'HomeWork3': 'hw3',
        AfterLoop: 'hw4:1',
        ImgPreload: 'hw4:2',
        Slider: 'hw4:3'
      }
    }
  },
  methods: {
    changeTab(key) {
      this.currentTab = key;
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    .content {
      &-enter-active, &-leave-active {
        transition: .3s;
      }
      &-enter, &-leave-to {
        opacity: 0;
        transform: translateX(-30%);
      }
    }
  }
</style>
