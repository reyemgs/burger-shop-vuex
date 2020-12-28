import { mapActions, mapGetters } from 'vuex';
import ModalNavItem from './ModalNavItem/ModalNavItem.vue';
import IngridientCard from '../IngridientCard/IngridientCard.vue';
import DonePage from '../DonePage/DonePage.vue';

export default {
  name: 'Modal',

  components: {
    ModalNavItem,
    IngridientCard,
    DonePage,
  },

  methods: {
    ...mapActions([
      'closeModal',
      'addInCart',
      'increaseQuantity',
      'decreaseQuantity',
    ]),
  },

  computed: {
    ...mapGetters([
      'currentProduct',
      'modal',
      'ingridientsByCategory',
      'currentModalCategory',
    ]),

    totalPrice() {
      return this.currentProduct.price * this.currentProduct.quantity;
    },

    title() {
      return this.modal.find(
        item => item.category === this.currentModalCategory
      ).title;
    },
  },
};
