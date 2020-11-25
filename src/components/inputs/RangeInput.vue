<template>
    <fieldset>
      <input type="range" v-model="inputValue" :name="name" v-bind="$attrs" />
      <span v-if="showValue">{{ displayValue }}</span>
    </fieldset>
</template>

<script>
  import IsInput from '../../mixins/is-input';
  import TextInput from './TextInput.vue';

  export default {
    mixins: [IsInput],
    components: {TextInput},

    props: {
      showValue: {
        type: [Boolean, Function],
        default: true,
      },
      units: {
        type: String,
        default: null,
      }
    },

    computed: {
      displayValue() {
        if(!this.showValue) {
          return;
        }

        if(typeof this.showValue == 'function') {
          return this.showValue(this.inputValue, this.units);
        }

        return this.inputValue + (this.units || '');
      },
    },
  }
</script>
