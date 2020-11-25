<template>
  <select :name="name" v-model="inputValue">
    <option v-if="placeholder !== null" value>{{ placeholder }}</option>
    <option v-for="(label, value) in optionsValue" :value="value">
      {{ label }}
    </option>
  </select>
</template>

<script>
  import IsInput from '../../mixins/is-input';

  export default {
    mixins: [IsInput],

    props: {
      options: {
        type: [Array, Object],
        required: true,
      },
      placeholder: {
        type: String,
        default: null,
      }
    },

    computed: {
      optionsValue() {
        const opts = {};

        if(Array.isArray(this.options)) {
          this.options.forEach(opt => (opts[opt] = opt));
        }

        return Object.keys(opts).length ? opts : this.options
      }
    }
  }
</script>
