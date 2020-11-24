/**
 * Mixin for providing common functionality to choice-style inputs such as
 * checkbox and radio inputs.
 */

export default {
  props: {
    id: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: [String, Boolean],
      default: false,
    },
    value: {
      type: [String, Number, Boolean],
      default: 1
    },
  },
}
