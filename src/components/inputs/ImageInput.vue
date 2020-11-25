<template>
  <div class="metamedia">
    <spinner v-if="loading"></spinner>
    <template v-else>
      <div v-if="mediaValue" class="metamedia__preview" :style="{maxWidth: maxWidth}">
        <div class="metamedia__preview__inner">
          <div v-if="hasRatio" class="metamedia__preview__image metamedia__preview__image--hasRatio" :style="previewStyle">
          </div>
          <img v-else class="metamedia__preview__image" :src="previewUrl" :style="previewStyle">
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

    props: {
      size: {
        type: String,
        default: 'medium',
      },
      type: {
        type: Array,
        default: () => ['image'],
      },
      ratio: {
        type: [String, Number],
        default: null,
      },
      maxWidth: {
        type: String,
        default: 'auto',
      },
      fit: {
        type: String,
        default: 'cover',
      },
    },

    computed: {
      previewUrl() {
        if (!this.mediaValue) {
          return;
        }

        return this.hasRequestedSize
          ? this.mediaValue.media_details.sizes[this.size].source_url
          : this.mediaValue.source_url;
      },

      previewSize() {
        if (!this.mediaValue) {
          return null;
        }

        const details = this.mediaValue.media_details;

        return {
          width: this.hasRequestedSize
            ? details.sizes[this.size].width
            : details.width,
          height: this.hasRequestedSize
            ? details.sizes[this.size].height
            : details.height,
        };
      },

      hasRequestedSize() {
        return (
          this.mediaValue && this.mediaValue.media_details.sizes[this.size]
        );
      },

      hasRatio() {
        return this.ratio;
      },

      ratioMultiplier() {
        if (this.ratio.includes(':')) {
          const parts = this.ratio.split(':');
          return parseFloat(parts[1]) / parseFloat(parts[0]);
        }

        return parseFloat(this.ratio);
      },

      previewStyle() {
        const style = {};

        if (this.hasRatio) {
          style.backgroundImage = 'url(' + this.previewUrl + ')';
          style.backgroundSize = this.fit;
          style.paddingBottom = this.ratioMultiplier * 100 + '%';
        }

        return style;
      },
    },
  }
</script>
