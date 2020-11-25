<template>
  <fieldset>
    <component
      :is="useComponent"
      v-for="option in optionsValue"
      :name="nameAttribute"
      :label="option.label"
      :value="option.value"
      :id="option.id"
      :key="option.id"
      :checked="inputValue.includes(option.value) || inputValue == option.value"
      :selected="inputValue"
    ></component>
  </fieldset>
</template>

<script>
  import CheckboxInput from './CheckboxInput.vue';
  import RadioInput from './RadioInput.vue';
  import IsInput from '../../mixins/is-input';
  import HasOptions from '../../mixins/has-options';

  export default {

    mixins: [HasOptions, IsInput],

    props: {
      name: {
        type: String,
        required: true,
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      value: {
        type: [String, Number, Array],
        default: null,
      }
    },

    computed: {
      useComponent() {
        return this.multiple ? CheckboxInput : RadioInput;
      },

      nameAttribute() {
        if(!this.multiple || this.name.endsWith('[]')) {
          return this.name;
        }

        return this.name + '[]';
      },
    },

  }
</script>
