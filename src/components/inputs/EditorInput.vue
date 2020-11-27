<template>
  <textarea-input :name="name" v-model="inputValue" :id="idAttribute" v-bind="$attrs"></textarea-input>
</template>

<script>
  import { snakeCase } from 'change-case';
  import IsInput from '../../mixins/is-input';
  import TextareaInput from './TextareaInput.vue';

  export default {
    mixins: [ IsInput ],

    components: { TextareaInput },

    props: {
      toolbar: {
        type: String,
        default:
          'formatselect bold italic | bullist numlist | link blockquote removeformat',
      },
      formats: {
        type: String,
        default: 'Paragraph=p; Header 2=h2; Header 3=h3; Header 4=h4;',
      },
      mediaButton: {
        type: Boolean,
        default: true,
      },
      quicktags: {
        type: Boolean,
        default: true,
      },
    },

    computed: {
      idAttribute() {
        return this.id || snakeCase(this.name);
      },
      tinymceConfig() {
        return {
          toolbar1: this.toolbar,
          block_formats: this.formats,
          wp_autoresize_on: true,
          skin_url: flypress.pluginUrl + '/tinymce-skin',
          plugins: [
            'charmap',
            'colorpicker',
            'hr',
            'lists',
            'media',
            'paste',
            'tabfocus',
            'textcolor',
            'fullscreen',
            'wordpress',
            'wpautoresize',
            'wpeditimage',
            'wpemoji',
            'wpgallery',
            'wplink',
            'wpdialogs',
            'wptextpattern',
            'wpview',
          ]
        };
      },
      editorConfig() {
        return {
          tinymce: this.tinymceConfig,
          mediaButtons: this.mediaButton,
          quicktags: this.quicktags,
        };
      },
    },

    mounted() {
      this.initializeTinyMCE();
    },

    methods: {
      initializeTinyMCE() {
        this.editor = window.wp.editor.initialize(
          this.idAttribute,
          this.editorConfig
        );
      },
    },
  }
</script>
