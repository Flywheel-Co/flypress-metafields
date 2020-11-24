<template>
  <div :class="classList">
    <component :is="inputComponentName" :name="name" v-model="value" v-bind="$attrs"></component>
  </div>
</template>

<script>
  import InputComponents from './inputs';

  export default {
    components: InputComponents,

    inheritAttrs: false,

    props: {

      value: {
        required: true,
      },

      type: {
        type: String,
        default: 'text'
      },

      name: {
        type: String,
        required: true,
      },
    },

    computed: {
      classList() {
        return [
          'metainput',
          'metainput--' + this.type,
        ];
      },

      inputComponentName() {
        return this.type + '-input';
      },
    },
  }
</script>
