import CartProduct from './CartProduct/CartProduct.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',

  components: {
    CartProduct,
  },

  computed: {
    ...mapGetters(['addedProducts']),

    totalPrice() {
      let totalPrice = 0;
      this.addedProducts.forEach(item => {
        totalPrice += item.price * item.quantity;
      });

      return totalPrice;
    },
  },
};
