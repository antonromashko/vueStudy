export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    handler(callback) {
      console.log('[mixin]:', 'this is method from mixin');
      callback()
      this.$emit('handler')
    }
  }
}