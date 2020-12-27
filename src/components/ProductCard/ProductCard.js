import { mapActions } from 'vuex';

export default {
  name: 'ProductCard',

  props: {
    product: {
      type: Object,
    },
    market: {
      type: Object,
    },
  },

  methods: {
    ...mapActions(['increaseQuantity', 'decreaseQuantity', 'addInCart']),
  },
};
