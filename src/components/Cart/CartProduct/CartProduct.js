import { mapActions } from 'vuex';

export default {
  name: 'CartProduct',

  props: {
    product: {
      type: Object,
    },
  },

  methods: {
    ...mapActions(['removeFromCart']),
  },
};
