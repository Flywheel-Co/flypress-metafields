<template>
  <p :class="wrapperClass">
    <input type="checkbox" :name="name" :value="value" v-model="isChecked" :id="id">
    <label v-if="label" :for="id">
      <template v-if="label !== true">{{ label }}</template>
    </label>
  </p>
</template>

<script>
  import IsChoice from '../../mixins/is-choice';

  export default {
    mixins: [ IsChoice ],

    props: {
      checked: {
        type: [Boolean, Number],
        default: false,
      },
    },

    data() {
      return {
        isChecked: this.checked,
      }
    },

    computed: {
      wrapperClass() {
        const classList = ['metainput__checkbox'];

        if(this.isChecked) {
          classList.push('metainput__checkbox--checked');
        }

        return classList;
      }
    }
  }
</script>
