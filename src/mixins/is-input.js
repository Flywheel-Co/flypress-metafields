export default {
  props: {
    value: {
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      inputValue: this.value,
    }
  }
}
