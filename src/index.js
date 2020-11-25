import Metafield from './components/Metafield.vue';
import Metainput from './components/Metainput.vue';

export default {
  install(Vue, options) {
    Vue.component('metafield', Metafield);
    Vue.component('metainput', Metainput);

    Vue.prototype.$metafieldOptions = options;
  }
}
