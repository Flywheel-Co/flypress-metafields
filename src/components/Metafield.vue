<template>
  <div class="metafield">
    <div class="metafield__desc">
      <label v-if="label" v-html="label"></label>
      <p v-if="description" v-html="description"></p>
    </div>
    <div class="metafield__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

    props: {
      label: {
        type: String,
        default: null,
      },
      description: {
        type: String,
        default: null,
      }
    },
  }
</script>
