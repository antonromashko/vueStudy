export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    label: {
      type: String,
      required: true
    },
    activeButton: {
      type: String
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