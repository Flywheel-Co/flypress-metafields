<template>
  <div class="metamedia">
    <spinner v-if="loading"></spinner>
    <template v-else>
      <div v-if="mediaValue" class="metamedia__preview">
        <img :src="mediaValue.icon">
        <div class="metamedia__details">
          <p class="metamedia__label"><strong>{{ mediaLabel }}</strong></p>
          <div class="metamedia__stats">
            <span>{{ mediaDate }}</span>
            <span>{{ mediaValue.filesize }}</span>
          </div>
        </div>
      </div>
      <div class="metamedia__actions">
        <a href @click.prevent="open" class="metamedia__action metamedia__action--update">
          {{ updateActionLabel }}
        </a>
        <a v-if="mediaValue" href @click.prevent="reset" class="metamedia__action metamedia__action--reset">
          Remove
        </a>
      </div>
    </template>

    <input type="hidden" :name="name" v-model="inputValue">
  </div>
</template>

<script>
  import HandlesMedia from '../../mixins/handles-media';
  import IsInput from '../../mixins/is-input';
  import Spinner from '../utils/Spinner.vue';

  export default {
    mixins: [HandlesMedia, IsInput],

    components: { Spinner },

    computed: {
      mediaLabel() {
        if(!this.mediaValue) {
          return;
        }

        const url = new URL(this.mediaValue.source_url);
        const path = url.pathname.split('/');

        return path[path.length - 1];
      },

      mediaDate() {
        if(!this.mediaValue) {
          return;
        }

        const date = new Date(this.mediaValue.date);

        return date.toLocaleDateString();
      },
    }
  }
</script>
