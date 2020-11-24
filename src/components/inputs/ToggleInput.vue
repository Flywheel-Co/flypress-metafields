<template>
  <checkbox-input :name="name" :value="value" :checked="isChecked" :label="true" :id="idAttribute" :key="idAttribute"></checkbox-input>
</template>

<script>
  import CheckboxInput from './CheckboxInput.vue';
  import IsChoice from '../../mixins/is-choice';
  import UniqueId from '../../utils/unique-id';

  export default {
    mixins: [ IsChoice ],

    components: { CheckboxInput },

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
      idAttribute() {
        return this.id || UniqueId('toggle__');
      },
    },
  }
</script>
