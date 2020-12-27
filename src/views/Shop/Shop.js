import store from '../../store/index.js';
import { mapGetters } from 'vuex';
import Loader from '../../components/Loader/Loader.vue';
import MenuList from '../../components/MenuList/MenuList.vue';
import Cart from '../../components/Cart/Cart.vue';
import ProductCard from '../../components/ProductCard/ProductCard.vue';

export default {
  name: 'Shop',

  store,

  components: {
    Loader,
    MenuList,
    Cart,
    ProductCard,
  },

  mounted() {
    this.$store.dispatch('fetchData');
  },

  computed: {
    ...mapGetters(['productsByCategory', 'markets']),
  },
};
