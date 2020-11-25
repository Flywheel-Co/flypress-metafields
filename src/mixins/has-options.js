import UniqueId from '../utils/unique-id';

export default {
  props: {
    options: {
      type: [Array, Object],
      required: true,
    },
  },

  computed: {
    optionsValue() {
      let options = this.options;

      if (Array.isArray(options)) {
        options = {};
        this.options.forEach((value) => (options[value] = value));
      }

      return this.prepareOptions(options);
    },

    nameAttribute() {
      if (this.name.endsWith('[]')) {
        return this.name;
      }

      return this.name + '[]';
    },
  },

  methods: {
    prepareOptions(options) {
      const prepared = [];

      for (const [value, label] of Object.entries(options)) {
        prepared.push({
          value: value,
          label: label,
          id: UniqueId('option__'),
          name: this.nameAttribute,
        });
      }

      return prepared;
    },
  },
};
