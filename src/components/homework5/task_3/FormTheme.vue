<template>
  <div>
  <label for="mode">mode</label>
    <div v-for="(mode, idx) in Object.keys(adaptStyle)" :key="idx" class="radio">
      <input
          v-model="currentMode.mode"
          id="mode"
          type="radio"
          :value="mode"
      >
      <span>{{ mode }}</span>
    </div>
    <br>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "FormTheme",
  data() {
    return {
      adaptStyle: {
        day: {
          background: '#eee', color: 'black'
        },
        night: {
          background: '#333', color: 'white'
        }
      },
      currentMode: {
        mode: 'night'
      }
    }
  },
  provide() {
    return {
        adaptStyle: this.adaptStyle,
        currentMode: this.currentMode
    }
  }
}
</script>
