<template>
  <p :class="wrapperClass">
    <input type="radio" :name="name" :value="value" v-model="selectedValue" :id="id">
    <label v-if="label" :for="id" v-html="label"></label>
  </p>
</template>

<script>
  import IsChoice from '../../mixins/is-choice';

  export default {
    mixins: [ IsChoice ],

    props: {
      selected: {
        type: [Boolean, Number],
        default: false,
      },
    },

    data() {
      return {
        selectedValue: this.selected,
      }
    },

    computed: {
      isSelected() {
        return this.selectedValue == this.value;
      },

      wrapperClass() {
        const classList = ['metainput__radio'];

        if(this.isSelected) {
          classList.push('metainput__radio--selected');
        }

        return classList;
      }
    }
  }
</script>
