<template>
    <text-input type="color" v-model="inputValue" :name="name" v-bind="$attrs" />
</template>

<script>
  import IsInput from '../../mixins/is-input';
  import TextInput from './TextInput.vue';

  export default {
    mixins: [IsInput],
    components: {TextInput},
  }
</script>
