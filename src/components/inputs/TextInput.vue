<template>
  <input :type="type" :name="name" v-model="inputValue" v-bind="$attrs">
</template>

<script>
  import IsInput from '../../mixins/is-input';

  export default {
    mixins: [IsInput],

    props: {
      type: {
        type: String,
        default: 'text',
      }
    },
  }
</script>
