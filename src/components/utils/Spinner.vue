<template>
  <div class="metainput__spinner">
    <div class="spinner is-active"></div>
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: null
      }
    }
  }
</script>
