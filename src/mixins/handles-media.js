export default {
  props: {
    value: {
      type: [String, Object, Number],
      default: () => null
    },
    title: {
      type: String,
      default: 'Select a file',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: 'library',
    },
    filterable: {
      type: String,
      default: 'all',
    },
    button: {
      type: String,
      default: 'Select',
    },
    type: {
      type: Array,
      default: () => [],
    },
    handleSelection: {
      type: Function,
    },
  },

  data() {
    return {
      inputValue: this.getValue(),
      library: null,
      loading: true,
      mediaValue: null,
    }
  },

  computed: {
    endpoint() {
      const base = this.$metafieldOptions.api_base || '/wp-json/';

      return base + 'wp/v2/media/';
    },

    updateActionLabel() {
      return this.inputValue ? 'Update' : 'Add';
    },

    libraryOptions() {
      return {
        title: this.title,
        multiple: this.multiple,
        state: this.state,
        filterable: this.filterable,
        button: {
          text: this.button,
        },
        library: {
          type: this.type,
        }
      }
    },
  },

  watch: {
    inputValue(id) {
      if(id) {
        this.mediaValue = null;
        this.fetch(id);
      }
    }
  },

  created() {
    this.fetch(this.inputValue);
  },

  methods: {
    fetch(id) {
      if(!id) {
        this.loading = false;
        return;
      }

      this.loading = true;

      fetch(this.endpoint + id)
        .then(response => response.json())
        .then(data => {
          this.mediaValue = data;
          this.loading = false;
        });
    },

    reset() {
      this.inputValue = null;
      this.mediaValue = null;
    },

    open() {
      if(this.library) {
        this.library.open();
      }

      this.library = window.wp.media(this.libraryOptions);
      this.library.on('select', e => this.select());

      return this.library.open();
    },

    select() {
      const selection = this.library.state().get('selection').first().toJSON();

      this.inputValue = selection.id;
    },

    getValue() {
      if(typeof this.value === 'object' && this.value !== null) {
        return this.value.id;
      }

      return this.value;
    }
  }
}
