<template>
  <textarea :name="name" v-model="inputValue" v-bind="$attrs"></textarea>
</template>

<script>
  import IsInput from '../../mixins/is-input';

  export default {
    mixins: [IsInput],
  }
</script>
